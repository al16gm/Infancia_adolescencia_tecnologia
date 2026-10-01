import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { saveBookInterest } from '../lib/storage';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

interface BookInterestFormProps {
  onSuccessCallback?: () => void;
  className?: string;
}

export function BookInterestForm({ onSuccessCallback, className = '' }: BookInterestFormProps) {
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [isDevMode, setIsDevMode] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!privacyAccepted) {
      setStatus('error');
      setErrorMessage('Debes aceptar la política de privacidad para recibir el aviso sobre el libro.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await saveBookInterest({ email, comment });

      if (res.success) {
        setStatus('success');
        setIsDevMode(Boolean(res.isDevMode));
        if (onSuccessCallback) {
          onSuccessCallback();
        }
      } else {
        setStatus('error');
        setErrorMessage(res.message || 'No hemos podido guardar tu correo. Inténtalo de nuevo.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('No hemos podido guardar tu correo. Inténtalo de nuevo.');
    }
  };

  if (status === 'success') {
    return (
      <div className={`p-6 bg-[#FAF7F2] border border-[#E7DFD5] rounded text-left ${className}`}>
        <div className="flex items-center gap-2.5 text-[#2D4A3E] mb-3">
          <CheckCircle2 className="w-5 h-5 shrink-0" aria-hidden="true" />
          <h4 className="text-base font-serif font-semibold text-[#1C1917]">
            Gracias. Te avisaremos cuando el libro pueda comprarse.
          </h4>
        </div>

        <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed mb-4">
          Tu comentario también nos ayuda a entender cómo se percibe el proyecto antes de publicarlo.
        </p>

        {isDevMode && (
          <div className="mb-5 p-3 text-xs bg-[#F4EFEA] border border-[#DDD5C7] rounded text-[#78716C]">
            <strong>Nota de desarrollo:</strong> Registro simulado y guardado en almacenamiento local (Supabase no configurado en entorno).
          </div>
        )}

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Link
            to="/temas"
            className="px-4 py-2 text-xs font-medium text-white bg-[#1C1917] hover:bg-[#333] rounded transition-colors"
          >
            Explorar temas
          </Link>
          <Link
            to="/recursos"
            className="px-4 py-2 text-xs font-medium text-[#1C1917] bg-[#EAE4D9] hover:bg-[#DDD5C7] rounded transition-colors"
          >
            Consultar recursos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 text-left ${className}`}>
      {status === 'error' && (
        <div
          role="alert"
          className="flex items-start gap-2.5 p-3 text-xs text-[#9A3412] bg-[#FAF3F0] border border-[#F0DDD5] rounded"
        >
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div>
        <label htmlFor="interest-email" className="block text-xs font-medium text-[#292524] mb-1.5">
          Correo electrónico <span className="text-[#9A3412]">*</span>
        </label>
        <input
          id="interest-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="tu@correo.com"
          className="w-full px-3.5 py-2.5 text-sm bg-[#FFFFFF] border border-[#D6CEBE] rounded text-[#1C1917] placeholder:text-[#A8A29E] focus:outline-none focus:border-[#1C1917] focus:ring-1 focus:ring-[#1C1917] transition-colors"
          autoComplete="email"
        />
      </div>

      <div>
        <label htmlFor="interest-comment" className="block text-xs font-medium text-[#292524] mb-1.5">
          ¿Qué impresión te ha dado el proyecto? <span className="text-[#9A3412]">*</span>
        </label>
        <textarea
          id="interest-comment"
          required
          rows={3}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Una frase es suficiente."
          maxLength={2000}
          className="w-full px-3.5 py-2.5 text-sm bg-[#FFFFFF] border border-[#D6CEBE] rounded text-[#1C1917] placeholder:text-[#A8A29E] focus:outline-none focus:border-[#1C1917] focus:ring-1 focus:ring-[#1C1917] transition-colors resize-y min-h-[80px]"
        />
        <p className="mt-1 text-[11px] text-[#78716C] leading-normal font-medium">
          No incluyas información personal o sensible sobre menores en este campo.
        </p>
      </div>

      <div className="pt-1">
        <label className="flex items-start gap-2.5 text-xs text-[#57534E] cursor-pointer select-none">
          <input
            type="checkbox"
            checked={privacyAccepted}
            onChange={(e) => setPrivacyAccepted(e.target.checked)}
            required
            className="mt-0.5 rounded border-[#C8BFB0] text-[#1C1917] focus:ring-[#1C1917]"
          />
          <span className="leading-relaxed">
            He leído la{' '}
            <Link
              to="/privacidad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1C1917] underline underline-offset-2 hover:text-[#9A3412]"
            >
              política de privacidad
            </Link>{' '}
            y acepto el tratamiento de estos datos para recibir el aviso sobre la disponibilidad del libro.
          </span>
        </label>
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-medium text-white bg-[#1C1917] hover:bg-[#333333] active:bg-[#000000] rounded transition-colors disabled:opacity-60 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C1917]"
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="w-3.5 h-3.5 animate-spin" aria-hidden="true" />
              <span>Guardando solicitud...</span>
            </>
          ) : (
            <span>Avísame cuando esté disponible</span>
          )}
        </button>
      </div>
    </form>
  );
}
