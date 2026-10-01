import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import { Update } from '../types';

interface UpdateCardProps {
  update: Update;
}

export function UpdateCard({ update }: UpdateCardProps) {
  return (
    <article className="p-6 bg-[#FFFFFF] border border-[#E7E2DA] rounded transition-all hover:border-[#C8BFB0]">
      <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#78716C] mb-3">
        <span className="uppercase tracking-wider font-medium text-[11px] text-[#9A3412]">
          Área: {update.area}
        </span>
        <div className="flex items-center gap-1.5 font-mono">
          <Calendar className="w-3.5 h-3.5 text-[#A8A29E]" aria-hidden="true" />
          <span>{update.date}</span>
        </div>
      </div>

      <h3 className="text-lg font-serif font-semibold text-[#1C1917] hover:text-[#9A3412] transition-colors mb-2">
        <Link to={`/actualizaciones/${update.slug}`}>
          {update.title}
        </Link>
      </h3>

      <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed mb-4">
        {update.summary}
      </p>

      <div className="pt-3 border-t border-[#F2ECE1] flex items-center justify-between text-xs">
        <span className="text-[#8C827A]">
          {update.sources.length} fuente(s) auditada(s)
        </span>
        <Link
          to={`/actualizaciones/${update.slug}`}
          className="inline-flex items-center gap-1 font-medium text-[#1C1917] hover:text-[#9A3412] transition-colors"
        >
          <span>Ver análisis detallado</span>
          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
