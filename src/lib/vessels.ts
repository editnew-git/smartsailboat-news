import type { CollectionEntry } from 'astro:content';
import { VESSELS, getVessel } from './topics';

export function getPublicVessels(posts: CollectionEntry<'news'>[]) {
  return VESSELS.flatMap((vessel) => {
    const stories = posts.filter((post) => !post.data.draft && getVessel(post.data.tags)?.slug === vessel.slug)
      .sort((a, b) => b.data.date.localeCompare(a.data.date) || a.data.slug.localeCompare(b.data.slug));
    const profiles = stories.filter((post) => post.data.tags.some((tag) => tag.trim().toLowerCase() === 'vessel-profile'));
    if (profiles.length > 1) throw new Error(`Multiple published vessel-profile articles for ${vessel.slug}; keep one canonical profile.`);
    const profile = profiles[0];
    return profile ? [{ ...vessel, profile, stories: stories.filter((post) => post.id !== profile.id) }] : [];
  });
}
