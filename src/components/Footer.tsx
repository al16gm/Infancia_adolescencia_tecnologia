import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="border-t border-[#E5DFD5] bg-[#F4EFEA] text-[#57534E] text-xs pt-12 pb-14 mt-20 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-10 border-b border-[#E0D8CB]">
          {/* Col 1: Brand & Philosophy */}
          <div className="md:col-span-6 space-y-3">
            <h2 className="font-serif text-lg sm:text-xl font-medium text-[#1C1917] tracking-tight">
              La generación que aprendió a preguntarle a una máquina
            </h2>
            <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed max-w-md">
              Infancia, adolescencia y tecnología sin alarmismo ni ingenuidad. Un proyecto editorial para construir criterio antes que control.
            </p>
            <div className="pt-2 text-xs font-serif italic text-[#78716C]">
              «Rigor por debajo. Sencillez por encima.»
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="md:col-span-3 space-y-2.5">
            <div className="text-xs uppercase tracking-wider font-semibold text-[#1C1917]">
              Explorar
            </div>
            <ul className="space-y-2">
              <li>
                <Link to="/temas" className="hover:text-[#1C1917] transition-colors">
                  Los 11 temas
                </Link>
              </li>
              <li>
                <Link to="/evidencia" className="hover:text-[#1C1917] transition-colors">
                  Fichas de evidencia
                </Link>
              </li>
              <li>
                <Link to="/recursos" className="hover:text-[#1C1917] transition-colors">
                  Herramientas y protocolos
                </Link>
              </li>
              <li>
                <Link to="/actualizaciones" className="hover:text-[#1C1917] transition-colors">
                  Actualizaciones del libro
                </Link>
              </li>
              <li>
                <Link to="/libro" className="hover:text-[#1C1917] transition-colors">
                  Estructura del libro
                </Link>
              </li>
              <li>
                <Link to="/admin" className="hover:text-[#1C1917] transition-colors text-[11px] opacity-80 hover:opacity-100">
                  Panel de interesados (Autor)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Institutional & Support */}
          <div className="md:col-span-3 space-y-2.5">
            <div className="text-xs uppercase tracking-wider font-semibold text-[#1C1917]">
              Proyecto y ayuda
            </div>
            <ul className="space-y-2">
              <li>
                <Link to="/metodologia" className="hover:text-[#1C1917] transition-colors">
                  Metodología
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="hover:text-[#1C1917] transition-colors">
                  Sobre el proyecto
                </Link>
              </li>
              <li>
                <Link to="/ayuda" className="hover:text-[#9A3412] font-medium transition-colors">
                  Ayuda urgente (España)
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="hover:text-[#1C1917] transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <Link to="/privacidad" className="hover:text-[#1C1917] transition-colors">
                  Política de privacidad
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#78716C]">
          <div>
            © 2026 Alejandro García Monteagudo. Todos los derechos reservados.
          </div>
          <div className="font-serif italic text-sm text-[#1C1917]">
            Criterio antes que control.
          </div>
        </div>
      </div>
    </footer>
  );
}
