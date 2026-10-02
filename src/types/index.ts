export type {
  EvidenceLevel,
  SourceRole,
  VerificationStatus,
  EvidenceItem,
} from '../data/evidence';

export type { HelpResource } from '../data/helpResources';

export interface Topic {
  slug: string;
  title: string;
  subtitle: string;
  intro: string;
  editorialKicker?: string;
  fiveQuestions?: {
    question: string;
    description: string;
  }[];
  whatWeKnow: string[];
  whatWeDontKnow: string[];
  recommendations: string[];
  ageGuidance?: {
    range: '6–9' | '10–13' | '14–18';
    title: string;
    focus: string;
    description: string;
  }[];
  evidenceIds?: string[];
  bookChapter: string;
  lastReviewed: string;
  seoDescription: string;
  keyQuote?: string;
}

export interface Update {
  slug: string;
  title: string;
  date: string;
  topics: string[];
  area: 'legislación' | 'redes y edad' | 'móviles escolares' | 'IA educativa' | 'IA emocional' | 'vídeo corto' | 'recursos';
  summary: string;
  whatChanged: string;
  previousState: string;
  newState: string;
  recommendationChange: string;
  sources: { title: string; url?: string }[];
  lastReviewed: string;
}

export interface ResourceItem {
  slug: string;
  title: string;
  description: string;
  category: 'protocolo' | 'herramienta' | 'guía' | 'ayuda';
  href: string;
  readTime?: string;
}

export interface HelpPhone {
  id: string;
  name: string;
  phone: string;
  category: string;
  badge: string;
  description: string;
  availability: string;
  officialUrl?: string;
  highlight?: boolean;
}

export interface BookInterestSubmission {
  id?: string;
  email: string;
  comment: string;
  createdAt: string;
}
