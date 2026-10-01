import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { useBookModal } from '../context/BookModalContext';
import { BookInterestForm } from './BookInterestForm';

export function BookInterestModal() {
  const { isOpen, closeModal } = useBookModal();
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeModal();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-interest-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#1C1917]/55 backdrop-blur-xs transition-opacity"
        onClick={closeModal}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div
        ref={modalRef}
        className="relative w-full max-w-lg bg-[#FAF8F5] border border-[#D6CEBE] rounded shadow-xl p-6 sm:p-8 z-10 my-auto text-left"
      >
        <button
          type="button"
          onClick={closeModal}
          className="absolute top-4 right-4 p-2 text-[#78716C] hover:text-[#1C1917] rounded hover:bg-[#EAE4D9] transition-colors focus-visible:outline-2 focus-visible:outline-[#1C1917]"
          aria-label="Cerrar ventana"
        >
          <X className="w-5 h-5" aria-hidden="true" />
        </button>

        <div className="mb-5">
          <div className="text-xs uppercase tracking-widest text-[#9A3412] font-semibold mb-1">
            Proyecto editorial en curso
          </div>
          <h2
            id="modal-interest-title"
            className="text-xl sm:text-2xl font-serif font-semibold text-[#1C1917] tracking-tight"
          >
            Todavía no está disponible
          </h2>
        </div>

        <div className="text-xs sm:text-sm text-[#57534E] leading-relaxed space-y-2 mb-6 border-b border-[#E7E2DA] pb-5">
          <p>
            Gracias por querer leer{' '}
            <em className="text-[#1C1917] not-italic font-medium">
              La generación que aprendió a preguntarle a una máquina
            </em>
            .
          </p>
          <p>
            Estamos terminando el libro y todavía no puede comprarse. Si quieres que te avisemos en cuanto esté disponible, déjanos tu correo y cuéntanos brevemente qué impresión te ha dado el proyecto.
          </p>
        </div>

        <BookInterestForm />
      </div>
    </div>
  );
}
