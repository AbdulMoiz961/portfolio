import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

/**
 * Validates every content/projects/*.md at build time.
 * Fails the build with a file-specific message so content typos are caught in CI
 * instead of silently shipping a broken card.
 */
function validateProjectContent(): Plugin {
  const CONTENT_DIR = "content/projects";
  let root = process.cwd();

  return {
    name: "validate-project-content",
    apply: "build",
    configResolved(config) {
      root = config.root;
    },
    buildStart() {
      const dir = path.resolve(root, CONTENT_DIR);
      if (!fs.existsSync(dir)) return;

      const problems: string[] = [];
      const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));

      for (const file of files) {
        const full = path.join(dir, file);
        const raw = fs.readFileSync(full, "utf8");
        const rel = `${CONTENT_DIR}/${file}`;

        const m = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(raw);
        if (!m) {
          problems.push(`${rel}: missing frontmatter block. A file must start with --- and\n      have a closing --- on its own line.`);
          continue;
        }
        const [, block, body] = m;

        const fields: Record<string, string> = {};
        for (const line of block.split(/\r?\n/)) {
          const t = line.trim();
          if (!t || t.startsWith("#")) continue;
          const idx = t.indexOf(":");
          if (idx === -1) {
            problems.push(`${rel}: line "${t}" is not a valid "key: value" pair.`);
            continue;
          }
          fields[t.slice(0, idx).trim()] = t.slice(idx + 1).trim();
        }

        // required
        const title = (fields.title ?? "").replace(/^["']|["']$/g, "");
        if (!title) problems.push(`${rel}: "title" is required and cannot be empty.`);

        // tags must be a well-formed bracketed list
        if (fields.tags !== undefined) {
          const tv = fields.tags;
          if (!tv.startsWith("[") || !tv.endsWith("]")) {
            problems.push(`${rel}: "tags" must be a bracketed list like ["React", "CSS"] — got ${tv}`);
          }
        }

        // urls
        for (const key of ["demo", "repository"]) {
          const v = (fields[key] ?? "").replace(/^["']|["']$/g, "");
          if (v && !v.startsWith("https://")) {
            problems.push(`${rel}: "${key}" must start with https:// (or be "" to hide the button) — got "${v}"`);
          }
        }

        // description
        if (!body.trim()) problems.push(`${rel}: description body is empty.`);

        // image exists
        const img = (fields.image ?? "").replace(/^["']|["']$/g, "");
        if (img && !fs.existsSync(path.resolve(root, "content/images", img))) {
          const available = fs.existsSync(path.resolve(root, "content/images"))
            ? fs.readdirSync(path.resolve(root, "content/images")).join(", ")
            : "(none)";
          problems.push(`${rel}: image "${img}" not found in content/images/. Available: ${available}`);
        }
      }

      if (problems.length) {
        const msg = [
          "",
          "  ✖ Content validation failed — fix these before the site can build:",
          "",
          ...problems.map((p) => `    • ${p}`),
          "",
          "  See EDITING.md for the field reference.",
          "",
        ].join("\n");
        this.error(msg);
      }
    },
  };
}

export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss(), validateProjectContent()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    outDir: "dist",
    sourcemap: false,
  },
});
