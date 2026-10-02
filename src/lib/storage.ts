import { BookInterestSubmission } from '../types';

export interface StorageResult {
  success: boolean;
  message?: string;
  notConfigured?: boolean;
  isDevMode?: boolean;
}

const SUPABASE_URL = (import.meta.env.VITE_SUPABASE_URL as string | undefined)?.trim();
const SUPABASE_ANON_KEY = (import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined)?.trim();

export const LOCAL_STORAGE_KEY = 'lgapam_book_interest_submissions';
const LAST_SUBMIT_KEY = 'lgapam_book_last_submit';

/**
 * Checks whether Supabase environment variables are properly configured.
 */
export function isSupabaseConfigured(): boolean {
  return Boolean(
    SUPABASE_URL &&
    SUPABASE_ANON_KEY &&
    SUPABASE_URL.startsWith('http') &&
    !SUPABASE_URL.includes('MY_SUPABASE_PROJECT_ID') &&
    !SUPABASE_ANON_KEY.includes('MY_SUPABASE_ANON')
  );
}

/**
 * Sanitizes input string to prevent script injection.
 */
export function sanitizeText(text: string): string {
  return text
    .replace(/[<>]/g, '')
    .trim();
}

/**
 * Validates email format strictly.
 */
export function validateEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email.trim());
}

/**
 * Retrieves all registered submissions from local storage.
 */
export function getBookInterestSubmissions(): BookInterestSubmission[] {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      return parsed.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }
    return [];
  } catch (err) {
    console.error('[Storage] Error reading submissions:', err);
    return [];
  }
}

/**
 * Deletes a submission by index or ID from local storage.
 */
export function deleteBookInterestSubmission(idOrIndex: string | number): boolean {
  try {
    const list = getBookInterestSubmissions();
    const updated = typeof idOrIndex === 'number'
      ? list.filter((_, idx) => idx !== idOrIndex)
      : list.filter(item => item.id !== idOrIndex);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
    return true;
  } catch (err) {
    console.error('[Storage] Error deleting submission:', err);
    return false;
  }
}

/**
 * Exports submissions to a formatted CSV string with UTF-8 BOM.
 */
export function exportSubmissionsToCsv(submissions: BookInterestSubmission[]): string {
  const headers = ['Fecha y Hora', 'Correo Electrónico', 'Comentario o Impresión'];
  const rows = submissions.map(sub => {
    const dateFormatted = new Date(sub.createdAt).toLocaleString('es-ES', {
      dateStyle: 'medium',
      timeStyle: 'short',
    });
    const escapedComment = `"${(sub.comment || '').replace(/"/g, '""')}"`;
    const escapedEmail = `"${sub.email.replace(/"/g, '""')}"`;
    return [`"${dateFormatted}"`, escapedEmail, escapedComment].join(';');
  });

  return '\uFEFF' + [headers.join(';'), ...rows].join('\r\n');
}

/**
 * Downloads submissions directly as a .csv file.
 */
export function triggerCsvDownload(submissions: BookInterestSubmission[], filename = 'interesados-el-libro.csv') {
  const csvContent = exportSubmissionsToCsv(submissions);
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Saves a book interest registration directly to Supabase via REST API (RLS insert-only)
 * using client-side public anon key.
 *
 * If Supabase is not configured, saves to local storage as fallback and returns
 * informative feedback without breaking the application.
 */
export async function saveBookInterest(data: {
  email: string;
  comment: string;
}): Promise<StorageResult> {
  const cleanEmail = sanitizeText(data.email).toLowerCase();
  const cleanComment = sanitizeText(data.comment);

  // Field validations
  if (!cleanEmail || !validateEmail(cleanEmail)) {
    return {
      success: false,
      message: 'Por favor, introduce una dirección de correo electrónico válida.',
    };
  }

  if (!cleanComment || cleanComment.length < 3) {
    return {
      success: false,
      message: 'Por favor, comparte una breve frase con tu impresión del proyecto.',
    };
  }

  if (cleanComment.length > 2000) {
    return {
      success: false,
      message: 'El comentario no puede superar los 2000 caracteres.',
    };
  }

  // Throttle check (5 seconds between attempts)
  const lastSubmit = localStorage.getItem(LAST_SUBMIT_KEY);
  const now = Date.now();
  if (lastSubmit && now - parseInt(lastSubmit, 10) < 5000) {
    return {
      success: false,
      message: 'Hemos recibido un envío hace unos instantes. Espera unos segundos antes de volver a intentarlo.',
    };
  }

  const createdAt = new Date().toISOString();
  const newEntry: BookInterestSubmission = {
    id: `sub_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    email: cleanEmail,
    comment: cleanComment,
    createdAt,
  };

  // Check if Supabase is configured
  if (!isSupabaseConfigured()) {
    // In absence of Supabase, store locally so tests are not lost
    try {
      const existing = getBookInterestSubmissions();
      existing.unshift(newEntry);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(existing));
      localStorage.setItem(LAST_SUBMIT_KEY, now.toString());
    } catch {
      // ignore
    }

    return {
      success: false,
      notConfigured: true,
      message: 'El servicio de registro de correo no está configurado actualmente en este entorno. Si eres el administrador, añade VITE_SUPABASE_URL y VITE_SUPABASE_ANON_KEY en GitHub Secrets o en tu archivo .env local.',
    };
  }

  // Supabase is configured: execute INSERT via standard REST API
  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/book_interest`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_ANON_KEY!,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Prefer': 'return=minimal',
      },
      body: JSON.stringify({
        email: cleanEmail,
        comment: cleanComment,
        created_at: createdAt,
      }),
    });

    if (!response.ok) {
      console.error('[Storage] Supabase HTTP error:', response.status);
      return {
        success: false,
        message: 'No hemos podido registrar tu correo en la base de datos. Por favor, inténtalo de nuevo en unos minutos.',
      };
    }

    // Also cache locally for author view
    try {
      const existing = getBookInterestSubmissions();
      existing.unshift(newEntry);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(existing));
      localStorage.setItem(LAST_SUBMIT_KEY, now.toString());
    } catch {
      // non-blocking
    }

    return {
      success: true,
      message: 'Gracias. Te avisaremos cuando el libro pueda comprarse.',
    };
  } catch (err) {
    console.error('[Storage] Supabase connection error:', err);
    return {
      success: false,
      message: 'Error de conexión con el servicio de registro. Comprueba tu conexión a internet e inténtalo de nuevo.',
    };
  }
}
