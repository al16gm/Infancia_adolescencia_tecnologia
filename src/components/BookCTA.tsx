import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import { useBookModal } from '../context/BookModalContext';
import bookCoverImg from '../assets/images/book_cover_front_1790888633952.jpg';

interface BookCTAProps {
  title?: string;
  subtitle?: string;
  variant?: 'compact' | 'full';
  className?: string;
}

export function BookCTA({
  title = 'El objetivo no era controlar una pantalla',
  subtitle = 'La generación que aprendió a preguntarle a una máquina recorre desde los seis hasta los dieciocho años los principales dilemas de crecer con tecnología: sueño, redes, normas familiares, ciberacoso, videojuegos, escuela, IA y autonomía.',
  variant = 'full',
  className = '',
}: BookCTAProps) {
  const { openModal } = useBookModal();

  if (variant === 'compact') {
    return (
      <div className={`p-5 sm:p-6 bg-[#FAF5F0] border border-[#E7DFD5] rounded flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${className}`}>
        <div className="max-w-xl">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#9A3412] font-semibold mb-1">
            <BookOpen className="w-4 h-4 text-[#9A3412]" aria-hidden="true" />
            <span>En el libro</span>
          </div>
          <h3 className="text-base font-serif font-semibold text-[#1C1917]">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-[#57534E] mt-1 leading-relaxed">
            {subtitle}
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={openModal}
            className="px-4 py-2 text-xs font-medium text-white bg-[#1C1917] hover:bg-[#333333] rounded transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C1917]"
          >
            Comprar el libro
          </button>
          <Link
            to="/libro"
            className="text-xs text-[#57534E] hover:text-[#1C1917] underline underline-offset-2"
          >
            Ver índice
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className={`border border-[#E0D8CB] bg-[#FFFFFF] p-8 sm:p-10 rounded text-center max-w-3xl mx-auto my-12 ${className}`}>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-6">
        <div className="shrink-0 w-28 sm:w-32 aspect-[2/3] rounded overflow-hidden shadow-lg border border-[#D6CEBE]">
          <img
            src={bookCoverImg}
            alt="Portada oficial de La generación que aprendió a preguntarle a una máquina"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = `${import.meta.env.BASE_URL}book_cover.jpg`;
            }}
          />
        </div>
        <div className="text-left sm:max-w-md">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#9A3412] font-semibold mb-2">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Por Alejandro García Monteagudo</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-medium text-[#1C1917] tracking-tight mb-2">
            {title}
          </h2>
          <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
            {subtitle}
          </p>
        </div>
      </div>

      <p className="text-xs text-[#78716C] italic mb-6 max-w-lg mx-auto">
        No pretende enseñarte a perseguir cada novedad. Pretende ofrecerte criterios que duren más que la próxima aplicación.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <button
          type="button"
          onClick={openModal}
          className="px-6 py-3 text-xs sm:text-sm font-medium text-white bg-[#1C1917] hover:bg-[#333333] active:bg-[#000000] rounded transition-colors shadow-xs cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C1917]"
        >
          Comprar el libro
        </button>
        <Link
          to="/libro"
          className="px-5 py-3 text-xs sm:text-sm font-medium text-[#1C1917] bg-[#F2EDE4] hover:bg-[#E5DFD4] rounded transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C1917]"
        >
          Conocer la estructura del libro
        </Link>
      </div>
    </section>
  );
}
