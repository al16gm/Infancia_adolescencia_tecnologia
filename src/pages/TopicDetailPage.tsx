import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { TOPICS } from '../data/topics';
import { getEvidenceByTopic } from '../data/evidence';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { KnownUnknownBlock } from '../components/KnownUnknownBlock';
import { AgeBands } from '../components/AgeBands';
import { EvidenceCard } from '../components/EvidenceCard';
import { ShareButton } from '../components/ShareButton';
import { LastReviewed } from '../components/LastReviewed';
import { BookCTA } from '../components/BookCTA';
import { SeoHelmet } from '../components/SeoHelmet';
import { ArrowLeft, BookOpen, Layers } from 'lucide-react';

export function TopicDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const topic = TOPICS.find((t) => t.slug === slug);

  if (!topic) {
    return <Navigate to="/404" replace />;
  }

  // Retrieve evidence dynamically from real evidence dataset by topic
  const topicEvidence = getEvidenceByTopic(topic.slug);
  const mainEvidence = topicEvidence.slice(0, 6);

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <SeoHelmet
        title={topic.title}
        description={topic.seoDescription}
        path={`/temas/${topic.slug}`}
      />

      {/* Top utility row: Breadcrumbs + Actions */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
        <Breadcrumbs
          items={[
            { label: 'Temas', href: '/temas' },
            { label: topic.title },
          ]}
        />
        <div className="flex items-center gap-3">
          <ShareButton
            title={`${topic.title} — ${topic.subtitle}`}
            text={topic.seoDescription}
          />
          <LastReviewed date={topic.lastReviewed} />
        </div>
      </div>

      {/* Editorial Header */}
      <header className="border-b border-[#E8E2D7] pb-8">
        {topic.editorialKicker && (
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#9A3412] font-semibold mb-3">
            <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{topic.editorialKicker}</span>
          </div>
        )}

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#1C1917] tracking-tight leading-[1.2] mb-3">
          {topic.title}
        </h1>

        <p className="text-xl sm:text-2xl font-serif italic text-[#57534E] mb-6">
          {topic.subtitle}
        </p>

        <p className="text-base sm:text-lg text-[#33312E] leading-relaxed max-w-3xl">
          {topic.intro}
        </p>
      </header>

      {/* Five Questions Block (if present, like in screens topic) */}
      {topic.fiveQuestions && topic.fiveQuestions.length > 0 && (
        <section className="bg-[#FAF5F0] border border-[#E7DFD5] p-6 sm:p-8 rounded space-y-6">
          <div className="border-b border-[#E0D7C9] pb-3">
            <h2 className="text-lg sm:text-xl font-serif font-semibold text-[#1C1917]">
              Cinco preguntas mejores que «¿cuántas horas?»
            </h2>
            <p className="text-xs sm:text-sm text-[#78716C] mt-1">
              Para evaluar cualquier experiencia digital con criterio antes de juzgarla.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {topic.fiveQuestions.map((q, idx) => (
              <div
                key={idx}
                className="bg-white/90 p-4 rounded border border-[#EDE5DA] flex flex-col justify-start"
              >
                <div className="text-xs font-mono font-semibold text-[#9A3412] mb-1">
                  PREGUNTA {idx + 1}
                </div>
                <h3 className="text-sm font-semibold text-[#1C1917] mb-1.5">
                  {q.question}
                </h3>
                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                  {q.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Key Quote */}
      {topic.keyQuote && (
        <blockquote className="my-8 border-l-2 border-[#9A3412] pl-6 py-2">
          <p className="font-serif italic text-lg sm:text-xl text-[#1C1917] leading-relaxed">
            «{topic.keyQuote}»
          </p>
        </blockquote>
      )}

      {/* What We Know / What We Don't Know / Recommendations */}
      <section>
        <div className="mb-4">
          <h2 className="text-xl sm:text-2xl font-serif font-medium text-[#1C1917]">
            El estado de la evidencia
          </h2>
          <p className="text-xs sm:text-sm text-[#78716C]">
            Separamos con rigor lo que cuenta con respaldo de lo que aún permanece abierto.
          </p>
        </div>

        <KnownUnknownBlock
          whatWeKnow={topic.whatWeKnow}
          whatWeDontKnow={topic.whatWeDontKnow}
          recommendations={topic.recommendations}
        />
      </section>

      {/* Age Guidance */}
      {topic.ageGuidance && topic.ageGuidance.length > 0 && (
        <section className="pt-4">
          <AgeBands
            guidance={topic.ageGuidance}
            title="Cómo cambia el enfoque según la edad"
            subtitle="De los 6 a los 18 años, el camino va desde la selección adulta directa hasta la autonomía responsable."
          />
        </section>
      )}

      {/* Evidencia principal (Requisito 14: entre 3 y 6 entradas y enlace a ver toda) */}
      {mainEvidence.length > 0 && (
        <section className="pt-6 border-t border-[#E8E2D7]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
            <div>
              <h2 className="text-xl font-serif font-medium text-[#1C1917]">
                Evidencia principal
              </h2>
              <p className="text-xs text-[#78716C] mt-0.5">
                Fuentes documentales y estudios clave vinculados a este tema.
              </p>
            </div>
            <Link
              to={`/evidencia?topic=${topic.slug}`}
              className="text-xs text-[#1E3A8A] font-semibold hover:underline underline-offset-2 shrink-0"
            >
              Ver toda la evidencia sobre este tema ({topicEvidence.length} fuentes) →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mainEvidence.map((ev) => (
              <EvidenceCard key={ev.slug} evidence={ev} />
            ))}
          </div>
        </section>
      )}

      {/* En el libro */}
      <section className="pt-4">
        <BookCTA
          variant="compact"
          title={`Profundiza en ${topic.title}`}
          subtitle={`Este tema se desarrolla con mayor detenimiento, casos y matices en ${topic.bookChapter} del libro impreso.`}
        />
      </section>

      {/* Back link */}
      <div className="pt-4 border-t border-[#E8E2D7] flex items-center justify-between">
        <Link
          to="/temas"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#57534E] hover:text-[#1C1917] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Volver al índice de temas</span>
        </Link>
      </div>
    </div>
  );
}
