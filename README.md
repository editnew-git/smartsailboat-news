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

## Dokploy deployment

- Source: `editnew-git/smartsailboat-news`, branch `main`
- Build type: static
- Install/build command: `npm ci && npm run build`
- Publish directory: `dist`
- Domain: `deck.smartsailboat.com`
- Container port: `80`

The VPS Caddy edge already routes `deck.smartsailboat.com` to Dokploy's Traefik
service. The DNS record must point the hostname to the same VPS as `news.wwds.co`
before Caddy can issue its certificate.

## Publishing contract

### Vessel pages

The Pressly → n8n → `src/content/news/` contract is unchanged. No new frontmatter
fields or sync destinations are required. `/vessels/` lists vessels with a
published profile. `/vessels/<slug>/` displays that profile's excerpt and cover,
links to its canonical story article, and collects published vessel updates.

Publish one profile article through Pressly using `vessel-story`, `vessel-profile`,
and exactly one mapped vessel tag: `vessel-velloa` or `vessel-jabulani`. Supply an
approved introduction in Excerpt and approved photography. Revise that same release
for profile changes. Ordinary updates use the vessel tag and a canonical topic,
without `vessel-profile`. Body remains at its permanent `/stories/<slug>/` URL.

`src/lib/topics.ts` contains routing names only. A mapping alone does not expose
a page. Draft profiles are excluded; duplicate published profiles or multiple
mapped vessels on one story fail the build. Unknown tags do not create vessel
labels. Unpublishing a profile removes its vessel page on rebuild.

Dates represent publication dates. State the work/event date in approved Body
when different. Keep evidence references and approval records outside this repo.
First editorial steps: approved vessel introductions, then a selected Jabulani
mainsail progress story. Do not infer completed work or publish internal media.

- Every published entry needs at least one canonical topic tag: `project-update`,
  `vessel-story`, `systems`, `refit-maintenance`, `voyage`, or `safety-security`.
- Optional vessel tags use `vessel-<public-slug>`.
- OTTO-derived material must arrive through an explicitly approved public dossier or
  equivalent user-supplied public brief.
- Do not commit private vessel records, source dossiers, credentials, live locations,
  raw transcripts, or unapproved evidence to this repository.
