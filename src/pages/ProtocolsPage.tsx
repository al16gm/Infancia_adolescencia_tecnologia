import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { EmergencyBanner } from '../components/EmergencyBanner';
import { PrintButton } from '../components/PrintButton';
import { SeoHelmet } from '../components/SeoHelmet';
import { Shield, Clock, Check, X, AlertTriangle, PhoneCall } from 'lucide-react';

interface ProtocolSection {
  id: string;
  title: string;
  subtitle: string;
  symptoms: string[];
  whatToDo: string[];
  whatToAvoid: string[];
  whenToSeekHelp: string;
  helpline?: { name: string; phone: string };
}

const PROTOCOLS: ProtocolSection[] = [
  {
    id: 'primeros-30-minutos',
    title: 'Los primeros treinta minutos ante cualquier incidente',
    subtitle: 'La regla de oro para adultos que reciben una confesión o descubren un problema digital.',
    symptoms: [
      'Un menor acude visiblemente angustiado, llorando o asustado por algo ocurrido en su teléfono.',
      'Descubres por casualidad un mensaje, foto o grupo hostil que le involucra directamente.',
    ],
    whatToDo: [
      'Mantener la calma visual: respira y modula tu tono de voz. Tu tranquilidad es su primer refugio.',
      'Agradecer que haya venido a contártelo: «Has hecho muy bien en venir; ahora estamos juntos en esto y lo resolveremos».',
      'Preservar la evidencia de inmediato: haz capturas de pantalla completas donde se vean nombres de usuario, enlaces, teléfonos y fecha/hora antes de bloquear o reportar.',
      'Garantizar su seguridad emocional: confirma explícitamente que no le vas a retirar el teléfono ni a castigar por haber pedido ayuda.',
    ],
    whatToAvoid: [
      'No reaccionar con gritos, pánico, reproches («¡te dije que no te fiaras!») ni broncas inmediatas.',
      'No quitarle el dispositivo de las manos de forma violenta.',
      'No contactar de inmediato y en caliente con la otra parte o en grupos públicos de familias sin asesoramiento previo.',
      'No borrar mensajes o perfiles antes de guardar pruebas forenses.',
    ],
    whenToSeekHelp: 'Si el menor está sobrepasado, si hay amenazas físicas directas o si tú mismo sientes que la situación supera tus recursos familiares.',
    helpline: { name: 'Línea INCIBE de ciberseguridad', phone: '017' },
  },
  {
    id: 'ciberacoso',
    title: 'Ciberacoso escolar (Cyberbullying)',
    subtitle: 'Hostigamiento reiterado, exclusión deliberada de grupos o burlas públicas entre iguales.',
    symptoms: [
      'Cambios bruscos de humor tras mirar el teléfono; ansiedad o rechazo manifiesto a ir al colegio o instituto.',
      'Aparición de stickers denigrantes, cuentas anónimas creadas para insultar o expulsión coordinada de grupos de mensajería.',
      'Aislamiento progresivo de su círculo de amistades habituales y bajada repentina de notas.',
    ],
    whatToDo: [
      'Escuchar sin juzgar y validar su dolor: que comprenda que no es culpable de la conducta de los agresores.',
      'Guardar capturas completas de los insultos, comentarios, perfiles y enlaces.',
      'Bloquear a los agresores en la aplicación correspondiente tras documentar las pruebas.',
      'Poner el caso formalmente en conocimiento de la dirección o tutoría del centro escolar para que activen el protocolo de acoso.',
    ],
    whatToAvoid: [
      'No restarle importancia diciendo «son cosas de críos» o «ignóralos y ya se cansarán».',
      'No alentar venganzas digitales ni responder con insultos.',
      'No airear el conflicto en redes sociales o grupos de familias sin la debida coordinación escolar.',
    ],
    whenToSeekHelp: 'Si el centro escolar no actúa de forma diligente, si el hostigamiento persiste o si la salud física o emocional del menor se deteriora.',
    helpline: { name: 'Acoso Escolar (Ministerio) / ANAR', phone: '900018018' },
  },
  {
    id: 'grooming',
    title: 'Grooming (Acercamiento de adultos con fines sexuales)',
    subtitle: 'Manipulación progresiva de un adulto desconocido para ganarse la confianza del menor y obtener material íntimo.',
    symptoms: [
      'El menor recibe regalos digitales, créditos en juegos o atención desmedida de un «amigo online» a quien no conoce en persona.',
      'Uso del teléfono a horas intempestivas, ocultando la pantalla rápidamente si entra alguien en la habitación.',
      'Petición de pasar de chats públicos de videojuegos a canales de mensajería privada (WhatsApp, Telegram, Discord, Snapchat).',
    ],
    whatToDo: [
      'Interrumpir de inmediato el contacto sin alertar al agresor de que ha sido descubierto.',
      'Guardar absolutamente todo el historial de conversaciones, audios, fotos y perfiles utilizados.',
      'Llamar de inmediato a la Línea de ayuda en Ciberseguridad 017 o a la Policía Nacional / Guardia Civil.',
      'Reforzar al menor que el adulto es el único responsable de la manipulación.',
    ],
    whatToAvoid: [
      'No recriminar al menor por haber confiado o por haber cedido a peticiones previas.',
      'No insultar ni amenazar al presunto agresor por mensaje (podría destruir pruebas o cambiar de identidad).',
      'No borrar la cuenta ni las conversaciones antes de que los cuerpos policiales las analicen.',
    ],
    whenToSeekHelp: 'Siempre e inmediatamente. El grooming es un delito penal perseguible de oficio.',
    helpline: { name: 'Policía Nacional (091) o INCIBE', phone: '017' },
  },
  {
    id: 'sextorsion',
    title: 'Sextorsión y chantaje digital',
    subtitle: 'Chantaje tras haber enviado o compartido una imagen íntima: amenazas de difusión si no envía dinero o más fotos.',
    symptoms: [
      'Terror repentino, temblores o llanto incontrolable ante notificaciones del móvil.',
      'Peticiones desesperadas de dinero, tarjetas prepago o intentos de coger dinero en casa sin justificación.',
      'Recepción de capturas con la lista de sus seguidores o familiares bajo amenaza de «si no me pagas, se lo envío a todos ellos».',
    ],
    whatToDo: [
      'Regla absoluta: NO PAGAR NUNCA NI UN SOLO CÉNTIMO y NO ENVIAR MÁS CONTENIDO. El pago nunca detiene la extorsión; la acelera.',
      'Bloquear al extorsionador en todos los canales tras capturar las conversaciones y los datos de pago que haya proporcionado.',
      'Contactar urgentemente con el 017 de INCIBE: disponen de protocolos técnicos específicos para gestionar casos de sextorsión a menores.',
      'Denunciar formalmente en comisaría o juzgado de guardia.',
    ],
    whatToAvoid: [
      'No negociar con el extorsionador ni pedirle «por favor» que borre el archivo.',
      'No sermonear moralmente al menor sobre por qué envió la foto inicial: en este momento lo prioritario es frenar el chantaje.',
      'No borrar el perfil ni la conversación hasta que la policía tome declaración.',
    ],
    whenToSeekHelp: 'Inmediatamente, en los primeros minutos tras recibir la primera amenaza.',
    helpline: { name: 'INCIBE Línea de Ciberseguridad', phone: '017' },
  },
  {
    id: 'deepfake-sexual',
    title: 'Deepfake sexual y contenido sintético no consentido',
    subtitle: 'Generación y difusión de fotos o vídeos eróticos/pornográficos manipulados con la cara del menor mediante IA.',
    symptoms: [
      'Circulación en grupos de clase o de mensajería de montajes fotográficos denigrantes generados con aplicaciones de «desnudar» por IA.',
      'El menor sufre burlas o aislamiento social por imágenes falsas que otros compañeros dan por verídicas.',
    ],
    whatToDo: [
      'Afirmar con claridad rotunda a la víctima: «Aunque la imagen sea falsa, tu sufrimiento es real y esto es un delito gravísimo de quien lo ha hecho y de quien lo difunde».',
      'Acudir de urgencia al Canal Prioritario de la Agencia Española de Protección de Datos (AEPD) para exigir la retirada inmediata.',
      'Identificar a los responsables o difusores en el ámbito escolar y activar la vía disciplinaria y penal.',
      'Guardar capturas del montaje y de los grupos donde se ha compartido.',
    ],
    whatToAvoid: [
      'No reenviar la imagen ni siquiera a otros adultos para «mostrar lo que le han hecho». Difundir una imagen de estas características es delito para cualquiera.',
      'No decirle a la víctima «no te preocupes, si se nota que es falsa». La humillación social es idéntica.',
    ],
    whenToSeekHelp: 'En cuanto se tenga conocimiento de la existencia de la imagen sintética.',
    helpline: { name: 'Canal Prioritario AEPD / INCIBE', phone: '017' },
  },
  {
    id: 'difusion-imagen-intima',
    title: 'Difusión no consentida de imágenes íntimas reales',
    subtitle: 'Fotos íntimas compartidas en privado que son reenviadas o filtradas a terceros sin permiso.',
    symptoms: [
      'Reenvío viral de fotos íntimas en grupos de WhatsApp, Telegram o canales de redes sociales.',
      'La víctima entra en estado de shock por la pérdida masiva de control sobre su privacidad.',
    ],
    whatToDo: [
      'Prioridad número uno: frenar la difusión. Solicitar formalmente a través del Canal Prioritario de la AEPD la retirada urgente en plataformas.',
      'Informar a quienes tengan la foto de que conservarla o reenviarla acarrea responsabilidad penal según el Código Penal español (artículo 197.7).',
      'Brindar contención psicológica y apoyo cercano continuo: el impacto en la autoestima suele ser muy profundo.',
      'Presentar denuncia policial formal.',
    ],
    whatToAvoid: [
      'No culpabilizar a la víctima: la culpa es única y exclusivamente de quien traiciona la confianza y difunde el material.',
      'No forzar al menor a dar explicaciones técnicas mientras se encuentre en estado de crisis aguda.',
    ],
    whenToSeekHelp: 'De inmediato a través de la AEPD y de los servicios de apoyo psicológico especializados (ANAR).',
    helpline: { name: 'Canal Prioritario AEPD', phone: '017' },
  },
  {
    id: 'chatbot-problema-grave',
    title: 'Interacción perjudicial o dependencia con chatbots de IA',
    subtitle: 'Conversaciones que refuerzan aislamiento, validan ideas de autolesión o crean dependencia emocional enfermiza.',
    symptoms: [
      'El menor trata a un modelo de IA como su única amistad íntima, pasando horas conversando en solitario y abandonando el mundo físico.',
      'Respuestas del bot que han sugerido o validado métodos de autolesión, trastornos de conducta alimentaria o ideas delirantes.',
      'Resistencia violenta o desesperación si se le interrumpe la conversación con el asistente virtual.',
    ],
    whatToDo: [
      'Desconectar la aplicación temporalmente y revisar los historiales de conversación juntos con tono comprensivo.',
      'Explicar el funcionamiento de la máquina: «Es un software que genera palabras probabilísticas; no siente afecto real, no tiene criterio moral ni empatía».',
      'Restablecer de forma deliberada planes y actividades compartidas en el mundo real que no dependan de pantallas.',
      'Reportar formalmente a la plataforma desarrolladora si el modelo ha incumplido salvaguardas de seguridad básica.',
    ],
    whatToAvoid: [
      'No ridiculizar su apego diciendo «¡pero cómo eres tan tonto de hablar con una máquina!». El apego suele reflejar una soledad previa no atendida.',
      'No asumir que porque sea una IA «no pasa nada y es inofensivo».',
    ],
    whenToSeekHelp: 'Si el chatbot ha reforzado ideas autolesivas o si el menor muestra signos claros de desconexión con la realidad.',
    helpline: { name: 'Línea de Salud Mental / ANAR', phone: '024' },
  },
  {
    id: 'autolesion-suicidio',
    title: 'Riesgo de autolesión o ideación suicida vinculada a internet',
    subtitle: 'Consumo de contenido pro-autolesión, despedidas en redes o sufrimiento psíquico desbordado.',
    symptoms: [
      'Mensajes en estados o perfiles con tono de despedida («pronto dejaré de molestar», «gracias por todo»).',
      'Búsquedas en el historial de navegación sobre métodos para hacerse daño o interacción en comunidades nocivas.',
      'Presencia de cortes, quemaduras u ocultamiento persistente de muñecas y piernas con ropa larga en verano.',
    ],
    whatToDo: [
      'No dejar a la persona sola bajo ninguna circunstancia. Tu presencia física tranquila es el factor de protección esencial.',
      'Hablar con claridad, cariño y serenidad: preguntar directamente sin miedo («¿estás pensando en hacerte daño? Estamos aquí contigo para ayudarte»). Hablar de suicidio con calma no induce a cometerlo; abre la puerta al desahogo.',
      'Llamar de inmediato a la Línea 024 (Atención a la conducta suicida) o acudir al servicio de urgencias médicas más cercano.',
      'Retirar del entorno objetos potencialmente peligrosos.',
    ],
    whatToAvoid: [
      'No juzgar, sermonear ni tachar la conducta de «llamada de atención» o «chantaje emocional».',
      'No guardar secretos: si un amigo te confiesa que piensa suicidarse, avisa de inmediato a un adulto responsable.',
      'No esperar a que se le pase solo al día siguiente.',
    ],
    whenToSeekHelp: 'Inmediatamente y de urgencia. Emergencias: 112. Teléfono de atención a la conducta suicida: 024.',
    helpline: { name: 'Línea 024 (Conducta Suicida) o 112', phone: '024' },
  },
  {
    id: 'deterioro-grave-uso',
    title: 'Uso digital desbordado con deterioro funcional grave',
    subtitle: 'Pérdida prolongada de control, abandono de la escolarización o agresividad extrema ante límites.',
    symptoms: [
      'Incapacidad reiterada para detener el uso tras acuerdos sucesivos, jugando o navegando de noche sistemáticamente.',
      'Abandono absoluto de higiene, alimentación regular, clases presenciales o relaciones sociales fuera de la red durante meses.',
      'Reacciones de violencia verbal o física incontrolada cuando se intenta apagar el dispositivo.',
    ],
    whatToDo: [
      'Comprender que la pantalla es frecuentemente la punta del iceberg de un malestar más profundo (depresión, fobia social, fracaso escolar o TDAH no diagnosticado).',
      'Consultar con un equipo de salud mental infanto-juvenil o centro de atención a adicciones tecnológicas de tu comunidad autónoma.',
      'Recuperar rutinas básicas no negociables (alimentación y sueño fuera de la habitación) de forma coordinada entre todos los adultos del hogar.',
    ],
    whatToAvoid: [
      'No enzarzarse en batallas campales diarias de insultos y reproches que cronifican la tensión familiar.',
      'No normalizar la situación esperando que «se le pase con la edad».',
    ],
    whenToSeekHelp: 'Cuando la dinámica familiar se vuelve insostenible o la persona no asiste a clase de forma regular.',
    helpline: { name: 'ANAR Familias / Salud Mental', phone: '600505152' },
  },
];

