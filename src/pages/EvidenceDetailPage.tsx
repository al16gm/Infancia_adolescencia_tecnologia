import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { EVIDENCE_ITEMS } from '../data/evidence';
import { TOPICS } from '../data/topics';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { EvidenceBadge } from '../components/EvidenceBadge';
import { LastReviewed } from '../components/LastReviewed';
import { ShareButton } from '../components/ShareButton';
import { SourceLink } from '../components/SourceLink';
import { SeoHelmet } from '../components/SeoHelmet';
import { ArrowLeft, Info, BookOpen, Layers } from 'lucide-react';

export function EvidenceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const evidence = EVIDENCE_ITEMS.find((e) => e.slug === slug);

  if (!evidence) {
    return <Navigate to="/404" replace />;
  }

  const relatedTopics = TOPICS.filter((t) => evidence.topics.includes(t.slug));

  return (
    <div className="max-w-4xl mx-auto space-y-10">
      <SeoHelmet
        title={`Ficha de evidencia: ${evidence.title}`}
        description={`${evidence.title}. ${evidence.mainFindings}`}
        path={`/evidencia/${evidence.slug}`}
      />

      <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
        <Breadcrumbs
          items={[
            { label: 'Evidencia', href: '/evidencia' },
            { label: evidence.title },
          ]}
        />
        <div className="flex items-center gap-3">
          <ShareButton title={evidence.title} />
          <LastReviewed date={evidence.lastReviewed} />
        </div>
      </div>

      {/* Header */}
      <header className="border-b border-[#E8E2D7] pb-8 space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <EvidenceBadge level={evidence.evidenceLevel} />
          <span className="text-xs text-[#78716C] font-mono">
            ID: {evidence.id}
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-semibold text-[#1C1917] tracking-tight leading-snug">
          {evidence.title}
        </h1>

        <div className="text-xs sm:text-sm text-[#57534E] flex flex-wrap items-center gap-y-1 gap-x-3">
          <span><strong>Autores:</strong> {evidence.authors}</span>
          <span aria-hidden="true">·</span>
          <span><strong>Año:</strong> {evidence.year}</span>
          <span aria-hidden="true">·</span>
          <span><strong>Publicación / Entidad:</strong> {evidence.publisher}</span>
        </div>
      </header>

      {/* Placeholder editorial banner if applicable */}
      {evidence.placeholder && (
        <div className="p-4 bg-[#FDF9F0] border border-[#F0E4CA] rounded text-[#8A5A1A] text-xs sm:text-sm flex items-start gap-3">
          <Info className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" />
          <div className="space-y-1">
            <p className="font-semibold text-[#1C1917]">
              Referencia editorial pendiente de carga bibliográfica definitiva
            </p>
            <p className="text-[#57534E] leading-relaxed">
              Esta ficha sintetiza el consenso y la literatura empírica acumulada que apoya el contenido del libro. La bibliografía y DOI oficiales se incorporarán en la actualización editorial previa a la impresión física.
            </p>
          </div>
        </div>
      )}

      {/* Technical Spec Sheet */}
      <div className="bg-[#FFFFFF] border border-[#E7E2DA] rounded p-6 sm:p-7 shadow-xs">
        <h2 className="text-xs uppercase tracking-widest text-[#78716C] font-semibold mb-4">
          Ficha técnica del estudio
        </h2>

        <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-xs">
          <div>
            <dt className="text-[#78716C] font-medium mb-1">Tipo de evidencia</dt>
            <dd className="font-semibold text-[#1C1917]">{evidence.studyType}</dd>
          </div>
          <div>
            <dt className="text-[#78716C] font-medium mb-1">Población evaluada</dt>
            <dd className="font-semibold text-[#1C1917]">{evidence.population}</dd>
          </div>
          <div>
            <dt className="text-[#78716C] font-medium mb-1">Rango de edad</dt>
            <dd className="font-semibold text-[#1C1917]">{evidence.ageRange}</dd>
          </div>
          <div>
            <dt className="text-[#78716C] font-medium mb-1">Muestra analizada</dt>
            <dd className="font-semibold text-[#1C1917] font-mono">{evidence.sampleSize}</dd>
          </div>
        </dl>
      </div>

      {/* The 4 Core Sections */}
      <div className="space-y-8">
        {/* Section 1: Qué estudió realmente */}
        <section className="border-t-2 border-[#1E3A8A] pt-4 bg-[#FFFFFF] p-6 rounded border border-[#E7E2DA]">
          <h2 className="text-base sm:text-lg font-serif font-semibold text-[#1C1917] mb-2">
            1. Qué estudió realmente
          </h2>
          <p className="text-xs sm:text-sm text-[#44403C] leading-relaxed">
            {evidence.whatItStudied}
          </p>
        </section>

        {/* Section 2: Qué encontró */}
        <section className="border-t-2 border-[#2D4A3E] pt-4 bg-[#FFFFFF] p-6 rounded border border-[#E7E2DA]">
          <h2 className="text-base sm:text-lg font-serif font-semibold text-[#1C1917] mb-2">
            2. Qué encontró
          </h2>
          <p className="text-xs sm:text-sm text-[#44403C] leading-relaxed">
            {evidence.mainFindings}
          </p>
        </section>

        {/* Section 3: Qué no permite concluir */}
        <section className="border-t-2 border-[#9A3412] pt-4 bg-[#FFFFFF] p-6 rounded border border-[#E7E2DA]">
          <h2 className="text-base sm:text-lg font-serif font-semibold text-[#1C1917] mb-2">
            3. Qué no permite concluir
          </h2>
          <p className="text-xs sm:text-sm text-[#44403C] leading-relaxed">
            {evidence.limitations}
          </p>
        </section>

        {/* Section 4: Cómo lo utilizamos en el proyecto */}
        <section className="border-t-2 border-[#78716C] pt-4 bg-[#FAF7F2] p-6 rounded border border-[#E7E2DA]">
          <h2 className="text-base sm:text-lg font-serif font-semibold text-[#1C1917] mb-2">
            4. Cómo lo utilizamos en el proyecto
          </h2>
          <p className="text-xs sm:text-sm text-[#44403C] leading-relaxed">
            {evidence.usedFor}
          </p>
        </section>
      </div>

      {/* Fuente original & Temas asociados */}
      <div className="pt-6 border-t border-[#E8E2D7] grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
        <div>
          <h3 className="font-semibold text-[#1C1917] uppercase tracking-wider mb-2">
            Fuente original
          </h3>
          <SourceLink
            title={`${evidence.authors} (${evidence.year}). ${evidence.title}. ${evidence.publisher}.`}
            url={evidence.url}
            doi={evidence.doi}
          />
        </div>

        <div>
          <h3 className="font-semibold text-[#1C1917] uppercase tracking-wider mb-2">
            Temas relacionados
          </h3>
          <div className="flex flex-wrap gap-2">
            {relatedTopics.map((topic) => (
              <Link
                key={topic.slug}
                to={`/temas/${topic.slug}`}
                className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#F4EFEA] hover:bg-[#EAE4D9] text-[#1C1917] rounded border border-[#DDD5C7] transition-colors"
              >
                <Layers className="w-3 h-3 text-[#9A3412]" />
                <span>{topic.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Back button */}
      <div className="pt-6 border-t border-[#E8E2D7] flex items-center justify-between">
        <Link
          to="/evidencia"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#57534E] hover:text-[#1C1917] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Volver al índice de evidencia</span>
        </Link>
      </div>
    </div>
  );
}
