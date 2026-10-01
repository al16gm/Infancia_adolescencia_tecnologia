import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PrintButton } from '../components/PrintButton';
import { SeoHelmet } from '../components/SeoHelmet';
import { Sparkles, Check, AlertOctagon, HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AiGuidePage() {
  const principles = [
    { title: 'Tutor antes que autor', desc: 'Úsala para que te ayude a pensar, no para que piense en tu lugar.' },
    { title: 'Primero intenta por tu cuenta', desc: 'No abras la IA hasta haber dedicado al menos 5 o 10 minutos a estructurar tus propias ideas.' },
    { title: 'El test de la pantalla apagada', desc: 'Si apagamos el ordenador y no eres capaz de explicar el trabajo con tus palabras, ese trabajo no es tuyo.' },
    { title: 'Fluidez no es verdad', desc: 'Que una respuesta esté gramaticalmente perfecta no significa que sea cierta.' },
    { title: 'Las cuatro zonas rojas', desc: 'Desconfía y verifica siempre: fechas exactas, cifras numéricas, citas textuales y estudios o leyes.' },
    { title: 'Calibra la duda', desc: 'A mayor impacto de equivocarte (un examen médico, una nota importante), mayor obligación de contraste externo.' },
    { title: 'Cero datos íntimos', desc: 'No presupongas confidencialidad: nunca compartas secretos, fotos privadas ni datos de terceros en un chat con IA.' },
    { title: 'Una máquina no siente afecto', desc: 'Un modelo elocuente no tiene empatía real ni deber ético de cuidado humano.' },
    { title: 'Transparencia sin trampas', desc: 'Declara con naturalidad qué herramientas has usado y qué parte del proceso te han asistido.' },
    { title: 'El criterio final es tuyo', desc: 'Tú eres el único responsable legal, moral y académico de lo que firmas y entregas.' },
  ];

  const usefulPrompts = [
    {
      action: 'Para estudiar un tema difícil',
      prompt: '«Actúa como un tutor de secundaria. No me des la solución. Explícame el concepto con una analogía sencilla y luego hazme una pregunta para comprobar si lo he entendido.»',
    },
    {
      action: 'Para revisar una redacción propia',
      prompt: '«Aquí tienes un borrador que he escrito yo mismo. Señálame dos argumentos débiles y dos párrafos confusos, pero no reescribas el texto por mí.»',
    },
    {
      action: 'Para preparar un examen o debate',
      prompt: '«Voy a defender que [X]. Adopta la postura contraria y rebáteme con tres argumentos sólidos para que pueda practicar mi réplica.»',
    },
    {
      action: 'Para detectar errores en un problema',
      prompt: '«He intentado resolver este ejercicio y he llegado a este resultado: [procedimiento]. No me des la respuesta final: dime solo en qué paso me he equivocado.»',
    },
    {
      action: 'Para practicar un idioma extranjero',
      prompt: '«Mantén una conversación en inglés nivel B1 sobre música. Corrige mis fallos gramaticales entre paréntesis después de cada respuesta mía.»',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <SeoHelmet
        title="Guía rápida de IA: lo esencial en diez minutos"
        description="El principio Tutor antes que autor, 10 principios, 5 instrucciones útiles y 3 preguntas clave para acompañar a niños y adolescentes con IA generativa."
        path="/recursos/guia-ia"
      />

      <div className="flex flex-wrap items-center justify-between gap-4 pt-2 no-print">
        <Breadcrumbs
          items={[
            { label: 'Recursos', href: '/recursos' },
            { label: 'Guía rápida de IA' },
          ]}
        />
        <PrintButton label="Imprimir guía" />
      </div>

      {/* Header */}
      <header className="border-b border-[#E8E2D7] pb-8">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#1E3A8A] font-semibold mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Guía práctica para familias y educadores</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#1C1917] tracking-tight leading-tight mb-4">
          Inteligencia artificial: lo esencial en diez minutos
        </h1>
        <p className="text-base sm:text-lg text-[#57534E] leading-relaxed">
          Una máquina puede redactar trabajos, resolver problemas o traducir textos en segundos. Esta guía resume los criterios fundamentales para que la IA mejore el aprendizaje en lugar de sustituir al estudiante.
        </p>
      </header>

      {/* Las 3 Preguntas Clave */}
      <section className="bg-[#FAF5EE] border border-[#E7DFD0] p-6 sm:p-8 rounded">
        <h2 className="text-xs uppercase tracking-widest text-[#9A3412] font-semibold mb-2">
          La brújula cotidiana
        </h2>
        <h3 className="text-xl sm:text-2xl font-serif font-medium text-[#1C1917] mb-6">
          Tres preguntas antes de dar por buena una respuesta de IA
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-white p-5 rounded border border-[#EDE5DA]">
            <div className="text-xs font-mono text-[#9A3412] font-semibold mb-1">01. VERDAD</div>
            <h4 className="text-base font-serif font-semibold text-[#1C1917] mb-2">
              ¿Cómo sé que esto es verdad?
            </h4>
            <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
              ¿Puedo salir del chat y verificar el dato en un libro o web fiable, o me estoy fiando únicamente de lo bien escrito que suena?
            </p>
          </div>

          <div className="bg-white p-5 rounded border border-[#EDE5DA]">
            <div className="text-xs font-mono text-[#9A3412] font-semibold mb-1">02. AUTORÍA</div>
            <h4 className="text-base font-serif font-semibold text-[#1C1917] mb-2">
              ¿Qué parte estoy delegando?
            </h4>
            <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
              ¿Le estoy pidiendo una pista para seguir pensando o le estoy pidiendo que me ahorre todo el esfuerzo de aprender?
            </p>
          </div>

          <div className="bg-white p-5 rounded border border-[#EDE5DA]">
            <div className="text-xs font-mono text-[#9A3412] font-semibold mb-1">03. RIESGO</div>
            <h4 className="text-base font-serif font-semibold text-[#1C1917] mb-2">
              ¿Qué riesgo hay si me equivoco?
            </h4>
            <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
              Si el dato está inventado, ¿qué consecuencias tiene? A mayor coste del error, mayor obligación de auditar la fuente.
            </p>
          </div>
        </div>
      </section>

      {/* Tutor antes que Autor */}
      <section className="space-y-4">
        <h2 className="text-2xl font-serif font-medium text-[#1C1917]">
          Tutor antes que autor
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
          <div className="p-5 bg-[#F2F7F4] border border-[#D7E5DD] rounded">
            <h3 className="font-semibold text-[#2D4A3E] text-sm sm:text-base mb-2 flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#2D4A3E]" />
              <span>La IA como TUTOR (Fomenta aprendizaje)</span>
            </h3>
            <ul className="space-y-2 text-[#1C1917]">
              <li>• Da pistas socráticas para desbloquear un ejercicio.</li>
              <li>• Hace preguntas para detectar lagunas en tu comprensión.</li>
              <li>• Explica una idea con tres metáforas distintas.</li>
              <li>• Critica un borrador señalando contradicciones lógicas.</li>
              <li>• Genera diez ejercicios de práctica parecidos.</li>
            </ul>
          </div>

          <div className="p-5 bg-[#FAF3F0] border border-[#F2DDD5] rounded">
            <h3 className="font-semibold text-[#9A3412] text-sm sm:text-base mb-2 flex items-center gap-1.5">
              <AlertOctagon className="w-4 h-4 text-[#9A3412]" />
              <span>La IA como AUTOR (Anula aprendizaje)</span>
            </h3>
            <ul className="space-y-2 text-[#1C1917]">
              <li>• Redacta la redacción completa para copiarla y pegarla.</li>
              <li>• Resuelve la ecuación sin que el alumno entienda el paso a paso.</li>
              <li>• Traduce un texto entero sin fijar vocabulario ni estructuras.</li>
              <li>• Produce una bibliografía inventada para rellenar huecos.</li>
              <li>• Elimina la tolerancia a la frustración intelectual.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Las 4 Zonas Rojas */}
      <section className="bg-[#FFFFFF] border border-[#E7E2DA] p-6 sm:p-8 rounded">
        <div className="text-xs uppercase tracking-widest text-[#9A3412] font-semibold mb-1">
          Puntos ciegos de los modelos
        </div>
        <h2 className="text-xl sm:text-2xl font-serif font-medium text-[#1C1917] mb-3">
          Las cuatro «zonas rojas» donde la IA inventa datos con total seguridad
        </h2>
        <p className="text-xs sm:text-sm text-[#57534E] mb-6">
          Los modelos no buscan la verdad factual: predicen qué palabra es más probable a continuación. Por eso inventan con elocuencia pasmosa:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs sm:text-sm">
          <div className="p-4 bg-[#FAF8F5] border border-[#E8E2D7] rounded">
            <div className="font-semibold text-[#1C1917] mb-1">1. Fechas concretas</div>
            <p className="text-[#57534E] text-xs">Suelen confundir años de tratados, nacimientos o hitos legislativos.</p>
          </div>
          <div className="p-4 bg-[#FAF8F5] border border-[#E8E2D7] rounded">
            <div className="font-semibold text-[#1C1917] mb-1">2. Cifras y estadísticas</div>
            <p className="text-[#57534E] text-xs">Porcentajes y números exactos suelen ser aproximaciones o invenciones.</p>
          </div>
          <div className="p-4 bg-[#FAF8F5] border border-[#E8E2D7] rounded">
            <div className="font-semibold text-[#1C1917] mb-1">3. Citas entrecomilladas</div>
            <p className="text-[#57534E] text-xs">Atribuyen frases célebres a autores que nunca las pronunciaron.</p>
          </div>
          <div className="p-4 bg-[#FAF8F5] border border-[#E8E2D7] rounded">
            <div className="font-semibold text-[#1C1917] mb-1">4. Estudios y artículos</div>
            <p className="text-[#57534E] text-xs">Generan títulos plausibles de papers y revistas que no existen en la realidad.</p>
          </div>
        </div>
      </section>

      {/* Los 10 Principios */}
      <section className="space-y-4">
        <h2 className="text-2xl font-serif font-medium text-[#1C1917]">
          Diez principios para convivir con la inteligencia artificial
        </h2>
        <div className="divide-y divide-[#EFEAE1] border border-[#E7E2DA] rounded bg-[#FFFFFF]">
          {principles.map((p, idx) => (
            <div key={idx} className="p-4 sm:p-5 flex items-start gap-4">
              <span className="text-xs font-mono font-semibold text-[#9A3412] mt-0.5 select-none">
                {String(idx + 1).padStart(2, '0')}.
              </span>
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-[#1C1917]">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#57534E] mt-1 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5 Instrucciones útiles */}
      <section className="space-y-4">
        <h2 className="text-2xl font-serif font-medium text-[#1C1917]">
          Cinco instrucciones útiles para usar la IA en casa o en clase
        </h2>
        <p className="text-xs sm:text-sm text-[#78716C]">
          Copia y adapta estas instrucciones para que el modelo actúe como un compañero de estudio y no como un atajo tramposo:
        </p>
        <div className="space-y-3">
          {usefulPrompts.map((item, idx) => (
            <div key={idx} className="bg-[#FAF8F5] border border-[#E7E2DA] p-4 sm:p-5 rounded space-y-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#1E3A8A]">
                {item.action}
              </div>
              <pre className="text-xs sm:text-sm font-sans bg-[#FFFFFF] p-3 rounded border border-[#EDE5DA] text-[#1C1917] whitespace-pre-wrap leading-relaxed select-all">
                {item.prompt}
              </pre>
            </div>
          ))}
        </div>
      </section>

      {/* Pautas por edades */}
      <section className="pt-4">
        <h2 className="text-2xl font-serif font-medium text-[#1C1917] mb-4">
          Pautas según la edad
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-5 bg-white border border-[#E7E2DA] rounded">
            <div className="text-xs font-mono font-semibold text-[#78716C] mb-1">6 A 9 AÑOS</div>
            <h3 className="font-serif font-semibold text-[#1C1917] mb-2">Curiosidad acompañada</h3>
            <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
              Uso exclusivamente conjunto con un adulto para inventar cuentos o buscar datos curiosos. Explicar que la máquina no está viva ni siente cariño.
            </p>
          </div>
          <div className="p-5 bg-white border border-[#E7E2DA] rounded">
            <div className="text-xs font-mono font-semibold text-[#78716C] mb-1">10 A 13 AÑOS</div>
            <h3 className="font-serif font-semibold text-[#1C1917] mb-2">Tutor antes que autor</h3>
            <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
              Enseñar a pedir pistas y explicaciones alternativas en vez de pedir textos acabados. Practicar la detección deliberada de errores y alucinaciones.
            </p>
          </div>
          <div className="p-5 bg-white border border-[#E7E2DA] rounded">
            <div className="text-xs font-mono font-semibold text-[#78716C] mb-1">14 A 18 AÑOS</div>
            <h3 className="font-serif font-semibold text-[#1C1917] mb-2">Honestidad y criterio</h3>
            <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
              Transparencia en el uso, ética de autoría madura y contrastación rigurosa de fuentes primarias antes de incorporar cualquier dato a un trabajo.
            </p>
          </div>
        </div>
      </section>

      {/* Link to Topics */}
      <div className="pt-6 border-t border-[#E8E2D7] flex items-center justify-between no-print">
        <Link
          to="/temas/ia-aprendizaje"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1C1917] hover:text-[#9A3412] transition-colors"
        >
          <span>Leer el tema completo: IA y aprendizaje</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
