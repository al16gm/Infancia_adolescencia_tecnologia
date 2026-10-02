import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { BookInterestForm } from '../components/BookInterestForm';
import { SeoHelmet } from '../components/SeoHelmet';
import { BookOpen, ShieldCheck } from 'lucide-react';
import bookCoverImg from '../assets/images/book_cover_front_1790888633952.jpg';

export function BookInterestPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
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
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Form Column */}
          <div className="md:col-span-8 order-2 md:order-1">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#9A3412] font-semibold mb-2">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Proyecto editorial en preparación</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-serif font-medium text-[#1C1917] tracking-tight leading-tight mb-4">
              Todavía no está disponible
            </h1>

            <div className="text-xs sm:text-sm text-[#57534E] leading-relaxed space-y-3 mb-8 border-b border-[#E7E2DA] pb-6">
              <p>
                Gracias por querer leer <strong className="text-[#1C1917]">La generación que aprendió a preguntarle a una máquina</strong> de Alejandro García Monteagudo.
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

          {/* Book Cover Presentation */}
          <div className="md:col-span-4 order-1 md:order-2 flex flex-col items-center justify-center">
            <div className="relative group max-w-[200px] sm:max-w-[240px] transition-transform duration-300 hover:-translate-y-1">
              <div className="absolute -inset-1 bg-gradient-to-b from-[#E2D8C9] to-[#C8BBA8] rounded-lg blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative rounded-md overflow-hidden border border-[#D6CEBE] bg-[#FFFFFF] shadow-xl">
                <img
                  src={bookCoverImg}
                  alt="Portada oficial del libro"
                  className="w-full h-auto object-cover select-none block"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = `${import.meta.env.BASE_URL}book_cover.jpg`;
                  }}
                />
              </div>
            </div>
            <div className="text-center mt-3">
              <span className="text-[10px] font-mono tracking-wider uppercase text-[#78716C]">
                Edición 2026
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
