# Smart Sail Boat Deck

Static Astro site for the Smart Sail Boat public project journal at
`https://deck.smartsailboat.com`.

Pressly publishes approved entries into `src/content/news/`. The public site calls
them stories and exposes them through `/stories/`; the internal collection name stays
`news` to preserve the existing Pressly/n8n contract.

## Commands

```sh
npm ci
npm run build
npm run dev
```

## Publishing contract

- Every published entry needs at least one canonical topic tag: `project-update`,
  `vessel-story`, `systems`, `refit-maintenance`, `voyage`, or `safety-security`.
- Optional vessel tags use `vessel-<public-slug>`.
- OTTO-derived material must arrive through an explicitly approved public dossier or
  equivalent user-supplied public brief.
- Do not commit private vessel records, source dossiers, credentials, live locations,
  raw transcripts, or unapproved evidence to this repository.
