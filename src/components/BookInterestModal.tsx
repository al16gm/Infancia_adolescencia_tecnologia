import React, { useEffect, useRef } from 'react';
import { X, ShoppingBag } from 'lucide-react';
import { useBookModal } from '../context/BookModalContext';
import bookCoverImg from '../assets/images/book_cover_front_1790888633952.jpg';

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
        className="relative w-full max-w-2xl bg-[#FAF8F5] border border-[#D6CEBE] rounded shadow-xl p-6 sm:p-8 z-10 my-auto text-left"
      >
        <button
          type="button"
          onClick={closeModal}
          className="absolute top-4 right-4 p-2 text-[#78716C] hover:text-[#1C1917] rounded hover:bg-[#EAE4D9] transition-colors focus-visible:outline-2 focus-visible:outline-[#1C1917]"
          aria-label="Cerrar ventana"
        >
          <X className="w-5 h-5" aria-hidden="true" />
        </button>

        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 mt-2">
          {/* Foto del libro */}
          <div className="shrink-0 w-32 sm:w-48 aspect-[2/3] rounded overflow-hidden shadow-lg border border-[#D6CEBE]">
            <img
              src={bookCoverImg}
              alt="Portada del libro"
              className="w-full h-full object-cover select-none"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = `${import.meta.env.BASE_URL}book_cover.jpg`;
              }}
            />
          </div>

          {/* Información y botón */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="text-xs uppercase tracking-widest text-[#9A3412] font-semibold mb-1 text-center sm:text-left">
              Ya disponible
            </div>
            
            <h2
              id="modal-interest-title"
              className="text-xl sm:text-2xl font-serif font-semibold text-[#1C1917] tracking-tight leading-snug text-center sm:text-left mb-2"
            >
              La generación que aprendió a preguntarle a una máquina
            </h2>
            
            <p className="text-xs sm:text-sm text-[#78716C] font-serif italic text-center sm:text-left mb-4">
              Por Alejandro García Monteagudo
            </p>

            {/* 4 líneas de resumen del libro */}
            <div className="text-sm text-[#57534E] leading-relaxed space-y-2 mb-6">
              <p>
                Una propuesta rigurosa, serena y práctica para cualquier adulto que conviva o eduque a menores.
              </p>
              <p>
                Recorre los principales dilemas de crecer con tecnología desde los seis hasta los dieciocho años: sueño, redes, normas familiares, ciberacoso, videojuegos, escuela, IA y autonomía.
              </p>
            </div>

            {/* Botón de compra */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://www.amazon.es/dp/B0HNDCQ638?ref=cm_sw_r_ffobk_cp_ud_dp_4CKTW01CKW56E3386HJE&ref_=cm_sw_r_ffobk_cp_ud_dp_4CKTW01CKW56E3386HJE&social_share=cm_sw_r_ffobk_cp_ud_dp_4CKTW01CKW56E3386HJE&bestFormat=true"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeModal}
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 text-sm font-medium text-white bg-[#1C1917] hover:bg-[#333333] active:bg-[#000000] rounded transition-colors shadow-xs focus-visible:outline-2 focus-visible:outline-[#1C1917]"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Comprar en Amazon</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
