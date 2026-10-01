import React from 'react';
import { Link } from 'react-router-dom';
import { SeoHelmet } from '../components/SeoHelmet';
import { ArrowLeft, BookOpen, PhoneCall } from 'lucide-react';

export function NotFoundPage() {
  return (
    <div className="max-w-xl mx-auto py-16 text-center space-y-6">
      <SeoHelmet
        title="Página no encontrada (404)"
        description="Parece que esta página no existe. La tecnología cambia deprisa. Esta URL, aparentemente, también."
        path="/404"
      />

      <div className="text-xs font-mono font-semibold uppercase tracking-widest text-[#9A3412]">
        Error 404
      </div>

      <h1 className="text-3xl sm:text-4xl font-serif font-medium text-[#1C1917] tracking-tight">
        Parece que esta página no existe
      </h1>

      <div className="text-sm sm:text-base text-[#57534E] leading-relaxed space-y-1">
        <p>La tecnología cambia deprisa.</p>
        <p className="font-serif italic text-lg text-[#1C1917]">Esta URL, aparentemente, también.</p>
      </div>

      <div className="pt-6 flex flex-wrap items-center justify-center gap-3">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-white bg-[#1C1917] hover:bg-[#333333] rounded transition-colors shadow-xs"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Volver al inicio</span>
        </Link>
        <Link
          to="/temas"
          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-[#1C1917] bg-[#F2EDE4] hover:bg-[#E5DFD4] rounded transition-colors"
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>Explorar temas</span>
        </Link>
        <Link
          to="/ayuda"
          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-[#9A3412] bg-[#FAF3F0] hover:bg-[#F2DDD5] border border-[#F0DDD5] rounded transition-colors"
        >
          <PhoneCall className="w-3.5 h-3.5" />
          <span>Buscar ayuda</span>
        </Link>
      </div>
    </div>
  );
}
