import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { skills, hero } from "@/lib/portfolio-data";
import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";
import { usePageMeta, defaultMeta } from "@/lib/use-page-meta";

export default function Home() {
  usePageMeta(defaultMeta.title, defaultMeta.description);

  const featured = projects.slice(0, 3);
  const featuredSkills = skills.slice(0, 6);

  return (
    <div className="mx-auto max-w-6xl px-6">
      {/* Hero */}
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-beige-muted"
        >
          <Sparkles className="h-3 w-3 text-primary" />
          {hero.badge}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: "easeOut" }}
          className="mt-6 max-w-3xl font-display text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl"
        >
          {hero.headingBefore}
          <span className="text-gradient">{hero.headingName}</span>
          {hero.headingAfter}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-beige-muted md:text-lg"
        >
          {hero.paragraph}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            View projects <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-beige transition hover:bg-white/10 hover:text-foreground"
          >
            Get in touch
          </Link>
        </motion.div>
      </section>

      {/* What I work with */}
      <section className="py-8">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-beige-muted">Toolkit</p>
            <h2 className="mt-1 font-display text-2xl text-foreground">What I work with</h2>
          </div>
          <Link
            to="/about"
            className="text-sm text-beige-muted transition hover:text-foreground"
          >
            All skills →
          </Link>
        </div>
        <div className="glass-card grid grid-cols-3 gap-4 p-6 sm:grid-cols-6">
          {featuredSkills.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex flex-col items-center gap-2 rounded-xl p-3 text-center transition hover:bg-white/[0.03]"
            >
              <img src={s.icon} alt={s.title} className="h-10 w-10 object-contain" />
              <span className="text-[11px] text-beige-muted">{s.title}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured projects */}
      <section className="py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-beige-muted">Selected work</p>
            <h2 className="mt-1 font-display text-2xl text-foreground md:text-3xl">
              Featured projects
            </h2>
          </div>
          <Link to="/projects" className="text-sm text-beige-muted transition hover:text-foreground">
            See all →
          </Link>
        </div>

        <div className="grid gap-6">
          {featured.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="glass-card relative overflow-hidden p-8 md:p-12">
          <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/25 blur-3xl" />
          <h3 className="max-w-xl font-display text-2xl text-foreground md:text-3xl">
            {hero.ctaTitle}
          </h3>
          <p className="mt-3 max-w-xl text-sm text-beige-muted">{hero.ctaBody}</p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            Start a conversation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
