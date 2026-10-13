# alexpartida.com

Portfolio and freelance site. Astro, static output, deployed to Netlify.

## Running it

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static site into dist/
npm run preview  # serve the built site locally
```

Requires Node 20+. Netlify is pinned to Node 22 in `netlify.toml`.

## Changing the words

**`src/copy.ts` holds every piece of text on the site.** Headings, paragraphs,
button labels, form labels and dropdown options are all there as plain strings
with comments explaining each one. Edit it, save, reload — nothing in that file
is code you can break by rewording it.

The one exception is the case studies, which live as their own Markdown files
in `src/content/work/` because they're long-form prose.

A couple of fields accept basic HTML (`<strong>bold</strong>`, `<a href="...">a
link</a>`) — those are marked with a comment where they appear.

## Where things live

| What you want to change | Where |
|---|---|
| **Any text on the site** | **`src/copy.ts`** |
| Availability line, social links, location | `src/config.ts` |
| Colours, type scale, spacing | `src/styles/global.css` — the `:root` block at the top |
| A case study | `src/content/work/*.mdx` |
| Page structure and layout | `src/pages/*.astro` |
| The share card image | `npm run og` after editing `scripts/make-og-image.mjs` |

Everything references design tokens rather than raw hex values, so changing a
handful of custom properties in `global.css` restyles the whole site, light and
dark mode together.

## Adding a case study

Add an `.mdx` file to `src/content/work/`. The frontmatter is validated against
the schema in `src/content.config.ts`, so a typo fails the build rather than
shipping a broken page:

```yaml
---
title: What you built
client: Client Name
summary: One line for the index page.
lede: A longer line for the top of the case study.
role: Design and build
year: "2026"            # quoted — bare 2026 parses as a number and fails
stack: [HTML, CSS, JS]
liveUrl: https://example.com   # optional
draft: false                   # true hides it from the index
order: 1                       # lower sorts first
---
```

## Contact form

The form on `/contact` uses [Netlify Forms](https://docs.netlify.com/forms/setup/).
It's registered by the `data-netlify="true"` attribute at deploy time, with a
honeypot field for spam. Submissions appear under **Forms** in the Netlify
dashboard — turn on notifications there to get them emailed to you.

The form posts to `/thanks/`, which is `noindex` and excluded from the sitemap.

## SEO

Every page sets its own title, description, canonical URL and Open Graph tags
via `src/components/SEO.astro`. A sitemap is generated at build time and
referenced from `robots.txt`. `Person` structured data is emitted on every page
from `src/layouts/BaseLayout.astro`.

The share card lives at `public/og-default.png` and is regenerated with:

```sh
node scripts/make-og-image.mjs
```

## History

The previous version of this site was a Create React App single-page app. It
rendered nothing without JavaScript, which meant search engines and link
previews saw an empty page, and it no longer built on current Node. That version
is still in git history on the `main` branch before the Astro rebuild.
