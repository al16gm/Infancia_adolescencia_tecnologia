import { BookInterestSubmission } from '../types';

export interface StorageResult {
  success: boolean;
  message?: string;
  isDevMode?: boolean;
}

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

const LOCAL_STORAGE_KEY = 'lgapam_book_interest_submissions_dev';
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
 * Saves a book interest registration.
 * Concentrates provider logic in this isolated module.
 * If Supabase variables are absent, acts in development mode with clear console warnings.
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

  // Basic repeated submission throttle (minimum 10 seconds between attempts)
  const lastSubmit = localStorage.getItem(LAST_SUBMIT_KEY);
  const now = Date.now();
  if (lastSubmit && now - parseInt(lastSubmit, 10) < 10000) {
    return {
      success: false,
      message: 'Hemos recibido un envío hace unos instantes. Espera unos segundos antes de volver a intentarlo.',
    };
  }

  // If Supabase is configured, execute INSERT via REST API (RLS insert-only)
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
          created_at: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        console.error('[BookInterest] Error HTTP en Supabase:', response.status, response.statusText);
        return {
          success: false,
          message: 'No hemos podido guardar tu correo. Inténtalo de nuevo más tarde.',
        };
      }

      localStorage.setItem(LAST_SUBMIT_KEY, now.toString());
      return { success: true, isDevMode: false };
    } catch (err) {
      console.error('[BookInterest] Excepción de conexión con Supabase:', err);
      return {
        success: false,
        message: 'No hemos podido conectar con el servidor. Comprueba tu conexión e inténtalo de nuevo.',
      };
    }
  }

  // Development mode fallback
  console.info(
    '[BookInterest] Entorno de desarrollo: VITE_SUPABASE_URL o VITE_SUPABASE_ANON_KEY no configuradas en .env. ' +
    'Simulando inserción en base de datos y guardando en almacenamiento local de pruebas.'
  );

  try {
    const existing = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]') as BookInterestSubmission[];
    existing.push({
      email: cleanEmail,
      comment: cleanComment,
      createdAt: new Date().toISOString(),
    });
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(existing));
    localStorage.setItem(LAST_SUBMIT_KEY, now.toString());

    return {
      success: true,
      isDevMode: true,
      message: 'Registrado con éxito (modo desarrollo local).',
    };
  } catch (e) {
    console.error('[BookInterest] Error local:', e);
    return {
      success: false,
      message: 'No hemos podido guardar tu correo. Inténtalo de nuevo.',
    };
  }
}
