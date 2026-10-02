import { BookInterestSubmission } from '../types';

export interface StorageResult {
  success: boolean;
  message?: string;
  isDevMode?: boolean;
}

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;
const WEBHOOK_URL = import.meta.env.VITE_WEBHOOK_URL as string | undefined;

export const LOCAL_STORAGE_KEY = 'lgapam_book_interest_submissions';
const LAST_SUBMIT_KEY = 'lgapam_book_last_submit';

/**
 * Sanitizes input string to prevent script injection
 */
export function sanitizeText(text: string): string {
  return text
    .replace(/[<>]/g, '')
    .trim();
}

/**
 * Validates email format strictly
 */
export function validateEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email.trim());
}

/**
 * Retrieves all registered submissions from storage
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
 * Deletes a submission by index or ID
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
 * Exports submissions to a formatted CSV string with UTF-8 BOM
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

  // UTF-8 BOM prefix (\uFEFF) ensures Excel opens special characters and accents perfectly
  return '\uFEFF' + [headers.join(';'), ...rows].join('\r\n');
}

/**
 * Downloads submissions directly as a .csv file
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
 * Saves a book interest registration.
 * Saves locally immediately so the author can inspect and download them,
 * and optionally forwards to Supabase or Webhook if configured.
 */
export async function saveBookInterest(data: {
  email: string;
  comment: string;
}): Promise<StorageResult> {
  const cleanEmail = sanitizeText(data.email).toLowerCase();
  const cleanComment = sanitizeText(data.comment);

  // Validations
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

  const newEntry: BookInterestSubmission = {
    id: `sub_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    email: cleanEmail,
    comment: cleanComment,
    createdAt: new Date().toISOString(),
  };

  // 1. Always persist to localStorage for author visibility & instant access
  try {
    const existing = getBookInterestSubmissions();
    existing.unshift(newEntry);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(existing));
    localStorage.setItem(LAST_SUBMIT_KEY, now.toString());
  } catch (err) {
    console.warn('[Storage] Local storage quota or error:', err);
  }

  // 2. If Webhook (Google Sheets / Make / Zapier) is configured, forward asynchronously
  if (WEBHOOK_URL && !WEBHOOK_URL.includes('MY_WEBHOOK_URL')) {
    try {
      fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newEntry),
        mode: 'no-cors',
      }).catch(e => console.warn('[Storage] Webhook forward error:', e));
    } catch {
      // non-blocking
    }
  }

  // 3. If Supabase is configured, execute INSERT via REST API
  if (SUPABASE_URL && SUPABASE_ANON_KEY && !SUPABASE_URL.includes('MY_SUPABASE_URL')) {
    try {
      const response = await fetch(`${SUPABASE_URL}/rest/v1/book_interest`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          'Prefer': 'return=minimal',
        },
        body: JSON.stringify({
          email: cleanEmail,
          comment: cleanComment,
          created_at: newEntry.createdAt,
        }),
      });

      if (!response.ok) {
        console.error('[Storage] Supabase HTTP error:', response.status);
      }
    } catch (err) {
      console.error('[Storage] Supabase connection error:', err);
    }
  }

  return {
    success: true,
    message: 'Registrado con éxito.',
  };
}
