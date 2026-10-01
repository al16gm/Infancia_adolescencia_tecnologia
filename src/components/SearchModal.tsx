import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search as SearchIcon, X, ArrowRight, BookOpen, FileText, CheckSquare, Sparkles } from 'lucide-react';
import { searchAll, SearchResults } from '../lib/search';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResults>({
    topics: [],
    evidence: [],
    resources: [],
    updates: [],
    totalMatches: 0,
  });
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => inputRef.current?.focus(), 60);
    } else {
      document.body.style.overflow = '';
      setQuery('');
      setResults({ topics: [], evidence: [], resources: [], updates: [], totalMatches: 0 });
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    setResults(searchAll(val));
  };

  const handleSelect = (path: string) => {
    onClose();
    navigate(path);
  };

  if (!isOpen) return null;

  const hasSearched = query.trim().length >= 2;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="search-dialog-title"
      className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 sm:pt-20 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#1C1917]/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="relative w-full max-w-2xl bg-[#FAF8F5] border border-[#D6CEBE] rounded-lg shadow-2xl overflow-hidden z-10">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-[#E7E2DA] bg-[#FFFFFF]">
          <SearchIcon className="w-4 h-4 text-[#78716C] shrink-0" aria-hidden="true" />
          <input
            ref={inputRef}
            type="search"
            id="search-dialog-title"
            value={query}
            onChange={handleSearchChange}
            placeholder="Buscar por tema, evidencia, recurso o actualización..."
            className="w-full px-3 py-1 text-sm bg-transparent border-none text-[#1C1917] placeholder:text-[#A8A29E] focus:outline-none"
            aria-label="Buscar en el proyecto"
          />
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery('');
                setResults({ topics: [], evidence: [], resources: [], updates: [], totalMatches: 0 });
                inputRef.current?.focus();
              }}
              className="p-1 text-[#A8A29E] hover:text-[#1C1917] rounded"
              aria-label="Borrar búsqueda"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="ml-2 text-xs font-mono text-[#78716C] px-2 py-1 bg-[#F4EFEA] hover:bg-[#EAE4D9] rounded border border-[#DDD5C7] transition-colors"
          >
            ESC
          </button>
        </div>

        {/* Results Area */}
        <div className="max-h-[65vh] overflow-y-auto p-4 sm:p-6 space-y-6">
          {!hasSearched ? (
            <div className="text-center py-8 text-[#78716C] text-xs">
              Escribe al menos dos letras para explorar temas, estudios y recursos.
            </div>
          ) : results.totalMatches === 0 ? (
            <div className="text-center py-8">
              <p className="text-sm font-serif text-[#1C1917] mb-1">
                No se encontraron resultados para «{query}»
              </p>
              <p className="text-xs text-[#78716C]">
                Prueba con términos más generales como «sueño», «móvil», «atención», «IA» o «escuela».
              </p>
            </div>
          ) : (
            <>
              {/* Temas */}
              {results.topics.length > 0 && (
                <div>
                  <h3 className="text-xs uppercase tracking-wider font-semibold text-[#8C827A] mb-2 px-1">
                    Temas ({results.topics.length})
                  </h3>
                  <div className="divide-y divide-[#EFEAE1] border border-[#E7E2DA] rounded bg-[#FFFFFF] overflow-hidden">
                    {results.topics.map((topic) => (
                      <button
                        key={topic.slug}
                        type="button"
                        onClick={() => handleSelect(`/temas/${topic.slug}`)}
                        className="w-full p-3 sm:p-3.5 text-left hover:bg-[#F9F7F3] transition-colors flex items-center justify-between gap-3 group"
                      >
                        <div>
                          <div className="text-sm font-serif font-semibold text-[#1C1917] group-hover:text-[#9A3412]">
                            {topic.title}
                          </div>
                          <div className="text-xs text-[#78716C] line-clamp-1 mt-0.5">
                            {topic.subtitle}
                          </div>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-[#A8A29E] group-hover:text-[#9A3412] shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Evidencia */}
              {results.evidence.length > 0 && (
                <div>
                  <h3 className="text-xs uppercase tracking-wider font-semibold text-[#8C827A] mb-2 px-1">
                    Evidencia ({results.evidence.length})
                  </h3>
                  <div className="divide-y divide-[#EFEAE1] border border-[#E7E2DA] rounded bg-[#FFFFFF] overflow-hidden">
                    {results.evidence.map((ev) => (
                      <button
                        key={ev.slug}
                        type="button"
                        onClick={() => handleSelect(`/evidencia/${ev.slug}`)}
                        className="w-full p-3 sm:p-3.5 text-left hover:bg-[#F9F7F3] transition-colors flex items-center justify-between gap-3 group"
                      >
                        <div>
                          <div className="text-xs font-mono text-[#8C827A] mb-0.5">
                            {ev.year} · {ev.studyType}
                          </div>
                          <div className="text-sm font-serif font-medium text-[#1C1917] group-hover:text-[#1E3A8A] line-clamp-1">
                            {ev.title}
                          </div>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-[#A8A29E] group-hover:text-[#1E3A8A] shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Recursos */}
              {results.resources.length > 0 && (
                <div>
                  <h3 className="text-xs uppercase tracking-wider font-semibold text-[#8C827A] mb-2 px-1">
                    Recursos ({results.resources.length})
                  </h3>
                  <div className="divide-y divide-[#EFEAE1] border border-[#E7E2DA] rounded bg-[#FFFFFF] overflow-hidden">
                    {results.resources.map((res) => (
                      <button
                        key={res.slug}
                        type="button"
                        onClick={() => handleSelect(res.href)}
                        className="w-full p-3 sm:p-3.5 text-left hover:bg-[#F9F7F3] transition-colors flex items-center justify-between gap-3 group"
                      >
                        <div>
                          <div className="text-sm font-medium text-[#1C1917] group-hover:text-[#9A3412]">
                            {res.title}
                          </div>
                          <div className="text-xs text-[#78716C] line-clamp-1 mt-0.5">
                            {res.description}
                          </div>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-[#A8A29E] group-hover:text-[#9A3412] shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Actualizaciones */}
              {results.updates.length > 0 && (
                <div>
                  <h3 className="text-xs uppercase tracking-wider font-semibold text-[#8C827A] mb-2 px-1">
                    Actualizaciones ({results.updates.length})
                  </h3>
                  <div className="divide-y divide-[#EFEAE1] border border-[#E7E2DA] rounded bg-[#FFFFFF] overflow-hidden">
                    {results.updates.map((up) => (
                      <button
                        key={up.slug}
                        type="button"
                        onClick={() => handleSelect(`/actualizaciones/${up.slug}`)}
                        className="w-full p-3 sm:p-3.5 text-left hover:bg-[#F9F7F3] transition-colors flex items-center justify-between gap-3 group"
                      >
                        <div>
                          <div className="text-xs font-mono text-[#8C827A]">
                            {up.date} · {up.area}
                          </div>
                          <div className="text-sm font-medium text-[#1C1917] group-hover:text-[#9A3412]">
                            {up.title}
                          </div>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-[#A8A29E] group-hover:text-[#9A3412] shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
