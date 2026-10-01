import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { BookInterestForm } from '../components/BookInterestForm';
import { SeoHelmet } from '../components/SeoHelmet';
import { BookOpen, ShieldCheck } from 'lucide-react';

export function BookInterestPage() {
  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <SeoHelmet
        title="Todavía no está disponible — Registro previo"
        description="Estamos terminando La generación que aprendió a preguntarle a una máquina. Déjanos tu correo para avisarte en cuanto pueda comprarse."
        path="/libro/avisame"
      />

      <Breadcrumbs
        items={[
          { label: 'El libro', href: '/libro' },
          { label: 'Aviso de disponibilidad' },
        ]}
      />

      {/* Main Container */}
      <div className="bg-[#FFFFFF] border border-[#D6CEBE] rounded p-6 sm:p-10 shadow-xs text-left">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#9A3412] font-semibold mb-2">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Proyecto editorial en preparación</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-serif font-medium text-[#1C1917] tracking-tight leading-tight mb-4">
          Todavía no está disponible
        </h1>

        <div className="text-xs sm:text-sm text-[#57534E] leading-relaxed space-y-3 mb-8 border-b border-[#E7E2DA] pb-6">
          <p>
            Gracias por querer leer <strong className="text-[#1C1917]">La generación que aprendió a preguntarle a una máquina</strong>.
          </p>
          <p>
            Estamos concluyendo la fase de edición y el libro todavía no puede comprarse en librerías ni plataformas.
          </p>
          <p>
            Si quieres que te avisemos en cuanto esté disponible, déjanos tu correo electrónico y cuéntanos brevemente qué impresión te ha dado el proyecto hasta el momento.
          </p>
        </div>

        {/* The interest form */}
        <BookInterestForm />

        <div className="mt-8 pt-6 border-t border-[#F2ECE1] flex items-start gap-2.5 text-xs text-[#78716C]">
          <ShieldCheck className="w-4 h-4 text-[#2D4A3E] shrink-0 mt-0.5" />
          <p>
            Tus datos se utilizarán exclusivamente para enviarte un único correo cuando el libro se publique. No vendemos datos ni enviamos boletines publicitarios automáticos.
          </p>
        </div>
      </div>
    </div>
  );
}
