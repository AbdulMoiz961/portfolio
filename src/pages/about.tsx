import { motion } from "framer-motion";
import { skills, about } from "@/lib/portfolio-data";
import { usePageMeta } from "@/lib/use-page-meta";

export default function About() {
  usePageMeta(
    "About — Abdul Moiz",
    "About Abdul Moiz — front-end developer, background, education, and the tools he works with day to day.",
  );

  return (
    <div className="mx-auto max-w-6xl px-6 pt-16 pb-24 md:pt-24">
      <motion.header
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-14 max-w-3xl"
      >
        <p className="text-xs uppercase tracking-[0.2em] text-beige-muted">About</p>
        <h1 className="mt-2 font-display text-4xl text-foreground md:text-5xl">
          A little about <span className="text-gradient">me</span>.
        </h1>
      </motion.header>

      <section className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-14">
        <div className="glass-card p-8 md:p-10">
          <p className="text-lg leading-relaxed text-foreground">{about.lead}</p>
          {about.body.map((para, i) => (
            <p key={i} className="mt-4 leading-relaxed text-beige-muted">
              {para}
            </p>
          ))}

          <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/5 pt-6 sm:grid-cols-3">
            {about.facts.map((f) => (
              <Fact key={f.label} label={f.label} value={f.value} />
            ))}
          </div>
        </div>

        <aside className="glass-card p-8">
          <h2 className="font-display text-lg text-foreground">Education</h2>
          <ul className="mt-4 space-y-4 text-sm">
            {about.education.map((e) => (
              <li key={e.title}>
                <p className="text-foreground">{e.title}</p>
                <p className="text-beige-muted">{e.detail}</p>
              </li>
            ))}
          </ul>
        </aside>
      </section>

      {/* Skills */}
      <section className="mt-20">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-beige-muted">Toolkit</p>
            <h2 className="mt-1 font-display text-3xl text-foreground">Skills</h2>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
              whileHover={{ y: -3 }}
              className="glass-card group p-6 transition-shadow duration-300 hover:violet-glow"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/5">
                  <img src={s.icon} alt={s.title} className="h-7 w-7 object-contain" />
                </div>
                <h3 className="font-display text-lg text-foreground">{s.title}</h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-beige-muted">{s.content}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-[0.2em] text-beige-muted">{label}</p>
      <p className="mt-1 text-sm text-foreground">{value}</p>
    </div>
  );
}
