import React from 'react';
import { helpResources } from '../data/helpResources';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { EmergencyBanner } from '../components/EmergencyBanner';
import { LastReviewed } from '../components/LastReviewed';
import { SeoHelmet } from '../components/SeoHelmet';
import { PhoneCall, ExternalLink, ShieldAlert } from 'lucide-react';

export function HelpPage() {
  const sortedResources = [...helpResources].sort((a, b) => a.priority - b.priority);

  return (
    <div className="max-w-4xl mx-auto space-y-10">
      <SeoHelmet
        title="Si necesitas ayuda ahora — Directorio urgente y recursos oficiales"
        description="Teléfonos y canales oficiales directos, gratuitos y confidenciales en España ante emergencias, salud mental, ciberacoso, extorsión o violencia."
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
          Canales oficiales y recursos de asistencia en España
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#1C1917] tracking-tight leading-tight mb-3">
          Si necesitas ayuda ahora
        </h1>
        <p className="text-base sm:text-lg text-[#57534E] leading-relaxed">
          Si tú, un menor a tu cargo o alguien de tu entorno está atravesando una situación de peligro, angustia grave, ciberacoso, sextorsión o violencia, estos son los canales oficiales y gratuitos para recibir apoyo profesional inmediato.
        </p>
      </header>

      {/* Emergency banner 112 */}
      <EmergencyBanner
        title="Emergencia vital inmediata: 112"
        description="Peligro inmediato para la vida o la integridad física, violencia en curso, tentativa suicida u otra emergencia grave. Gratuito, disponible 24 horas y accesible sin tarjeta SIM."
        showHelpLink={false}
      />

      {/* Help Resources List */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#78716C]">
          <ShieldAlert className="w-4 h-4 text-[#9A3412]" />
          <span>Directorio oficial ordenado por prioridad de intervención ({sortedResources.length} servicios)</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {sortedResources.map((res) => (
            <article
              key={res.id}
              className={`p-6 rounded border flex flex-col justify-between ${
                res.priority <= 3
                  ? 'bg-[#FFFFFF] border-[#D6CEBE] shadow-xs'
                  : 'bg-[#FAF8F5] border-[#E5DFD5]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#9A3412]">
                    Prioridad {res.priority} · {res.scope}
                  </span>
                  {res.shortName && (
                    <span className="text-xs font-semibold px-2 py-0.5 bg-[#FAF3EB] text-[#9A3412] rounded border border-[#EDE2D5]">
                      {res.shortName}
                    </span>
                  )}
                </div>

                <h2 className="text-base sm:text-lg font-serif font-semibold text-[#1C1917] leading-snug mb-2">
                  {res.name}
                </h2>

                <div className="space-y-2 mb-4">
                  <p className="text-xs sm:text-sm text-[#44403C] leading-relaxed">
                    <strong className="text-[#1C1917]">Cuándo acudir:</strong> {res.whenToUse}
                  </p>
                  {res.notes && (
                    <p className="text-xs text-[#78716C] italic leading-normal">
                      {res.notes}
                    </p>
                  )}
                </div>
              </div>

              <div className="pt-4 border-t border-[#F2ECE1] flex flex-wrap items-center justify-between gap-3">
                {res.phone ? (
                  <a
                    href={`tel:${res.phone}`}
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#1C1917] hover:bg-[#333333] active:bg-[#000000] rounded transition-colors"
                    aria-label={`Llamar al teléfono ${res.phone}`}
                  >
                    <PhoneCall className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Llamar al {res.phone}</span>
                  </a>
                ) : (
                  <span className="text-xs text-[#78716C] italic">
                    Trámite telemático urgente
                  </span>
                )}

                {res.url && (
                  <a
                    href={res.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[#1E3A8A] hover:underline font-medium"
                    title={`Abrir página oficial de ${res.name}`}
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

      {/* Safety & Confidentiality Note */}
      <div className="bg-[#FAF5F0] border border-[#E7DFD5] p-5 rounded text-xs text-[#57534E] leading-relaxed space-y-1">
        <p>
          <strong className="text-[#1C1917]">Garantía de confidencialidad en España:</strong> Las llamadas a las líneas públicas de emergencia y apoyo (como el 112, 024, 017 y 016) son gratuitas y no aparecen reflejadas en la factura telefónica ordinaria.
        </p>
        <p className="text-[#78716C]">
          En algunos dispositivos móviles, el número 016 puede quedar guardado en el registro interno de llamadas del propio teléfono; si necesitas no dejar rastro por seguridad personal, recuerda borrarlo manualmente del historial del terminal.
        </p>
      </div>
    </div>
  );
}
