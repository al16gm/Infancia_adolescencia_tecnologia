import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SeoHelmet } from '../components/SeoHelmet';
import { LastReviewed } from '../components/LastReviewed';
import { CheckCircle2, AlertCircle, FileSearch, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function MethodologyPage() {
  const criteria = [
    {
      q: '1. ¿Quién participó?',
      desc: 'No es igual una muestra clínica de 30 personas con adicciones severas que una encuesta representativa a 15.000 escolares de 14 años. Examinamos siempre si la muestra es generalizable a la vida cotidiana de tu hogar o aula.',
    },
    {
      q: '2. ¿Qué se midió realmente?',
      desc: 'Muchos estudios miden «tiempo de pantalla autorreportado» (preguntarle a un joven cuántas horas cree que pasa con el móvil, lo cual suele ser muy inexacto). Otros registran telemetría pasiva o actigrafía objetiva del sueño. La herramienta de medición condiciona la fiabilidad del resultado.',
    },
    {
      q: '3. ¿Qué tipo de estudio era?',
      desc: 'Un estudio transversal (una foto fija en un único día) no puede decirte qué fue causa y qué fue consecuencia. Un estudio longitudinal (seguir a los mismos jóvenes a lo largo de varios años) o un ensayo experimental ofrecen mucha mayor solidez.',
    },
    {
      q: '4. ¿Qué tamaño tenía el efecto?',
      desc: 'Una asociación puede ser «estadísticamente significativa» porque la muestra es gigantesca, pero tener un impacto práctico minúsculo en la vida real (equivalente a comer patatas o usar gafas). Miramos siempre el tamaño real del efecto, no solo el titular periodístico.',
    },
    {
      q: '5. ¿Otros estudios encuentran algo parecido?',
      desc: 'Un único paper aislado no constituye evidencia científica consolidada. Buscamos replicabilidad en distintos países, laboratorios y contextos culturales antes de elevar un hallazgo a conclusión pedagógica.',
    },
  ];

  const pyramid = [
    { level: 'Prioridad 1', name: 'Metaanálisis y Revisiones Sistemáticas', desc: 'Sintetizan decenas o cientos de investigaciones controlando sesgos de publicación.' },
    { level: 'Prioridad 2', name: 'Estudios Longitudinales de Panel', desc: 'Rastrean a los mismos menores en el tiempo para evaluar la dirección temporal de los efectos.' },
    { level: 'Prioridad 3', name: 'Ensayos Experimentales y Cuasiexperimentales', desc: 'Aíslan variables concretas (por ejemplo, comparar comprensión en papel vs pantalla).' },
    { level: 'Prioridad 4', name: 'Grandes Encuestas Poblacionales Representativas', desc: 'Ofrecen una panorámica demográfica, aunque con limitaciones para inferir causalidad.' },
    { level: 'Prioridad 5', name: 'Recomendaciones Prudenciales y Consensos Clínicos', desc: 'Pautas de sentido común cuando aún no hay certeza científica cerrada pero el coste de esperar es alto.' },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <SeoHelmet
        title="Metodología — Cómo trabajamos con la evidencia"
        description="Criterios para evaluar la ciencia sobre tecnología infantil y juvenil: correlación vs causalidad, tamaño del efecto y honestidad científica."
        path="/metodologia"
      />

      <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
        <Breadcrumbs items={[{ label: 'Metodología' }]} />
        <LastReviewed date="1 de octubre de 2026" />
      </div>

      {/* Header */}
      <header className="border-b border-[#E8E2D7] pb-8">
        <div className="text-xs uppercase tracking-widest text-[#1E3A8A] font-semibold mb-2">
          Transparencia y honestidad científica
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#1C1917] tracking-tight leading-tight mb-4">
          Cómo trabajamos con la evidencia
        </h1>
        <p className="text-base sm:text-lg text-[#57534E] leading-relaxed max-w-3xl">
          El debate sobre menores y pantallas está inundado de afirmaciones tajantes construidas sobre estudios frágiles. Esta página explica el marco de rigor que utilizamos para separar lo demostrado del ruido sensacionalista.
        </p>
      </header>

      {/* Las 5 Preguntas al Estudio */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-serif font-medium text-[#1C1917] mb-2">
            Cinco preguntas ante cualquier estudio científico
          </h2>
          <p className="text-xs sm:text-sm text-[#78716C]">
            Antes de incorporar una conclusión a nuestro proyecto, sometemos la investigación a esta auditoría interna:
          </p>
        </div>

        <div className="space-y-4">
          {criteria.map((c, i) => (
            <div key={i} className="p-5 sm:p-6 bg-white border border-[#E7E2DA] rounded space-y-2">
              <h3 className="text-base font-serif font-semibold text-[#1C1917]">
                {c.q}
              </h3>
              <p className="text-xs sm:text-sm text-[#44403C] leading-relaxed">
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Correlación vs Causalidad */}
      <section className="bg-[#FAF5EE] border border-[#E8DDD0] p-6 sm:p-8 rounded space-y-4">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#9A3412] font-semibold">
          <AlertCircle className="w-4 h-4 text-[#9A3412]" />
          <span>La distinción fundamental</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-serif font-medium text-[#1C1917]">
          Correlación no es causalidad
        </h2>
        <div className="text-xs sm:text-sm text-[#44403C] leading-relaxed space-y-3">
          <p>
            Que dos variables ocurran juntas no significa que una cause la otra. Por ejemplo: los adolescentes con mayor malestar emocional suelen pasar más horas con el móvil. ¿El móvil causa el malestar, o quien sufre acude a las redes como refugio ante la soledad? ¿O existe un tercer factor previo (conflictos familiares, acoso presencial o dificultades socioeconómicas) que explica ambas cosas a la vez?
          </p>
          <p>
            En este proyecto nunca convertimos una correlación estadística en una afirmación de causa unívoca si la literatura científica no la avala.
          </p>
        </div>
      </section>

      {/* Ciencia vs Recomendación Prudencial */}
      <section className="space-y-4">
        <h2 className="text-2xl font-serif font-medium text-[#1C1917]">
          Ciencia demostrada vs. Recomendación prudencial
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
          <div className="bg-[#FFFFFF] border border-[#D6CEBE] p-5 rounded space-y-2">
            <h3 className="font-semibold text-[#1E3A8A] text-sm uppercase tracking-wide">
              Evidencia empírica demostrada
            </h3>
            <p className="text-[#57534E] leading-relaxed">
              Hechos que han sido medidos repetidamente bajo condiciones rigurosas: por ejemplo, que el móvil en el dormitorio roba minutos de sueño o que la multitarea digital empeora la comprensión lectora.
            </p>
          </div>
          <div className="bg-[#FAF8F5] border border-[#D6CEBE] p-5 rounded space-y-2">
            <h3 className="font-semibold text-[#9A3412] text-sm uppercase tracking-wide">
              Recomendación prudencial
            </h3>
            <p className="text-[#57534E] leading-relaxed">
              Decisiones de sentido común basadas en el principio de precaución cuando la evidencia definitiva aún tardará años en llegar (como retrasar el smartphone o moderar el vídeo corto), pero sin disfrazarlas de dogmas de laboratorio.
            </p>
          </div>
        </div>
      </section>

      {/* Pirámide de Evidencia */}
      <section className="space-y-4">
        <h2 className="text-2xl font-serif font-medium text-[#1C1917]">
          Nuestra jerarquía de fuentes
        </h2>
        <p className="text-xs sm:text-sm text-[#78716C]">
          Priorizamos las fuentes metodológicas de mayor solidez acumulada:
        </p>
        <div className="divide-y divide-[#EFEAE1] border border-[#E7E2DA] rounded bg-[#FFFFFF]">
          {pyramid.map((item, idx) => (
            <div key={idx} className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-[11px] font-mono text-[#9A3412] font-semibold uppercase tracking-wider block mb-0.5">
                  {item.level}
                </span>
                <span className="text-sm font-semibold text-[#1C1917]">
                  {item.name}
                </span>
                <p className="text-xs text-[#57534E] mt-0.5">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cierre */}
      <section className="bg-[#FFFFFF] border-l-4 border-[#1C1917] p-6 sm:p-8 rounded shadow-xs">
        <p className="font-serif italic text-lg sm:text-xl text-[#1C1917] leading-relaxed">
          «Cuando todavía no sabemos algo, decirlo con total serenidad también es información científica de primer nivel.»
        </p>
        <div className="mt-4 pt-4 border-t border-[#F2ECE1] flex items-center justify-between">
          <Link
            to="/evidencia"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1C1917] hover:text-[#9A3412]"
          >
            <span>Consultar las fichas de evidencia del proyecto</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
