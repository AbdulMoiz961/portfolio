# How to Edit Your Portfolio

Everything you'll normally want to change lives in **two places**:

| What you want to change | Where |
| --- | --- |
| Add / edit / remove a **project** | `content/projects/*.md` — one file per project |
| Project **screenshots** | `content/images/` |
| **Bio, hero text, skills, links** | `src/lib/portfolio-data.ts` |

You do **not** need to touch any other file for normal content updates.

---

## Part 1 — Adding a new project

### Step 1: Add the screenshot

Put your image in **`content/images/`**. Name it something simple with no spaces:

```
content/images/my-new-project.png
```

Supported: `.png` `.jpg` `.jpeg` `.webp` `.svg` `.gif`

> **Recommended size:** around **1400×880px** (a 16:10 ratio) — that's what the other
> screenshots use. Bigger is fine; the card crops to fit. Keep it under ~1MB so the
> site stays fast.

### Step 2: Create the project file

Copy an existing file in `content/projects/` and rename it. The filename becomes the
project's internal identifier, so use lowercase with dashes:

```
content/projects/my-new-project.md     ✅ good
content/projects/My New Project.md     ❌ avoid spaces/capitals
```

### Step 3: Fill in the details

Here's a complete file. The top block between the `---` lines is the **frontmatter**
(the settings). Everything *below* the second `---` is the **description**.

```markdown
---
title: "My New Project"
order: 5
tags: ["React", "TypeScript", "Tailwind"]
demo: "https://my-project.vercel.app"
repository: "https://github.com/AbdulMoiz961/my-new-project"
image: "my-new-project.png"
---

This is the description that appears on the project card. Write it as plain
text — one or two sentences works best. You can use multiple paragraphs if you
want, and they'll be spaced automatically.
```

### Field reference

| Field | Required | What it does |
| --- | --- | --- |
| `title` | ✅ **yes** | The project name shown on the card |
| `order` | no | Position in the list. `1` = first. Defaults to `999` (goes last) |
| `tags` | no | Tech chips. `["React", "CSS"]` — quote each one |
| `demo` | no | Live site URL. Leave as `""` to hide the "View demo" button |
| `repository` | no | GitHub URL. Leave as `""` to hide the "Repository" button |
| `image` | no | Filename from `content/images/` — just the filename, not the path |

**Rules that matter (these will break the build if you get them wrong):**

1. **The `---` lines are required** — both the opening and closing one.
2. **`title` cannot be empty.**
3. **URLs must start with `https://`** — not `http://`, not bare `github.com/...`.
   To hide a button, use empty quotes: `demo: ""`
4. **`tags` must be a list in square brackets**, each tag quoted, separated by commas.
5. **`image` is just the filename** — `"my-new-project.png"`, *not* `"content/images/my-new-project.png"`

If you get something wrong, the build fails with a message naming the exact file and
field — so you'll know precisely what to fix.

### Step 4: Put it live

Commit and push. GitHub Actions rebuilds and redeploys automatically in about a minute.

---

## Part 2 — Editing an existing project

Open the file in `content/projects/` and change what you need.

- **Fix a typo in the description** → edit the text below the frontmatter.
- **Reorder projects** → change the `order` numbers. Lower numbers come first.
- **Update a demo link** → change the `demo` value.
- **Remove a project** → delete the whole `.md` file (the image can stay or be deleted).
- **Swap the screenshot** → replace the file in `content/images/`, keeping the same
  name. No other change needed.

---

## Part 3 — Editing your bio, hero text, and skills

Open **`src/lib/portfolio-data.ts`** — it's a readable file with comments. You'll find:

- **`siteMeta`** — your name, role, and the browser-tab description.
- **`socials`** — GitHub, LinkedIn, and email links.
- **`hero`** — the headline and intro paragraph on the home page.
- **`about`** — your bio paragraphs, the three fact boxes, and the education list.
- **`skills`** — the nine skill cards (`title` + `content` description).

Text changes are safe to make by editing the words inside the quotes. **Don't remove
the quotes or commas.**

### Adding a skill

Copy an existing skill block, paste it, and change the values:

```ts
{
  id: "skill-10",              // must be unique
  icon: SomeIcon,              // see below
  title: "TypeScript",
  content: "Your description here.",
},
```

The `icon` needs both an import at the top of the file **and** a file in
`src/assets/`:

```ts
import TypeScriptLogo from "@/assets/TypeScript_logo.svg";
```

then use `icon: TypeScriptLogo`. If you'd rather not deal with imports, just ask
and it can be wired up for you.

---

## Part 4 — Editing from your phone

Everything above works from a phone through the GitHub website:

1. Open **github.com/AbdulMoiz961/portfolio** in a browser
2. Navigate to the file you want (`content/projects/...` or `src/lib/portfolio-data.ts`)
3. Tap the **pencil ✏️** icon
4. Make your edits
5. Scroll to the bottom, tap **Commit changes**
6. Wait ~1 minute — the site updates itself

To **add** a project from your phone: open an existing project file, tap the
**copy** icon, then create a new file with the new name and paste the content.

> Uploading images from a phone is easiest through GitHub's web UI: go to
> `content/images/` → **Add file** → **Upload files**.

---

## Part 5 — Testing locally (optional, on your PC)

If you want to preview changes before pushing:

```bash
git clone https://github.com/AbdulMoiz961/portfolio.git
cd portfolio
npm install
npm run dev
```

Then open **http://localhost:5173** — it live-reloads as you edit.
Press `Ctrl+C` to stop.

---

## Quick troubleshooting

| Symptom | Cause / fix |
| --- | --- |
| Build fails, mentions `frontmatter` | A required field is missing or a URL isn't `https://` |
| Project doesn't appear | Filename must end in `.md` and live directly in `content/projects/` |
| Image shows as broken | The `image:` value must match the filename in `content/images/` exactly (including case) |
| Buttons missing on a card | Empty `demo`/`repository` values hide buttons — that's intended |
| Wrong order | Adjust the `order` numbers — lower shows first |
| Changes not live after a minute | Check the **Actions** tab on GitHub for a red ❌ build failure |
