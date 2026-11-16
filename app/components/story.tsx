import Link from "next/link";
import type { Project } from "../data/projects";

type Size = "lead" | "column" | "brief";

const headlineSize: Record<Size, string> = {
  lead: "text-[clamp(2rem,4.2vw,3.1rem)] leading-[1.04] tracking-[-0.02em] font-semibold [font-variation-settings:'opsz'_72]",
  column: "text-[1.7rem] leading-[1.12] tracking-tight font-semibold",
  brief: "text-[1.2rem] leading-snug font-semibold",
};

const bodySize: Record<Size, string> = {
  lead: "text-[1.2rem] leading-[1.65]",
  column: "text-[1.08rem] leading-[1.65]",
  brief: "text-[1rem] leading-[1.6]",
};

const linkClass =
  "underline decoration-mark/40 underline-offset-4 transition-colors hover:text-mark hover:decoration-mark";

// A front-page teaser. The headline opens the full story at /stories/<slug>.
export default function Story({
  project,
  size = "column",
}: {
  project: Project;
  size?: Size;
}) {
  const href = `/stories/${project.slug}`;
  const links = project.links.filter((l) => l.href);

  return (
    <article>
      <p className="text-[0.95rem] italic text-mark">{project.kicker}</p>
      <h3 className={`mt-1.5 text-balance ${headlineSize[size]}`}>
        <Link
          href={href}
          className="decoration-mark decoration-2 underline-offset-[0.18em] transition-colors hover:underline"
        >
          {project.headline}
        </Link>
      </h3>
      <p className="mt-2 text-[0.95rem] text-muted">{project.role}</p>
      <p className={`mt-3 ${bodySize[size]} ${size === "lead" ? "max-w-[34em]" : ""}`}>
        {project.body}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
        <ul className="flex flex-wrap gap-2 font-mono text-[0.72rem] text-mark">
          {project.stack.map((s) => (
            <li key={s} className="rounded-sm bg-mark/10 px-1.5 py-0.5">
              {s}
            </li>
          ))}
        </ul>
      </div>

      {/* Full story first, then any outside links (Figma, live site, etc.) */}
      <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-[0.95rem]">
        <li>
          <Link
            href={href}
            aria-label={`Read the full story: ${project.headline}`}
            className={`font-semibold ${linkClass}`}
          >
            Read the full story
          </Link>
        </li>
        {links.map(({ label, href: url }) => (
          <li key={label}>
            <a href={url} target="_blank" rel="noopener noreferrer" className={linkClass}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
}
