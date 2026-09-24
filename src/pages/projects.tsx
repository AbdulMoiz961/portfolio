import { motion } from "framer-motion";
import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";
import { usePageMeta } from "@/lib/use-page-meta";

export default function Projects() {
  usePageMeta(
    "Projects — Abdul Moiz",
    "Selected work by Abdul Moiz spanning machine learning systems, full-stack applications, and desktop tools.",
  );

  return (
    <div className="mx-auto max-w-6xl px-6 pt-16 pb-24 md:pt-24">
      <motion.header
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 max-w-2xl"
      >
        <p className="text-xs uppercase tracking-[0.2em] text-beige-muted">Projects</p>
        <h1 className="mt-2 font-display text-4xl text-foreground md:text-5xl">
          Things I've <span className="text-gradient">built</span>.
        </h1>
        <p className="mt-4 text-beige-muted">
          Selected work spanning machine learning systems, full-stack applications, and desktop
          tools.
        </p>
      </motion.header>

      <div className="grid gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </div>
  );
}
