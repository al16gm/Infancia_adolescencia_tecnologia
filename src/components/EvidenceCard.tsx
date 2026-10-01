import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Info } from 'lucide-react';
import { Evidence } from '../types';
import { EvidenceBadge } from './EvidenceBadge';

interface EvidenceCardProps {
  evidence: Evidence;
}

export function EvidenceCard({ evidence }: EvidenceCardProps) {
  return (
    <article className="group flex flex-col justify-between p-6 bg-[#FFFFFF] border border-[#E7E2DA] rounded transition-all hover:border-[#C8BFB0] hover:shadow-xs">
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <EvidenceBadge level={evidence.evidenceLevel} />
          <div className="text-xs text-[#78716C] flex items-center gap-1.5 font-mono">
            <span>{evidence.year}</span>
            <span aria-hidden="true">·</span>
            <span className="font-sans truncate max-w-[180px]">{evidence.studyType}</span>
          </div>
        </div>

        {evidence.placeholder && (
          <div className="flex items-center gap-1.5 text-xs text-[#8A5A1A] bg-[#FDF8EE] border border-[#F4E8CE] px-2.5 py-1 rounded mb-3">
            <Info className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <span>Referencia editorial pendiente de carga</span>
          </div>
        )}

        <h3 className="text-base sm:text-lg font-serif font-semibold text-[#1C1917] group-hover:text-[#1E3A8A] transition-colors leading-snug mb-2">
          <Link to={`/evidencia/${evidence.slug}`} className="focus-visible:outline-2 focus-visible:outline-[#1E3A8A]">
            {evidence.title}
          </Link>
        </h3>

        <div className="text-xs text-[#78716C] mb-3 flex flex-wrap items-center gap-2">
          <span>Población: {evidence.population}</span>
          <span aria-hidden="true">·</span>
          <span>Edades: {evidence.ageRange}</span>
        </div>

        <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed line-clamp-3">
          {evidence.mainFindings}
        </p>
      </div>

      <div className="pt-4 mt-5 border-t border-[#F2ECE1] flex items-center justify-between text-xs">
        <span className="text-[#8C827A] truncate max-w-[200px]">
          {evidence.sampleSize}
        </span>
        <Link
          to={`/evidencia/${evidence.slug}`}
          className="inline-flex items-center gap-1 font-medium text-[#1E3A8A] hover:underline underline-offset-2"
          aria-label={`Ver ficha completa de: ${evidence.title}`}
        >
          <span>Ver ficha</span>
          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