export function ProtocolsPage() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <SeoHelmet
        title="Protocolos rápidos de actuación"
        description="Protocolos inmediatos paso a paso ante ciberacoso, grooming, sextorsión, deepfakes, chatbot perjudicial o ideación suicida. Primero protege, después educa."
        path="/recursos/protocolos"
      />

      <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
        <Breadcrumbs
          items={[
            { label: 'Recursos', href: '/recursos' },
            { label: 'Protocolos rápidos' },
          ]}
        />
        <PrintButton label="Imprimir protocolos" />
      </div>

      {/* Main Banner: Primero protege. Después educa. */}
      <div className="bg-[#1C1917] text-white p-6 sm:p-8 rounded shadow-sm text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <div className="text-xs uppercase tracking-widest text-[#D6CEBE] font-medium mb-1">
            Principio rector de seguridad
          </div>
          <h1 className="text-2xl sm:text-3xl font-serif font-medium text-white tracking-tight">
            Primero protege. Después educa.
          </h1>
          <p className="text-xs sm:text-sm text-[#D6CEBE] mt-2 max-w-xl leading-relaxed">
            Cuando algo va verdaderamente mal en el plano digital, el debate pedagógico se detiene temporalmente: lo urgente es garantizar la seguridad física y emocional del menor, frenar el daño y no dejarlo solo.
          </p>
        </div>
        <div className="shrink-0 flex items-center gap-2">
          <Shield className="w-12 h-12 text-[#9A3412]" aria-hidden="true" />
        </div>
      </div>

      {/* Emergency banner */}
      <EmergencyBanner
        title="En caso de riesgo vital, agresión física inminente o delito grave en curso: llama al 112"
        description="El 112 es gratuito, funciona las 24 horas del día sin tarjeta SIM y moviliza asistencia médica o policial de urgencia inmediata."
      />

      {/* Fast Jump Anchor Menu */}
      <nav
        aria-label="Índice de protocolos rápidos"
        className="bg-[#FFFFFF] border border-[#E7E2DA] p-5 rounded space-y-3 no-print"
      >
        <div className="text-xs uppercase tracking-wider font-semibold text-[#78716C] flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-[#9A3412]" />
          <span>Acceso rápido a cada protocolo:</span>
        </div>
        <div className="flex flex-wrap gap-2 text-xs">
          {PROTOCOLS.map((proto) => (
            <button
              key={proto.id}
              type="button"
              onClick={() => scrollTo(proto.id)}
              className="px-2.5 py-1 bg-[#FAF8F5] hover:bg-[#EAE4D9] text-[#1C1917] border border-[#D6CEBE] rounded transition-colors text-left"
            >
              {proto.title}
            </button>
          ))}
        </div>
      </nav>

      {/* All Protocols Rendered */}
      <div className="space-y-12">
        {PROTOCOLS.map((protocol, index) => (
          <article
            key={protocol.id}
            id={protocol.id}
            className="border border-[#E0D8CB] bg-[#FFFFFF] rounded p-6 sm:p-8 scroll-mt-24 shadow-xs"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#F2ECE1] pb-4 mb-5">
              <div>
                <span className="text-xs font-mono text-[#9A3412] font-semibold">
                  PROTOCOLO {String(index + 1).padStart(2, '0')}
                </span>
                <h2 className="text-xl sm:text-2xl font-serif font-semibold text-[#1C1917] tracking-tight mt-0.5">
                  {protocol.title}
                </h2>
              </div>
              {protocol.helpline && (
                <a
                  href={`tel:${protocol.helpline.phone}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FAF5F0] border border-[#EBE2D5] text-[#9A3412] hover:bg-[#F2ECE1] rounded text-xs font-medium transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>{protocol.helpline.name} ({protocol.helpline.phone})</span>
                </a>
              )}
            </div>

            <p className="text-xs sm:text-sm text-[#57534E] italic mb-6">
              {protocol.subtitle}
            </p>

            {/* Puede estar ocurriendo si */}
            <div className="mb-6">
              <h3 className="text-xs uppercase tracking-wider font-semibold text-[#78716C] mb-2 flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-[#8A5A1A]" />
                <span>Puede estar ocurriendo si...</span>
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[#44403C]">
                {protocol.symptoms.map((s, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#8A5A1A] font-bold select-none">•</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Qué hacer vs Qué evitar */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 pt-4 border-t border-[#F2ECE1]">
              {/* Qué hacer */}
              <div className="bg-[#F0F5F2] border border-[#DCE8E0] p-4 sm:p-5 rounded">
                <h3 className="text-xs sm:text-sm font-semibold text-[#2D4A3E] mb-3 flex items-center gap-1.5 uppercase tracking-wide">
                  <Check className="w-4 h-4 text-[#2D4A3E]" />
                  <span>Qué hacer</span>
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#1C1917]">
                  {protocol.whatToDo.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#2D4A3E] font-bold select-none">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Qué evitar */}
              <div className="bg-[#FAF3F0] border border-[#F2DDD5] p-4 sm:p-5 rounded">
                <h3 className="text-xs sm:text-sm font-semibold text-[#9A3412] mb-3 flex items-center gap-1.5 uppercase tracking-wide">
                  <X className="w-4 h-4 text-[#9A3412]" />
                  <span>Qué evitar</span>
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#1C1917]">
                  {protocol.whatToAvoid.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#9A3412] font-bold select-none">✕</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Cuándo pedir ayuda */}
            <div className="pt-4 border-t border-[#F2ECE1] text-xs sm:text-sm text-[#57534E]">
              <strong className="text-[#1C1917]">Cuándo pedir ayuda especializada:</strong>{' '}
              {protocol.whenToSeekHelp}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
