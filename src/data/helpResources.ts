export interface HelpResource {
  id: string;
  name: string;
  shortName: string;
  phone?: string;
  url: string;
  scope: string;
  whenToUse: string;
  notes?: string;
  priority: number;
  lastReviewed: string;
}

export const helpResources: HelpResource[] = [
  {
    id: "help-112",
    name: "Emergencias",
    shortName: "112",
    phone: "112",
    url: "https://www.112.es/",
    scope: "España",
    whenToUse:
      "Peligro inmediato para la vida o la integridad física, violencia inmediata, tentativa suicida en curso u otra emergencia grave.",
    priority: 1,
    lastReviewed: "2026-10-01"
  },
  {
    id: "help-024",
    name: "Línea 024 de atención a la conducta suicida",
    shortName: "024",
    phone: "024",
    url: "https://www.sanidad.gob.es/linea024/home.htm",
    scope: "España",
    whenToUse:
      "Ideación o conducta suicida, o familiares y allegados preocupados por una persona.",
    notes:
      "Servicio nacional. Ante una emergencia vital inmediata debe utilizarse el 112.",
    priority: 2,
    lastReviewed: "2026-10-01"
  },
  {
    id: "help-incibe-017",
    name: "Tu Ayuda en Ciberseguridad — INCIBE",
    shortName: "017",
    phone: "017",
    url: "https://www.incibe.es/linea-de-ayuda-en-ciberseguridad",
    scope: "España",
    whenToUse:
      "Ciberacoso, sextorsión, privacidad, cuentas comprometidas, fraudes, suplantación y otros incidentes de ciberseguridad.",
    notes:
      "Servicio de orientación. No sustituye una denuncia policial ni los servicios de emergencia.",
    priority: 3,
    lastReviewed: "2026-10-01"
  },
  {
    id: "help-aepd",
    name: "Canal Prioritario — Agencia Española de Protección de Datos",
    shortName: "Canal Prioritario",
    url: "https://www.aepd.es/canalprioritario",
    scope: "España",
    whenToUse:
      "Difusión ilícita online de determinados contenidos sexuales o violentos que genere un riesgo grave para los derechos, libertades o salud de la persona afectada.",
    notes:
      "No sustituye la denuncia cuando puedan existir delitos.",
    priority: 4,
    lastReviewed: "2026-10-01"
  },
  {
    id: "help-policia",
    name: "Policía Nacional",
    shortName: "091",
    phone: "091",
    url: "https://www.policia.es/",
    scope: "España",
    whenToUse:
      "Posibles delitos, amenazas graves, grooming, extorsión, violencia sexual u otras situaciones que requieran intervención policial.",
    priority: 5,
    lastReviewed: "2026-10-01"
  },
  {
    id: "help-guardia-civil",
    name: "Guardia Civil",
    shortName: "062",
    phone: "062",
    url:
      "https://web.guardiacivil.es/es/colaboracion/atencionciudadano_1/",
    scope: "España",
    whenToUse:
      "Posibles delitos, amenazas, extorsión, grooming u otras situaciones que requieran intervención de Guardia Civil.",
    priority: 6,
    lastReviewed: "2026-10-01"
  },
  {
    id: "help-anar-menores",
    name: "Teléfono/Chat ANAR de Ayuda a Niños, Niñas y Adolescentes",
    shortName: "ANAR menores",
    phone: "900202010",
    url: "https://www.anar.org/",
    scope: "España",
    whenToUse:
      "Menores que necesitan hablar confidencialmente sobre acoso, violencia, problemas emocionales, familiares o digitales.",
    priority: 7,
    lastReviewed: "2026-10-01"
  },
  {
    id: "help-anar-familias",
    name: "ANAR Familia y Centros Escolares",
    shortName: "ANAR familias",
    phone: "600505152",
    url: "https://www.anar.org/",
    scope: "España",
    whenToUse:
      "Familias, profesorado y otros adultos que necesitan orientación ante una situación que afecta a un menor.",
    priority: 8,
    lastReviewed: "2026-10-01"
  },
  {
    id: "help-acoso-escolar",
    name: "Teléfono contra el Acoso Escolar",
    shortName: "900 018 018",
    phone: "900018018",
    url: "https://www.anar.org/telefono-chat-del-acoso-escolar/",
    scope: "España",
    whenToUse:
      "Acoso y ciberacoso relacionado con el entorno educativo.",
    priority: 9,
    lastReviewed: "2026-10-01"
  },
  {
    id: "help-016",
    name: "Servicio 016",
    shortName: "016",
    phone: "016",
    url:
      "https://violenciagenero.igualdad.gob.es/informacion-3/recursos/telefono016/",
    scope: "España",
    whenToUse:
      "Información, asesoramiento y atención ante formas de violencia contra las mujeres, incluida violencia digital.",
    priority: 10,
    lastReviewed: "2026-10-01"
  }
];
