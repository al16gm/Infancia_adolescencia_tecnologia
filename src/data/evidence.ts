export type EvidenceLevel =
  | "robusta"
  | "moderada"
  | "emergente"
  | "prudencial"
  | null;

export type SourceRole =
  | "academic"
  | "official_data"
  | "policy"
  | "guidance"
  | "safety_resource"
  | "contextual";

export type VerificationStatus =
  | "verified"
  | "source-map-reviewed";

export interface EvidenceItem {
  id: string;
  slug: string;
  title: string;
  authors: string[];
  year: number;
  publisher: string;
  doi?: string;
  url?: string;
  studyType: string;
  sourceRole: SourceRole;
  population?: string;
  ageRange?: string;
  sampleSize?: string;
  topics: string[];
  evidenceLevel: EvidenceLevel;
  whatItStudied: string;
  mainFindings: string;
  limitations: string;
  usedFor: string;
  citation: string;
  lastReviewed?: string;
  verificationStatus?: VerificationStatus;
  reviewNote?: string;
}

export const DOI_BASE = "https://doi.org/";

const rawEvidence: EvidenceItem[] = [

  // =========================================================
  // PANTALLAS, BIENESTAR Y PRIMERA INFANCIA
  // =========================================================

  {
    id: "ev001",
    slug: "orben-przybylski-2019-digital-wellbeing",
    title: "The association between adolescent well-being and digital technology use",
    authors: ["Amy Orben", "Andrew K. Przybylski"],
    year: 2019,
    publisher: "Nature Human Behaviour",
    doi: "10.1038/s41562-018-0506-1",
    studyType: "Análisis observacional de grandes bases de datos",
    sourceRole: "academic",
    population: "Adolescentes de grandes encuestas poblacionales",
    ageRange: "Adolescencia",
    topics: ["pantallas", "redes-sociales"],
    evidenceLevel: "moderada",
    whatItStudied:
      "La asociación entre uso de tecnología digital y bienestar adolescente mediante múltiples decisiones analíticas.",
    mainFindings:
      "Las asociaciones promedio fueron muy pequeñas. El uso digital explicaba una fracción muy reducida de la variación observada en bienestar.",
    limitations:
      "Es evidencia observacional y un efecto promedio pequeño no descarta efectos relevantes en personas, usos o contextos concretos.",
    usedFor:
      "Capítulos 1 y 2: calibrar el tamaño de los efectos y evitar convertir asociaciones pequeñas en daños generacionales.",
    citation:
      "Orben A, Przybylski AK. Nature Human Behaviour. 2019;3:173–182. doi:10.1038/s41562-018-0506-1."
  },

  {
    id: "ev002",
    slug: "stiglic-viner-2019-screentime-review",
    title:
      "Effects of screentime on the health and well-being of children and adolescents: a systematic review of reviews",
    authors: ["Neza Stiglic", "Russell M. Viner"],
    year: 2019,
    publisher: "BMJ Open",
    doi: "10.1136/bmjopen-2018-023191",
    studyType: "Revisión sistemática de revisiones",
    sourceRole: "academic",
    population: "Niños y adolescentes",
    ageRange: "Infancia y adolescencia",
    topics: ["pantallas", "sueno-atencion"],
    evidenceLevel: "robusta",
    whatItStudied:
      "El conjunto de revisiones disponibles sobre tiempo de pantalla y múltiples resultados de salud y bienestar.",
    mainFindings:
      "Encontró asociaciones más consistentes con algunos resultados, pero evidencia débil o insuficiente para muchos otros.",
    limitations:
      "Las revisiones y exposiciones incluidas son heterogéneas y el tiempo total de pantalla agrupa actividades muy distintas.",
    usedFor:
      "Capítulos 1–3: explicar por qué tiempo total de pantalla es una medida limitada.",
    citation:
      "Stiglic N, Viner RM. BMJ Open. 2019;9:e023191. doi:10.1136/bmjopen-2018-023191."
  },

  {
    id: "ev003",
    slug: "eirich-2022-screen-behaviour",
    title:
      "Association of Screen Time With Internalizing and Externalizing Behavior Problems in Children 12 Years or Younger: A Systematic Review and Meta-analysis",
    authors: [
      "Rachel Eirich",
      "Brae Anne McArthur",
      "Cara Anhorn",
      "Colleen McGuinness",
      "Dimitri A. Christakis",
      "Sheri Madigan"
    ],
    year: 2022,
    publisher: "JAMA Psychiatry",
    doi: "10.1001/jamapsychiatry.2022.0155",
    studyType: "Revisión sistemática y metaanálisis",
    sourceRole: "academic",
    population: "Niños de 12 años o menos",
    ageRange: "≤12 años",
    sampleSize: "87 estudios; 159.425 participantes",
    topics: ["pantallas", "sueno-atencion"],
    evidenceLevel: "robusta",
    whatItStudied:
      "La relación entre duración del tiempo de pantalla y problemas internalizantes y externalizantes.",
    mainFindings:
      "Las asociaciones agregadas fueron estadísticamente significativas pero pequeñas.",
    limitations:
      "Gran parte de la evidencia es observacional y existen diferencias importantes en cómo se miden pantalla y comportamiento.",
    usedFor:
      "Capítulos 1–3: diferenciar existencia de una asociación de su importancia práctica.",
    citation:
      "Eirich R, et al. JAMA Psychiatry. 2022;79(5):393–405. doi:10.1001/jamapsychiatry.2022.0155."
  },

  {
    id: "ev004",
    slug: "teague-2026-digital-media-child-health",
    title:
      "Digital Media Use and Child Health and Development: A Systematic Review and Meta-Analysis",
    authors: ["S. Teague et al."],
    year: 2026,
    publisher: "JAMA Pediatrics",
    doi: "10.1001/jamapediatrics.2026.0085",
    url: "https://pubmed.ncbi.nlm.nih.gov/41801211/",
    studyType: "Revisión sistemática y metaanálisis",
    sourceRole: "academic",
    population: "Niños y adolescentes",
    ageRange: "Infancia y adolescencia",
    topics: ["pantallas", "sueno-atencion", "redes-sociales"],
    evidenceLevel: "robusta",
    whatItStudied:
      "Una síntesis amplia de relaciones entre medios digitales, salud y desarrollo infantil.",
    mainFindings:
      "La evidencia refuerza la importancia de distinguir tipos de uso, resultados y contextos en vez de considerar lo digital como una exposición única.",
    limitations:
      "La heterogeneidad de usos y diseños impide convertir la síntesis en una regla causal única.",
    usedFor:
      "Contexto general actualizado de los capítulos 2–4.",
    citation:
      "Teague S, et al. JAMA Pediatrics. 2026;180(5):510–517. doi:10.1001/jamapediatrics.2026.0085."
  },

  {
    id: "ev005",
    slug: "taylor-2024-adult-child-co-use",
    title:
      "Does adult-child co-use during digital media use improve children's learning aged 0–6 years?",
    authors: [
      "Gemma Taylor",
      "Giovanni Sala",
      "Joanna Kolak",
      "Peter Gerhardstein",
      "Jamie Lingwood"
    ],
    year: 2024,
    publisher: "Educational Research Review",
    doi: "10.1016/j.edurev.2024.100614",
    studyType: "Revisión sistemática y metaanálisis",
    sourceRole: "academic",
    population: "Niños pequeños y adultos durante uso digital conjunto",
    ageRange: "0–6 años",
    sampleSize: "17 estudios; 1.288 participantes",
    topics: ["pantallas", "normas-primer-movil"],
    evidenceLevel: "moderada",
    whatItStudied:
      "Si el uso conjunto adulto-niño durante actividades digitales mejora resultados de aprendizaje.",
    mainFindings:
      "El co-uso mostró un pequeño beneficio promedio de aprendizaje.",
    limitations:
      "El número de estudios es limitado y existen diferencias importantes entre contenidos y formas de acompañamiento.",
    usedFor:
      "Acompañamiento y co-uso en infancia temprana.",
    citation:
      "Taylor G, et al. Educational Research Review. 2024;44:100614. doi:10.1016/j.edurev.2024.100614."
  },

  {
    id: "ev006",
    slug: "mathers-2025-joint-media-engagement",
    title:
      "Features of digital media which influence social interactions between adults and children aged 2–7 years during joint media engagement: A multi-level meta-analysis",
    authors: ["Sandra J. Mathers et al."],
    year: 2025,
    publisher: "Educational Research Review",
    doi: "10.1016/j.edurev.2025.100665",
    studyType: "Metaanálisis multinivel",
    sourceRole: "academic",
    population: "Parejas adulto-niño durante uso conjunto de medios digitales",
    ageRange: "2–7 años",
    sampleSize: "15 estudios; 627 parejas",
    topics: ["pantallas", "normas-primer-movil"],
    evidenceLevel: "moderada",
    whatItStudied:
      "Qué características de los medios digitales favorecen o dificultan la interacción adulto-niño.",
    mainFindings:
      "Determinados diseños y contenidos pueden facilitar interacciones más ricas durante el uso conjunto.",
    limitations:
      "La base empírica todavía es relativamente pequeña.",
    usedFor:
      "Mostrar que diseño y acompañamiento importan especialmente en primeras edades.",
    citation:
      "Mathers SJ, et al. Educational Research Review. 2025;46:100665. doi:10.1016/j.edurev.2025.100665."
  },

  // =========================================================
  // SUEÑO
  // =========================================================

  {
    id: "ev007",
    slug: "bourke-2026-daily-screen-sleep",
    title:
      "Within-Person Association Between Daily Screen Use and Sleep in Youth: A Systematic Review and Meta-Analysis",
    authors: [
      "Matthew Bourke",
      "Claudia I. Maddren",
      "Franziska Sippel",
      "George Thomas"
    ],
    year: 2026,
    publisher: "JAMA Pediatrics",
    doi: "10.1001/jamapediatrics.2025.6490",
    url: "https://pubmed.ncbi.nlm.nih.gov/41770550/",
    studyType: "Metaanálisis de asociaciones intraindividuales",
    sourceRole: "academic",
    population: "Jóvenes seguidos día a día",
    ageRange: "Aproximadamente 3–25 años",
    sampleSize: "25 estudios; 4.562 participantes",
    topics: ["sueno-atencion", "pantallas"],
    evidenceLevel: "robusta",
    whatItStudied:
      "Si una misma persona duerme de forma diferente en los días en que utiliza más pantallas.",
    mainFindings:
      "Los días de mayor uso se asociaron con una hora de acostarse algo más tardía. Los efectos promedio fueron pequeños.",
    limitations:
      "Incluye adultos jóvenes y no todas las formas ni momentos de uso tienen el mismo efecto.",
    usedFor:
      "Capítulo 3: sueño como terreno de intervención razonablemente bien respaldado.",
    citation:
      "Bourke M, et al. JAMA Pediatrics. 2026;180(5):500–509. doi:10.1001/jamapediatrics.2025.6490."
  },

  // =========================================================
  // REDES SOCIALES E IMAGEN CORPORAL
  // =========================================================

  {
    id: "ev008",
    slug: "nagata-2025-social-media-depressive-symptoms",
    title: "Social Media Use and Depressive Symptoms During Early Adolescence",
    authors: ["Jason M. Nagata et al."],
    year: 2025,
    publisher: "JAMA Network Open",
    doi: "10.1001/jamanetworkopen.2025.11704",
    studyType: "Estudio longitudinal",
    sourceRole: "academic",
    population: "Adolescentes tempranos seguidos durante varios años",
    ageRange: "Adolescencia temprana",
    sampleSize: "≈11.876 al inicio",
    topics: ["redes-sociales", "sueno-atencion"],
    evidenceLevel: "moderada",
    whatItStudied:
      "La secuencia temporal entre cambios intraindividuales en uso de redes y síntomas depresivos.",
    mainFindings:
      "Aumentos respecto al uso habitual de una misma persona precedieron pequeños aumentos posteriores de síntomas depresivos en el modelo principal.",
    limitations:
      "El efecto es pequeño y un diseño longitudinal no elimina toda confusión residual.",
    usedFor:
      "Capítulo 4: evidencia longitudinal sin presentar redes como explicación total de la salud mental.",
    citation:
      "Nagata JM, et al. JAMA Network Open. 2025;8(5):e2511704. doi:10.1001/jamanetworkopen.2025.11704."
  },

  {
    id: "ev009",
    slug: "bonfanti-2025-social-comparison-body-image",
    title:
      "The association between social comparison in social media, body image concerns and eating disorder symptoms: A systematic review and meta-analysis",
    authors: ["Rita C. Bonfanti et al."],
    year: 2025,
    publisher: "Body Image",
    doi: "10.1016/j.bodyim.2024.101841",
    url: "https://pubmed.ncbi.nlm.nih.gov/39721448/",
    studyType: "Revisión sistemática y metaanálisis",
    sourceRole: "academic",
    population: "Usuarios de redes sociales",
    ageRange: "Principalmente adolescentes y jóvenes",
    sampleSize: "83 estudios; 55.440 participantes",
    topics: ["redes-sociales"],
    evidenceLevel: "robusta",
    whatItStudied:
      "Comparación social online, preocupación corporal y síntomas de trastornos alimentarios.",
    mainFindings:
      "La comparación social online mostró asociaciones consistentes con preocupación corporal y síntomas alimentarios.",
    limitations:
      "La evidencia es fundamentalmente correlacional y no demuestra que cualquier uso de redes cause insatisfacción corporal.",
    usedFor:
      "Capítulo 4: comparación social e imagen corporal.",
    citation:
      "Bonfanti RC, et al. Body Image. 2025;52:101841. doi:10.1016/j.bodyim.2024.101841."
  },

  {
    id: "ev010",
    slug: "wang-2025-social-media-self-objectification",
    title:
      "Unveiling the relationship between social media and self-objectification: A three-level meta-analysis",
    authors: ["H. Wang", "M. A. B. Alivi", "S. E. B. Mustafa"],
    year: 2025,
    publisher: "Body Image",
    doi: "10.1016/j.bodyim.2025.101895",
    url: "https://pubmed.ncbi.nlm.nih.gov/40311165/",
    studyType: "Metaanálisis de tres niveles",
    sourceRole: "academic",
    population: "Usuarios de redes sociales",
    ageRange: "Adolescentes y adultos jóvenes predominantes",
    sampleSize: "68 artículos; 218 efectos",
    topics: ["redes-sociales"],
    evidenceLevel: "robusta",
    whatItStudied:
      "La relación entre uso de redes sociales y auto-objetificación.",
    mainFindings:
      "Encontró una asociación positiva pequeña-moderada en el conjunto de los estudios.",
    limitations:
      "Predominan diseños observacionales y existen diferencias importantes según uso y población.",
    usedFor:
      "Capítulo 4: cuerpo bajo examen y autoevaluación constante.",
    citation:
      "Wang H, Alivi MAB, Mustafa SEB. Body Image. 2025;53:101895. doi:10.1016/j.bodyim.2025.101895."
  },

  {
    id: "ev011",
    slug: "liu-2022-social-media-depression-dose-response",
    title:
      "Time Spent on Social Media and Risk of Depression in Adolescents: A Dose-Response Meta-Analysis",
    authors: ["M. Liu et al."],
    year: 2022,
    publisher:
      "International Journal of Environmental Research and Public Health",
    doi: "10.3390/ijerph19095164",
    studyType: "Metaanálisis dosis-respuesta",
    sourceRole: "academic",
    population: "Adolescentes",
    ageRange: "Adolescencia",
    sampleSize: "26 estudios; 55.340 participantes",
    topics: ["redes-sociales"],
    evidenceLevel: "moderada",
    whatItStudied:
      "La asociación entre tiempo en redes y riesgo de depresión, incluyendo diferencias por sexo.",
    mainFindings:
      "Encontró asociación dosis-respuesta y diferencias entre chicas y chicos en los estudios incluidos.",
    limitations:
      "Alta heterogeneidad, medición autorreportada y predominio de estudios observacionales.",
    usedFor:
      "Contextualizar diferencias de grupo sin tratarlas como destino individual.",
    citation:
      "Liu M, et al. IJERPH. 2022;19(9):5164. doi:10.3390/ijerph19095164."
  },

  // =========================================================
  // VÍDEO CORTO
  // =========================================================

  {
    id: "ev012",
    slug: "nguyen-2025-short-form-video",
    title:
      "Feeds, feelings, and focus: A systematic review and meta-analysis examining the cognitive and mental health correlates of short-form video use",
    authors: ["L. Nguyen et al."],
    year: 2025,
    publisher: "Psychological Bulletin",
    doi: "10.1037/bul0000498",
    url: "https://pubmed.ncbi.nlm.nih.gov/41231585/",
    studyType: "Revisión sistemática y metaanálisis",
    sourceRole: "academic",
    population: "Usuarios de vídeo corto de múltiples edades",
    ageRange: "Incluye adolescentes y adultos",
    sampleSize: "71 estudios; 98.299 participantes",
    topics: ["contenido-sintetico", "sueno-atencion"],
    evidenceLevel: "moderada",
    whatItStudied:
      "Correlatos cognitivos y de salud mental del uso de vídeo corto.",
    mainFindings:
      "Mayor uso se asoció con peores resultados cognitivos agregados, especialmente atención y control inhibitorio.",
    limitations:
      "Gran parte de la evidencia es correlacional, incluye adultos y tiene concentración geográfica. No demuestra que el formato cause deterioro atencional.",
    usedFor:
      "Capítulos 3 y 12: señal relevante sobre vídeo corto sin afirmar causalidad definitiva.",
    citation:
      "Nguyen L, et al. Psychological Bulletin. 2025;151(9):1125–1146. doi:10.1037/bul0000498."
  },

  {
    id: "ev013",
    slug: "conte-2025-tiktok-adolescence",
    title:
      "Scrolling through adolescence: a systematic review of the impact of TikTok on adolescent mental health",
    authors: ["G. Conte et al."],
    year: 2025,
    publisher: "European Child & Adolescent Psychiatry",
    doi: "10.1007/s00787-024-02581-w",
    url: "https://pubmed.ncbi.nlm.nih.gov/39412670/",
    studyType: "Revisión sistemática",
    sourceRole: "academic",
    population: "Adolescentes usuarios de TikTok",
    ageRange: "Adolescencia",
    sampleSize: "20 estudios; ≈17.336 participantes",
    topics: ["contenido-sintetico", "redes-sociales"],
    evidenceLevel: "emergente",
    whatItStudied:
      "La literatura sobre uso de TikTok y salud mental adolescente.",
    mainFindings:
      "Identificó asociaciones con diferentes resultados de salud mental y patrones problemáticos de uso.",
    limitations:
      "Base observacional, heterogénea y específica de una plataforma.",
    usedFor:
      "Capítulo 12: contexto específicamente adolescente sobre vídeo corto.",
    citation:
      "Conte G, et al. Eur Child Adolesc Psychiatry. 2025;34:1511–1527. doi:10.1007/s00787-024-02581-w."
  },

  // =========================================================
  // MEDIACIÓN FAMILIAR
  // =========================================================

  {
    id: "ev014",
    slug: "morawska-2026-parental-factors-social-media",
    title:
      "Parental Factors Associated with Social Media Use in Adolescence: A Systematic Review",
    authors: ["Alina Morawska", "J. Adina", "Asad Khan", "Karen M. T. Turner"],
    year: 2026,
    publisher: "Journal of Adolescence",
    doi: "10.1002/jad.70062",
    studyType: "Revisión sistemática",
    sourceRole: "academic",
    population: "Adolescentes y sus familias",
    ageRange: "10–19 años",
    sampleSize: "27 estudios; 26.337 adolescentes",
    topics: ["normas-primer-movil", "redes-sociales"],
    evidenceLevel: "moderada",
    whatItStudied:
      "Factores parentales asociados con el uso de redes durante la adolescencia.",
    mainFindings:
      "Modelado, comunicación, mediación, supervisión y límites aparecen relacionados con los patrones de uso.",
    limitations:
      "Los resultados sobre monitoreo y restricción son mixtos y predominan estudios observacionales.",
    usedFor:
      "Capítulo 5: combinar conversación, ejemplo, supervisión y límites.",
    citation:
      "Morawska A, et al. Journal of Adolescence. 2026;98(1):51–68. doi:10.1002/jad.70062."
  },

  {
    id: "ev015",
    slug: "sevilla-fernandez-2025-parental-mediation",
    title:
      "Parental mediation and the use of social networks: A systematic review",
    authors: ["D. Sevilla-Fernández et al."],
    year: 2025,
    publisher: "PLOS ONE",
    doi: "10.1371/journal.pone.0312011",
    studyType: "Revisión sistemática",
    sourceRole: "academic",
    population: "Niños, adolescentes y familias",
    ageRange: "9–18 años",
    sampleSize: "32 artículos",
    topics: ["normas-primer-movil", "redes-sociales"],
    evidenceLevel: "moderada",
    whatItStudied:
      "Diferentes estrategias de mediación parental y su relación con el uso de redes.",
    mainFindings:
      "Estrategias activas y restrictivas pueden cumplir funciones diferentes; algunas restricciones reducen uso o exposición a riesgos.",
    limitations:
      "Los efectos varían por edad, contexto y resultado medido.",
    usedFor:
      "Evitar la simplificación 'hablar bien, restringir mal'.",
    citation:
      "Sevilla-Fernández D, et al. PLOS ONE. 2025;20(2):e0312011. doi:10.1371/journal.pone.0312011."
  },

  // =========================================================
  // ESCUELA Y RENDIMIENTO
  // =========================================================

  {
    id: "ev016",
    slug: "paterna-2024-problematic-smartphone-academic",
    title:
      "Problematic smartphone use and academic achievement: A systematic review and meta-analysis",
    authors: ["A. Paterna et al."],
    year: 2024,
    publisher: "Journal of Behavioral Addictions",
    doi: "10.1556/2006.2024.00014",
    url: "https://pubmed.ncbi.nlm.nih.gov/38669081/",
    studyType: "Revisión sistemática y metaanálisis",
    sourceRole: "academic",
    population: "Estudiantes",
    ageRange: "Adolescentes y jóvenes",
    sampleSize: "29 estudios; 48.490 participantes",
    topics: ["escuela", "pantallas"],
    evidenceLevel: "moderada",
    whatItStudied:
      "Uso problemático de smartphone y rendimiento académico.",
    mainFindings:
      "Encontró una asociación negativa pequeña con rendimiento académico.",
    limitations:
      "La relación es pequeña y principalmente observacional; uso problemático no equivale a tiempo total.",
    usedFor:
      "Capítulo 8: separar uso problemático de mera presencia del dispositivo.",
    citation:
      "Paterna A, et al. Journal of Behavioral Addictions. 2024;13(2):313–326. doi:10.1556/2006.2024.00014."
  },

  {
    id: "ev017",
    slug: "adelantado-renau-2019-screen-academic",
    title:
      "Association Between Screen Media Use and Academic Performance Among Children and Adolescents: A Systematic Review and Meta-analysis",
    authors: ["Mireia Adelantado-Renau et al."],
    year: 2019,
    publisher: "JAMA Pediatrics",
    doi: "10.1001/jamapediatrics.2019.3176",
    url: "https://pubmed.ncbi.nlm.nih.gov/31545344/",
    studyType: "Revisión sistemática y metaanálisis",
    sourceRole: "academic",
    population: "Niños y adolescentes",
    ageRange: "Infancia y adolescencia",
    sampleSize: "58 estudios; 480.479 participantes",
    topics: ["escuela", "pantallas"],
    evidenceLevel: "robusta",
    whatItStudied:
      "Diferentes tipos de uso de pantalla y rendimiento académico.",
    mainFindings:
      "El tiempo total no mostró una relación uniforme; las asociaciones variaron según la actividad concreta.",
    limitations:
      "Los estudios son principalmente observacionales y no capturan bien la calidad pedagógica.",
    usedFor:
      "Capítulos 2 y 8: mostrar que 'pantalla' no es una actividad educativa homogénea.",
    citation:
      "Adelantado-Renau M, et al. JAMA Pediatrics. 2019;173(11):1058–1067. doi:10.1001/jamapediatrics.2019.3176."
  },

  {
    id: "ev018",
    slug: "campbell-2024-school-phone-ban-review",
    title:
      "Evidence for and against banning mobile phones in schools: A scoping review",
    authors: ["Marilyn Campbell et al."],
    year: 2024,
    publisher: "Journal of Psychologists and Counsellors in Schools",
    doi: "10.1177/20556365241270394",
    studyType: "Scoping review",
    sourceRole: "academic",
    population: "Estudios sobre políticas escolares de teléfonos",
    ageRange: "Edad escolar",
    sampleSize: "22 estudios",
    topics: ["escuela", "regulacion"],
    evidenceLevel: "moderada",
    whatItStudied:
      "La evidencia disponible a favor y en contra de prohibiciones escolares de móviles.",
    mainFindings:
      "La literatura es heterogénea y todavía poco concluyente; resultados dependen de implementación y resultado estudiado.",
    limitations:
      "Pocos diseños permiten inferir causalidad y 'prohibición' significa cosas diferentes entre centros.",
    usedFor:
      "Capítulos 8 y 13: prohibiciones como herramienta, no como teoría completa de educación.",
    citation:
      "Campbell M, et al. J Psychologists and Counsellors in Schools. 2024;34(3):242–265. doi:10.1177/20556365241270394."
  },

  {
    id: "ev019",
    slug: "figlio-ozek-2025-florida-cellphone-bans",
    title:
      "The Impact of Cellphone Bans in Schools on Student Outcomes: Evidence from Florida",
    authors: ["David N. Figlio", "Umut Özek"],
    year: 2025,
    publisher: "National Bureau of Economic Research",
    doi: "10.3386/w34388",
    studyType: "Working paper; estudio cuasi-experimental",
    sourceRole: "academic",
    population: "Estudiantes de Florida",
    ageRange: "Edad escolar",
    topics: ["escuela", "regulacion"],
    evidenceLevel: "moderada",
    whatItStudied:
      "Efectos de prohibiciones escolares sobre notas, suspensiones y ausencias.",
    mainFindings:
      "Encontró un aumento inicial de suspensiones y pequeñas mejoras académicas que aparecieron con más claridad tras el periodo de adaptación.",
    limitations:
      "Working paper y contexto específico de Florida; no implica que cualquier prohibición produzca los mismos resultados.",
    usedFor:
      "Capítulos 8 y 13: políticas escolares y posibles periodos de adaptación.",
    citation:
      "Figlio DN, Özek U. NBER Working Paper 34388. 2025. doi:10.3386/w34388."
  },

  {
    id: "ev020",
    slug: "oecd-pisa-2025-volume-i",
    title: "PISA 2025 Results (Volume I): Future-Ready Students",
    authors: ["OECD"],
    year: 2026,
    publisher: "OECD Publishing",
    doi: "10.1787/73451bc5-en",
    studyType: "Evaluación educativa internacional",
    sourceRole: "official_data",
    population: "Estudiantes de países y economías participantes en PISA",
    ageRange: "15 años",
    topics: [
      "escuela",
      "ia-aprendizaje",
      "pensamiento-critico-ia",
      "regulacion"
    ],
    evidenceLevel: null,
    whatItStudied:
      "Rendimiento, aprendizaje, digitalización, IA y contexto educativo de estudiantes de 15 años.",
    mainFindings:
      "Proporciona indicadores comparables sobre uso digital, distracción, IA, oportunidades educativas y rendimiento.",
    limitations:
      "Las relaciones entre uso tecnológico y resultados en PISA son principalmente observacionales y no prueban efectos causales.",
    usedFor:
      "Capítulos 8–11 y contexto de España/OECD.",
    citation:
      "OECD. PISA 2025 Results (Volume I): Future-Ready Students. OECD Publishing; 2026. doi:10.1787/73451bc5-en."
  },

  {
    id: "ev021",
    slug: "england-mobile-phones-schools-2026",
    title: "Mobile phones in schools",
    authors: ["Department for Education"],
    year: 2026,
    publisher: "UK Government",
    url:
      "https://www.gov.uk/government/publications/mobile-phones-in-schools/mobile-phones-in-schools",
    studyType: "Guía estatutaria",
    sourceRole: "policy",
    population: "Centros educativos de Inglaterra",
    ageRange: "Edad escolar",
    topics: ["escuela", "regulacion"],
    evidenceLevel: null,
    whatItStudied:
      "No es un estudio: establece la política inglesa sobre uso de teléfonos durante la jornada escolar.",
    mainFindings:
      "La guía pasó a ser estatutaria el 29 de junio de 2026 y los centros deben seguirla desde el 1 de septiembre de 2026.",
    limitations:
      "La existencia de la política no demuestra su eficacia académica.",
    usedFor:
      "Capítulo 13 y actualizaciones de políticas escolares.",
    citation:
      "Department for Education. Mobile phones in schools. Statutory guidance. 2026."
  },

  // =========================================================
  // VIDEOJUEGOS
  // =========================================================

  {
    id: "ev022",
    slug: "zhao-2026-video-games-cognition",
    title:
      "The association between video game play and cognitive ability: A systematic review and meta-analysis",
    authors: [
      "Rumei Zhao",
      "Kunzhen Pang",
      "Jie Yu",
      "Wanyan Zhang",
      "Xiaoxue Kong",
      "Jiyueyi Wang",
      "Aersheng Haidabieke",
      "Xuechen Ding",
      "Junyi Li"
    ],
    year: 2026,
    publisher: "Acta Psychologica",
    doi: "10.1016/j.actpsy.2026.107110",
    url: "https://pubmed.ncbi.nlm.nih.gov/42184801/",
    studyType: "Revisión sistemática y metaanálisis",
    sourceRole: "academic",
    population: "Participantes de estudios sobre videojuegos y cognición",
    sampleSize: "133 estudios; 14.245 participantes",
    topics: ["videojuegos"],
    evidenceLevel: "moderada",
    whatItStudied:
      "Relaciones entre juego de videojuegos y diferentes capacidades cognitivas.",
    mainFindings:
      "Encontró asociaciones positivas pequeñas con memoria, capacidad espacial, atención visual y control cognitivo en distintos diseños.",
    limitations:
      "No permite afirmar que jugar videojuegos haga globalmente más inteligente a una persona.",
    usedFor:
      "Capítulo 7: posibles beneficios cognitivos sin extrapolarlos.",
    citation:
      "Zhao R, et al. Acta Psychologica. 2026;267:107110. doi:10.1016/j.actpsy.2026.107110."
  },

  {
    id: "ev023",
    slug: "granic-2014-benefits-video-games",
    title: "The benefits of playing video games",
    authors: ["Isabela Granic", "Adam Lobel", "Rutger C. M. E. Engels"],
    year: 2014,
    publisher: "American Psychologist",
    doi: "10.1037/a0034857",
    studyType: "Revisión narrativa",
    sourceRole: "academic",
    population: "Literatura psicológica sobre videojuegos",
    topics: ["videojuegos"],
    evidenceLevel: null,
    whatItStudied:
      "Posibles beneficios cognitivos, motivacionales, emocionales y sociales del videojuego.",
    mainFindings:
      "Propone un marco equilibrado que reconoce beneficios potenciales además de riesgos.",
    limitations:
      "Es una revisión narrativa y no prueba que todos los juegos produzcan esos beneficios.",
    usedFor:
      "Contexto conceptual del capítulo 7.",
    citation:
      "Granic I, Lobel A, Engels RCME. American Psychologist. 2014;69(1):66–78. doi:10.1037/a0034857."
  },

  {
    id: "ev024",
    slug: "who-gaming-disorder",
    title: "Addictive behaviours: Gaming disorder",
    authors: ["World Health Organization"],
    year: 2020,
    publisher: "World Health Organization",
    url:
      "https://www.who.int/news-room/questions-and-answers/item/addictive-behaviours-gaming-disorder",
    studyType: "Definición y guía institucional",
    sourceRole: "guidance",
    population: "Población general",
    topics: ["videojuegos"],
    evidenceLevel: null,
    whatItStudied:
      "No es un estudio: describe los criterios utilizados para gaming disorder en ICD-11.",
    mainFindings:
      "Destaca pérdida de control, prioridad creciente y continuación pese a consecuencias negativas, con deterioro significativo.",
    limitations:
      "No debe utilizarse para diagnosticar a partir de una cifra de horas o de irritación puntual.",
    usedFor:
      "Capítulo 7 y protocolos: distinguir uso intenso de trastorno.",
    citation:
      "World Health Organization. Addictive behaviours: Gaming disorder."
  },

  // =========================================================
  // PORNOGRAFÍA, GROOMING, SEXTORSIÓN Y DEEPFAKES
  // =========================================================

  {
    id: "ev025",
    slug: "mestre-bach-potenza-2025-pornography",
    title:
      "Adolescents, Pornography Use, and Problematic Pornography Use: A Rapid Systematic Review of Longitudinal Studies",
    authors: ["Gemma Mestre-Bach", "Marc N. Potenza"],
    year: 2025,
    publisher:
      "Journal of the Korean Academy of Child and Adolescent Psychiatry",
    doi: "10.5765/jkacap.250015",
    url: "https://pubmed.ncbi.nlm.nih.gov/40631652/",
    studyType: "Revisión sistemática rápida de estudios longitudinales",
    sourceRole: "academic",
    population: "Adolescentes",
    ageRange: "Adolescencia",
    sampleSize: "44 estudios longitudinales",
    topics: ["riesgos-digitales"],
    evidenceLevel: "moderada",
    whatItStudied:
      "Uso de pornografía y uso problemático de pornografía durante la adolescencia a lo largo del tiempo.",
    mainFindings:
      "La literatura longitudinal muestra relaciones con diversos resultados, pero con una elevada heterogeneidad.",
    limitations:
      "Definiciones, medidas y resultados varían mucho; no respalda una cadena causal simple.",
    usedFor:
      "Capítulo 6: sexualidad digital y pornografía con calibración causal.",
    citation:
      "Mestre-Bach G, Potenza MN. J Korean Acad Child Adolesc Psychiatry. 2025;36(3):122–134. doi:10.5765/jkacap.250015."
  },

  {
    id: "ev026",
    slug: "guardia-civil-sol-grooming-2026",
    title:
      "Investigación sobre grooming construida en base a la voz de la infancia y la adolescencia",
    authors: ["Guardia Civil", "Fundación SOL"],
    year: 2026,
    publisher: "Guardia Civil / Fundación SOL",
    url:
      "https://web.guardiacivil.es/gl/destacados/noticias/Presentado-informe-Guardia-Civil-y-la-Fundacion-SOL-de-investigacion-sobre-el-grooming-construido-en-base-a-la-voz-de-la-infancia-y-la-adolescencia/",
    studyType: "Estudio español e informe institucional",
    sourceRole: "official_data",
    population: "Menores en España",
    ageRange: "10–17 años",
    sampleSize: "Más de 1.500 menores",
    topics: ["riesgos-digitales"],
    evidenceLevel: null,
    whatItStudied:
      "Experiencias y percepciones de menores relacionadas con grooming y contactos online.",
    mainFindings:
      "El resumen oficial documenta mensajes sexuales no solicitados de personas desconocidas y otros patrones de riesgo.",
    limitations:
      "Las cifras dependen de las definiciones y de la muestra y no deben transformarse en prevalencia universal de grooming.",
    usedFor:
      "Capítulo 6: contexto español sobre grooming.",
    citation:
      "Guardia Civil y Fundación SOL. Investigación sobre grooming. 2026."
  },

  {
    id: "ev027",
    slug: "thorn-ncmec-financial-sextortion-2024",
    title:
      "Trends in Financial Sextortion: An investigation of sextortion reports in NCMEC CyberTipline data",
    authors: ["Thorn", "National Center for Missing & Exploited Children"],
    year: 2024,
    publisher: "Thorn / NCMEC",
    url: "https://www.thorn.org/research/library/financial-sextortion/",
    studyType: "Análisis de reportes de CyberTipline",
    sourceRole: "contextual",
    population: "Reportes de sextorsión recibidos por NCMEC",
    topics: ["riesgos-digitales"],
    evidenceLevel: null,
    whatItStudied:
      "Tendencias en reportes de sextorsión financiera contra jóvenes.",
    mainFindings:
      "Documenta un fuerte crecimiento de reportes y patrones frecuentes de amenaza económica.",
    limitations:
      "Los reportes a una línea de denuncia no equivalen a prevalencia poblacional.",
    usedFor:
      "Capítulo 6: sextorsión financiera y necesidad de no pagar.",
    citation:
      "Thorn & NCMEC. Trends in Financial Sextortion. 2024."
  },

  {
    id: "ev028",
    slug: "thorn-sexual-extortion-young-people-2025",
    title:
      "Sexual Extortion & Young People: Navigating Threats in Digital Environments",
    authors: ["Thorn"],
    year: 2025,
    publisher: "Thorn",
    url:
      "https://www.thorn.org/research/library/sexual-extortion-young-people/",
    studyType: "Encuesta e informe de investigación",
    sourceRole: "contextual",
    population: "Jóvenes de Estados Unidos",
    ageRange: "13–20 años",
    sampleSize: "≈1.200 participantes",
    topics: ["riesgos-digitales"],
    evidenceLevel: null,
    whatItStudied:
      "Experiencias juveniles relacionadas con amenazas y extorsión sexual digital.",
    mainFindings:
      "Describe formas de amenaza, respuestas de los jóvenes y barreras para pedir ayuda.",
    limitations:
      "Muestra estadounidense y metodología de encuesta; no extrapolar directamente a España.",
    usedFor:
      "Capítulo 6: comprender patrones de sextorsión y búsqueda de ayuda.",
    citation:
      "Thorn. Sexual Extortion & Young People. 2025."
  },

  {
    id: "ev029",
    slug: "stanford-hai-ai-csam-policy",
    title:
      "Addressing AI-Generated Child Sexual Abuse Material: Opportunities for Educational Policy",
    authors: ["Stanford Institute for Human-Centered Artificial Intelligence"],
    year: 2025,
    publisher: "Stanford HAI",
    url:
      "https://hai.stanford.edu/policy/addressing-ai-generated-child-sexual-abuse-material-opportunities-for-educational-policy",
    studyType: "Policy brief basado en entrevistas y documentación",
    sourceRole: "guidance",
    population: "Distritos escolares y profesionales en Estados Unidos",
    topics: ["riesgos-digitales", "contenido-sintetico", "escuela"],
    evidenceLevel: null,
    whatItStudied:
      "Respuestas educativas ante material sexual infantil generado mediante IA.",
    mainFindings:
      "Identifica lagunas institucionales y necesidades de prevención, respuesta y alfabetización.",
    limitations:
      "Contexto jurídico y educativo estadounidense; no sustituye la normativa española.",
    usedFor:
      "Deepfakes sexuales en capítulos 6 y 12.",
    citation:
      "Stanford HAI. Addressing AI-Generated Child Sexual Abuse Material. 2025."
  },

  {
    id: "ev030",
    slug: "aepd-canal-prioritario",
    title: "Canal Prioritario",
    authors: ["Agencia Española de Protección de Datos"],
    year: 2026,
    publisher: "AEPD",
    url: "https://www.aepd.es/canalprioritario",
    studyType: "Recurso oficial de retirada urgente",
    sourceRole: "safety_resource",
    population: "Personas afectadas por difusión ilícita grave",
    topics: ["riesgos-digitales"],
    evidenceLevel: null,
    whatItStudied:
      "No es un estudio: es un canal oficial para solicitar intervención urgente ante determinados contenidos sexuales o violentos difundidos sin autorización.",
    mainFindings:
      "Ofrece una vía administrativa urgente en los supuestos establecidos por la AEPD.",
    limitations:
      "No sustituye la denuncia ni otros mecanismos cuando existen posibles delitos o emergencias.",
    usedFor:
      "Apéndices A y D y página /ayuda.",
    citation:
      "Agencia Española de Protección de Datos. Canal Prioritario."
  },

  // =========================================================
  // INTELIGENCIA ARTIFICIAL Y APRENDIZAJE
  // =========================================================

  {
    id: "ev031",
    slug: "letourneau-2025-intelligent-tutoring-k12",
    title:
      "A systematic review of AI-driven intelligent tutoring systems (ITS) in K-12 education",
    authors: [
      "Angélique Létourneau",
      "Marion Deslandes Martineau",
      "Patrick Charland",
      "John Alexander Karran",
      "Jared Boasen",
      "Pierre Majorique Léger et al."
    ],
    year: 2025,
    publisher: "npj Science of Learning",
    doi: "10.1038/s41539-025-00320-7",
    studyType: "Revisión sistemática",
    sourceRole: "academic",
    population: "Estudiantes de educación K–12",
    sampleSize: "28 estudios; ≈4.597 estudiantes",
    topics: ["ia-aprendizaje"],
    evidenceLevel: "moderada",
    whatItStudied:
      "Eficacia de sistemas de tutoría inteligente basados en IA en educación escolar.",
    mainFindings:
      "En conjunto los sistemas mostraron resultados positivos de aprendizaje, aunque las ventajas son menores frente a otros buenos sistemas de tutoría digital.",
    limitations:
      "ITS no es sinónimo de chatbot generativo de uso libre y existe heterogeneidad entre sistemas.",
    usedFor:
      "Capítulos 9–10: potencial de IA como tutor.",
    citation:
      "Létourneau A, et al. npj Science of Learning. 2025;10:29. doi:10.1038/s41539-025-00320-7."
  },

  {
    id: "ev032",
    slug: "bastani-2025-generative-ai-guardrails",
    title:
      "Generative AI without guardrails can harm learning: Evidence from high school mathematics",
    authors: ["Hamsa Bastani et al."],
    year: 2025,
    publisher: "Proceedings of the National Academy of Sciences",
    doi: "10.1073/pnas.2422633122",
    studyType: "Ensayo experimental de campo",
    sourceRole: "academic",
    population: "Estudiantes de secundaria en matemáticas",
    sampleSize: "Cerca de 1.000 estudiantes",
    topics: ["ia-aprendizaje"],
    evidenceLevel: "moderada",
    whatItStudied:
      "Diferencias entre acceso a GPT-4 sin guardarraíles, un tutor con diseño pedagógico y condiciones de control.",
    mainFindings:
      "La IA sin restricciones mejoró el rendimiento mientras estaba disponible, pero los estudiantes rindieron peor cuando se retiró. La versión tutor mitigó gran parte de esa penalización.",
    limitations:
      "Un contexto, materia y diseño concretos; no prueba que todo uso libre de IA perjudique el aprendizaje.",
    usedFor:
      "Capítulo 10: tutor antes que autor y diferencia entre rendimiento asistido y aprendizaje.",
    citation:
      "Bastani H, et al. PNAS. 2025;122(26):e2422633122. doi:10.1073/pnas.2422633122."
  },

  {
    id: "ev033",
    slug: "kosmyna-2025-brain-on-chatgpt",
    title:
      "Your Brain on ChatGPT: Accumulation of Cognitive Debt when Using an AI Assistant for Essay Writing Task",
    authors: ["Nataliya Kosmyna et al."],
    year: 2025,
    publisher: "arXiv / MIT Media Lab",
    doi: "10.48550/arXiv.2506.08872",
    studyType: "Preprint experimental",
    sourceRole: "academic",
    population: "Adultos realizando una tarea de redacción",
    sampleSize: "54 participantes + 18 en fase crossover",
    topics: ["ia-aprendizaje"],
    evidenceLevel: "emergente",
    whatItStudied:
      "Actividad cerebral, recuerdo, autoría y desempeño al escribir con LLM, buscador o sin herramientas.",
    mainFindings:
      "Encontró diferencias entre condiciones y señales compatibles con mayor externalización cognitiva al usar LLM.",
    limitations:
      "Preprint, muestra pequeña, adultos y una tarea concreta. No demuestra atrofia cerebral, daño permanente ni efectos infantiles.",
    usedFor:
      "Capítulo 9: introducir con cautela la pregunta sobre externalización o 'deuda cognitiva'.",
    citation:
      "Kosmyna N, et al. arXiv:2506.08872. 2025. doi:10.48550/arXiv.2506.08872."
  },

  {
    id: "ev034",
    slug: "ronksley-pavia-2025-neurodivergent-genai",
    title:
      "A scoping literature review of generative artificial intelligence for supporting neurodivergent school students",
    authors: ["M. Ronksley-Pavia et al."],
    year: 2025,
    publisher: "Computers & Education: Artificial Intelligence",
    doi: "10.1016/j.caeai.2025.100437",
    studyType: "Scoping review",
    sourceRole: "academic",
    population: "Alumnado neurodivergente en edad escolar",
    sampleSize: "21 fuentes; solo 9 fuentes empíricas originales sobre GenAI",
    topics: ["ia-aprendizaje"],
    evidenceLevel: "emergente",
    whatItStudied:
      "Aplicaciones y evidencia de IA generativa para alumnado neurodivergente.",
    mainFindings:
      "Identifica potencial de personalización y accesibilidad junto a una falta notable de validación empírica robusta.",
    limitations:
      "Campo muy joven y gran parte de la literatura es conceptual.",
    usedFor:
      "Capítulo 10: accesibilidad y neurodivergencia con especial prudencia.",
    citation:
      "Ronksley-Pavia M, et al. Computers & Education: Artificial Intelligence. 2025;9:100437. doi:10.1016/j.caeai.2025.100437."
  },

  {
    id: "ev035",
    slug: "liu-2025-genai-learning-meta",
    title:
      "Effects of Generative Artificial Intelligence on K-12 and Higher Education Students’ Learning Outcomes: A Meta-Analysis",
    authors: ["Xiaohong Liu", "Baoxin Guo", "Wei He", "Xiaoyong Hu"],
    year: 2025,
    publisher: "Journal of Educational Computing Research",
    doi: "10.1177/07356331251329185",
    studyType: "Metaanálisis",
    sourceRole: "academic",
    population: "Estudiantes K–12 y educación superior",
    sampleSize: "49 artículos",
    topics: ["ia-aprendizaje"],
    evidenceLevel: "moderada",
    whatItStudied:
      "Impacto de IA generativa en rendimiento y motivación educativa.",
    mainFindings:
      "El metaanálisis encontró efectos positivos promedio en aprendizaje y motivación.",
    limitations:
      "Combina K–12 y universidad, herramientas y diseños muy distintos; los efectos promedio no determinan qué usos concretos funcionan.",
    usedFor:
      "Bloque de IA: recordar que existen resultados positivos y no solo riesgos.",
    citation:
      "Liu X, Guo B, He W, Hu X. Journal of Educational Computing Research. 2025;63(5):1249–1291. doi:10.1177/07356331251329185."
  },

  {
    id: "ev036",
    slug: "liu-zhong-2025-genai-tpack-review",
    title:
      "Integrating generative Artificial Intelligence into student learning: A systematic review from a TPACK perspective",
    authors: ["Xiaofan Liu", "Baichang Zhong"],
    year: 2025,
    publisher: "Educational Research Review",
    doi: "10.1016/j.edurev.2025.100741",
    studyType: "Revisión sistemática",
    sourceRole: "academic",
    population: "Estudiantes y contextos educativos",
    topics: ["ia-aprendizaje"],
    evidenceLevel: "moderada",
    whatItStudied:
      "Cómo se integra IA generativa en el aprendizaje desde una perspectiva tecnológica y pedagógica.",
    mainFindings:
      "La revisión destaca la importancia del andamiaje pedagógico y muestra que el método de integración modifica los resultados.",
    limitations:
      "Campo reciente y rápido cambio de herramientas y prácticas.",
    usedFor:
      "Capítulos 9–10: importancia del diseño del uso.",
    citation:
      "Liu X, Zhong B. Educational Research Review. 2025;49:100741. doi:10.1016/j.edurev.2025.100741."
  },

  {
    id: "ev037",
    slug: "tao-2026-genai-k12-risks",
    title:
      "Potential risks of generative artificial intelligence integration into K-12 education: A scoping review",
    authors: ["S. Tao", "M. Lan", "M. Wang", "H. Li"],
    year: 2026,
    publisher: "Computers & Education: Artificial Intelligence",
    doi: "10.1016/j.caeai.2026.100561",
    studyType: "Scoping review",
    sourceRole: "academic",
    population: "Investigaciones empíricas K–12",
    sampleSize: "22 estudios",
    topics: ["ia-aprendizaje"],
    evidenceLevel: "emergente",
    whatItStudied:
      "Riesgos potenciales comunicados en investigaciones sobre GenAI en educación K–12.",
    mainFindings:
      "Agrupa riesgos relacionados con bienestar, agencia intelectual, privacidad, gobernanza y preparación institucional.",
    limitations:
      "Una scoping review mapea un campo emergente; no demuestra que cada riesgo sea causado por GenAI.",
    usedFor:
      "Capítulos 9–10 y actualización de riesgos educativos.",
    citation:
      "Tao S, et al. Computers & Education: Artificial Intelligence. 2026;10:100561. doi:10.1016/j.caeai.2026.100561."
  },

  {
    id: "ev038",
    slug: "de-freitas-2026-ai-companions",
    title: "Mourning the loss of AI companions",
    authors: ["Julian De Freitas", "Noah Castelo", "Ahmet Kaan Uğuralp", "et al."],
    year: 2026,
    publisher: "Nature Human Behaviour",
    doi: "10.1038/s41562-026-02569-3",
    studyType: "Experimentos naturales + encuestas",
    sourceRole: "academic",
    population: "Usuarios de sistemas conversacionales y compañeros de IA",
    sampleSize: "54.861 publicaciones + 1.452 participantes en siete encuestas",
    topics: ["ia-aprendizaje", "pensamiento-critico-ia"],
    evidenceLevel: "emergente",
    whatItStudied:
      "Apego y reacciones ante cambios o pérdida de compañeros de IA.",
    mainFindings:
      "Documentó respuestas de pérdida y apego significativas en determinados usuarios.",
    limitations:
      "No es una investigación específica de menores y no permite estimar prevalencia adolescente.",
    usedFor:
      "Capítulo 9: relaciones simuladas y necesidad de no extrapolar evidencia adulta a menores.",
    citation:
      "De Freitas J, et al. Nature Human Behaviour. 2026. doi:10.1038/s41562-026-02569-3."
  },

  {
    id: "ev039",
    slug: "microsoft-2025-genai-learning-review",
    title: "Learning outcomes with GenAI in the classroom: A review of empirical evidence",
    authors: ["K. Walker", "M. Vorvoreanu"],
    year: 2025,
    publisher: "Microsoft Research",
    url:
      "https://www.microsoft.com/en-us/research/publication/learning-outcomes-with-genai-in-the-classroom-a-review-of-empirical-evidence/",
    studyType: "Technical report / review",
    sourceRole: "contextual",
    population: "Investigación empírica sobre GenAI en educación",
    topics: ["ia-aprendizaje"],
    evidenceLevel: null,
    whatItStudied:
      "Resultados de aprendizaje observados en investigaciones empíricas sobre IA generativa.",
    mainFindings:
      "Resume un campo con resultados dependientes de cómo se diseña e integra la herramienta.",
    limitations:
      "Informe de investigación industrial y no equivalente a una revisión sistemática independiente.",
    usedFor:
      "Contexto complementario del bloque de IA.",
    citation:
      "Walker K, Vorvoreanu M. Microsoft Research Technical Report. 2025."
  },

  {
    id: "ev040",
    slug: "world-bank-2025-nigeria-genai",
    title:
      "From Chalkboards to Chatbots: Evaluating the Impact of Generative AI on Learning Outcomes in Nigeria",
    authors: [
      "Martín E. De Simone",
      "Federico H. Tiberti",
      "Maria R. Barron Rodriguez",
      "Federico A. Manolio",
      "Wuraola Mosuro",
      "Eliot J. Dikoru"
    ],
    year: 2025,
    publisher: "World Bank",
    doi: "10.1596/1813-9450-11125",
    studyType: "Ensayo controlado aleatorizado / Policy Research Working Paper",
    sourceRole: "academic",
    population: "Estudiantes de secundaria en un programa extraescolar en Nigeria",
    topics: ["ia-aprendizaje"],
    evidenceLevel: "moderada",
    whatItStudied:
      "Un programa de tutoría con IA generativa y apoyo docente.",
    mainFindings:
      "El programa produjo mejoras relevantes en los resultados medidos durante la intervención.",
    limitations:
      "Contexto, intervención y apoyo docente específicos; no es evidencia de que el acceso libre a un chatbot produzca el mismo resultado.",
    usedFor:
      "Capítulos 9–10: potencial de tutoría bien diseñada.",
    citation:
      "De Simone ME, et al. World Bank Policy Research Working Paper 11125. 2025. doi:10.1596/1813-9450-11125."
  },

  {
    id: "ev041",
    slug: "unesco-2024-ai-competency-students",
    title: "AI competency framework for students",
    authors: ["Fengchun Miao", "Kelly Shiohira", "Natalie Lao"],
    year: 2024,
    publisher: "UNESCO",
    url:
      "https://www.unesco.org/en/articles/ai-competency-framework-students",
    studyType: "Marco de competencias",
    sourceRole: "guidance",
    population: "Estudiantes y sistemas educativos",
    topics: ["ia-aprendizaje", "pensamiento-critico-ia"],
    evidenceLevel: null,
    whatItStudied:
      "No es un estudio de eficacia: propone competencias para comprender, utilizar y crear con IA de forma responsable.",
    mainFindings:
      "Organiza competencias en dimensiones de agencia humana, ética, conocimiento técnico y diseño.",
    limitations:
      "Es un marco normativo/pedagógico, no una demostración experimental de resultados.",
    usedFor:
      "Guía rápida de IA y alfabetización en IA.",
    citation:
      "Miao F, Shiohira K, Lao N. AI competency framework for students. UNESCO; 2024."
  },

  // =========================================================
  // DESINFORMACIÓN Y PENSAMIENTO CRÍTICO
  // =========================================================

  {
    id: "ev042",
    slug: "kozyreva-2024-misinformation-toolbox",
    title:
      "Toolbox of individual-level interventions against online misinformation",
    authors: ["Anastasia Kozyreva", "Philipp Lorenz-Spreen", "Stefan M. Herzog", "et al."],
    year: 2024,
    publisher: "Nature Human Behaviour",
    doi: "10.1038/s41562-024-01881-0",
    studyType: "Revisión",
    sourceRole: "academic",
    population: "81 trabajos científicos sobre intervenciones de desinformación",
    topics: ["pensamiento-critico-ia"],
    evidenceLevel: "robusta",
    whatItStudied:
      "Nueve familias de intervenciones individuales contra la desinformación online.",
    mainFindings:
      "Existen varias intervenciones útiles —lectura lateral, fact-checking, fricción, inoculación, prompts de exactitud y etiquetas— pero ninguna funciona como solución universal.",
    limitations:
      "Los efectos dependen del contexto, población y tipo de desinformación.",
    usedFor:
      "Capítulo 11: pensamiento crítico como conjunto de prácticas, no desconfianza indiscriminada.",
    citation:
      "Kozyreva A, et al. Nature Human Behaviour. 2024;8:1044–1052. doi:10.1038/s41562-024-01881-0."
  },

  {
    id: "ev043",
    slug: "hoes-2024-misinformation-scepticism",
    title:
      "Prominent misinformation interventions reduce misperceptions but increase scepticism",
    authors: [
      "Emma Hoes",
      "Brian Aitken",
      "Jingwen Zhang",
      "Tomasz Gackowski",
      "Magdalena Wojcieszak"
    ],
    year: 2024,
    publisher: "Nature Human Behaviour",
    doi: "10.1038/s41562-024-01884-x",
    studyType: "Tres experimentos online",
    sourceRole: "academic",
    population: "Participantes de Estados Unidos, Polonia y Hong Kong",
    sampleSize: "6.127 participantes",
    topics: ["pensamiento-critico-ia"],
    evidenceLevel: "moderada",
    whatItStudied:
      "Efectos de diferentes intervenciones de desinformación sobre creencias verdaderas y falsas.",
    mainFindings:
      "Las intervenciones redujeron creencia en falsedades pero también aumentaron escepticismo hacia información verdadera.",
    limitations:
      "Contextos experimentales y políticos concretos; no implica que toda alfabetización mediática produzca ese efecto.",
    usedFor:
      "Capítulo 11: pensamiento crítico no equivale a desconfiar de todo.",
    citation:
      "Hoes E, et al. Nature Human Behaviour. 2024;8:1545–1553. doi:10.1038/s41562-024-01884-x."
  },

  {
    id: "ev044",
    slug: "pennycook-2024-inoculation-accuracy",
    title:
      "Inoculation and accuracy prompting increase accuracy discernment in combination but not alone",
    authors: [
      "Gordon Pennycook",
      "Adam J. Berinsky",
      "Puneet Bhargava",
      "Hause Lin",
      "et al."
    ],
    year: 2024,
    publisher: "Nature Human Behaviour",
    doi: "10.1038/s41562-024-02023-2",
    studyType: "Cinco experimentos",
    sourceRole: "academic",
    population: "Participantes online",
    sampleSize: "7.286 participantes",
    topics: ["pensamiento-critico-ia"],
    evidenceLevel: "moderada",
    whatItStudied:
      "Inoculación frente a manipulación emocional, prompts de exactitud y discernimiento entre verdad y falsedad.",
    mainFindings:
      "La combinación de estrategias mejoró el discernimiento en condiciones donde cada intervención aislada no siempre lo hacía.",
    limitations:
      "Estudios experimentales específicos; no existe una 'vacuna' universal contra desinformación.",
    usedFor:
      "Capítulo 11: combinar herramientas y calibrar confianza.",
    citation:
      "Pennycook G, et al. Nature Human Behaviour. 2024;8:2330–2341. doi:10.1038/s41562-024-02023-2."
  },

  {
    id: "ev045",
    slug: "unicef-2021-digital-misinformation-children",
    title: "Digital misinformation/disinformation and children",
    authors: [
      "Philip N. Howard",
      "Lisa-Maria Neudert",
      "Nayana Prakash",
      "Steven Vosloo"
    ],
    year: 2021,
    publisher: "UNICEF Office of Research – Innocenti",
    url:
      "https://www.unicef.org/innocenti/reports/digital-misinformation-disinformation-and-children",
    studyType: "Informe de investigación",
    sourceRole: "contextual",
    population: "Niños y adolescentes en entornos digitales",
    topics: ["pensamiento-critico-ia"],
    evidenceLevel: null,
    whatItStudied:
      "Cómo afecta la desinformación digital a niños y qué respuestas educativas y sociales existen.",
    mainFindings:
      "Destaca la necesidad de alfabetización mediática adaptada a menores y de mejores entornos informativos.",
    limitations:
      "Informe de síntesis, no prueba experimental de una intervención concreta.",
    usedFor:
      "Contexto de alfabetización digital y mediática.",
    citation:
      "Howard PN, Neudert LM, Prakash N, Vosloo S. UNICEF Innocenti; 2021."
  },

  // =========================================================
  // ESPAÑA: DATOS Y CONTEXTO
  // =========================================================

  {
    id: "ev046",
    slug: "ine-tic-hogares-2025",
    title:
      "Encuesta sobre Equipamiento y Uso de Tecnologías de la Información y Comunicación (TIC) en los Hogares. Año 2025",
    authors: ["Instituto Nacional de Estadística"],
    year: 2025,
    publisher: "INE",
    url: "https://ine.es/dyngs/Prensa/es/TICH2025.htm",
    studyType: "Estadística oficial",
    sourceRole: "official_data",
    population: "Hogares y menores en España",
    ageRange: "Datos específicos 10–15 años",
    topics: ["pantallas", "normas-primer-movil"],
    evidenceLevel: null,
    whatItStudied:
      "Acceso y uso de TIC en hogares españoles.",
    mainFindings:
      "En 2025, entre 10 y 15 años, el 96,5 % utilizaba Internet y el 67,9 % teléfono móvil.",
    limitations:
      "Describe prevalencia de uso; no informa por sí misma sobre efectos en bienestar o aprendizaje.",
    usedFor:
      "Capítulo 2 y contexto español.",
    citation:
      "Instituto Nacional de Estadística. Encuesta TIC-H 2025."
  },

  {
    id: "ev047",
    slug: "hbsc-espana-2022",
    title:
      "La adolescencia española analizada desde el Estudio HBSC-2022: estilos de vida, contextos de desarrollo y bienestar emocional",
    authors: ["Ministerio de Sanidad", "Equipo HBSC España"],
    year: 2025,
    publisher: "Ministerio de Sanidad",
    url:
      "https://www.sanidad.gob.es/areas/promocionPrevencion/entornosSaludables/escuela/estudioHBSC/2022/divulgativo.htm",
    studyType: "Encuesta representativa oficial",
    sourceRole: "official_data",
    population: "Adolescentes escolarizados en España",
    ageRange: "11–18 años",
    sampleSize: "33.630 adolescentes; 350 centros",
    topics: ["sueno-atencion", "redes-sociales", "pantallas"],
    evidenceLevel: null,
    whatItStudied:
      "Estilos de vida, contextos de desarrollo, comunicación electrónica, salud y bienestar adolescente.",
    mainFindings:
      "Proporciona indicadores nacionales y autonómicos representativos sobre múltiples dimensiones del bienestar adolescente.",
    limitations:
      "Muchas medidas son autorreportadas y las asociaciones transversales no establecen causalidad.",
    usedFor:
      "Capítulos 2–4 y contexto español.",
    citation:
      "Ministerio de Sanidad. Estudio HBSC España 2022. Informe divulgativo publicado en 2025."
  },

  {
    id: "ev048",
    slug: "unicef-redes-bienestar-digital-2025",
    title:
      "Infancia, adolescencia y bienestar digital: Una aproximación desde la salud, la convivencia y la responsabilidad social",
    authors: [
      "UNICEF España",
      "Red.es",
      "Universidade de Santiago de Compostela",
      "Consejo General de Colegios Profesionales de Ingeniería Informática"
    ],
    year: 2025,
    publisher: "UNICEF España / Red.es",
    url:
      "https://www.unicef.es/publicacion/infancia-adolescencia-y-bienestar-digital",
    studyType: "Gran estudio mixto nacional",
    sourceRole: "official_data",
    population: "Infancia, adolescencia y profesionales educativos en España",
    sampleSize:
      "Casi 100.000 niños, niñas y adolescentes y más de 7.000 profesionales del entorno educativo",
    topics: [
      "pantallas",
      "redes-sociales",
      "riesgos-digitales",
      "escuela",
      "normas-primer-movil"
    ],
    evidenceLevel: null,
    whatItStudied:
      "Uso digital, salud, convivencia, riesgos, oportunidades y entorno educativo en España.",
    mainFindings:
      "Ofrece una de las fotografías nacionales más amplias sobre experiencias digitales de menores.",
    limitations:
      "El gran tamaño no convierte las asociaciones observacionales en relaciones causales.",
    usedFor:
      "Contexto español transversal del libro y la web.",
    citation:
      "UNICEF España, Red.es, USC y CCII. Infancia, adolescencia y bienestar digital. 2025."
  },

  {
    id: "ev049",
    slug: "eu-kids-online-v-ia-espana-2026",
    title:
      "EU Kids Online V: uso y conocimiento de la Inteligencia Artificial entre la infancia y la adolescencia en España",
    authors: ["Maialen Garmendia et al."],
    year: 2026,
    publisher: "EU Kids Online / UPV-EHU",
    url:
      "https://www.observatoriodelainfancia.es/oia/esp/documentos_ficha.aspx?id=9213",
    studyType: "Informe de investigación nacional",
    sourceRole: "official_data",
    population: "Niños y adolescentes en España",
    topics: ["ia-aprendizaje", "pensamiento-critico-ia", "pantallas"],
    evidenceLevel: null,
    whatItStudied:
      "Uso, conocimiento y experiencias con inteligencia artificial entre menores en España.",
    mainFindings:
      "Documenta la rápida normalización del uso de IA y diferencias de conocimiento y experiencia.",
    limitations:
      "Describe situación y asociaciones; no permite concluir efectos causales de la IA.",
    usedFor:
      "Capítulos 9–11 y contexto español de IA.",
    citation:
      "Garmendia M, et al. EU Kids Online V. 2026. ISBN 978-84-09-88191-8."
  },

  {
    id: "ev050",
    slug: "eu-kids-online-v-experiencias-espana-2026",
    title:
      "EU Kids Online V: experiencias digitales de la infancia y la adolescencia en España",
    authors: ["Maialen Garmendia et al."],
    year: 2026,
    publisher: "EU Kids Online / UPV-EHU",
    url:
      "https://www.observatoriodelainfancia.es/oia/esp/documentos_ficha.aspx?id=9214",
    studyType: "Informe de investigación nacional",
    sourceRole: "official_data",
    population: "Infancia y adolescencia en España",
    topics: [
      "pantallas",
      "redes-sociales",
      "riesgos-digitales",
      "normas-primer-movil"
    ],
    evidenceLevel: null,
    whatItStudied:
      "Experiencias digitales, acceso, actividades, oportunidades y riesgos online.",
    mainFindings:
      "Proporciona contexto actualizado sobre cómo utilizan internet los menores españoles.",
    limitations:
      "Principalmente descriptivo; no demuestra causalidad.",
    usedFor:
      "Contexto español en distintos capítulos.",
    citation:
      "Garmendia M, et al. EU Kids Online V. 2026. ISBN 978-84-09-81625-5."
  },

  {
    id: "ev051",
    slug: "sanmiguel-2025-redes-menores-espana",
    title:
      "Estudio sobre el uso de redes sociales por parte de menores en España",
    authors: ["P. SanMiguel et al."],
    year: 2025,
    publisher: "ICMedia / proyecto de investigación",
    url:
      "https://icmedianet.org/wp-content/uploads/2025/07/Estudio-sobre-el-uso-de-redes-sociales-por-parte-de-menores-en-Espana-14072025-1.pdf",
    studyType: "Informe de investigación",
    sourceRole: "contextual",
    population: "Menores en España",
    topics: ["redes-sociales", "pantallas"],
    evidenceLevel: null,
    whatItStudied:
      "Patrones de uso de redes sociales por menores en España.",
    mainFindings:
      "Aporta datos descriptivos de contexto sobre acceso y uso.",
    limitations:
      "No usar como fuente causal. La referencia bibliográfica completa debe auditarse nuevamente antes de una edición impresa definitiva.",
    usedFor:
      "Contexto español complementario sobre redes.",
    citation:
      "SanMiguel P, et al. Estudio sobre el uso de redes sociales por parte de menores en España. 2025.",
    verificationStatus: "source-map-reviewed",
    reviewNote:
      "Fuente real del mapa de evidencia. Revisión final de autores/metadatos recomendada antes de la bibliografía impresa."
  },

  {
    id: "ev052",
    slug: "common-sense-census-2025-zero-eight",
    title: "The 2025 Common Sense Census: Media Use by Kids Zero to Eight",
    authors: ["Common Sense Media"],
    year: 2025,
    publisher: "Common Sense Media",
    url:
      "https://www.commonsensemedia.org/research/the-2025-common-sense-census-media-use-by-kids-zero-to-eight",
    studyType: "Encuesta nacional / informe",
    sourceRole: "contextual",
    population: "Niños pequeños en Estados Unidos",
    ageRange: "0–8 años",
    topics: ["pantallas"],
    evidenceLevel: null,
    whatItStudied:
      "Patrones de acceso y uso de medios por niños pequeños en Estados Unidos.",
    mainFindings:
      "Ofrece contexto descriptivo sobre evolución de dispositivos y formas de consumo digital.",
    limitations:
      "Contexto estadounidense; no debe trasladarse directamente como prevalencia española.",
    usedFor:
      "Contexto comparado sobre primera infancia.",
    citation:
      "Common Sense Media. The 2025 Common Sense Census: Media Use by Kids Zero to Eight."
  },

  // =========================================================
  // REGULACIÓN Y POLÍTICAS
  // =========================================================

  {
    id: "ev053",
    slug: "espana-proyecto-ley-menores-entornos-digitales",
    title:
      "Proyecto de Ley Orgánica para la protección de las personas menores de edad en los entornos digitales (121/000052)",
    authors: ["Congreso de los Diputados"],
    year: 2026,
    publisher: "Congreso de los Diputados",
    url:
      "https://www.congreso.es/es/iniciativas-organo?_iniciativas_id=121%2F000052&_iniciativas_legislatura=XV&_iniciativas_mode=mostrarDetalle&p_p_id=iniciativas&p_p_lifecycle=0&p_p_mode=view&p_p_state=normal",
    studyType: "Proyecto legislativo",
    sourceRole: "policy",
    population: "España",
    topics: ["regulacion", "riesgos-digitales"],
    evidenceLevel: null,
    whatItStudied:
      "No es un estudio: contiene y documenta la tramitación parlamentaria del proyecto español sobre protección de menores en entornos digitales.",
    mainFindings:
      "A 1 de octubre de 2026 el proyecto continúa en tramitación parlamentaria; no debe describirse como ley definitivamente aprobada.",
    limitations:
      "Su contenido y estado pueden cambiar. Debe actualizarse antes de nuevas ediciones.",
    usedFor:
      "Capítulo 13 y página de Actualizaciones.",
    citation:
      "Congreso de los Diputados. Proyecto de Ley Orgánica 121/000052."
  },

  {
    id: "ev054",
    slug: "eu-dsa-minors-guidelines-2025",
    title:
      "Guidelines on the protection of minors under the Digital Services Act",
    authors: ["European Commission"],
    year: 2025,
    publisher: "European Commission",
    url:
      "https://digital-strategy.ec.europa.eu/en/library/commission-publishes-guidelines-protection-minors",
    studyType: "Directrices regulatorias",
    sourceRole: "policy",
    population: "Plataformas online accesibles a menores en la Unión Europea",
    topics: ["regulacion", "riesgos-digitales"],
    evidenceLevel: null,
    whatItStudied:
      "No es un estudio de eficacia: desarrolla criterios de protección de menores bajo el Digital Services Act.",
    mainFindings:
      "Incluye orientaciones sobre privacidad, diseño, recomendación, herramientas de control, denuncia y comprobación de edad.",
    limitations:
      "Una directriz normativa no demuestra por sí misma la eficacia de cada medida.",
    usedFor:
      "Capítulo 13: responsabilidad de plataformas y protección por diseño.",
    citation:
      "European Commission. Guidelines on the protection of minors under the Digital Services Act. 2025."
  },

  {
    id: "ev055",
    slug: "australia-social-media-three-month-evaluation",
    title:
      "Early days, early insights: Understanding experiences of social media age restrictions at the three-month follow-up",
    authors: ["eSafety Commissioner"],
    year: 2026,
    publisher: "Australian eSafety Commissioner",
    url:
      "https://www.esafety.gov.au/research/social-media-age-restrictions-evaluation/early-days-early-insights-three-months-report",
    studyType: "Primera ola de evaluación longitudinal oficial",
    sourceRole: "official_data",
    population: "Niños de 10–15 años y familias australianas",
    sampleSize: "Estudio longitudinal de más de 4.000 niños y familias",
    topics: ["regulacion", "redes-sociales"],
    evidenceLevel: null,
    whatItStudied:
      "Experiencias iniciales antes y tres meses después de las restricciones australianas de edad en redes.",
    mainFindings:
      "La proporción con cuenta en plataformas restringidas bajó aproximadamente de 52,4 % a 42,1 %, mientras el uso con o sin cuenta pasó de 85,9 % a 81,5 %.",
    limitations:
      "Es una evaluación muy temprana. El propio organismo advierte que no permite establecer todavía la eficacia a largo plazo.",
    usedFor:
      "Capítulo 13: Australia como experimento en marcha, no como prueba definitiva de éxito o fracaso.",
    citation:
      "eSafety Commissioner. Early days, early insights. Three-month follow-up. 2026."
  },

  {
    id: "ev056",
    slug: "australia-social-media-age-restrictions",
    title: "Social media age restrictions",
    authors: ["eSafety Commissioner"],
    year: 2025,
    publisher: "Australian eSafety Commissioner",
    url:
      "https://www.esafety.gov.au/about-us/industry-regulation/social-media-age-restrictions",
    studyType: "Información regulatoria oficial",
    sourceRole: "policy",
    population: "Australia",
    ageRange: "Menores de 16 años",
    topics: ["regulacion", "redes-sociales"],
    evidenceLevel: null,
    whatItStudied:
      "No es un estudio: describe las obligaciones de las plataformas bajo la regulación australiana.",
    mainFindings:
      "Las restricciones comenzaron el 10 de diciembre de 2025 y la obligación recae sobre las plataformas para adoptar medidas razonables.",
    limitations:
      "Describe la norma, no demuestra su impacto sobre bienestar.",
    usedFor:
      "Capítulo 13: descripción factual de la política australiana.",
    citation:
      "Australian eSafety Commissioner. Social media age restrictions."
  },

  {
    id: "ev057",
    slug: "wang-2026-china-gaming-restrictions",
    title:
      "Restricting video games in China: Effects on time use, educational achievement, and health",
    authors: ["Z. Wang"],
    year: 2026,
    publisher: "Journal of Development Economics",
    doi: "10.1016/j.jdeveco.2026.103812",
    studyType: "Estudio cuasi-experimental / política pública",
    sourceRole: "academic",
    population: "Menores afectados por restricciones chinas al videojuego",
    topics: ["videojuegos", "regulacion", "escuela"],
    evidenceLevel: "moderada",
    whatItStudied:
      "Efectos de las restricciones de 2021 sobre tiempo de juego, internet, estudio, educación y salud.",
    mainFindings:
      "La política redujo el juego y parte del uso de internet, pero no produjo un aumento claro del tiempo de estudio ni mejoras académicas detectables a corto plazo.",
    limitations:
      "Contexto chino muy específico y coexistencia de otros factores, incluida la pandemia.",
    usedFor:
      "Capítulo 13: reducir una conducta no garantiza automáticamente el resultado final buscado.",
    citation:
      "Wang Z. Journal of Development Economics. 2026;182:103812. doi:10.1016/j.jdeveco.2026.103812."
  },

  {
    id: "ev058",
    slug: "zendle-2023-china-playtime-mandates",
    title:
      "No evidence that Chinese playtime mandates reduced heavy gaming in one segment of the video games industry",
    authors: ["David Zendle et al."],
    year: 2023,
    publisher: "Nature Human Behaviour",
    doi: "10.1038/s41562-023-01669-8",
    studyType: "Análisis observacional de datos de la industria",
    sourceRole: "academic",
    population: "Usuarios de videojuegos en un segmento de la industria china",
    topics: ["videojuegos", "regulacion"],
    evidenceLevel: "moderada",
    whatItStudied:
      "Cambios en juego intensivo alrededor de restricciones regulatorias chinas.",
    mainFindings:
      "No encontró evidencia de reducción del juego intensivo en el segmento analizado.",
    limitations:
      "Cubre solo una parte del mercado y no invalida otros estudios con diseños y datos diferentes.",
    usedFor:
      "Mostrar que los efectos regulatorios dependen de medida, muestra y resultado.",
    citation:
      "Zendle D, et al. Nature Human Behaviour. 2023;7:1753–1766. doi:10.1038/s41562-023-01669-8."
  },

  {
    id: "ev059",
    slug: "uk-dsit-smartphones-social-media-2026",
    title:
      "Understanding the impact of smartphones and social media on children and young people: executive summary",
    authors: ["UK Department for Science, Innovation and Technology", "Scientific consortium"],
    year: 2026,
    publisher: "UK Government",
    url:
      "https://www.gov.uk/government/publications/understand-the-impact-of-smartphones-and-social-media-on-children-and-young-people/understand-the-impact-of-smartphones-and-social-media-on-children-and-young-people-executive-summary",
    studyType: "Síntesis científica encargada por el Gobierno",
    sourceRole: "official_data",
    population: "Investigación sobre niños, adolescentes, smartphones y redes",
    topics: ["pantallas", "redes-sociales", "regulacion"],
    evidenceLevel: null,
    whatItStudied:
      "Estado de la evidencia sobre smartphones, redes sociales y resultados infantiles y juveniles.",
    mainFindings:
      "Identifica asociaciones relevantes pero también importantes carencias de evidencia causal a escala poblacional y prioridades de investigación.",
    limitations:
      "Síntesis de evidencia disponible; no convierte asociaciones existentes en conclusiones causales.",
    usedFor:
      "Marco general y vacíos de investigación.",
    citation:
      "UK DSIT. Understanding the impact of smartphones and social media on children and young people. 2026."
  }
];

