import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search as SearchIcon, BookOpen } from 'lucide-react';
import { useBookModal } from '../context/BookModalContext';
import { SearchModal } from './SearchModal';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { openModal: openBookModal } = useBookModal();
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Keyboard shortcut Ctrl+K / Cmd+K for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { label: 'Inicio', href: '/' },
    { label: 'Temas', href: '/temas' },
    { label: 'Evidencia', href: '/evidencia' },
    { label: 'Recursos', href: '/recursos' },
    { label: 'Actualizaciones', href: '/actualizaciones' },
    { label: 'El libro', href: '/libro' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E8E2D7] no-print">
        {/* Skip link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 z-50 px-4 py-2 bg-[#1C1917] text-white text-xs font-medium rounded shadow-md focus:outline-none"
        >
          Saltar al contenido principal
        </a>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
            {/* Zone 1: Wordmark */}
            <div className="flex items-center shrink-0">
              <Link
                to="/"
                className="font-serif text-base sm:text-lg lg:text-xl font-medium tracking-tight text-[#1C1917] hover:text-[#9A3412] transition-colors focus-visible:outline-2 focus-visible:outline-[#1C1917] max-w-[280px] sm:max-w-sm lg:max-w-none truncate"
                title="La generación que aprendió a preguntarle a una máquina"
              >
                La generación que aprendió a preguntarle a una máquina
              </Link>
            </div>

            {/* Zone 2: Desktop Nav */}
            <nav
              aria-label="Navegación principal"
              className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-[#57534E]"
            >
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`transition-colors py-1 relative hover:text-[#1C1917] ${
                      active
                        ? 'text-[#1C1917] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#9A3412]'
                        : ''
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Zone 3: Actions (Search + Buy Book) */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                className="p-2 text-[#57534E] hover:text-[#1C1917] hover:bg-[#F2ECE1] rounded transition-colors focus-visible:outline-2 focus-visible:outline-[#1C1917]"
                aria-label="Buscar en la web (Ctrl+K)"
                title="Buscar (Ctrl+K)"
              >
                <SearchIcon className="w-4 h-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={openBookModal}
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-white bg-[#1C1917] hover:bg-[#333333] active:bg-[#000000] rounded transition-colors whitespace-nowrap shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C1917]"
              >
                <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Comprar el libro</span>
              </button>

              {/* Mobile menu trigger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="lg:hidden p-2 text-[#57534E] hover:text-[#1C1917] hover:bg-[#F2ECE1] rounded transition-colors focus-visible:outline-2 focus-visible:outline-[#1C1917]"
                aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú de navegación'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#E8E2D7] bg-[#FAF8F5] px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top-2 duration-150">
            <nav aria-label="Navegación móvil" className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`px-3 py-2.5 rounded text-sm transition-colors ${
                      active
                        ? 'bg-[#EAE4D9] text-[#1C1917] font-semibold'
                        : 'text-[#57534E] hover:bg-[#F2ECE1] hover:text-[#1C1917]'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="pt-3 border-t border-[#E8E2D7] flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openBookModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-medium text-white bg-[#1C1917] hover:bg-[#333333] rounded transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Comprar el libro</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Global Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
