export type SectionId = 'hero' | 'context' | 'archive' | 'concept' | 'info';

export const sectionLabels: Record<SectionId, string> = {
  hero: 'manifesto',
  context: 'context',
  archive: 'archive',
  concept: 'concept',
  info: 'info',
};

export const homeSections: SectionId[] = ['hero', 'context', 'archive'];
