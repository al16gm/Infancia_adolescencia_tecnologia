import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SeoHelmet } from '../components/SeoHelmet';
import { ArrowRight, BookOpen, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <SeoHelmet
        title="Sobre el proyecto — Entre el pánico y el «no pasa nada»"
        description="La filosofía editorial de La generación que aprendió a preguntarle a una máquina: rigor, serenidad y autonomía digital de los 6 a los 18 años."
        path="/sobre"
      />

      <Breadcrumbs items={[{ label: 'Sobre el proyecto' }]} />

      {/* Header */}
      <header className="border-b border-[#E8E2D7] pb-8">
        <div className="text-xs uppercase tracking-widest text-[#9A3412] font-semibold mb-2">
          Manifiesto editorial
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#1C1917] tracking-tight leading-tight mb-5">
          Entre el pánico y el «no pasa nada» hay bastante espacio
        </h1>
        <p className="text-base sm:text-lg text-[#57534E] leading-relaxed max-w-3xl">
          El debate social sobre infancia, adolescencia y tecnología parece atrapado en dos trincheras sordas: el catastrofismo apocalíptico que culpa a las pantallas de todos los males de nuestra época y la complacencia ingenua de quienes aseguran que las nuevas generaciones son «nativas digitales» y sabrán autorregularse solas.
        </p>
      </header>

      {/* Los dos extremos */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
        <div className="p-6 bg-[#FAF5F0] border border-[#EBE2D5] rounded space-y-3">
          <div className="text-xs uppercase tracking-wider font-semibold text-[#9A3412]">
            El extremo del pánico
          </div>
          <h2 className="text-lg font-serif font-semibold text-[#1C1917]">
            «La tecnología está destruyendo a toda una generación»
          </h2>
          <p className="text-[#57534E] leading-relaxed">
            Presenta a los menores como víctimas indefensas de un lavado cerebral irreversible, ignora cualquier uso enriquecedor o creativo y promueve una prohibición permanente que deja a los jóvenes desarmados en cuanto cumplen dieciocho años.
          </p>
        </div>

        <div className="p-6 bg-[#F2F7F4] border border-[#DAE8DF] rounded space-y-3">
          <div className="text-xs uppercase tracking-wider font-semibold text-[#2D4A3E]">
            El extremo de la ingenuidad
          </div>
          <h2 className="text-lg font-serif font-semibold text-[#1C1917]">
            «Son nativos digitales, ya aprenderán a su ritmo»
          </h2>
          <p className="text-[#57534E] leading-relaxed">
            Confunde la habilidad mecánica para pulsar iconos con madurez moral y autorregulación, desatiende la voracidad extractiva de los algoritmos de atención comercial y abandona a los menores sin acompañamiento adulto.
          </p>
        </div>
      </section>

      {/* Una pantalla no es una actividad */}
      <section className="bg-[#FFFFFF] border border-[#E7E2DA] p-6 sm:p-8 rounded space-y-4">
        <h2 className="text-2xl font-serif font-medium text-[#1C1917]">
          Una pantalla no es una actividad
        </h2>
        <div className="text-xs sm:text-sm text-[#44403C] leading-relaxed space-y-3">
          <p>
            No hablamos de «tiempo de coche» o de «tiempo de papel» para juzgar si alguien conduce con prudencia o si lee poesía o basura. Con los dispositivos ocurre exactamente lo mismo: una pantalla es un soporte físico que puede albergar una conversación íntima entre dos amigos, una sesión de programación creativa, un carrusel interminable de fotos retocadas o un chantaje anónimo.
          </p>
          <p>
            Juzgar la experiencia únicamente por el cronómetro es el camino más rápido para perder la conversación con ellos.
          </p>
        </div>
      </section>

      {/* De 6 a 18 años: Protección -> Acompañamiento -> Autonomía */}
      <section className="border-l-4 border-[#9A3412] pl-6 py-2 my-6">
        <div className="text-xs uppercase tracking-widest text-[#9A3412] font-semibold mb-1">
          La trayectoria educativa
        </div>
        <div className="text-xl sm:text-2xl font-serif font-medium text-[#1C1917] tracking-tight">
          Protección → Acompañamiento → Autonomía
        </div>
        <p className="text-xs sm:text-sm text-[#57534E] mt-2 leading-relaxed max-w-2xl">
          El objetivo nunca puede ser vigilar o controlar indefinidamente. El objetivo es aprovechar los años en los que todavía estamos cerca para construir criterio propio antes de que tengan que decidir solos.
        </p>
      </section>

      {/* El libro vs la web */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-serif font-medium text-[#1C1917] mb-1">
            El libro y la web: dos formatos complementarios
          </h2>
          <p className="text-xs sm:text-sm text-[#78716C]">
            Cada soporte cumple una función específica e insustituible en el proyecto:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs sm:text-sm">
          <div className="p-6 bg-[#FFFFFF] border border-[#E7E2DA] rounded space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#9A3412]">
              <BookOpen className="w-4 h-4" />
              <span>El libro impreso</span>
            </div>
            <p className="text-[#1C1917] font-serif text-base font-semibold">
              El libro explica, profundiza y estructura el pensamiento.
            </p>
            <p className="text-[#57534E] leading-relaxed">
              Ofrece una lectura reposada, ordenada y libre de hipervínculos para sentarse a pensar el modelo educativo con perspectiva a largo plazo.
            </p>
          </div>

          <div className="p-6 bg-[#FFFFFF] border border-[#E7E2DA] rounded space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1E3A8A]">
              <Globe className="w-4 h-4" />
              <span>La web viva</span>
            </div>
            <p className="text-[#1C1917] font-serif text-base font-semibold">
              La web documenta, actualiza y ayuda de forma inmediata.
            </p>
            <p className="text-[#57534E] leading-relaxed">
              Mantiene al día las fuentes, proporciona herramientas descargables, actualiza cambios legislativos y ofrece teléfonos de auxilio urgente sin coste.
            </p>
          </div>
        </div>
      </section>

      {/* La regla de oro editorial */}
      <section className="p-6 sm:p-8 bg-[#FAF8F5] border border-[#D6CEBE] rounded space-y-3">
        <h2 className="text-lg font-serif font-semibold text-[#1C1917]">
          Nuestra regla inquebrantable de honestidad
        </h2>
        <ul className="space-y-2 text-xs sm:text-sm text-[#44403C]">
          <li className="flex items-start gap-2">
            <span className="text-[#9A3412] font-bold">•</span>
            <span>Cuando una recomendación es prudencial, la llamamos prudencial.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#9A3412] font-bold">•</span>
            <span>Cuando un estudio es preliminar o con limitaciones, importa decirlo expresamente.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#9A3412] font-bold">•</span>
            <span>Y cuando la ciencia todavía no tiene una respuesta definitiva: <strong className="text-[#1C1917]">todavía no lo sabemos</strong>.</span>
          </li>
        </ul>
      </section>

      {/* Bottom link */}
      <div className="pt-4 border-t border-[#E8E2D7] flex items-center justify-between">
        <Link
          to="/temas"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1C1917] hover:text-[#9A3412] transition-colors"
        >
          <span>Explorar los once temas del proyecto</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
