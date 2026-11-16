import type { Project } from "../data/projects";

type Props = { project: Project; size?: "lead" | "brief" };

export default function ProjectEntry({ project, size = "lead" }: Props) {
  const links = project.links.filter((l) => l.href);
  const lead = size === "lead";

  return (
    <article className="grid gap-x-10 gap-y-3 border-t border-rule py-9 sm:grid-cols-[11rem_1fr]">
      <p className="text-[0.95rem] leading-snug text-muted">
        {project.context}
        <br />
        <span className="italic">{project.role}</span>
      </p>

      <div className="max-w-[34em]">
        <h3
          className={
            lead
              ? "text-[1.75rem] leading-tight font-medium tracking-tight"
              : "text-xl leading-snug font-medium"
          }
        >
          {project.title}
        </h3>
        <p className="mt-3 text-[1.1rem] leading-[1.65]">{project.summary}</p>

        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
          <ul className="flex flex-wrap gap-2 font-mono text-[0.75rem] text-mark">
            {project.stack.map((s) => (
              <li key={s} className="rounded-sm bg-mark/10 px-1.5 py-0.5">
                {s}
              </li>
            ))}
          </ul>
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.95rem] underline decoration-mark/40 underline-offset-4 transition-colors hover:text-mark hover:decoration-mark"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
