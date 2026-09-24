# Portfolio

Personal portfolio site for **Abdul Moiz** — software developer & CS graduate.

Static single-page app (Vite + React + TypeScript + Tailwind CSS v4 + framer-motion),
hosted free on **GitHub Pages**.

**📝 To edit content — read [EDITING.md](./EDITING.md).** It covers adding projects,
images, bio text, and editing from your phone.

## Live

**https://abdu1moiz.me/**

Deploys automatically on every push to `main` via GitHub Actions (~1 minute).

## Design

Dark, glassmorphic aesthetic — near-black background with radial violet/plum glows,
frosted translucent cards, warm beige text, soft violet accents.
Typography: **Space Grotesk** (display) + **Inter** (body).

## Pages

| Route       | Content                                                  |
| ----------- | -------------------------------------------------------- |
| `/`         | Hero, toolkit strip, featured projects, closing CTA      |
| `/projects` | Full project grid — screenshot, description, tags, links |
| `/about`    | Bio, education, full 9-skill grid                        |
| `/contact`  | Zod-validated form (opens mail client) + social links    |
| `*`         | 404 page                                                 |

## Content structure

```
content/
  projects/         one .md file per project — frontmatter + description
  images/           project screenshots
src/lib/
  projects.ts       loads + validates the markdown at build time
  portfolio-data.ts bio, hero copy, skills, socials, site metadata
```

The `@` alias points at `src/`. Project markdown is pulled in with Vite's
`import.meta.glob`, so there's no runtime fetch and no backend.

### Build-time validation

A Vite plugin (`validateProjectContent` in `vite.config.ts`) checks every
`content/projects/*.md` during the build. A missing `title`, a malformed `tags`
list, a non-`https://` URL, or an `image:` pointing at a missing file **fails the
build** with a message naming the file and field. This means content mistakes are
caught in CI rather than silently shipping a broken card.

## Local development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # tsc -b && vite build  →  dist/
npm run preview  # serve the production build
```

> **Note on `base`:** `vite.config.ts` sets `base: "/portfolio/"` in production so
> assets resolve under the GitHub Pages project URL. If the repo is renamed, update
> `REPO_NAME` there **and** `basename` in `src/main.tsx`.

## Deploy

Automatic via `.github/workflows/deploy.yml`. One-time setup:
**Settings → Pages → Source = "GitHub Actions"** (already configured).

The workflow copies `index.html` → `404.html` so client-side routes
(`/projects`, `/about`, …) survive a hard refresh on Pages.

## Contact form

Static hosting has no server to receive submissions. The form validates input with
zod, then opens the visitor's mail client pre-filled. Adding a real backend later
(Formspree, Resend, a serverless function) is a drop-in change to `onSubmit` in
`src/pages/contact.tsx`.
