import { Topic } from '../types';

export const TOPICS: Topic[] = [
  {
    slug: 'pantallas',
    title: 'Pantallas y hábitos digitales',
    subtitle: 'No es solo cuánto tiempo',
    editorialKicker: 'Capítulos 2 y 5 del libro',
    intro:
      'La cifra de «tiempo de pantalla» resulta atractiva porque es sencilla: dos horas, cuatro horas, demasiado, poco. El problema es que mezcla actividades que pueden tener significados muy diferentes. Una hora hablando con amigos no equivale a una hora de vídeo corto. Dibujar con una tableta no equivale a revisar notificaciones mientras se estudia. Por eso el tiempo importa, pero rara vez explica por sí solo si una experiencia digital está funcionando bien o mal.',
    fiveQuestions: [
      {
        question: '¿Qué está haciendo?',
        description: 'Consumir, crear, aprender, hablar, jugar o simplemente pasar de un contenido al siguiente por inercia.',
      },
      {
        question: '¿Cómo lo está haciendo?',
        description: 'En solitario o acompañado. De manera activa o automática. Con un propósito claro o por aburrimiento reactivo.',
      },
      {
        question: '¿Cuándo ocurre?',
        description: 'No es igual utilizar una pantalla durante la tarde que tenerla encendida en la cama justo antes de dormir.',
      },
      {
        question: '¿Qué está desplazando?',
        description: 'Sueño, actividad física al aire libre, estudio concentrado, relaciones familiares, aburrimiento fértil o nada especialmente relevante.',
      },
      {
        question: '¿Cuánta autonomía puede manejar?',
        description: 'La soltura técnica o la velocidad de manejo de una interfaz no equivalen a madurez emocional ni a autorregulación.',
      },
    ],
    whatWeKnow: [
      'El impacto de la tecnología depende primordialmente del tipo de actividad concreta, del contexto temporal y emocional, de la vulnerabilidad previa de la persona y de aquello que está sustituyendo en su día a día.',
      'El uso muy intenso suele funcionar como una señal útil de alarma o malestar, pero una cifra horaria aislada no permite diagnosticar un problema psicológico ni un trastorno conductual.',
      'El desplazamiento de actividades esenciales para el desarrollo —como el descanso nocturno y el movimiento físico— es el mecanismo más documentado a través del cual el uso excesivo causa perjuicio.',
    ],
    whatWeDontKnow: [
      'No existe un número universal ni un umbral horario rígido respaldado por la ciencia que separe matemáticamente una infancia digital «saludable» de otra «dañina».',
      'No conocemos con certeza el impacto neurobiológico a largo plazo de las interfaces táctiles de alta gratificación inmediata en las etapas más tempranas del desarrollo cognitivo.',
    ],
    recommendations: [
      'Observar con detenimiento la función psicológica que cumple el dispositivo antes de imponer una restricción unilateral.',
      'Proteger el descanso nocturno estableciendo una norma ambiental clara y compartida por toda la familia.',
      'Diseñar espacios y momentos cotidianos predecibles libres de cualquier tipo de notificación.',
      'Ampliar la autonomía de uso de forma gradual cuando la persona demuestre capacidad efectiva de autorregulación.',
    ],
    ageGuidance: [
      {
        range: '6–9',
        title: 'Selección adulta y entorno',
        focus: 'Diseño del contexto',
        description: 'Predominio de la mediación directa, selección previa de contenidos de calidad, ausencia de dispositivos personales propios y uso preferente en zonas comunes del hogar.',
      },
      {
        range: '10–13',
        title: 'Negociación progresiva',
        focus: 'Explicación del porqué',
        description: 'Paso de la prohibición a la conversación sobre los motivos de cada límite, primeros acuerdos compartidos y retirada paulatina de la supervisión visual continua.',
      },
      {
        range: '14–18',
        title: 'Autorregulación y privacidad',
        focus: 'Criterio sin supervisión',
        description: 'Foco en la gestión del propio tiempo, respeto a su intimidad personal y preparación activa para tomar decisiones cuando ya no haya adultos delante.',
      },
    ],
    evidenceIds: ['ev-pantallas-tiempo-desplazamiento', 'ev-pantallas-heterogeneidad'],
    bookChapter: 'Capítulos 2 y 5',
    lastReviewed: '1 de octubre de 2026',
    seoDescription: 'Tiempo de pantalla en infancia y adolescencia: por qué el número de horas no lo explica todo y cuáles son las cinco preguntas clave para evaluar el uso digital.',
    keyQuote: 'Una cifra aislada de horas de pantalla no diagnostica nada; lo decisivo es qué actividad tiene lugar y qué vida cotidiana está desplazando.',
  },
  {
    slug: 'sueno-atencion',
    title: 'Sueño, atención y bienestar',
    subtitle: 'No todos los riesgos digitales pesan lo mismo',
    editorialKicker: 'Capítulo 3 del libro',
    intro:
      'Cuando se habla de tecnología y menores con frecuencia se meten en el mismo saco la falta de concentración en clase, los cambios de humor y los problemas graves de salud mental. La investigación muestra, sin embargo, que las prioridades son distintas. Proteger el descanso no es un detalle secundario: es probablemente el punto de intervención más claro y con mayor respaldo empírico de toda la vida digital.',
    whatWeKnow: [
      'El impacto de los dispositivos en el sueño no se debe únicamente a la emisión de luz azul en la retina, sino sobre todo al tiempo robado al descanso, la activación cognitiva provocada por el contenido interactivo y la alerta latente ante posibles mensajes o notificaciones.',
      'Cada interrupción digital tiene un coste medible en la memoria de trabajo y en el tiempo necesario para recuperar el estado de concentración profunda previo.',
      'En salud mental, la tecnología actúa de formas complejas y combinadas: puede ser un factor amplificador de un malestar previo, un síntoma de aislamiento o un refugio ante dificultades en el entorno físico.',
    ],
    whatWeDontKnow: [
      'No hay pruebas concluyentes de que el uso cotidiano de pantallas cause un deterioro orgánico irreversible en la arquitectura atencional de niños y adolescentes.',
      'Sigue siendo objeto de debate metodológico en qué medida la correlación entre uso intensivo y síntomas depresivos refleja causalidad directa o una búsqueda activa de alivio digital por parte de quienes ya sufren.',
    ],
    recommendations: [
      'Si un dispositivo está dificultando el descanso nocturno, sacarlo físicamente del dormitorio durante la noche es mucho más eficaz y compasivo que exigir un esfuerzo heroico de fuerza de voluntad cada noche.',
      'Crear pausas de estudio protegidas donde el teléfono no esté presente en la misma mesa de trabajo, reduciendo la fatiga de inhibición.',
      'Frente a sospechas de malestar, no mirar únicamente la pantalla del teléfono: mirar la vida global que rodea al teléfono (sueño, relaciones presenciales, alimentación, disfrute y abandono de aficiones).',
    ],
    ageGuidance: [
      {
        range: '6–9',
        title: 'Cero pantallas antes de dormir',
        focus: 'Rutinas de calma',
        description: 'Apagar cualquier dispositivo al menos una hora antes de acostarse para facilitar la desconexión sensorial y la producción natural de melatonina.',
      },
      {
        range: '10–13',
        title: 'Estación de carga común',
        focus: 'Hábito estructural',
        description: 'Los teléfonos y tabletas se cargan fuera de las habitaciones durante la noche como norma compartida por toda la familia.',
      },
      {
        range: '14–18',
        title: 'Conciencia del coste atencional',
        focus: 'Metacognición',
        description: 'Ayudar al adolescente a identificar cuándo la multitarea le genera saturación y a experimentar el valor de bloques de estudio sin notificaciones.',
      },
    ],
    evidenceIds: ['ev-sueno-adolescente-dispositivos', 'ev-atencion-multitarea'],
    bookChapter: 'Capítulo 3',
    lastReviewed: '1 de octubre de 2026',
    seoDescription: 'Sueño, atención y salud mental en la adolescencia digital: cómo proteger el descanso y evitar la fatiga atencional sin caer en alarmismos infundados.',
    keyQuote: 'Si un dispositivo está dificultando el sueño, sacarlo del dormitorio puede ser más eficaz que pedir fuerza de voluntad cada noche.',
  },
  {
    slug: 'redes-sociales',
    title: 'Redes sociales, comparación e imagen corporal',
    subtitle: 'La misma red puede ser dos experiencias distintas',
    editorialKicker: 'Capítulo 4 del libro',
    intro:
      'Para un adolescente, las redes sociales son simultáneamente plaza del pueblo, club de aficiones, espacio de humor compartido y escaparate de popularidad. Pueden fortalecer lazos de amistad sinceros o convertirse en una máquina constante de comparación con vidas meticulosamente editadas. Abordar este terreno requiere diferenciar entre la intensidad del uso y la relación psicológica que se establece con él.',
    whatWeKnow: [
      'Existe una relación empírica especialmente consistente entre la comparación social orientada a la apariencia física en entornos visuales y el incremento del malestar con la propia imagen corporal, con mayor vulnerabilidad documentada en chicas adolescentes.',
      'Un uso cuantitativamente alto no equivale de forma automática a un uso problemático: la actitud pasiva (desplazarse observando sin interactuar) suele asociarse a peor estado anímico que la comunicación directa con amistades reales.',
      'La crisis de salud mental adolescente es multifactorial: las redes sociales juegan un papel interactivo, pero no existe respaldo científico para atribuirles en exclusiva la totalidad del fenómeno.',
    ],
    whatWeDontKnow: [
      'No se conoce con exactitud el peso relativo de los algoritmos de recomendación frente a dinámicas sociales preexistentes en los grupos de iguales fuera de la pantalla.',
      'No disponemos de evidencia sólida que demuestre que prohibir el acceso a redes sociales solucione por sí solo las causas profundas de la soledad o la insatisfacción adolescente.',
    ],
    recommendations: [
      'Sustituir los interrogatorios policiales por preguntas abiertas que fomenten la reflexión: «¿Qué es lo que más disfrutas de esa cuenta?», «¿Hay perfiles después de los cuales suelas quedarte con peor cuerpo?».',
      'Experimentar de mutuo acuerdo pequeños periodos de desintoxicación puntual: «¿Qué pasaría si silenciaras esa cuenta o salieras del grupo durante una semana?».',
      'Desmitificar activamente la naturalidad de lo que ven: recordar que el contenido público es un fragmento escogido, filtrado y frecuentemente retocado.',
    ],
    ageGuidance: [
      {
        range: '6–9',
        title: 'Preservar la infancia presencial',
        focus: 'Sin perfiles públicos',
        description: 'A estas edades no procede la apertura de perfiles en redes sociales abiertas; priorizar juegos colaborativos y comunicación directa con familiares cercanos.',
      },
      {
        range: '10–13',
        title: 'Retrasar la entrada y acompañar',
        focus: 'Conversación sobre el diseño',
        description: 'Comprender el modelo de negocio basado en la atención antes de solicitar la creación de cuentas; pactar perfiles privados cerrados si se accede.',
      },
      {
        range: '14–18',
        title: 'Desactivar la comparación automática',
        focus: 'Gestión emocional del feed',
        description: 'Fomentar la limpieza periódica de seguidos, el silenciamiento de cuentas tóxicas y el distanciamiento consciente de métricas de validación numérica (likes, vistas).',
      },
    ],
    evidenceIds: ['ev-redes-comparacion-corporal', 'ev-redes-salud-mental-metaanalisis'],
    bookChapter: 'Capítulo 4',
    lastReviewed: '1 de octubre de 2026',
    seoDescription: 'Redes sociales, imagen corporal y bienestar en adolescentes: cómo hablar de comparación social y algoritmos con rigor y empatía.',
    keyQuote: 'La comparación social no empezó con las redes sociales, pero las plataformas le han proporcionado una escala ininterrumpida y una edición perfecta.',
  },
  {
    slug: 'normas-primer-movil',
    title: 'Normas, primer móvil y convivencia familiar',
    subtitle: 'Ni barra libre ni guerra permanente',
    editorialKicker: 'Capítulo 5 del libro',
    intro:
      'La llegada del primer teléfono inteligente suele vivirse como un antes y un después en cualquier hogar. Con demasiada frecuencia se oscila entre la capitulación total y la fiscalización asfixiante. Sin embargo, conversación y límites no son alternativas excluyentes: una buena norma no busca castigar, sino resolver un problema concreto de convivencia y bienestar.',
    whatWeKnow: [
      'No existe una edad biológica o cronológica unívoca avalada por la ciencia para entregar el primer smartphone: depende de la necesidad real de comunicación, el tipo de dispositivo, la madurez demostrada y el contexto del entorno.',
      'Las normas que se explican y se razonan generan significativamente menos conductas de engaño y ocultación que la imposición autoritaria sin diálogo.',
      'El modelado conductual de los adultos convivientes es determinante: las reglas que los propios adultos incumplen sistemáticamente pierden toda legitimidad pedagógica.',
    ],
    whatWeDontKnow: [
      'No hay datos que demuestren que las aplicaciones de control parental invasivo mejoren a largo plazo la capacidad de toma de decisiones morales o la autonomía responsable.',
    ],
    recommendations: [
      'Formular normas concretas vinculadas a motivos comprensibles: «El teléfono duerme en el salón porque queremos que descanses bien, no porque desconfiemos de ti».',
      'Distinguir entre dispositivos: un teléfono básico de llamadas o un reloj localizador no implican los mismos desafíos que un smartphone con acceso ilimitado a internet.',
      'Establecer consecuencias relacionadas, proporcionales y revisables en el tiempo, evitando castigos arbitrarios o desmedidos.',
      'Poner por escrito los compromisos mutuos a través de un acuerdo digital familiar.',
    ],
    ageGuidance: [
      {
        range: '6–9',
        title: 'Dispositivos compartidos',
        focus: 'Uso en zonas comunes',
        description: 'No hay necesidad de smartphone propio. Las pantallas que se usen pertenecen a la familia y permanecen en espacios compartidos.',
      },
      {
        range: '10–13',
        title: 'El dilema de la transición',
        focus: 'Evaluar necesidad y madurez',
        description: 'Si se precisa comunicación por desplazamientos autónomos, valorar alternativas previas (teléfono sin navegador, modo restringido) y acordar horarios muy definidos.',
      },
      {
        range: '14–18',
        title: 'Contrato de autonomía',
        focus: 'Revisión periódica de pactos',
        description: 'Mayor margen de gestión personal con líneas rojas claras sobre sueño, respeto en grupos de mensajería y acudir siempre a pedir ayuda ante problemas.',
      },
    ],
    evidenceIds: ['ev-mediacion-parental-estilos'],
    bookChapter: 'Capítulo 5',
    lastReviewed: '1 de octubre de 2026',
    seoDescription: 'Primer móvil y normas en casa: a qué edad darlo, cómo negociar límites sin discusiones constantes y cómo crear acuerdos duraderos.',
    keyQuote: 'Primero protegemos. Después educamos. El objetivo de una norma no es controlar indefinidamente, sino preparar para cuando tengan que decidir solos.',
  },
  {
    slug: 'riesgos-digitales',
    title: 'Ciberacoso, grooming, sextorsión y deepfakes',
    subtitle: 'Cuando deja de ser un debate sobre tiempo de pantalla',
    editorialKicker: 'Capítulo 6 del libro',
    intro:
      'Hay situaciones digitales que no se resuelven regulando los minutos de uso ni apelando a la fuerza de voluntad. El ciberacoso, los intentos de manipulación de adultos con fines sexuales, el chantaje tras el intercambio de fotos íntimas y la creación de imágenes sintéticas sin consentimiento requieren protocolos claros de protección y una respuesta adulta serena, inmediata y libre de culpabilización.',
    whatWeKnow: [
      'El mayor obstáculo para que un menor pida ayuda en situaciones graves es el miedo al castigo, a la retirada del dispositivo o al reproche moral por haber cometido un error.',
      'Ceder a las exigencias de un extorsionador o abonar dinero en casos de sextorsión rara vez detiene el chantaje; de hecho, suele acelerar nuevas demandas.',
      'Aunque un deepfake sexual sea generado por una máquina y no represente una foto real, el sufrimiento psicológico, la humillación social y el impacto en la víctima son completamente reales.',
    ],
    whatWeDontKnow: [
      'Todavía es incierta la eficacia a medio plazo de los sistemas de verificación de edad basados en biometría facial frente a la sofisticación de las herramientas de generación sintética.',
    ],
    recommendations: [
      'Transmitir el mensaje nuclear del hogar: «Si algo online te asusta, te da vergüenza o se te va de las manos, ven a contárnoslo. Primero veremos cómo ayudarte a estar seguro; después hablaremos de todo lo demás».',
      'En caso de extorsión o acoso: no borrar conversaciones, guardar capturas con fecha y hora, no pagar nunca, bloquear al agresor y acudir a canales especializados.',
      'Conocer los recursos oficiales y gratuitos disponibles en España (Línea de ayuda de INCIBE 017, Canal Prioritario de la AEPD y Fundación ANAR).',
    ],
    ageGuidance: [
      {
        range: '6–9',
        title: 'La regla del aviso inmediato',
        focus: 'Pedir ayuda sin miedo',
        description: 'Si en un juego o vídeo aparece algo desagradable o alguien desconocido le escribe, apagar la pantalla o llamar inmediatamente a un adulto sin temor a broncas.',
      },
      {
        range: '10–13',
        title: 'Privacidad e identidad',
        focus: 'Desconfianza protectora',
        description: 'Entender que detrás de un perfil en un juego en red o una red social no siempre está quien dice estar; nunca compartir datos personales, colegio ni fotos íntimas.',
      },
      {
        range: '14–18',
        title: 'Consentimiento y sexting seguro',
        focus: 'Responsabilidad penal y apoyo mutuo',
        description: 'Comprender que reenviar imágenes íntimas de terceros o difundir deepfakes es un delito; saber reaccionar como testigo o víctima sin quedar paralizado por la vergüenza.',
      },
    ],
    evidenceIds: ['ev-ciberacoso-prevencion-apoyo'],
    bookChapter: 'Capítulo 6',
    lastReviewed: '1 de octubre de 2026',
    seoDescription: 'Protocolos ante ciberacoso, grooming, sextorsión y deepfakes en menores: pasos inmediatos de seguridad y recursos oficiales de ayuda.',
    keyQuote: 'Si algo online te asusta, te avergüenza o se te va de las manos, ven. Primero veremos cómo ayudarte. Después hablaremos de lo demás.',
  },
  {
    slug: 'videojuegos',
    title: 'Videojuegos, creatividad y vida social online',
    subtitle: 'Estar delante de una pantalla también puede significar estar con otras personas',
    editorialKicker: 'Capítulo 7 del libro',
    intro:
      'Para millones de niños y jóvenes, los videojuegos no son un pasatiempo aislado ni una pérdida de tiempo estéril: son un punto de encuentro con amigos, un espacio donde resolver retos complejos en equipo, construir mundos y explorar narrativas inmersivas. La clave está en distinguir el disfrute apasionado del uso compulsivo condicionado por mecánicas de monetización abusivas.',
    whatWeKnow: [
      'El juego cooperativo online proporciona en muchos casos un espacio genuino de socialización, complicidad y desarrollo de estrategias conjuntas entre iguales.',
      'Ciertas mecánicas comerciales de diseño de juegos (cajas de recompensa o loot boxes, eventos con cuenta atrás, recompensas aleatorias) explotan intencionadamente sesgos psicológicos similares a los del juego de azar.',
      'El trastorno por uso de videojuegos según los criterios clínicos de la OMS no se define por las horas jugadas, sino por la pérdida persistente de control, el desplazamiento grave de funciones vitales y la continuación a pesar de consecuencias negativas evidentes durante al menos 12 meses.',
    ],
    whatWeDontKnow: [
      'No hay respaldo empírico para sostener que jugar a videojuegos «haga más inteligente» en general, ni tampoco para afirmar que los juegos con componentes violentos conviertan de forma causal a jugadores sanos en agresores en la vida real.',
    ],
    recommendations: [
      'Mostrar interés genuino por su experiencia: «¿A qué estás jugando? ¿Cómo funciona? Enséñame una partida». Entender el juego antes de juzgarlo.',
      'Evitar compras integradas desreguladas: desactivar tarjetas bancarias asociadas a consolas o móviles y hablar con claridad sobre cómo ganan dinero los juegos «gratuitos».',
      'Recordar que el juego creativo (programar mods, editar mapas, componer música digital) es una forma legítima y enriquecedora de cultura contemporánea.',
    ],
    ageGuidance: [
      {
        range: '6–9',
        title: 'Juegos cerrados y compartidos',
        focus: 'Cooperación física y pantalla compartida',
        description: 'Preferir títulos sin compras integradas ni chat con desconocidos; jugar juntos en familia para compartir la experiencia lúdica.',
      },
      {
        range: '10–13',
        title: 'Mecánicas de diseño ético',
        focus: 'Detectar los anzuelos comerciales',
        description: 'Aprender a identificar cuándo un juego está diseñado para divertir y cuándo para atrapar mediante recompensas variables y presiones de grupo.',
      },
      {
        range: '14–18',
        title: 'Gestión del tiempo de juego',
        focus: 'Equilibrio vital',
        description: 'Acordar cómo cerrar partidas respetando el ritmo del juego online sin que invada sistemáticamente las horas de cena, descanso o estudio.',
      },
    ],
    evidenceIds: ['ev-videojuegos-trastorno-prevalencia'],
    bookChapter: 'Capítulo 7',
    lastReviewed: '1 de octubre de 2026',
    seoDescription: 'Videojuegos en la infancia y adolescencia: cuándo son juego cooperativo y creatividad, y cuándo alertan de un uso compulsivo.',
    keyQuote: 'Estar delante de una pantalla jugando con amigos puede ser una tarde de risas compartidas. El ocio no necesita justificarse siempre con una promesa de rendimiento.',
  },
  {
    slug: 'escuela',
    title: 'Móviles, pantallas y aprendizaje',
    subtitle: 'Tener tecnología en el aula y mejorar la educación no son sinónimos',
    editorialKicker: 'Capítulo 8 del libro',
    intro:
      'El debate sobre la digitalización escolar ha estado frecuentemente dominado por dos simplificaciones opuestas: el entusiasmo acrítico de quienes creyeron que llenar las clases de pantallas modernizaría por arte de magia la pedagogía, y el pánico reactivo de quienes exigen la vuelta inmediata al papel como solución única. Entre ambos extremos, la evidencia nos invita a hacernos preguntas más precisas.',
    whatWeKnow: [
      'La presencia libre de teléfonos móviles personales durante las clases constituye una fuente probada de distracción cognitiva tanto para quien los usa como para quienes le rodean.',
      'La lectura profunda de textos largos y complejos sigue mostrando ventajas empíricas en soporte físico de papel respecto a la pantalla digital en lo que concierne a comprensión y recuerdo duradero.',
      'Las políticas de restricción de smartphones en los centros escolares mejoran la convivencia y disminuyen los conflictos cotidianos en los patios, aunque su impacto directo en las calificaciones académicas es desigual y depende de factores socioeducativos amplios.',
    ],
    whatWeDontKnow: [
      'No hay datos que demuestren que la eliminación indiscriminada de cualquier herramienta tecnológica en las aulas prepare mejor a los alumnos para el mundo laboral y ciudadano que encontrarán al graduarse.',
    ],
    recommendations: [
      'Preguntar al centro educativo con criterio y sin hostilidad: «¿Para qué tarea concreta se utiliza la pantalla?», «¿Cuándo se cierra y se escribe a mano?», «¿Qué política de móviles rige en el centro?».',
      'Distinguir con nitidez entre un smartphone personal con notificaciones abiertas y un dispositivo educativo regulado o un software de apoyo específico.',
      'Recordar que retirar interferencias del aula y educar en competencias digitales críticas son dos misiones complementarias, no contradictorias.',
    ],
    ageGuidance: [
      {
        range: '6–9',
        title: 'Prioridad al soporte físico',
        focus: 'Lectoescritura y motricidad',
        description: 'La escritura manual, la lectura en libros de papel y el juego manipulativo deben ser el núcleo indiscutible del aprendizaje primario.',
      },
      {
        range: '10–13',
        title: 'Aulas sin móvil personal',
        focus: 'Entorno protegido de concentración',
        description: 'Apoyo firme a las normativas de centro que mantienen los teléfonos apagados o en taquillas durante toda la jornada lectiva y recreos.',
      },
      {
        range: '14–18',
        title: 'Uso instrumental guiado',
        focus: 'Herramientas de investigación',
        description: 'Aprender a buscar fuentes bibliográficas fiables, redactar ensayos con rigor y utilizar tecnología para crear conocimiento en lugar de consumir pasivamente.',
      },
    ],
    evidenceIds: ['ev-escuela-moviles-restriccion', 'ev-lectura-papel-pantalla'],
    bookChapter: 'Capítulo 8',
    lastReviewed: '1 de octubre de 2026',
    seoDescription: 'Móviles en los colegios y digitalización educativa: qué dice la investigación sobre atención en clase, lectura en papel y políticas escolares.',
    keyQuote: 'Tener una pantalla en el pupitre y mejorar el aprendizaje no son sinónimos. La pregunta que importa es qué aporta este dispositivo a esta tarea concreta.',
  },
  {
    slug: 'ia-aprendizaje',
    title: 'Inteligencia artificial y aprendizaje',
    subtitle: 'La IA puede mejorar una tarea sin mejorar a quien la hace',
    editorialKicker: 'Capítulos 9 y 10 del libro',
    intro:
      'Una inteligencia artificial generativa puede redactar una redacción de historia, resolver una ecuación paso a paso, traducir un poema o programar un script funcional en cuestión de segundos. Eso abre horizontes fascinantes. Pero al mismo tiempo visibiliza una fractura que antes era mucho más difícil de disimular: entregar una tarea terminada y aprender a resolverla ya no son necesariamente la misma cosa.',
    whatWeKnow: [
      'Cuando un estudiante delega en un sistema automatizado la fase de esfuerzo cognitivo, resolución de problemas y estructuración del pensamiento, la sensación de competencia inmediata es muy alta, pero la adquisición de esquemas conceptuales en memoria a largo plazo es prácticamente nula.',
      'La inteligencia artificial resulta extraordinariamente eficaz como tutora interactiva: ofreciendo pistas socráticas, proponiendo explicaciones alternativas ante dudas, criticando argumentos y generando ejercicios de práctica adaptativa.',
      'El rendimiento asistido (lo que el alumno produce con la máquina) suele ocultar el nivel real de aprendizaje autónomo si no se evalúa de forma específica.',
    ],
    whatWeDontKnow: [
      'Aún no disponemos de estudios longitudinales concluyentes sobre cómo la interacción precoz y continuada con modelos conversacionales afectará al desarrollo de la perseverancia frente a la frustración intelectual.',
    ],
    recommendations: [
      'Aplicar el principio «Tutor antes que autor»: la IA debe ayudar a pensar, no a firmar trabajos en nuestro nombre.',
      'Regla práctica de estudio: «Primero intenta por tu cuenta; después pregunta a la máquina para contrastar, ampliar o detectar errores».',
      'Pasar el test de la autoría: «¿Puedes explicar con tus propias palabras lo que dice ese texto? ¿Entiendes por qué funciona esa solución? Si apagamos la pantalla, ¿qué parte es realmente tuya?».',
    ],
    ageGuidance: [
      {
        range: '6–9',
        title: 'Exploración acompañada',
        focus: 'Curiosidad y magia desmitificada',
        description: 'Uso exclusivamente conjunto con un adulto para resolver dudas puntuales o inventar historias curiosas, explicando que no es un ser vivo que piensa o siente.',
      },
      {
        range: '10–13',
        title: 'Tutor vs Autor',
        focus: 'Aprender a pedir pistas',
        description: 'Enseñar a pedirle a la IA que haga preguntas o señale fallos en un borrador propio en lugar de pedirle que escriba el texto desde cero.',
      },
      {
        range: '14–18',
        title: 'Honestidad académica y criterio',
        focus: 'Transparencia de procesos',
        description: 'Exigir declarar el uso de la herramienta, defender las ideas oralmente y desarrollar una ética de autoría madura donde el criterio final recaiga en la persona.',
      },
    ],
    evidenceIds: ['ev-ia-aprendizaje-esfuerzo-cognitivo'],
    bookChapter: 'Capítulos 9 y 10',
    lastReviewed: '1 de octubre de 2026',
    seoDescription: 'Inteligencia artificial en la educación: cómo utilizarla como tutora y no como autora, evitando que sustituya el pensamiento propio de los estudiantes.',
    keyQuote: 'Una máquina puede escribir un trabajo entero en tres segundos. Terminar una tarea y aprender a hacerla ya no son la misma cosa.',
  },
  {
    slug: 'pensamiento-critico-ia',
    title: 'Pensamiento crítico e IA',
    subtitle: 'Una respuesta convincente no es necesariamente una respuesta fiable',
    editorialKicker: 'Capítulo 11 del libro',
    intro:
      'Los modelos de lenguaje actuales están entrenados para generar textos fluidos, gramaticalmente impecables y con un tono de autoridad tranquilizadora. Eso crea una ilusión muy potente de veracidad. Sin embargo, fluidez verbal no equivale a conocimiento de los hechos. Educar el pensamiento crítico hoy significa, más que nunca, aprender a calibrar la confianza y verificar activamente las afirmaciones.',
    whatWeKnow: [
      'Los sistemas de IA inventan con frecuencia datos que suenan completamente plausibles (las llamadas alucinaciones o confabulaciones), inventando citas bibliográficas, autores existentes en revistas ficticias o fechas erróneas con absoluta convicción sintáctica.',
      'El sesgo de automatización lleva a los humanos —especialmente a estudiantes jóvenes— a confiar más en el resultado de una máquina que en su propia capacidad de juicio o en libros contrastados.',
      'Interactuar con un chatbot empático no genera reciprocidad moral, deber de cuidado ni confidencialidad legal garantizada sobre los datos personales vertidos en la conversación.',
    ],
    whatWeDontKnow: [
      'No se conoce con certeza si las nuevas arquitecturas de razonamiento con búsqueda en internet eliminarán por completo las confabulaciones sutiles en campos científicos de alta especialización.',
    ],
    recommendations: [
      'Vigilar con lupa las cuatro «zonas rojas» donde la IA falla con mayor facilidad: fechas concretas, cifras numéricas exactas, citas textuales entrecomilladas y referencias a estudios o leyes.',
      'Aprender la rutina de contraste: salir de la conversación del chatbot, abrir un buscador independiente y comprobar si la fuente citada existe en la realidad y qué concluyó verdaderamente.',
      'Recordar en casa y en clase: «Una respuesta no es cierta solo porque esté bien escrita o nos dé la razón».',
    ],
    ageGuidance: [
      {
        range: '6–9',
        title: 'La máquina que adivina palabras',
        focus: 'Desmitificar la mente artificial',
        description: 'Explicar con metáforas sencillas que la máquina no sabe lo que es la verdad: solo une palabras que suelen ir juntas según lo que ha leído antes.',
      },
      {
        range: '10–13',
        title: 'Cazar el error',
        focus: 'Jugar a verificar',
        description: 'Plantear ejercicios donde busquen deliberadamente errores en respuestas de IA comparándolas con libros o enciclopedias fiables.',
      },
      {
        range: '14–18',
        title: 'Calibración de la duda',
        focus: 'Epistemología práctica',
        description: 'Identificar sesgos de confirmación, intereses comerciales de las empresas desarrolladoras y aprender a auditar la trazabilidad de cualquier dato crucial.',
      },
    ],
    evidenceIds: ['ev-ia-confianza-sesgo-automatizacion'],
    bookChapter: 'Capítulo 11',
    lastReviewed: '1 de octubre de 2026',
    seoDescription: 'Pensamiento crítico frente a la inteligencia artificial: cómo enseñar a niños y adolescentes a no creer una respuesta solo por su elocuencia.',
    keyQuote: 'Pensamiento crítico no significa desconfiar de todo por sistema; significa calibrar la confianza en función de las pruebas disponibles.',
  },
  {
    slug: 'contenido-sintetico',
    title: 'Vídeo corto, contenido sintético y sharenting',
    subtitle: 'La tecnología cambia más deprisa que la investigación',
    editorialKicker: 'Capítulo 12 del libro',
    intro:
      'La dieta visual de la infancia y la adolescencia ha mutado de forma radical: de los formatos largos y pausados a carruseles infinitos de clips de quince segundos optimizados algorítmicamente, imágenes sintéticas hiperrealistas y la constante exposición de la propia intimidad familiar en redes sociales sin consentimiento explícito.',
    whatWeKnow: [
      'El consumo compulsivo y prolongado de vídeo ultracorto se asocia con mayores dificultades percibidas para mantener la atención sostenida en tareas complejas que no ofrecen gratificación inmediata constante.',
      'En la era del contenido sintético audiovisual, ver u oír una grabación ya no constituye una prueba jurídica ni periodística suficiente de que un acontecimiento haya sucedido verdaderamente.',
      'La sobreexposición pública de la vida de menores por parte de sus propios progenitores (sharenting) genera una huella digital imborrable que puede comprometer su privacidad, su seguridad personal y su autonomía identitaria al llegar a la adolescencia.',
    ],
    whatWeDontKnow: [
      'No disponemos todavía de investigaciones maduras con seguimiento de varias décadas sobre las implicaciones psicosociales de haber crecido con una identidad digital construida por terceros desde el nacimiento.',
    ],
    recommendations: [
      'Hacerse la pregunta frente al scroll infinito: «¿Puedo decidir conscientemente cuándo termino de ver vídeos, o simplemente continúo hasta que un factor externo me interrumpe?».',
      'Inculcar la regla básica ante vídeos sensacionalistas o virales: «No creas nada automáticamente solo porque puedas verlo u oírlo con tus ojos».',
      'Antes de publicar una foto o anécdota de un hijo en internet, preguntarse con honestidad: «¿De quién es realmente esta historia? ¿Le gustará encontrársela a sus dieciséis años?». Darles derecho de veto a medida que crecen.',
    ],
    ageGuidance: [
      {
        range: '6–9',
        title: 'Proteger su huella',
        focus: 'Cero exposición ajena',
        description: 'Los adultos tienen el deber ético de no difundir fotos o datos escolares de los menores en perfiles públicos de internet.',
      },
      {
        range: '10–13',
        title: 'Ver no es creer',
        focus: 'Alfabetización audiovisual sintética',
        description: 'Mostrar ejemplos prácticos de vídeos manipulados y clones de voz para que entiendan la facilidad de la falsificación contemporánea.',
      },
      {
        range: '14–18',
        title: 'Dueños de su propia historia',
        focus: 'Soberanía de imagen',
        description: 'Respeto escrupuloso a sus deseos sobre qué se comparte de ellos y fomento de un sentido crítico sobre la mercantilización de su propia imagen.',
      },
    ],
    evidenceIds: ['ev-video-corto-atencion', 'ev-sharenting-privacidad'],
    bookChapter: 'Capítulo 12',
    lastReviewed: '1 de octubre de 2026',
    seoDescription: 'Vídeo corto, deepfakes y sharenting: el impacto del scroll infinito algorítmico y la huella digital construida desde la infancia.',
    keyQuote: 'Ver y oír ya no significa que algo haya ocurrido. No creas algo únicamente porque tus ojos puedan contemplarlo en una pantalla.',
  },
  {
    slug: 'regulacion',
    title: 'Leyes, plataformas, colegios y acción colectiva',
    subtitle: 'Hay problemas que una familia no puede resolver sola',
    editorialKicker: 'Capítulo 13 del libro',
    intro:
      'Hacer recaer sobre los hombros de cada familia individual toda la responsabilidad de enfrentarse a los equipos de ingeniería de persuasión más sofisticados del planeta no solo es injusto: es ineficaz. La protección de la infancia en el entorno digital exige regulaciones exigentes sobre las plataformas, normativas escolares coherentes y acuerdos comunitarios que reduzcan la presión social sobre los menores.',
    whatWeKnow: [
      'La regulación legal puede imponer salvaguardas estructurales indispensables: privacidad reforzada por defecto para menores, prohibición del perfilado algorítmico comercial, facilitación de canales de denuncia urgente y exigencia de diseño seguro.',
      'Los pactos comunitarios entre familias de una misma clase o comunidad reducen drásticamente el coste social de retrasar el primer smartphone o restringir redes sociales («el miedo a ser el único que se queda fuera»).',
      'Una ley no puede, por sí sola, sustituir la educación afectivo-sexual, el pensamiento crítico, la confianza familiar para pedir ayuda ni la curiosidad intelectual.',
    ],
    whatWeDontKnow: [
      'Aún no existe consenso técnico ni jurídico internacional sobre cuál es la fórmula de verificación de edad que mejor equilibre la protección efectiva de la infancia con el derecho irrenunciable a la privacidad de los usuarios adultos.',
    ],
    recommendations: [
      'Participar en iniciativas comunitarias escolares para acordar entre varias familias fechas compartidas de acceso a smartphones y dispositivos propios.',
      'Exigir a las administraciones públicas y plataformas tecnológicas responsabilidades claras por diseño en lugar de conformarse con meras advertencias formales.',
      'Recordar siempre: la protección estructural por ley y la educación familiar no son alternativas en disputa, sino dos pilares que se necesitan mutuamente.',
    ],
    ageGuidance: [
      {
        range: '6–9',
        title: 'Protección ambiental',
        focus: 'Garantías legales de seguridad',
        description: 'Exigencia de espacios infantiles rigurosamente limpios de publicidad agresiva y recolección encubierta de datos.',
      },
      {
        range: '10–13',
        title: 'Acción colectiva entre familias',
        focus: 'Reducir la presión del grupo',
        description: 'Conversar con otras familias del colegio para consensuar criterios comunes sobre dispositivos en excursiones, cumpleaños y fines de semana.',
      },
      {
        range: '14–18',
        title: 'Ciudadanía digital y derechos',
        focus: 'Conciencia cívica',
        description: 'Comprender que la privacidad, la neutralidad de la red y la regulación del poder corporativo tecnológico son debates democráticos de primer orden.',
      },
    ],
    evidenceIds: ['ev-regulacion-diseno-seguridad'],
    bookChapter: 'Capítulo 13',
    lastReviewed: '1 de octubre de 2026',
    seoDescription: 'Regulación de plataformas, móviles en las escuelas y pactos entre familias: por qué la responsabilidad digital no recae solo en el hogar.',
    keyQuote: 'Protección estructural y educación crítica no son alternativas en disputa: son dos mitades de la misma respuesta.',
  },
];
