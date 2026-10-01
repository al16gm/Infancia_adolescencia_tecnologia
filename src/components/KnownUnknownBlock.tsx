import React from 'react';
import { CheckCircle2, HelpCircle, ArrowRight } from 'lucide-react';

interface KnownUnknownBlockProps {
  whatWeKnow: string[];
  whatWeDontKnow: string[];
  recommendations?: string[];
  className?: string;
}

export function KnownUnknownBlock({
  whatWeKnow,
  whatWeDontKnow,
  recommendations,
  className = '',
}: KnownUnknownBlockProps) {
  return (
    <div className={`space-y-8 my-8 ${className}`}>
      {/* Qué sabemos vs Qué no sabemos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {/* Qué sabemos */}
        <div className="border-t-2 border-[#2D4A3E] pt-4 bg-[#FFFFFF]/70 border border-[#E7E2D8] p-5 sm:p-6 rounded">
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle2 className="w-4 h-4 text-[#2D4A3E] shrink-0" aria-hidden="true" />
            <h3 className="text-base sm:text-lg font-serif font-semibold text-[#1C1917]">
              Qué sabemos
            </h3>
          </div>
          <p className="text-xs text-[#78716C] mb-4">
            Conclusiones respaldadas por evidencia empírica acumulada o consenso metodológico.
          </p>
          <ul className="space-y-3">
            {whatWeKnow.map((item, i) => (
              <li key={i} className="text-xs sm:text-sm text-[#44403C] leading-relaxed flex items-start gap-2.5">
                <span className="text-[#2D4A3E] font-bold select-none mt-0.5 shrink-0">·</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Qué todavía no sabemos */}
        <div className="border-t-2 border-[#78716C] pt-4 bg-[#FFFFFF]/70 border border-[#E7E2D8] p-5 sm:p-6 rounded">
          <div className="flex items-center gap-2 mb-3">
            <HelpCircle className="w-4 h-4 text-[#78716C] shrink-0" aria-hidden="true" />
            <h3 className="text-base sm:text-lg font-serif font-semibold text-[#1C1917]">
              Qué todavía no sabemos
            </h3>
          </div>
          <p className="text-xs text-[#78716C] mb-4">
            Límites del conocimiento actual, vacíos metodológicos o preguntas abiertas.
          </p>
          <ul className="space-y-3">
            {whatWeDontKnow.map((item, i) => (
              <li key={i} className="text-xs sm:text-sm text-[#44403C] leading-relaxed flex items-start gap-2.5">
                <span className="text-[#78716C] font-bold select-none mt-0.5 shrink-0">·</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Qué puede hacerse / Recomendaciones */}
      {recommendations && recommendations.length > 0 && (
        <div className="border-t-2 border-[#9A3412] pt-4 bg-[#FAF5F0] border border-[#EBE2D5] p-5 sm:p-6 rounded">
          <div className="flex items-center gap-2 mb-2">
            <ArrowRight className="w-4 h-4 text-[#9A3412] shrink-0" aria-hidden="true" />
            <h3 className="text-base sm:text-lg font-serif font-semibold text-[#1C1917]">
              Qué puede ayudar mientras tanto
            </h3>
          </div>
          <p className="text-xs text-[#78716C] mb-4">
            Recomendaciones prudenciales y pautas prácticas para aplicar en casa o en la escuela.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {recommendations.map((rec, idx) => (
              <li
                key={idx}
                className="text-xs sm:text-sm text-[#44403C] leading-relaxed flex items-start gap-2 bg-[#FFFFFF]/80 p-3 rounded border border-[#EDE4D6]"
              >
                <span className="text-[#9A3412] font-semibold select-none shrink-0">{idx + 1}.</span>
                <span>{rec}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
