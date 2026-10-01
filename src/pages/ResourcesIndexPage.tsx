import React from 'react';
import { RESOURCES } from '../data/resources';
import { ResourceCard } from '../components/ResourceCard';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SeoHelmet } from '../components/SeoHelmet';
import { EmergencyBanner } from '../components/EmergencyBanner';

export function ResourcesIndexPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-12">
      <SeoHelmet
        title="Recursos y herramientas prácticas"
        description="Protocolos rápidos ante incidentes digitales, acuerdo digital familiar imprimible, guía esencial de IA y líneas directas de ayuda en España."
        path="/recursos"
      />

      <Breadcrumbs items={[{ label: 'Recursos' }]} />

      {/* Header */}
      <div className="max-w-3xl">
        <div className="text-xs uppercase tracking-widest text-[#9A3412] font-semibold mb-2">
          Herramientas de acción
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#1C1917] tracking-tight leading-tight mb-4">
          Herramientas para utilizar, no solo para leer
        </h1>
        <p className="text-base sm:text-lg text-[#57534E] leading-relaxed">
          Pautas operativas listas para imprimir o aplicar en casa y en la escuela: protocolos ante incidentes graves, un modelo de acuerdo para anticipar normas y una síntesis práctica sobre inteligencia artificial.
        </p>
      </div>

      {/* Emergency banner shortcut */}
      <EmergencyBanner
        title="¿Necesitas asistencia inmediata por un incidente grave?"
        description="Si hay peligro físico o delito flagrante, llama al 112. Para apoyo especializado ante ciberacoso o sextorsión, contacta con la línea 017 de INCIBE o el 024 para salud mental."
      />

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
        {RESOURCES.map((resource) => (
          <ResourceCard key={resource.slug} resource={resource} />
        ))}
      </div>
    </div>
  );
}
