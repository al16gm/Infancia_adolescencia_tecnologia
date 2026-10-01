import React from 'react';
import { TOPICS } from '../data/topics';
import { TopicCard } from '../components/TopicCard';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SeoHelmet } from '../components/SeoHelmet';
import { BookCTA } from '../components/BookCTA';

export function TopicsIndexPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-12">
      <SeoHelmet
        title="Temas"
        description="No existe un único problema de las pantallas. Explora los 11 ámbitos nucleares: sueño, atención, redes, escuela, videojuegos, ciberacoso e inteligencia artificial."
        path="/temas"
      />

      <Breadcrumbs items={[{ label: 'Temas' }]} />

      {/* Header */}
      <div className="max-w-3xl">
        <div className="text-xs uppercase tracking-widest text-[#9A3412] font-semibold mb-2">
          Guía temática y conceptual
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#1C1917] tracking-tight leading-tight mb-5">
          No existe un único «problema de las pantallas»
        </h1>
        <div className="text-base sm:text-lg text-[#57534E] leading-relaxed space-y-3">
          <p>
            Dormir con el móvil al lado, jugar una partida con amigos, practicar inglés con una IA y pasar una hora comparándose en redes pueden ocurrir delante de una pantalla.
          </p>
          <p className="font-serif italic text-lg text-[#1C1917]">
            No son la misma experiencia.
          </p>
          <p>
            Aquí puedes entrar directamente por la pregunta que te preocupa.
          </p>
        </div>
      </div>

      {/* Grid of 11 Topics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
        {TOPICS.map((topic, index) => (
          <TopicCard key={topic.slug} topic={topic} index={index} />
        ))}
      </div>

      {/* Discrete book CTA */}
      <div className="pt-8">
        <BookCTA />
      </div>
    </div>
  );
}
