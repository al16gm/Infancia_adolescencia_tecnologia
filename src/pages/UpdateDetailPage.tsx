import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { UPDATES } from '../data/updates';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { LastReviewed } from '../components/LastReviewed';
import { ShareButton } from '../components/ShareButton';
import { SourceLink } from '../components/SourceLink';
import { SeoHelmet } from '../components/SeoHelmet';
import { ArrowLeft, Calendar, FileText, ArrowRight } from 'lucide-react';

export function UpdateDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const update = UPDATES.find((u) => u.slug === slug);

  if (!update) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="max-w-4xl mx-auto space-y-10">
      <SeoHelmet
        title={update.title}
        description={update.summary}
        path={`/actualizaciones/${update.slug}`}
      />

      <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
        <Breadcrumbs
          items={[
            { label: 'Actualizaciones', href: '/actualizaciones' },
            { label: update.title },
          ]}
        />
        <div className="flex items-center gap-3">
          <ShareButton title={update.title} />
          <LastReviewed date={update.lastReviewed} />
        </div>
      </div>

      {/* Header */}
      <header className="border-b border-[#E8E2D7] pb-8 space-y-3">
        <div className="flex flex-wrap items-center gap-3 text-xs text-[#78716C]">
          <span className="font-semibold uppercase tracking-wider text-[#9A3412]">
            Área: {update.area}
          </span>
          <span aria-hidden="true">·</span>
          <div className="flex items-center gap-1.5 font-mono">
            <Calendar className="w-3.5 h-3.5 text-[#A8A29E]" />
            <span>{update.date}</span>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl font-serif font-medium text-[#1C1917] tracking-tight leading-tight">
          {update.title}
        </h1>

        <p className="text-base sm:text-lg text-[#57534E] leading-relaxed">
          {update.summary}
        </p>
      </header>

      {/* Comparative Analysis: Estado previo vs Nuevo estado */}
      <div className="space-y-6">
        <h2 className="text-xl font-serif font-medium text-[#1C1917]">
          Análisis del cambio y alcance
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#FAF8F5] border border-[#E7E2DA] p-5 rounded">
            <div className="text-xs uppercase tracking-wider font-semibold text-[#78716C] mb-2">
              Estado previo documentado
            </div>
            <p className="text-xs sm:text-sm text-[#44403C] leading-relaxed">
              {update.previousState}
            </p>
          </div>

          <div className="bg-[#FFFFFF] border border-[#D6CEBE] p-5 rounded shadow-xs">
            <div className="text-xs uppercase tracking-wider font-semibold text-[#9A3412] mb-2">
              Nuevo estado tras la actualización
            </div>
            <p className="text-xs sm:text-sm text-[#1C1917] leading-relaxed">
              {update.newState}
            </p>
          </div>
        </div>

        {/* Qué cambió en detalle */}
        <section className="bg-[#FFFFFF] border border-[#E7E2DA] p-6 rounded space-y-2">
          <h3 className="text-sm sm:text-base font-semibold text-[#1C1917]">
            Qué ha cambiado exactamente
          </h3>
          <p className="text-xs sm:text-sm text-[#44403C] leading-relaxed">
            {update.whatChanged}
          </p>
        </section>

        {/* Modificación en recomendaciones */}
        <section className="bg-[#FAF5F0] border border-[#E8DDD0] p-6 rounded space-y-2">
          <h3 className="text-sm sm:text-base font-semibold text-[#9A3412]">
            Impacto en las recomendaciones del proyecto
          </h3>
          <p className="text-xs sm:text-sm text-[#1C1917] leading-relaxed">
            {update.recommendationChange}
          </p>
        </section>

        {/* Fuentes auditadas */}
        <section className="pt-4 border-t border-[#E8E2D7]">
          <h3 className="text-xs uppercase tracking-wider font-semibold text-[#78716C] mb-3">
            Fuentes auditadas para esta actualización
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm">
            {update.sources.map((src, i) => (
              <li key={i} className="flex items-center gap-2">
                <FileText className="w-3.5 h-3.5 text-[#9A3412]" />
                <SourceLink title={src.title} url={src.url} />
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Back link */}
      <div className="pt-6 border-t border-[#E8E2D7] flex items-center justify-between">
        <Link
          to="/actualizaciones"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#57534E] hover:text-[#1C1917] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Volver al índice de actualizaciones</span>
        </Link>
      </div>
    </div>
  );
}
