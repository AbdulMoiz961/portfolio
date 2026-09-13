import { z } from "zod";

/** Shape of a project's frontmatter. Validated at build time — a typo fails the build
 *  with a clear message instead of silently shipping a broken card. */
const frontmatterSchema = z.object({
  title: z.string().min(1),
  order: z.number().optional(),
  tags: z.array(z.string()).default([]),
  demo: z.string().url().or(z.literal("")).default(""),
  repository: z.string().url().or(z.literal("")).default(""),
  image: z.string().optional(),
});

export type Project = {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demo: string;
  repository: string;
};

/**
 * Minimal frontmatter parser — deliberately dependency-free.
 * Handles the simple `key: value` / inline-array frontmatter we ship.
 * Falls back to importing the yaml lib if you start nesting objects.
 */
function parseFrontmatter(raw: string): { data: Record<string, unknown>; body: string } {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(raw);
  if (!match) return { data: {}, body: raw.trim() };

  const [, block, body] = match;
  const data: Record<string, unknown> = {};

  for (const line of block.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const idx = trimmed.indexOf(":");
    if (idx === -1) continue;

    const key = trimmed.slice(0, idx).trim();
    let value = trimmed.slice(idx + 1).trim();

    // strip surrounding quotes
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    if (value.startsWith("[") && value.endsWith("]")) {
      data[key] = value
        .slice(1, -1)
        .split(",")
        .map((s) => s.trim().replace(/^["']|["']$/g, ""))
        .filter(Boolean);
    } else if (value !== "" && !Number.isNaN(Number(value))) {
      data[key] = Number(value);
    } else {
      data[key] = value;
    }
  }

  return { data, body: body.trim() };
}

// Eagerly import every markdown file under content/projects/ as a raw string.
// Vite inlines these at build time — no runtime fetch, no backend.
const modules = import.meta.glob("/content/projects/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

// Import every project image so Vite fingerprints and copies them.
const images = import.meta.glob("/content/images/*", {
  query: "?url",
  import: "default",
  eager: true,
}) as Record<string, string>;

function findImage(filename: string | undefined): string {
  if (!filename) return "";
  const entry = Object.entries(images).find(([path]) => path.endsWith(`/${filename}`));
  return entry ? entry[1] : "";
}

export const projects: Project[] = Object.entries(modules)
  .map(([path, raw]) => {
    const slug = path.split("/").pop()!.replace(/\.md$/, "");
    const { data, body } = parseFrontmatter(raw);

    const parsed = frontmatterSchema.safeParse(data);
    if (!parsed.success) {
      throw new Error(
        `Invalid frontmatter in content/projects/${slug}.md:\n` +
          parsed.error.issues.map((i) => `  - ${i.path.join(".") || "(root)"}: ${i.message}`).join("\n"),
      );
    }

    const fm = parsed.data;
    return {
      id: 0,
      slug,
      title: fm.title,
      description: body,
      image: findImage(fm.image),
      tags: fm.tags,
      demo: fm.demo,
      repository: fm.repository,
      _sortOrder: fm.order ?? 999,
    };
  })
  .sort((a, b) => a._sortOrder - b._sortOrder || a.title.localeCompare(b.title))
  .map(({ _sortOrder, ...p }, i) => ({ ...p, id: i }));

if (import.meta.env.DEV && projects.length === 0) {
  console.warn("[content] No projects found in content/projects/*.md");
}
