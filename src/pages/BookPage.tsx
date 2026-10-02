import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SeoHelmet } from '../components/SeoHelmet';
import { useBookModal } from '../context/BookModalContext';
import { BookOpen, CheckCircle, ArrowRight, Shield } from 'lucide-react';
import bookCoverImg from '../assets/images/book_cover_front_1790888633952.jpg';

export function BookPage() {
  const { openModal } = useBookModal();

  const parts = [
    {
      num: 'Parte I',
      title: 'El punto de partida: salir del ruido',
      chapters: ['Capítulo 1: Criterio antes que control', 'Capítulo 2: No todas las pantallas son la misma pantalla'],
      desc: 'Por qué la métrica de «horas de pantalla» no diagnostica nada y cómo pasar de la sospecha a la observación consciente.',
    },
    {
      num: 'Parte II',
      title: 'El cuerpo y la mente: sueño, atención y bienestar',
      chapters: ['Capítulo 3: La batalla biológica por el descanso', 'Capítulo 4: Redes sociales e imagen corporal'],
      desc: 'Qué le hace la tecnología al descanso nocturno, a la concentración profunda y a la relación con el propio cuerpo.',
    },
    {
      num: 'Parte III',
      title: 'La convivencia en casa: normas y primer móvil',
      chapters: ['Capítulo 5: El pacto familiar sin trincheras'],
      desc: 'A qué edad entregar el primer teléfono, cómo redactar un acuerdo duradero y cómo evitar tanto la capitulación como el espionaje.',
    },
    {
      num: 'Parte IV',
      title: 'Cuando deja de ser un debate sobre minutos',
      chapters: ['Capítulo 6: Protocolos ante ciberacoso, grooming y chantaje'],
      desc: 'Qué hacer en los primeros 30 minutos ante situaciones graves, cómo preservar pruebas y cómo evitar que la vergüenza paralice al menor.',
    },
    {
      num: 'Parte V',
      title: 'Juego, creatividad y cultura compartida',
      chapters: ['Capítulo 7: Videojuegos, creación digital y socialización'],
      desc: 'Diferenciar el juego cooperativo enriquecedor de las mecánicas abusivas de monetización y apuestas.',
    },
    {
      num: 'Parte VI',
      title: 'La escuela y el aula: papel, pantallas e IA',
      chapters: ['Capítulo 8: Móviles en el centro educativo', 'Capítulo 9: IA y la fractura del esfuerzo cognitivo'],
      desc: 'Por qué tener tecnología y aprender mejor no son sinónimos, y el principio fundamental «Tutor antes que autor».',
    },
    {
      num: 'Parte VII',
      title: 'Pensamiento crítico, síntesis y futuro',
      chapters: ['Capítulo 10: Calibrar la confianza en las máquinas', 'Capítulo 11: Vídeo corto y contenido sintético', 'Capítulo 12: Regulación y autonomía'],
      desc: 'Cómo preparar a niños y jóvenes para un mundo de deepfakes, algoritmos persuasivos y desinformación elocuente.',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-16">
      <SeoHelmet
        title="El libro — Estructura y propuesta editorial"
        description="La generación que aprendió a preguntarle a una máquina. Criar, enseñar y acompañar entre pantallas, redes e inteligencia artificial."
        path="/libro"
      />

      <Breadcrumbs items={[{ label: 'El libro' }]} />

      {/* Hero: Book Intro & Mockup */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border-b border-[#E8E2D7] pb-12">
        {/* Text Col */}
        <div className="lg:col-span-7 space-y-5 text-left">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#9A3412] font-semibold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Obra de Alejandro García Monteagudo</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#1C1917] tracking-tight leading-[1.15]">
            La generación que aprendió a preguntarle a una máquina
          </h1>

          <p className="text-xl sm:text-2xl font-serif italic text-[#57534E] leading-snug">
            Infancia, adolescencia y tecnología sin alarmismo ni ingenuidad
          </p>

          <div className="text-sm font-medium text-[#78716C]">
            Por <span className="text-[#1C1917] font-semibold">Alejandro García Monteagudo</span>
          </div>

          <p className="text-base text-[#44403C] leading-relaxed">
            Una propuesta rigurosa, serena y práctica para cualquier adulto que conviva o eduque a niños y adolescentes entre los 6 y los 18 años. Sin tecnofobia, sin ingenuidad comercial y con criterios que perduren más que la próxima aplicación de moda.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={openModal}
              className="px-6 py-3.5 text-xs sm:text-sm font-medium text-white bg-[#1C1917] hover:bg-[#333333] active:bg-[#000000] rounded transition-colors shadow-xs cursor-pointer focus-visible:outline-2 focus-visible:outline-[#1C1917]"
            >
              Comprar el libro
            </button>
            <Link
              to="/libro/avisame"
              className="px-5 py-3.5 text-xs sm:text-sm font-medium text-[#1C1917] bg-[#F2EDE4] hover:bg-[#E5DFD4] rounded transition-colors focus-visible:outline-2 focus-visible:outline-[#1C1917]"
            >
              Avísame cuando esté disponible
            </Link>
          </div>

          <p className="text-xs text-[#78716C] italic">
            El libro está en fase de edición final. Al pulsar en comprar podrás registrarte para ser el primero en recibir el aviso de disponibilidad.
          </p>
        </div>

        {/* Official Book Cover Presentation */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div className="relative group max-w-[280px] sm:max-w-[320px] transition-transform duration-300 hover:-translate-y-1">
            {/* Soft Ambient Shadow */}
            <div className="absolute -inset-1 bg-gradient-to-b from-[#E2D8C9] to-[#C8BBA8] rounded-lg blur-md opacity-50 group-hover:opacity-75 transition-opacity" />

            {/* Book Frame */}
            <div className="relative rounded-md overflow-hidden border border-[#D6CEBE] bg-[#FFFFFF] shadow-2xl">
              <img
                src={bookCoverImg}
                alt="Portada oficial del libro 'La generación que aprendió a preguntarle a una máquina' de Alejandro García Monteagudo"
                className="w-full h-auto object-cover select-none block"
                referrerPolicy="no-referrer"
                loading="eager"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/book_cover.jpg';
                }}
              />
            </div>
          </div>

          <div className="text-center mt-3">
            <span className="text-[11px] font-mono tracking-wider uppercase text-[#78716C]">
              Portada oficial de la edición
            </span>
          </div>
        </div>
      </section>

      {/* Para quién es este libro */}
      <section className="max-w-3xl space-y-4">
        <h2 className="text-2xl sm:text-3xl font-serif font-medium text-[#1C1917]">
          Para quién está escrito
        </h2>
        <div className="text-sm sm:text-base text-[#57534E] leading-relaxed space-y-3">
          <p>
            Está pensado para cualquier persona con responsabilidad sobre menores de entre 6 y 18 años: madres, padres, tutores, docentes de primaria y secundaria, orientadores escolares, cuidadores y abuelos.
          </p>
          <p>
            No asume conocimientos técnicos avanzados. No te pide que te conviertas en programador ni que conozcas los nombres de cada tendencia de TikTok. Te ofrece preguntas mejores para entender qué está ocurriendo al otro lado de la pantalla.
          </p>
        </div>
      </section>

      {/* Qué encontrarás en sus páginas */}
      <section className="bg-[#FFFFFF] border border-[#E7E2DA] p-6 sm:p-8 rounded space-y-6">
        <h2 className="text-xl sm:text-2xl font-serif font-medium text-[#1C1917]">
          Qué encontrarás dentro
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-[#44403C]">
          <div className="flex items-start gap-2.5 p-3 rounded bg-[#FAF8F5]">
            <CheckCircle className="w-4 h-4 text-[#2D4A3E] shrink-0 mt-0.5" />
            <span><strong>Evidencia científica desmitificada:</strong> qué está sólidamente probado y qué son meras correlaciones o pánicos morales.</span>
          </div>
          <div className="flex items-start gap-2.5 p-3 rounded bg-[#FAF8F5]">
            <CheckCircle className="w-4 h-4 text-[#2D4A3E] shrink-0 mt-0.5" />
            <span><strong>Modelos prácticos de acuerdo familiar:</strong> cómo negociar normas sin caer en discusiones cotidianas interminables.</span>
          </div>
          <div className="flex items-start gap-2.5 p-3 rounded bg-[#FAF8F5]">
            <CheckCircle className="w-4 h-4 text-[#2D4A3E] shrink-0 mt-0.5" />
            <span><strong>Guías de conversación:</strong> frases y preguntas concretas para abrir diálogo en lugar de interrogatorios policiales.</span>
          </div>
          <div className="flex items-start gap-2.5 p-3 rounded bg-[#FAF8F5]">
            <CheckCircle className="w-4 h-4 text-[#2D4A3E] shrink-0 mt-0.5" />
            <span><strong>Inteligencia artificial explicada para educar:</strong> cómo usarla como tutora socrática y evitar que destruya el aprendizaje.</span>
          </div>
        </div>
      </section>

      {/* Estructura en siete partes */}
      <section className="space-y-6">
        <div>
          <div className="text-xs uppercase tracking-widest text-[#78716C] font-semibold mb-1">
            Índice temático general
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-medium text-[#1C1917]">
            Estructura en siete partes
          </h2>
        </div>

        <div className="space-y-4">
          {parts.map((p, idx) => (
            <article
              key={idx}
              className="p-5 sm:p-6 bg-[#FFFFFF] border border-[#E7E2DA] rounded hover:border-[#D6CEBE] transition-colors"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-xs font-mono font-semibold text-[#9A3412]">
                  {p.num}
                </span>
                <span className="text-xs text-[#78716C]">
                  {p.chapters.join(' · ')}
                </span>
              </div>
              <h3 className="text-lg font-serif font-semibold text-[#1C1917] mb-2">
                {p.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                {p.desc}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Apéndices y metodología */}
      <section className="p-6 sm:p-8 bg-[#FAF5F0] border border-[#E7DDD0] rounded space-y-4">
        <h2 className="text-lg sm:text-xl font-serif font-semibold text-[#1C1917]">
          Apéndices y rigor metodológico
        </h2>
        <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
          El libro concluye con un corpus bibliográfico estructurado, el compendio de criterios para evaluar estudios científicos sobre tecnología y un glosario sin jerga técnica.
        </p>
        <Link
          to="/metodologia"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1C1917] hover:text-[#9A3412] underline underline-offset-2"
        >
          <span>Conoce nuestra metodología editorial completa</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </section>

      {/* Bottom CTA */}
      <section className="text-center py-8 border-t border-[#E8E2D7]">
        <button
          type="button"
          onClick={openModal}
          className="px-8 py-3.5 text-xs sm:text-sm font-medium text-white bg-[#1C1917] hover:bg-[#333333] rounded transition-colors shadow-xs"
        >
          Comprar el libro (Aviso de disponibilidad)
        </button>
      </section>
    </div>
  );
}
