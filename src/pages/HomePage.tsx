import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, ShieldCheck, HelpCircle, RefreshCw, Sparkles } from 'lucide-react';
import { useBookModal } from '../context/BookModalContext';
import { SeoHelmet } from '../components/SeoHelmet';
import { AgeBands } from '../components/AgeBands';
import { BookCTA } from '../components/BookCTA';

export function HomePage() {
  const { openModal } = useBookModal();

  return (
    <div className="space-y-16 sm:space-y-24">
      <SeoHelmet
        title="Inicio"
        description="Infancia, adolescencia y tecnología sin alarmismo ni ingenuidad. Evidencia, recursos y criterios editoriales para acompañar entre los 6 y los 18 años."
        path="/"
      />

      {/* HERO SECTION */}
      <section className="pt-6 sm:pt-12 pb-8 max-w-4xl mx-auto text-left border-b border-[#E8E2D7]">
        <div className="inline-block text-xs uppercase tracking-widest text-[#9A3412] font-semibold mb-4">
          Proyecto editorial y repositorio de criterios
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-medium text-[#1C1917] tracking-tight leading-[1.15] mb-6">
          La generación que aprendió a preguntarle a una máquina
        </h1>

        <p className="font-serif text-lg sm:text-2xl text-[#57534E] italic font-normal mb-8 leading-snug">
          Infancia, adolescencia y tecnología sin alarmismo ni ingenuidad.
        </p>

        <div className="text-base sm:text-lg text-[#33312E] leading-relaxed space-y-4 max-w-3xl mb-10">
          <p>
            Pantallas, redes sociales, videojuegos e inteligencia artificial ya forman parte de crecer.
          </p>
          <p>
            Lo difícil no es darse cuenta.
          </p>
          <p>
            Lo difícil es separar los riesgos reales del ruido, saber qué merece un límite y qué merece una conversación, y acompañar a niños y adolescentes mientras pasan de necesitar protección a necesitar criterio propio.
          </p>
          <p className="font-medium text-[#1C1917]">
            Esta web reúne evidencia, recursos y preguntas útiles para hacerlo.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <Link
            to="/temas"
            className="px-6 py-3.5 text-xs sm:text-sm font-medium text-white bg-[#1C1917] hover:bg-[#333333] active:bg-[#000000] rounded transition-colors shadow-xs inline-flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-[#1C1917]"
          >
            <span>Explorar los temas</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
          <button
            type="button"
            onClick={openModal}
            className="px-6 py-3.5 text-xs sm:text-sm font-medium text-[#1C1917] bg-[#F2EDE4] hover:bg-[#E5DFD4] rounded transition-colors inline-flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-[#1C1917]"
          >
            <BookOpen className="w-4 h-4 text-[#9A3412]" aria-hidden="true" />
            <span>Conocer el libro</span>
          </button>
        </div>
      </section>

      {/* BLOQUE — NO TODAS LAS PANTALLAS SON LA MISMA PANTALLA */}
      <section className="max-w-4xl mx-auto py-4">
        <div className="border-l-2 border-[#1C1917] pl-6 sm:pl-8 py-2">
          <h2 className="text-2xl sm:text-3xl font-serif font-medium text-[#1C1917] tracking-tight mb-6">
            Dos horas delante de una pantalla pueden significar cosas completamente distintas
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-6 text-sm text-[#44403C] mb-8">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9A3412]" />
              <span>Hablar con amigos.</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9A3412]" />
              <span>Crear un vídeo.</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9A3412]" />
              <span>Hacer deberes.</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9A3412]" />
              <span>Jugar con otras personas.</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9A3412]" />
              <span>Ver cincuenta clips seguidos.</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9A3412]" />
              <span>Compararse con cuerpos imposibles.</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9A3412]" />
              <span>Aprender con una inteligencia artificial.</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9A3412]" />
              <span>O pedirle a esa IA que haga el trabajo entero.</span>
            </div>
          </div>

          <div className="bg-[#FAF5F0] p-6 rounded border border-[#EDE4D8]">
            <p className="text-xs uppercase tracking-wider font-semibold text-[#9A3412] mb-3">
              Por eso aquí prestamos atención a preguntas mejores:
            </p>
            <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs sm:text-sm text-[#1C1917] font-medium">
              <li className="bg-white/80 p-3 rounded border border-[#E7DFD4]">1. Qué hacen.</li>
              <li className="bg-white/80 p-3 rounded border border-[#E7DFD4]">2. Cómo lo hacen.</li>
              <li className="bg-white/80 p-3 rounded border border-[#E7DFD4]">3. Cuándo ocurre.</li>
              <li className="bg-white/80 p-3 rounded border border-[#E7DFD4]">4. Qué está desplazando.</li>
              <li className="bg-white/80 p-3 rounded border border-[#E7DFD4] sm:col-span-2 lg:col-span-2">
                5. Cuánta autonomía pueden manejar todavía.
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* CUATRO ACCESOS */}
      <section className="max-w-6xl mx-auto">
        <div className="text-xs uppercase tracking-widest text-[#78716C] font-semibold mb-2">
          Estructura del proyecto
        </div>
        <h2 className="text-2xl sm:text-3xl font-serif font-medium text-[#1C1917] tracking-tight mb-8">
          Cuatro maneras de entrar a esta web
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Acceso 1 */}
          <div className="p-6 bg-[#FFFFFF] border border-[#E7E2DA] rounded flex flex-col justify-between hover:border-[#C8BFB0] transition-colors">
            <div>
              <div className="w-8 h-8 rounded bg-[#F4EFEA] flex items-center justify-center text-[#9A3412] mb-4">
                <BookOpen className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-[#1C1917] mb-2">
                Entender antes de decidir
              </h3>
              <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed mb-6">
                Qué sabemos realmente sobre sueño, atención, redes sociales, videojuegos, móviles, escuela e inteligencia artificial.
              </p>
            </div>
            <Link
              to="/temas"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1C1917] hover:text-[#9A3412] transition-colors"
            >
              <span>Explorar temas</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Acceso 2 */}
          <div className="p-6 bg-[#FFFFFF] border border-[#E7E2DA] rounded flex flex-col justify-between hover:border-[#C8BFB0] transition-colors">
            <div>
              <div className="w-8 h-8 rounded bg-[#F4EFEA] flex items-center justify-center text-[#1E3A8A] mb-4">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-[#1C1917] mb-2">
                Saber cuánto sabemos
              </h3>
              <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed mb-6">
                No todas las afirmaciones tienen el mismo respaldo. Diferenciamos entre evidencia robusta, moderada, emergente y recomendaciones prudenciales.
              </p>
            </div>
            <Link
              to="/evidencia"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1C1917] hover:text-[#1E3A8A] transition-colors"
            >
              <span>Explorar la evidencia</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Acceso 3 */}
          <div className="p-6 bg-[#FFFFFF] border border-[#E7E2DA] rounded flex flex-col justify-between hover:border-[#C8BFB0] transition-colors">
            <div>
              <div className="w-8 h-8 rounded bg-[#F4EFEA] flex items-center justify-center text-[#9A3412] mb-4">
                <HelpCircle className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-[#1C1917] mb-2">
                Saber qué hacer cuando algo va mal
              </h3>
              <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed mb-6">
                Protocolos rápidos ante ciberacoso, grooming, sextorsión, difusión de imágenes íntimas, deepfakes y situaciones difíciles.
              </p>
            </div>
            <Link
              to="/recursos"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1C1917] hover:text-[#9A3412] transition-colors"
            >
              <span>Ver recursos</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Acceso 4 */}
          <div className="p-6 bg-[#FFFFFF] border border-[#E7E2DA] rounded flex flex-col justify-between hover:border-[#C8BFB0] transition-colors">
            <div>
              <div className="w-8 h-8 rounded bg-[#F4EFEA] flex items-center justify-center text-[#2D4A3E] mb-4">
                <RefreshCw className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-[#1C1917] mb-2">
                Seguir lo que cambia
              </h3>
              <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed mb-6">
                Algunas cuestiones envejecen deprisa: leyes, políticas escolares, resultados de nuevas investigaciones, sistemas de IA o recursos de ayuda.
              </p>
            </div>
            <Link
              to="/actualizaciones"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1C1917] hover:text-[#2D4A3E] transition-colors"
            >
              <span>Ver actualizaciones</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* BLOQUE IA: LA INTELIGENCIA ARTIFICIAL CAMBIA UNA PREGUNTA FUNDAMENTAL */}
      <section className="max-w-4xl mx-auto p-8 sm:p-12 bg-[#FAF5EE] border border-[#E5DDD0] rounded">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#1E3A8A] font-semibold mb-3">
          <Sparkles className="w-4 h-4 text-[#1E3A8A]" />
          <span>El cambio de época</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-serif font-medium text-[#1C1917] tracking-tight mb-6">
          La inteligencia artificial cambia una pregunta fundamental
        </h2>

        <div className="text-sm sm:text-base text-[#44403C] leading-relaxed space-y-4 mb-8">
          <p>
            Una máquina puede escribir un trabajo, resolver un problema matemático, programar, traducir o explicar una idea en cuestión de segundos.
          </p>
          <p>
            Eso abre posibilidades extraordinarias.
          </p>
          <p className="font-serif italic text-lg sm:text-xl text-[#1C1917] py-2">
            También crea una diferencia que antes era más difícil de ocultar: terminar una tarea y aprender a hacerla ya no son necesariamente la misma cosa.
          </p>
        </div>

        <div className="border-t border-[#DED5C6] pt-6 mb-8">
          <div className="text-sm font-serif font-semibold text-[#9A3412] mb-3">
            Tutor antes que autor
          </div>
          <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed mb-4">
            La IA puede dar una pista. Hacer preguntas. Explicar de otra manera. Criticar un argumento. Generar ejercicios. También puede hacer el trabajo entero.
          </p>
          <p className="text-xs sm:text-sm text-[#1C1917] font-medium">
            La herramienta puede ser la misma. El aprendizaje no.
          </p>
        </div>

        <Link
          to="/temas/ia-aprendizaje"
          className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium text-white bg-[#1C1917] hover:bg-[#333333] rounded transition-colors"
        >
          <span>IA y aprendizaje</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </section>

      {/* BLOQUE INCERTIDUMBRE */}
      <section className="max-w-4xl mx-auto py-4">
        <div className="bg-[#FFFFFF] border border-[#E7E2DA] p-8 sm:p-10 rounded">
          <h2 className="text-2xl sm:text-3xl font-serif font-medium text-[#1C1917] tracking-tight mb-4">
            Cuando la ciencia no tiene una respuesta definitiva, también es una respuesta
          </h2>

          <p className="text-xs sm:text-sm text-[#78716C] uppercase tracking-wider font-semibold mb-6">
            Aquí no encontrarás:
          </p>

          <ul className="space-y-3 text-xs sm:text-sm text-[#57534E] mb-8">
            <li className="flex items-start gap-2.5">
              <span className="text-[#9A3412] font-bold select-none">—</span>
              <span>Una cifra mágica universal de horas de pantalla.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-[#9A3412] font-bold select-none">—</span>
              <span>Una lista eterna y maniquea de aplicaciones «buenas» y «malas».</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-[#9A3412] font-bold select-none">—</span>
              <span>La afirmación de que las redes sociales explican por sí solas una crisis generacional.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-[#9A3412] font-bold select-none">—</span>
              <span>La idea catastrofista de que la inteligencia artificial volverá incapaces de pensar a los jóvenes.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-[#9A3412] font-bold select-none">—</span>
              <span>Ni recomendaciones prudenciales disfrazadas de certezas científicas absolutas.</span>
            </li>
          </ul>

          <div className="border-t border-[#F2ECE1] pt-6">
            <p className="text-sm sm:text-base font-serif text-[#1C1917] font-medium leading-relaxed">
              Encontrarás algo menos espectacular y bastante más útil: qué sabemos, qué todavía no sabemos y qué parece razonable hacer mientras tanto.
            </p>
          </div>
        </div>
      </section>

      {/* BLOQUE EDADES */}
      <section className="max-w-5xl mx-auto">
        <AgeBands />
      </section>

      {/* BLOQUE AUDIENCIA: PARA CUALQUIER ADULTO QUE ACOMPAÑE */}
      <section className="max-w-3xl mx-auto text-center py-4">
        <div className="text-xs uppercase tracking-widest text-[#78716C] font-semibold mb-2">
          A quién se dirige
        </div>
        <h2 className="text-2xl sm:text-3xl font-serif font-medium text-[#1C1917] tracking-tight mb-4">
          Para cualquier adulto que acompañe
        </h2>
        <div className="text-sm sm:text-base text-[#57534E] leading-relaxed space-y-4 max-w-2xl mx-auto">
          <p>
            Esta web no está pensada únicamente para padres y madres. Está dirigida a cualquier adulto que conviva, eduque o acompañe a niños y adolescentes: familias, abuelos, tutores, profesores, educadores y cuidadores.
          </p>
          <p className="font-serif italic text-lg text-[#1C1917]">
            No necesitas conocer cada aplicación. No necesitas saber más tecnología que ellos. Necesitas mejores preguntas.
          </p>
        </div>
      </section>

      {/* BLOQUE LIBRO (CTA) */}
      <BookCTA />

      {/* CIERRE */}
      <section className="max-w-3xl mx-auto text-center py-10 border-t border-[#E8E2D7]">
        <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#1C1917] font-normal leading-snug mb-8">
          «Cuando ya no puedas decidir por ellos, ¿qué esperas que sepan decidir solos?»
        </blockquote>

        <Link
          to="/temas"
          className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-medium text-white bg-[#1C1917] hover:bg-[#333333] rounded transition-colors"
        >
          <span>Explorar los temas</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
