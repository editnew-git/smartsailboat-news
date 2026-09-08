export const TOPICS = [
  { slug: 'project-update', label: 'Project Updates', description: 'Milestones, experiments, and the work moving Smart Sail Boat forward.' },
  { slug: 'vessel-story', label: 'Vessel Stories', description: 'Selected stories from the boats and people behind the project.' },
  { slug: 'systems', label: 'Systems', description: 'Onboard technology, equipment, integrations, and practical engineering.' },
  { slug: 'refit-maintenance', label: 'Refit & Maintenance', description: 'Approved repair, restoration, and maintenance stories.' },
  { slug: 'voyage', label: 'Voyages', description: 'Field notes, passages, tests, and lessons learned underway.' },
  { slug: 'safety-security', label: 'Safety & Security', description: 'Publication-safe lessons about protecting vessels and crews.' },
] as const;

export type TopicSlug = (typeof TOPICS)[number]['slug'];

export function getPrimaryTopic(tags: readonly string[]) {
  const normalized = new Set(tags.map((tag) => tag.trim().toLowerCase()));
  return TOPICS.find((topic) => normalized.has(topic.slug)) ?? TOPICS[0];
}

export function getVesselLabel(tags: readonly string[]) {
  return getVessel(tags)?.name;
}

// Public routing names only. Vessel facts and profile copy come from published stories.
export const VESSELS = [
  { slug: 'velloa', name: 'Velloa', tag: 'vessel-velloa' },
  { slug: 'jabulani', name: 'Jabulani', tag: 'vessel-jabulani' },
] as const;

export function getVessel(tags: readonly string[]) {
  const normalized = new Set(tags.map((tag) => tag.trim().toLowerCase()));
  const matches = VESSELS.filter((vessel) => normalized.has(vessel.tag));
  if (matches.length > 1) throw new Error('A story must identify at most one public vessel.');
  return matches[0];
}
