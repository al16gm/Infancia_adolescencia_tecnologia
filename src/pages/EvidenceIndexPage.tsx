import React, { useState, useMemo } from 'react';
import { EVIDENCE_ITEMS } from '../data/evidence';
import { TOPICS } from '../data/topics';
import { EvidenceCard } from '../components/EvidenceCard';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SeoHelmet } from '../components/SeoHelmet';
import { LastReviewed } from '../components/LastReviewed';
import { EmptyState } from '../components/EmptyState';
import { EvidenceLevel } from '../types';
import { Search, Filter, RotateCcw } from 'lucide-react';

export function EvidenceIndexPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [selectedStudyType, setSelectedStudyType] = useState('all');
  const [showFiltersMobile, setShowFiltersMobile] = useState(false);

  // Distinct study types
  const studyTypes = useMemo(() => {
    const set = new Set<string>();
    EVIDENCE_ITEMS.forEach((e) => set.add(e.studyType));
    return Array.from(set);
  }, []);

  const filteredEvidence = useMemo(() => {
    return EVIDENCE_ITEMS.filter((item) => {
      // Topic filter
      if (selectedTopic !== 'all' && !item.topics.includes(selectedTopic)) {
        return false;
      }
      // Level filter
      if (selectedLevel !== 'all' && item.evidenceLevel !== selectedLevel) {
        return false;
      }
      // Study type filter
      if (selectedStudyType !== 'all' && item.studyType !== selectedStudyType) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesTitle = item.title.toLowerCase().includes(query);
        const matchesFindings = item.mainFindings.toLowerCase().includes(query);
        const matchesStudied = item.whatItStudied.toLowerCase().includes(query);
        const matchesUsed = item.usedFor.toLowerCase().includes(query);
        if (!matchesTitle && !matchesFindings && !matchesStudied && !matchesUsed) {
          return false;
        }
      }
      return true;
    });
  }, [selectedTopic, selectedLevel, selectedStudyType, searchQuery]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedTopic('all');
    setSelectedLevel('all');
    setSelectedStudyType('all');
  };

  const hasActiveFilters =
    selectedTopic !== 'all' ||
    selectedLevel !== 'all' ||
    selectedStudyType !== 'all' ||
    searchQuery.trim().length > 0;

  return (
    <div className="max-w-6xl mx-auto space-y-10">
      <SeoHelmet
        title="Evidencia"
        description="Fichas de evidencia científica y bibliográfica: qué sabemos, qué no permite concluir cada estudio y cuánto respaldo empírico tiene cada afirmación."
        path="/evidencia"
      />

      <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
        <Breadcrumbs items={[{ label: 'Evidencia' }]} />
        <LastReviewed date="1 de octubre de 2026" />
      </div>

      {/* Header */}
      <div className="max-w-3xl">
        <div className="text-xs uppercase tracking-widest text-[#1E3A8A] font-semibold mb-2">
          Repositorio de fuentes y contraste
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#1C1917] tracking-tight leading-tight mb-4">
          Detrás de una afirmación debería haber algo más que una frase convincente
        </h1>
        <div className="text-base sm:text-lg text-[#57534E] leading-relaxed space-y-3">
          <p>
            Esta sección reúne las principales fuentes utilizadas para construir el proyecto. No pretende convertir a cada lector en investigador, sino permitir comprobar con transparencia de dónde sale cada afirmación y cuánto respaldo empírico tiene.
          </p>
          <p className="text-xs sm:text-sm text-[#78716C] italic">
            Diferenciamos de manera explícita entre evidencia robusta, moderada, emergente y recomendaciones prudenciales.
          </p>
        </div>
      </div>

      {/* Search & Filters Controls */}
      <div className="bg-[#FFFFFF] border border-[#E7E2DA] p-4 sm:p-5 rounded space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-[#A8A29E] absolute left-3.5 top-1/2 -translate-y-1/2" aria-hidden="true" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar en el contenido de los estudios..."
              className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-[#FAF8F5] border border-[#D6CEBE] rounded text-[#1C1917] placeholder:text-[#A8A29E] focus:outline-none focus:border-[#1C1917]"
            />
          </div>

          {/* Toggle filter mobile */}
          <button
            type="button"
            onClick={() => setShowFiltersMobile((prev) => !prev)}
            className="sm:hidden flex items-center justify-center gap-2 px-4 py-2 text-xs font-medium text-[#1C1917] bg-[#F2EDE4] rounded border border-[#DDD5C7]"
          >
            <Filter className="w-3.5 h-3.5" />
            <span>Filtros {hasActiveFilters && '(activos)'}</span>
          </button>
        </div>

        {/* Filter Dropdowns */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 ${
            showFiltersMobile ? 'block' : 'hidden sm:grid'
          }`}
        >
          {/* Filter: Topic */}
          <div>
            <label htmlFor="filter-topic" className="block text-[11px] font-medium text-[#78716C] uppercase mb-1">
              Tema
            </label>
            <select
              id="filter-topic"
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="w-full px-3 py-1.5 text-xs bg-[#FAF8F5] border border-[#D6CEBE] rounded text-[#1C1917] focus:outline-none focus:border-[#1C1917]"
            >
              <option value="all">Todos los temas</option>
              {TOPICS.map((t) => (
                <option key={t.slug} value={t.slug}>
                  {t.title}
                </option>
              ))}
            </select>
          </div>

          {/* Filter: Level */}
          <div>
            <label htmlFor="filter-level" className="block text-[11px] font-medium text-[#78716C] uppercase mb-1">
              Nivel de evidencia
            </label>
            <select
              id="filter-level"
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="w-full px-3 py-1.5 text-xs bg-[#FAF8F5] border border-[#D6CEBE] rounded text-[#1C1917] focus:outline-none focus:border-[#1C1917]"
            >
              <option value="all">Todos los niveles</option>
              <option value="robusta">Evidencia robusta</option>
              <option value="moderada">Evidencia moderada</option>
              <option value="emergente">Evidencia emergente</option>
              <option value="prudencial">Recomendación prudencial</option>
            </select>
          </div>

          {/* Filter: Study Type */}
          <div>
            <label htmlFor="filter-study-type" className="block text-[11px] font-medium text-[#78716C] uppercase mb-1">
              Tipo de estudio
            </label>
            <select
              id="filter-study-type"
              value={selectedStudyType}
              onChange={(e) => setSelectedStudyType(e.target.value)}
              className="w-full px-3 py-1.5 text-xs bg-[#FAF8F5] border border-[#D6CEBE] rounded text-[#1C1917] focus:outline-none focus:border-[#1C1917]"
            >
              <option value="all">Cualquier tipo de estudio</option>
              {studyTypes.map((st) => (
                <option key={st} value={st}>
                  {st}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Reset button if filters active */}
        {hasActiveFilters && (
          <div className="flex items-center justify-between pt-2 border-t border-[#F2ECE1] text-xs">
            <span className="text-[#78716C]">
              Mostrando {filteredEvidence.length} de {EVIDENCE_ITEMS.length} referencias
            </span>
            <button
              type="button"
              onClick={resetFilters}
              className="inline-flex items-center gap-1 text-[#9A3412] hover:underline font-medium"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Limpiar filtros</span>
            </button>
          </div>
        )}
      </div>

      {/* List of Evidence */}
      {filteredEvidence.length === 0 ? (
        <EmptyState
          icon="search"
          title="No hay estudios que coincidan con estos filtros"
          description="Prueba a relajar los criterios o busca con términos más generales."
          actionText="Ver toda la evidencia"
          actionHref="/evidencia"
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredEvidence.map((evidence) => (
            <EvidenceCard key={evidence.slug} evidence={evidence} />
          ))}
        </div>
      )}
    </div>
  );
}
