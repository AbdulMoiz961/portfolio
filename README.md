# Portfolio

Personal portfolio site for **Abdul Moiz** — front-end developer & web designer.

Static single-page app (Vite + React + TypeScript + Tailwind CSS v4 + framer-motion),
built so it can be hosted for free on **GitHub Pages** and previewed from any phone.

## Design

Dark, glassmorphic aesthetic — near-black background with radial violet/plum glows,
frosted translucent cards, warm beige text, soft violet accents.
Typography: **Space Grotesk** (display) + **Inter** (body).

## Pages

| Route       | Content                                                       |
| ----------- | ------------------------------------------------------------- |
| `/`         | Hero, toolkit strip, featured projects, closing CTA           |
| `/projects` | Full project grid — screenshot, description, tags, links      |
| `/about`    | Bio, education, full 9-skill grid                             |
| `/contact`  | Zod-validated form (opens mail client) + social links         |
| `*`         | 404 page                                                      |

## Local development

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build

```bash
npm run build    # tsc -b && vite build  →  dist/
npm run preview  # serve the production build locally
```

> **Note on `base`:** `vite.config.ts` sets `base: "/portfolio/"` for production so
> assets resolve under the GitHub Pages project URL
> (`https://abdulmoiz961.github.io/portfolio/`).
> If the repo is ever renamed, update `REPO_NAME` there **and** `basename` in `src/main.tsx`.

## Deploy

Automatic via GitHub Actions (`.github/workflows/deploy.yml`) on every push to `main`.

One-time setup: **Settings → Pages → Source = "GitHub Actions"**.

The workflow also copies `index.html` → `404.html` so client-side routes
(`/projects`, `/about`, …) survive a hard refresh on Pages.

## Content

All editable content lives in **`src/lib/portfolio-data.ts`** — skills, projects,
socials, and site metadata. No content is hard-coded in the page components.

## Contact form

Static hosting means there is no server to receive submissions. The form validates
input with zod, then opens the visitor's mail client pre-filled with their message.
Adding a real backend later (Formspree, Resend, a serverless function) is a drop-in
change to `onSubmit` in `src/pages/contact.tsx`.
