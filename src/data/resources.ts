import { ResourceItem } from '../types';

export const RESOURCES: ResourceItem[] = [
  {
    slug: 'protocolos',
    title: 'Protocolos rápidos de actuación',
    description: 'Qué hacer y qué evitar durante los primeros treinta minutos ante ciberacoso, grooming, sextorsión, deepfakes o difusión de imágenes íntimas.',
    category: 'protocolo',
    href: '/recursos/protocolos',
    readTime: '6 min de lectura',
  },
  {
    slug: 'acuerdo-digital',
    title: 'Acuerdo digital para casa',
    description: 'Una plantilla estructurada y lista para imprimir o completar en familia para acordar límites, horarios, privacidad y consecuencias antes del conflicto.',
    category: 'herramienta',
    href: '/recursos/acuerdo-digital',
    readTime: 'Herramienta imprimible',
  },
  {
    slug: 'guia-ia',
    title: 'Guía rápida de IA: lo esencial en diez minutos',
    description: 'El principio «Tutor antes que autor», diez criterios claros de uso, cinco instrucciones prácticas y tres preguntas clave para estudiantes y adultos.',
    category: 'guía',
    href: '/recursos/guia-ia',
    readTime: '10 min de lectura',
  },
  {
    slug: 'ayuda',
    title: 'Directorio de ayuda inmediata en España',
    description: 'Teléfonos directos y gratuitos (112, 024, 017, Canal Prioritario AEPD, ANAR) para emergencias, violencia, salud mental y ciberseguridad.',
    category: 'ayuda',
    href: '/ayuda',
    readTime: 'Directorio oficial',
  },
];
