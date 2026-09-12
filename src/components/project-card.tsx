import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/lib/portfolio-data";

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="glass-card group relative overflow-hidden p-5 transition-shadow duration-300 hover:violet-glow md:p-6"
    >
      <div className="grid gap-6 md:grid-cols-[1.1fr_1fr] md:gap-8">
        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black/40">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="aspect-16/10 w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
        <div className="flex flex-col justify-between gap-4">
          <div>
            <h3 className="font-display text-xl text-foreground md:text-2xl">{project.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-beige-muted">{project.description}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-violet/25 bg-violet/10 px-2.5 py-0.5 text-xs text-beige"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition hover:opacity-90"
            >
              <ExternalLink className="h-3.5 w-3.5" /> View demo
            </a>
            <a
              href={project.repository}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-beige transition hover:bg-white/10 hover:text-foreground"
            >
              <Github className="h-3.5 w-3.5" /> Repository
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
