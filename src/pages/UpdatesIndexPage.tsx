import React, { useState } from 'react';
import { UPDATES } from '../data/updates';
import { UpdateCard } from '../components/UpdateCard';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { LastReviewed } from '../components/LastReviewed';
import { EmptyState } from '../components/EmptyState';
import { SeoHelmet } from '../components/SeoHelmet';

export function UpdatesIndexPage() {
  const [selectedArea, setSelectedArea] = useState<string>('all');

  const areas = [
    { id: 'all', label: 'Todas las áreas' },
    { id: 'legislación', label: 'Legislación' },
    { id: 'redes y edad', label: 'Redes y edad' },
    { id: 'móviles escolares', label: 'Móviles escolares' },
    { id: 'IA educativa', label: 'IA educativa' },
    { id: 'IA emocional', label: 'IA emocional' },
    { id: 'vídeo corto', label: 'Vídeo corto' },
    { id: 'recursos', label: 'Recursos' },
  ];

  const filteredUpdates = selectedArea === 'all'
    ? UPDATES
    : UPDATES.filter((u) => u.area === selectedArea);

  return (
    <div className="max-w-5xl mx-auto space-y-10">
      <SeoHelmet
        title="Actualizaciones del proyecto"
        description="La capa viva del libro: cambios legislativos, evaluaciones de políticas escolares, nuevos hallazgos e hitos de inteligencia artificial."
        path="/actualizaciones"
      />

      <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
        <Breadcrumbs items={[{ label: 'Actualizaciones' }]} />
        <LastReviewed date="1 de octubre de 2026" />
      </div>

      {/* Header */}
      <header className="max-w-3xl space-y-4">
        <div className="text-xs uppercase tracking-widest text-[#9A3412] font-semibold">
          La capa viva del libro impreso
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#1C1917] tracking-tight leading-tight">
          Lo que cambia después de imprimir un libro
        </h1>
        <div className="text-base sm:text-lg text-[#57534E] leading-relaxed space-y-3">
          <p>
            Algunas conclusiones envejecen despacio. Otras no.
          </p>
          <p>
            Publicaremos aquí únicamente cambios que modifiquen de forma relevante alguna conclusión, recurso o recomendación del libro: leyes aprobadas, sentencias clave, regulaciones escolares, avances sustanciales en IA o evaluaciones rigurosas de políticas públicas.
          </p>
        </div>
      </header>

      {/* Area Filter Buttons (Segmented Controls) */}
      <div className="flex flex-wrap gap-2 pt-2 border-b border-[#E8E2D7] pb-4">
        {areas.map((area) => (
          <button
            key={area.id}
            type="button"
            onClick={() => setSelectedArea(area.id)}
            className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap ${
              selectedArea === area.id
                ? 'bg-[#1C1917] text-white shadow-xs'
                : 'bg-[#F2EDE4] text-[#57534E] hover:bg-[#E5DFD4] hover:text-[#1C1917]'
            }`}
          >
            {area.label}
          </button>
        ))}
      </div>

      {/* Updates List or EmptyState */}
      {filteredUpdates.length === 0 ? (
        <EmptyState
          title="Todavía no hay actualizaciones posteriores a esta edición"
          description="Última revisión general del proyecto: 1 de octubre de 2026. Todas las recomendaciones vigentes se encuentran consolidadas en los capítulos del libro y en las páginas temáticas de esta web."
          actionText="Explorar temas"
          actionHref="/temas"
        />
      ) : (
        <div className="space-y-6">
          {filteredUpdates.map((update) => (
            <UpdateCard key={update.slug} update={update} />
          ))}
        </div>
      )}
    </div>
  );
}
