import { TOPICS } from '../data/topics';
import { EVIDENCE_ITEMS } from '../data/evidence';
import { RESOURCES } from '../data/resources';
import { UPDATES } from '../data/updates';
import { Topic, Evidence, ResourceItem, Update } from '../types';

export interface SearchResults {
  topics: Topic[];
  evidence: Evidence[];
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

  const matchesAny = (text: string) => {
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

  const matchedEvidence = EVIDENCE_ITEMS.filter(
    (e) =>
      matchesAny(e.title) ||
      matchesAny(e.whatItStudied) ||
      matchesAny(e.mainFindings) ||
      matchesAny(e.usedFor) ||
      matchesAny(e.studyType)
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
