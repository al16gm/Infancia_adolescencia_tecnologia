import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { getEvidenceBySlug, evidenceUrl, DOI_BASE } from '../data/evidence';
import { TOPICS } from '../data/topics';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { EvidenceBadge } from '../components/EvidenceBadge';
import { LastReviewed } from '../components/LastReviewed';
import { ShareButton } from '../components/ShareButton';
import { SeoHelmet } from '../components/SeoHelmet';
import { ArrowLeft, ExternalLink, Layers, Scale, Database, BookOpen, AlertCircle } from 'lucide-react';

export function EvidenceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const item = slug ? getEvidenceBySlug(slug) : undefined;

  if (!item) {
    return <Navigate to="/404" replace />;
  }

  const relatedTopics = TOPICS.filter((t) => item.topics.includes(t.slug));
  const authorsList = Array.isArray(item.authors) ? item.authors.join(', ') : item.authors;
  const externalSourceUrl = evidenceUrl(item);

  return (
    <div className="max-w-4xl mx-auto space-y-10">
      <SeoHelmet
        title={`Ficha documental: ${item.title}`}
        description={`${item.title}. ${item.mainFindings}`}
        path={`/evidencia/${item.slug}`}
      />

      <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
        <Breadcrumbs
          items={[
            { label: 'Evidencia', href: '/evidencia' },
            { label: item.title },
          ]}
        />
        <div className="flex items-center gap-3">
          <ShareButton title={item.title} />
          <LastReviewed date={item.lastReviewed || '1 de octubre de 2026'} />
        </div>
      </div>

      {/* Header */}
      <header className="border-b border-[#E8E2D7] pb-8 space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <EvidenceBadge level={item.evidenceLevel} sourceRole={item.sourceRole} />
          <span className="text-xs text-[#78716C] font-mono">
            REF: {item.id}
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-semibold text-[#1C1917] tracking-tight leading-snug">
          {item.title}
        </h1>

        <div className="text-xs sm:text-sm text-[#57534E] flex flex-wrap items-center gap-y-1 gap-x-3">
          <span><strong>Autores:</strong> {authorsList}</span>
          <span aria-hidden="true">·</span>
          <span><strong>Año:</strong> {item.year}</span>
          <span aria-hidden="true">·</span>
          <span><strong>Publicación / Entidad:</strong> {item.publisher}</span>
        </div>
      </header>

      {/* Context note for POLICY sources */}
      {item.sourceRole === 'policy' && (
        <div className="p-4 bg-[#F8FAFC] border-l-4 border-[#4338CA] rounded-r text-xs sm:text-sm text-[#334155] space-y-1">
          <div className="flex items-center gap-1.5 font-semibold text-[#1E1B4B]">
            <Scale className="w-4 h-4 text-[#4338CA]" />
            <span>Documento de normativa o política pública</span>
          </div>
          <p className="leading-relaxed">
            Esta fuente describe una política, proyecto legislativo o marco regulatorio vigente o en tramitación. Documenta qué directrices oficiales existen, no una demostración experimental o científica de que la medida sea necesariamente eficaz.
          </p>
        </div>
      )}

      {/* Context note for OFFICIAL_DATA sources */}
      {item.sourceRole === 'official_data' && (
        <div className="p-4 bg-[#F0FDFA] border-l-4 border-[#0F766E] rounded-r text-xs sm:text-sm text-[#134E4A] space-y-1">
          <div className="flex items-center gap-1.5 font-semibold text-[#115E59]">
            <Database className="w-4 h-4 text-[#0F766E]" />
            <span>Estadística o evaluación oficial de datos</span>
          </div>
          <p className="leading-relaxed">
            Esta fuente proporciona indicadores demográficos, encuestas poblacionales o evaluaciones oficiales de seguimiento. Describe la situación real o patrones de uso observados sin extrapolar relaciones causales indebidas.
          </p>
        </div>
      )}

      {/* Technical Spec Sheet */}
      <div className="bg-[#FFFFFF] border border-[#E7E2DA] rounded p-6 sm:p-7 shadow-xs">
        <h2 className="text-xs uppercase tracking-widest text-[#78716C] font-semibold mb-4">
          Ficha técnica del documento
        </h2>

        <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-xs">
          <div>
            <dt className="text-[#78716C] font-medium mb-1">Tipo de estudio / diseño</dt>
            <dd className="font-semibold text-[#1C1917]">{item.studyType}</dd>
          </div>
          {item.population && (
            <div>
              <dt className="text-[#78716C] font-medium mb-1">Población evaluada</dt>
              <dd className="font-semibold text-[#1C1917]">{item.population}</dd>
            </div>
          )}
          {item.ageRange && (
            <div>
              <dt className="text-[#78716C] font-medium mb-1">Rango de edad</dt>
              <dd className="font-semibold text-[#1C1917]">{item.ageRange}</dd>
            </div>
          )}
          {item.sampleSize && (
            <div>
              <dt className="text-[#78716C] font-medium mb-1">Muestra analizada</dt>
              <dd className="font-semibold text-[#1C1917] font-mono">{item.sampleSize}</dd>
            </div>
          )}
        </dl>
      </div>

      {/* The 4 Core Sections */}
      <div className="space-y-8">
        {/* Section 1: Qué estudió */}
        <section className="border-t-2 border-[#1E3A8A] pt-4 bg-[#FFFFFF] p-6 rounded border border-[#E7E2DA]">
          <h2 className="text-base sm:text-lg font-serif font-semibold text-[#1C1917] mb-2">
            1. Qué estudió
          </h2>
          <p className="text-xs sm:text-sm text-[#44403C] leading-relaxed">
            {item.whatItStudied}
          </p>
        </section>

        {/* Section 2: Qué encontró */}
        <section className="border-t-2 border-[#2D4A3E] pt-4 bg-[#FFFFFF] p-6 rounded border border-[#E7E2DA]">
          <h2 className="text-base sm:text-lg font-serif font-semibold text-[#1C1917] mb-2">
            2. Qué encontró
          </h2>
          <p className="text-xs sm:text-sm text-[#44403C] leading-relaxed">
            {item.mainFindings}
          </p>
        </section>

        {/* Section 3: Qué no permite concluir */}
        <section className="border-t-2 border-[#9A3412] pt-4 bg-[#FFFFFF] p-6 rounded border border-[#E7E2DA]">
          <h2 className="text-base sm:text-lg font-serif font-semibold text-[#1C1917] mb-2">
            3. Qué no permite concluir
          </h2>
          <p className="text-xs sm:text-sm text-[#44403C] leading-relaxed">
            {item.limitations}
          </p>
        </section>

        {/* Section 4: Cómo lo utilizamos */}
        <section className="border-t-2 border-[#78716C] pt-4 bg-[#FAF7F2] p-6 rounded border border-[#E7E2DA]">
          <h2 className="text-base sm:text-lg font-serif font-semibold text-[#1C1917] mb-2">
            4. Cómo lo utilizamos en el proyecto
          </h2>
          <p className="text-xs sm:text-sm text-[#44403C] leading-relaxed">
            {item.usedFor}
          </p>
        </section>
      </div>

      {/* Referencia bibliográfica formal y DOI */}
      <div className="bg-[#FFFFFF] border border-[#E7E2DA] p-6 rounded space-y-4">
        <div>
          <h3 className="text-xs font-semibold text-[#78716C] uppercase tracking-wider mb-2">
            Referencia bibliográfica
          </h3>
          <p className="text-xs sm:text-sm font-serif italic text-[#1C1917] bg-[#FAF8F5] p-3 rounded border border-[#EDE5DA] select-all">
            {item.citation}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-[#F2ECE1] text-xs">
          {item.doi && (
            <div className="flex items-center gap-1.5 text-[#57534E]">
              <span className="font-semibold text-[#1C1917]">DOI:</span>
              <a
                href={`${DOI_BASE}${item.doi}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1E3A8A] font-mono hover:underline"
              >
                {item.doi}
              </a>
            </div>
          )}

          {externalSourceUrl && (
            <a
              href={externalSourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#1C1917] text-white hover:bg-[#333333] rounded font-medium transition-colors"
            >
              <span>Acceder a la fuente original</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>

      {/* Temas asociados */}
      <div className="pt-6 border-t border-[#E8E2D7] space-y-3">
        <h3 className="font-semibold text-[#1C1917] text-xs uppercase tracking-wider">
          Temas del libro relacionados con esta fuente ({relatedTopics.length})
        </h3>
        <div className="flex flex-wrap gap-2">
          {relatedTopics.map((topic) => (
            <Link
              key={topic.slug}
              to={`/temas/${topic.slug}`}
              className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#F4EFEA] hover:bg-[#EAE4D9] text-[#1C1917] rounded border border-[#DDD5C7] text-xs transition-colors"
            >
              <Layers className="w-3 h-3 text-[#9A3412]" />
              <span>{topic.title}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Internal review note (only shown subtly if reviewNote exists) */}
      {item.reviewNote && (
        <div className="text-[11px] text-[#A8A29E] italic border-t border-[#F2ECE1] pt-2">
          Nota editorial: {item.reviewNote}
        </div>
      )}

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
