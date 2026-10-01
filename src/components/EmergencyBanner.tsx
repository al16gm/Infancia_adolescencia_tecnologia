import React from 'react';
import { PhoneCall, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';

interface EmergencyBannerProps {
  title?: string;
  description?: string;
  phone?: string;
  showHelpLink?: boolean;
  className?: string;
}

export function EmergencyBanner({
  title = 'Si hay riesgo vital o peligro físico inminente: 112',
  description = 'Para emergencias médicas, agresiones en curso o situaciones críticas inmediatas, llama de inmediato al teléfono único de emergencias (gratuito, 24 horas).',
  phone = '112',
  showHelpLink = true,
  className = '',
}: EmergencyBannerProps) {
  return (
    <div
      role="region"
      aria-label="Aviso de emergencia"
      className={`border-l-4 border-[#9A3412] bg-[#FAF5F0] p-4 sm:p-5 rounded-r text-[#1C1917] ${className}`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-[#9A3412] shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <h2 className="text-sm font-semibold text-[#1C1917] tracking-tight">{title}</h2>
            <p className="text-xs sm:text-sm text-[#57534E] mt-0.5 max-w-2xl leading-relaxed">
              {description}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 shrink-0 self-start sm:self-center">
          <a
            href={`tel:${phone}`}
            className="inline-flex items-center gap-2 bg-[#9A3412] hover:bg-[#7E2A0E] text-white px-3.5 py-1.5 rounded text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9A3412]"
          >
            <PhoneCall className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Llamar al {phone}</span>
          </a>
          {showHelpLink && (
            <Link
              to="/ayuda"
              className="text-xs text-[#57534E] hover:text-[#1C1917] underline underline-offset-2 font-medium"
            >
              Directorio de ayuda
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
