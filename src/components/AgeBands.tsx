import React from 'react';

interface AgeGuidanceItem {
  range: '6–9' | '10–13' | '14–18' | string;
  title: string;
  focus?: string;
  description: string;
}

interface AgeBandsProps {
  guidance?: AgeGuidanceItem[];
  title?: string;
  subtitle?: string;
  className?: string;
}

const DEFAULT_BANDS: AgeGuidanceItem[] = [
  {
    range: '6–9',
    title: '6 a 9 años',
    focus: 'Selección adulta y entorno',
    description: 'Más selección adulta, acompañamiento presencial y diseño del entorno físico sin dispositivos personales propios.',
  },
  {
    range: '10–13',
    title: '10 a 13 años',
    focus: 'Negociación y progresividad',
    description: 'Más explicación, pacto de normas comprensibles y concesión de autonomía progresiva según madurez demostrada.',
  },
  {
    range: '14–18',
    title: '14 a 18 años',
    focus: 'Responsabilidad y privacidad',
    description: 'Más responsabilidad propia, respeto escrupuloso a la intimidad y preparación para decidir sin supervisión adulta constante.',
  },
];

export function AgeBands({
  guidance = DEFAULT_BANDS,
  title = 'De los seis a los dieciocho años',
  subtitle = 'El objetivo no es controlar indefinidamente. Es aprovechar los años en que todavía podemos acompañar de cerca para construir criterio antes de que tengan que decidir solos.',
  className = '',
}: AgeBandsProps) {
  return (
    <section className={`border border-[#E5DFD5] bg-[#FAF8F5] rounded p-6 sm:p-8 ${className}`}>
      <div className="max-w-2xl mb-6">
        <h2 className="text-xl sm:text-2xl font-serif font-medium text-[#1C1917] tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-xs sm:text-sm text-[#57534E] mt-1.5 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {guidance.map((band, idx) => (
          <div
            key={idx}
            className="border-t-2 border-[#D6CEBE] pt-4 bg-[#FFFFFF]/60 p-4 rounded-b border-x border-b border-[#EAE4D9]"
          >
            <div className="text-xs font-mono font-medium text-[#78716C] mb-1">
              {band.range} AÑOS
            </div>
            <h3 className="text-base font-serif font-semibold text-[#1C1917] mb-1">
              {band.title}
            </h3>
            {band.focus && (
              <div className="text-xs text-[#9A3412] font-medium mb-2.5">
                {band.focus}
              </div>
            )}
            <p className="text-xs sm:text-sm text-[#44403C] leading-relaxed">
              {band.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
