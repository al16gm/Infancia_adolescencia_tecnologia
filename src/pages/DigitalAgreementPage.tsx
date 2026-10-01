import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PrintButton } from '../components/PrintButton';
import { SeoHelmet } from '../components/SeoHelmet';
import { CheckSquare, Calendar, Users, RotateCcw } from 'lucide-react';

export function DigitalAgreementPage() {
  const [familyMembers, setFamilyMembers] = useState('');
  const [agreementDate, setAgreementDate] = useState('');
  const [reviewDate, setReviewDate] = useState('');

  return (
    <div className="max-w-4xl mx-auto space-y-10">
      <SeoHelmet
        title="Un acuerdo digital para casa"
        description="Plantilla de pacto familiar tecnológico: límites compartidos, sueño, comidas, privacidad, IA y compromisos adultos. Listo para imprimir o completar."
        path="/recursos/acuerdo-digital"
      />

      <div className="flex flex-wrap items-center justify-between gap-4 pt-2 no-print">
        <Breadcrumbs
          items={[
            { label: 'Recursos', href: '/recursos' },
            { label: 'Acuerdo digital para casa' },
          ]}
        />
        <PrintButton label="Imprimir / Guardar como PDF" />
      </div>

      {/* Header */}
      <header className="border-b border-[#E8E2D7] pb-6">
        <div className="text-xs uppercase tracking-widest text-[#9A3412] font-semibold mb-2">
          Herramienta familiar
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-medium text-[#1C1917] tracking-tight leading-tight mb-4">
          Un acuerdo digital para casa
        </h1>
        <div className="text-base sm:text-lg text-[#57534E] leading-relaxed space-y-2">
          <p className="font-serif italic text-lg sm:text-xl text-[#1C1917]">
            No es un contrato legal. Es una herramienta para tener la conversación antes del conflicto.
          </p>
          <p className="text-xs sm:text-sm text-[#78716C]">
            Las normas impuestas unilateralmente provocan engaño y ocultamiento. Un pacto dialogado, firmado por todos los miembros del hogar (incluidos los adultos) y revisable cada trimestre, construye criterio mutuo.
          </p>
        </div>
      </header>

      {/* Printable Document Sheet */}
      <div className="bg-[#FFFFFF] border border-[#D6CEBE] rounded p-6 sm:p-10 shadow-xs print-clean space-y-8">
        {/* Document Meta Row */}
        <div className="border-b border-[#EAE4D9] pb-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-semibold text-[#78716C] uppercase mb-1">
              Participantes del acuerdo:
            </label>
            <input
              type="text"
              value={familyMembers}
              onChange={(e) => setFamilyMembers(e.target.value)}
              placeholder="Ej. Lucas, Carmen, Papá, Mamá..."
              className="w-full text-xs sm:text-sm px-3 py-1.5 bg-[#FAF8F5] border border-[#DDD5C7] rounded text-[#1C1917] focus:outline-none print:bg-white print:border-b print:border-t-0 print:border-x-0"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-[#78716C] uppercase mb-1">
              Fecha de firma:
            </label>
            <input
              type="text"
              value={agreementDate}
              onChange={(e) => setAgreementDate(e.target.value)}
              placeholder="Fecha actual"
              className="w-full text-xs sm:text-sm px-3 py-1.5 bg-[#FAF8F5] border border-[#DDD5C7] rounded text-[#1C1917] focus:outline-none print:bg-white print:border-b print:border-t-0 print:border-x-0"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-[#78716C] uppercase mb-1">
              Próxima revisión pactada:
            </label>
            <input
              type="text"
              value={reviewDate}
              onChange={(e) => setReviewDate(e.target.value)}
              placeholder="En 3 o 6 meses"
              className="w-full text-xs sm:text-sm px-3 py-1.5 bg-[#FAF8F5] border border-[#DDD5C7] rounded text-[#1C1917] focus:outline-none print:bg-white print:border-b print:border-t-0 print:border-x-0"
            />
          </div>
        </div>

        {/* 1. Sueño y noche */}
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-serif font-semibold text-[#1C1917] flex items-center gap-2">
            <span className="text-xs font-mono bg-[#EAE4D9] text-[#1C1917] px-2 py-0.5 rounded">01</span>
            <span>Sueño y descanso nocturno</span>
          </h2>
          <p className="text-xs text-[#57534E]">
            El descanso es la prioridad biológica fundamental. Acordamos dónde y a qué hora duermen los teléfonos.
          </p>
          <div className="bg-[#FAF8F5] p-4 rounded border border-[#EDE5DA] text-xs sm:text-sm space-y-2">
            <div className="flex items-start gap-2">
              <span className="font-semibold text-[#1C1917]">•</span>
              <span>
                <strong>Regla de la estación común:</strong> Todos los teléfonos y tabletas se cargan fuera de los dormitorios (en el salón o pasillo) a partir de las{' '}
                <span className="inline-block border-b border-[#78716C] w-16 text-center font-mono font-medium">21:30</span> h.
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-semibold text-[#1C1917]">•</span>
              <span>Para despertarse se utiliza un despertador tradicional independiente de cualquier pantalla.</span>
            </div>
          </div>
        </section>

        {/* 2. Comidas */}
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-serif font-semibold text-[#1C1917] flex items-center gap-2">
            <span className="text-xs font-mono bg-[#EAE4D9] text-[#1C1917] px-2 py-0.5 rounded">02</span>
            <span>Comidas y conversaciones compartidas</span>
          </h2>
          <div className="bg-[#FAF8F5] p-4 rounded border border-[#EDE5DA] text-xs sm:text-sm space-y-2">
            <div className="flex items-start gap-2">
              <span className="font-semibold text-[#1C1917]">•</span>
              <span>La mesa de comer (desayuno, comida y cena) es una zona 100% libre de dispositivos. Ni adultos ni menores tienen el teléfono sobre la mesa ni atienden notificaciones.</span>
            </div>
          </div>
        </section>

        {/* 3. Estudio y concentración */}
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-serif font-semibold text-[#1C1917] flex items-center gap-2">
            <span className="text-xs font-mono bg-[#EAE4D9] text-[#1C1917] px-2 py-0.5 rounded">03</span>
            <span>Estudio y tareas escolares</span>
          </h2>
          <div className="bg-[#FAF8F5] p-4 rounded border border-[#EDE5DA] text-xs sm:text-sm space-y-2">
            <div className="flex items-start gap-2">
              <span className="font-semibold text-[#1C1917]">•</span>
              <span>Durante las sesiones de estudio que requieren concentración, el teléfono personal permanece en otra estancia o en modo «no molestar» con notificaciones silenciadas.</span>
            </div>
          </div>
        </section>

        {/* 4. Aplicaciones y descargas */}
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-serif font-semibold text-[#1C1917] flex items-center gap-2">
            <span className="text-xs font-mono bg-[#EAE4D9] text-[#1C1917] px-2 py-0.5 rounded">04</span>
            <span>Instalación de aplicaciones y compras</span>
          </h2>
          <div className="bg-[#FAF8F5] p-4 rounded border border-[#EDE5DA] text-xs sm:text-sm space-y-2">
            <div className="flex items-start gap-2">
              <span className="font-semibold text-[#1C1917]">•</span>
              <span>Antes de abrir una cuenta en una nueva red social o juego, lo comentamos juntos para entender qué permisos pide, cómo funciona su privacidad y para qué la queremos.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-semibold text-[#1C1917]">•</span>
              <span>Las compras dentro de aplicaciones (cajas de recompensas, skins o monedas virtuales) requieren siempre autorización expresa previa.</span>
            </div>
          </div>
        </section>

        {/* 5. Fotos, vídeos y privacidad */}
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-serif font-semibold text-[#1C1917] flex items-center gap-2">
            <span className="text-xs font-mono bg-[#EAE4D9] text-[#1C1917] px-2 py-0.5 rounded">05</span>
            <span>Fotos, imágenes íntimas y privacidad</span>
          </h2>
          <div className="bg-[#FAF8F5] p-4 rounded border border-[#EDE5DA] text-xs sm:text-sm space-y-2">
            <div className="flex items-start gap-2">
              <span className="font-semibold text-[#1C1917]">•</span>
              <span><strong>Regla de oro:</strong> Nunca reenviar fotos o vídeos privados de otras personas sin su consentimiento libre. Enviar o guardar contenido íntimo de terceros puede ser delito.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-semibold text-[#1C1917]">•</span>
              <span>Cualquier miembro de la familia tiene derecho a pedir que no se publique su imagen en redes sociales.</span>
            </div>
          </div>
        </section>

        {/* 6. Inteligencia Artificial */}
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-serif font-semibold text-[#1C1917] flex items-center gap-2">
            <span className="text-xs font-mono bg-[#EAE4D9] text-[#1C1917] px-2 py-0.5 rounded">06</span>
            <span>Uso de Inteligencia Artificial (Tutor antes que autor)</span>
          </h2>
          <div className="bg-[#FAF8F5] p-4 rounded border border-[#EDE5DA] text-xs sm:text-sm space-y-2">
            <div className="flex items-start gap-2">
              <span className="font-semibold text-[#1C1917]">•</span>
              <span>Usamos la IA para que nos explique dudas, nos haga preguntas o critique borradores; no para que escriba redacciones completas ni resuelva tareas en nuestro lugar.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-semibold text-[#1C1917]">•</span>
              <span>Comprobamos siempre fechas, cifras y citas en fuentes externas fiables.</span>
            </div>
          </div>
        </section>

        {/* 7. Qué ocurre cuando algo va mal */}
        <section className="space-y-3 border-l-4 border-[#9A3412] pl-4 py-1">
          <h2 className="text-base sm:text-lg font-serif font-semibold text-[#1C1917]">
            07. Qué ocurre cuando algo va mal (La cláusula de seguridad)
          </h2>
          <p className="text-xs sm:text-sm text-[#1C1917] font-medium leading-relaxed">
            «Si algo online te asusta, te da vergüenza o se te va de las manos (acoso, fotos enviadas por error, chantaje o amenazas), acude a pedir ayuda de inmediato. La prioridad absoluta será protegerte y resolver el problema; no habrá castigos ni broncas por haber venido a contarlo.»
          </p>
        </section>

        {/* 8. Consecuencias acordadas */}
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-serif font-semibold text-[#1C1917] flex items-center gap-2">
            <span className="text-xs font-mono bg-[#EAE4D9] text-[#1C1917] px-2 py-0.5 rounded">08</span>
            <span>Consecuencias acordadas si no se cumple el pacto</span>
          </h2>
          <p className="text-xs text-[#57534E]">
            Las consecuencias están directamente relacionadas con la norma incumplida, son proporcionales y tienen duración breve y determinada (no castigos indefinidos).
          </p>
          <div className="border border-[#E0D8CB] p-3 rounded text-xs text-[#57534E] min-h-[60px] bg-white">
            <span className="text-[#A8A29E] italic">Espacio para acordar y escribir a mano las consecuencias específicas de casa...</span>
          </div>
        </section>

        {/* 9. Compromisos de los adultos */}
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-serif font-semibold text-[#1C1917] flex items-center gap-2">
            <span className="text-xs font-mono bg-[#EAE4D9] text-[#1C1917] px-2 py-0.5 rounded">09</span>
            <span>Compromisos de los adultos de la casa</span>
          </h2>
          <div className="bg-[#FAF8F5] p-4 rounded border border-[#EDE5DA] text-xs sm:text-sm space-y-2">
            <div className="flex items-start gap-2">
              <span className="font-semibold text-[#1C1917]">•</span>
              <span>Nosotros tampoco consultaremos el teléfono durante comidas familiares ni conversaremos con él en la mano mientras nos hablan.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-semibold text-[#1C1917]">•</span>
              <span>No publicaremos fotos de nuestros hijos sin consultarles previamente ni revelaremos intimidades suyas en redes sociales.</span>
            </div>
          </div>
        </section>

        {/* 10. Qué queremos conseguir */}
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-serif font-semibold text-[#1C1917] flex items-center gap-2">
            <span className="text-xs font-mono bg-[#EAE4D9] text-[#1C1917] px-2 py-0.5 rounded">10</span>
            <span>El objetivo final que compartimos</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#44403C] italic leading-relaxed">
            «No queremos controlarnos mutuamente por desconfianza. Queremos proteger nuestro tiempo, nuestro sueño, nuestras conversaciones y aprender a utilizar la tecnología con criterio propio para cuando tengamos que decidir solos.»
          </p>
        </section>

        {/* Firmas */}
        <div className="pt-8 border-t border-[#D6CEBE] grid grid-cols-2 gap-8 text-center text-xs">
          <div className="space-y-12">
            <div className="border-b border-[#78716C] h-12 w-3/4 mx-auto" />
            <span className="font-semibold text-[#1C1917]">Firma(s) de quien acompaña (Adultos)</span>
          </div>
          <div className="space-y-12">
            <div className="border-b border-[#78716C] h-12 w-3/4 mx-auto" />
            <span className="font-semibold text-[#1C1917]">Firma(s) de quien crece (Menores)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
