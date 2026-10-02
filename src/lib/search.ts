import { TOPICS } from '../data/topics';
import { evidence, EvidenceItem } from '../data/evidence';
import { RESOURCES } from '../data/resources';
import { UPDATES } from '../data/updates';
import { Topic, ResourceItem, Update } from '../types';

export interface SearchResults {
  topics: Topic[];
  evidence: EvidenceItem[];
  resources: ResourceItem[];
  updates: Update[];
  totalMatches: number;
}

function normalize(str: string): string {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

export function searchAll(query: string): SearchResults {
  const clean = normalize(query.trim());
  if (!clean || clean.length < 2) {
    return {
      topics: [],
      evidence: [],
      resources: [],
      updates: [],
      totalMatches: 0,
    };
  }

  const terms = clean.split(/\s+/).filter(Boolean);

  const matchesAny = (text?: string) => {
    if (!text) return false;
    const norm = normalize(text);
    return terms.some((term) => norm.includes(term));
  };

  const matchedTopics = TOPICS.filter(
    (t) =>
      matchesAny(t.title) ||
      matchesAny(t.subtitle) ||
      matchesAny(t.intro) ||
      t.whatWeKnow.some(matchesAny) ||
      t.recommendations.some(matchesAny)
  );

  const matchedEvidence = evidence.filter(
    (e) =>
      matchesAny(e.title) ||
      matchesAny(e.authors.join(' ')) ||
      matchesAny(e.whatItStudied) ||
      matchesAny(e.mainFindings) ||
      matchesAny(e.limitations) ||
      matchesAny(e.usedFor) ||
      matchesAny(e.studyType) ||
      matchesAny(e.citation) ||
      matchesAny(e.publisher)
  );

  const matchedResources = RESOURCES.filter(
    (r) => matchesAny(r.title) || matchesAny(r.description)
  );

  const matchedUpdates = UPDATES.filter(
    (u) =>
      matchesAny(u.title) ||
      matchesAny(u.summary) ||
      matchesAny(u.whatChanged) ||
      matchesAny(u.area)
  );

  return {
    topics: matchedTopics,
    evidence: matchedEvidence,
    resources: matchedResources,
    updates: matchedUpdates,
    totalMatches:
      matchedTopics.length +
      matchedEvidence.length +
      matchedResources.length +
      matchedUpdates.length,
  };
}
