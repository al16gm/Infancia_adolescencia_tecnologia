import React from 'react';
import { Calendar } from 'lucide-react';

interface LastReviewedProps {
  date?: string;
  prefix?: string;
  className?: string;
}

export function LastReviewed({
  date = '1 de octubre de 2026',
  prefix = 'Última revisión editorial:',
  className = '',
}: LastReviewedProps) {
  return (
    <div
      className={`inline-flex items-center gap-1.5 text-xs text-[#78716C] tracking-wide ${className}`}
    >
      <Calendar className="w-3.5 h-3.5 text-[#A8A29E]" aria-hidden="true" />
      <span>
        {prefix} <span className="text-[#44403C] font-medium">{date}</span>
      </span>
    </div>
  );
}
