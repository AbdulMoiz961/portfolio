import { Link, NavLink } from "react-router-dom";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import { socials, siteMeta } from "@/lib/portfolio-data";

const links = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);

  const navClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "rounded-full px-4 py-2 text-sm text-foreground bg-white/5 border border-white/10"
      : "rounded-full px-4 py-2 text-sm text-beige-muted transition-colors hover:text-foreground";

  const mobileNavClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "rounded-xl px-3 py-2 text-sm text-foreground bg-white/5"
      : "rounded-xl px-3 py-2 text-sm text-beige-muted hover:bg-white/5 hover:text-foreground";

  return (
    <header className="glass-nav sticky top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="group flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/5 font-display text-sm font-semibold text-gradient">
            AM
          </span>
          <span className="hidden font-display text-sm tracking-wide text-beige-muted group-hover:text-foreground sm:inline">
            {siteMeta.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === "/"} className={navClass}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-1 md:flex">
          <a
            href={socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-full p-2 text-beige-muted transition hover:bg-white/5 hover:text-foreground"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-full p-2 text-beige-muted transition hover:bg-white/5 hover:text-foreground"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={socials.email}
            aria-label="Email"
            className="rounded-full p-2 text-beige-muted transition hover:bg-white/5 hover:text-foreground"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-full border border-white/10 bg-white/5 p-2 text-beige-muted md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/5 md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                className={mobileNavClass}
              >
                {l.label}
              </NavLink>
            ))}
            <div className="mt-2 flex gap-2 border-t border-white/5 pt-3">
              <a
                href={socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="rounded-full p-2 text-beige-muted hover:bg-white/5 hover:text-foreground"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="rounded-full p-2 text-beige-muted hover:bg-white/5 hover:text-foreground"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={socials.email}
                aria-label="Email"
                className="rounded-full p-2 text-beige-muted hover:bg-white/5 hover:text-foreground"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-white/5">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-beige-muted sm:flex-row">
        <p>© {new Date().getFullYear()} {siteMeta.name}. Crafted with care.</p>
        <div className="flex items-center gap-4">
          <a
            href={socials.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground"
          >
            GitHub
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground"
          >
            LinkedIn
          </a>
          <a href={socials.email} className="hover:text-foreground">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