export const evidence: EvidenceItem[] = rawEvidence.map((item) => ({
  lastReviewed: "2026-10-01",
  verificationStatus: "verified",
  ...item
}));

export function evidenceUrl(item: EvidenceItem): string | undefined {
  if (item.url) return item.url;
  if (item.doi) return `${DOI_BASE}${item.doi}`;
  return undefined;
}

export function getEvidenceByTopic(topic: string): EvidenceItem[] {
  return evidence.filter((item) => item.topics.includes(topic));
}

export function getEvidenceById(id: string): EvidenceItem | undefined {
  return evidence.find((item) => item.id === id);
}

export function getEvidenceBySlug(slug: string): EvidenceItem | undefined {
  return evidence.find((item) => item.slug === slug);
}

export const evidenceLevelLabels: Record<
  Exclude<EvidenceLevel, null>,
  string
> = {
  robusta: "Evidencia robusta",
  moderada: "Evidencia moderada",
  emergente: "Evidencia emergente",
  prudencial: "Recomendación prudencial"
};

export const sourceRoleLabels: Record<SourceRole, string> = {
  academic: "Fuente académica",
  official_data: "Datos oficiales",
  policy: "Normativa / política pública",
  guidance: "Guía / marco institucional",
  safety_resource: "Recurso oficial de ayuda",
  contextual: "Fuente contextual"
};

export function evidenceBadge(item: EvidenceItem): string {
  if (item.evidenceLevel) {
    return evidenceLevelLabels[item.evidenceLevel];
  }
  return sourceRoleLabels[item.sourceRole];
}
