import React from 'react';
import { HELP_PHONES } from '../data/helpLines';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { EmergencyBanner } from '../components/EmergencyBanner';
import { LastReviewed } from '../components/LastReviewed';
import { SeoHelmet } from '../components/SeoHelmet';
import { PhoneCall, ExternalLink, ShieldCheck } from 'lucide-react';

export function HelpPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-10">
      <SeoHelmet
        title="Si necesitas ayuda ahora — Directorio urgente"
        description="Teléfonos gratuitos, confidenciales e inmediatos en España ante emergencias, salud mental, ciberacoso, extorsión o violencia."
        path="/ayuda"
      />

      <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
        <Breadcrumbs items={[{ label: 'Ayuda inmediata' }]} />
        <LastReviewed
          date="1 de octubre de 2026"
          prefix="Última comprobación de servicios:"
        />
      </div>

      {/* Header */}
      <header className="border-b border-[#E8E2D7] pb-6">
        <div className="text-xs uppercase tracking-widest text-[#9A3412] font-semibold mb-2">
          Servicios públicos y especializados en España
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#1C1917] tracking-tight leading-tight mb-3">
          Si necesitas ayuda ahora
        </h1>
        <p className="text-base sm:text-lg text-[#57534E] leading-relaxed">
          Si tú, un menor a tu cargo o alguien de tu entorno está atravesando una situación de peligro, angustia grave, ciberacoso o extorsión, estos son los canales oficiales directos y gratuitos para recibir apoyo profesional inmediato.
        </p>
      </header>

      {/* Emergency banner 112 */}
      <EmergencyBanner
        title="Emergencia inmediata: 112"
        description="Si hay peligro físico inminente, riesgo vital o un delito violento en curso, llama de inmediato al 112. Teléfono gratuito, disponible 24 horas y accesible sin saldo ni tarjeta SIM."
        showHelpLink={false}
      />

      {/* Helplines List */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#78716C]">
          <ShieldCheck className="w-4 h-4 text-[#2D4A3E]" />
          <span>Líneas gratuitas de atención especializada</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {HELP_PHONES.map((line) => (
            <article
              key={line.id}
              className={`p-6 rounded border flex flex-col justify-between ${
                line.highlight
                  ? 'bg-[#FFFFFF] border-[#D6CEBE] shadow-xs'
                  : 'bg-[#FAF8F5] border-[#E5DFD5]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#9A3412] line-clamp-1">
                    {line.badge}
                  </span>
                </div>

                <h2 className="text-base sm:text-lg font-serif font-semibold text-[#1C1917] leading-snug mb-2">
                  {line.name}
                </h2>

                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed mb-4">
                  {line.description}
                </p>

                <div className="text-[11px] text-[#78716C] mb-4">
                  {line.availability}
                </div>
              </div>

              <div className="pt-4 border-t border-[#F2ECE1] flex flex-wrap items-center justify-between gap-3">
                <a
                  href={`tel:${line.phone}`}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#1C1917] hover:bg-[#333333] active:bg-[#000000] rounded transition-colors"
                  aria-label={`Llamar al teléfono ${line.phone}`}
                >
                  <PhoneCall className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Llamar al {line.phone}</span>
                </a>

                {/* Only render officialUrl if verified present in data */}
                {line.officialUrl && (
                  <a
                    href={line.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[#1E3A8A] hover:underline font-medium"
                    title={`Abrir página oficial de ${line.name}`}
                  >
                    <span>Web oficial</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Safety Note */}
      <div className="bg-[#FAF5F0] border border-[#E7DFD5] p-5 rounded text-xs text-[#57534E] leading-relaxed">
        <strong>Nota de confidencialidad:</strong> En España, las llamadas al 112, 024, 017 y 016 son totalmente gratuitas y no aparecen desglosadas en la factura telefónica. En algunos modelos de smartphone, el número 016 puede quedar guardado en el registro local de llamadas del terminal; si necesitas borrar tu rastro por motivos de seguridad personal, recuerda eliminarlo del historial del teléfono.
      </div>
    </div>
  );
}
