import Image from "next/image";
import Link from "next/link";
import type { Figure, Project } from "../data/projects";
import CashHandshakeDiagram from "./cash-handshake-diagram";
import RagDiagram from "./rag-diagram";

export type Lang = "en" | "tl";

const linkClass =
  "underline decoration-mark/40 underline-offset-4 transition-colors hover:text-mark hover:decoration-mark";

// Interface words for each language. Story text comes from projects.ts.
const ui = {
  en: { by: "By", seeWork: "See the work", switchTo: "Basahin sa Tagalog" },
  tl: { by: "Ni", seeWork: "Tingnan ang gawa", switchTo: "Read in English" },
} as const;

// Slides and screenshots are 16:9, like a photo in a news story.
function StoryFigure({
  figure,
  lang,
  priority = false,
}: {
  figure: Figure;
  lang: Lang;
  priority?: boolean;
}) {
  return (
    <figure className="mt-8">
      <Image
        src={figure.src}
        alt={figure.alt}
        width={1600}
        height={900}
        priority={priority}
        sizes="(min-width: 768px) 720px, 100vw"
        className="w-full rounded-sm border border-rule"
      />
      <figcaption className="mt-2 text-[0.95rem] italic text-muted">
        {lang === "tl" ? (figure.captionTl ?? figure.caption) : figure.caption}
      </figcaption>
    </figure>
  );
}

// The full story, in English or Tagalog. Tagalog sections line up with the
// English ones by order, so they reuse the same figures and diagrams.
export default function StoryArticle({ project, lang }: { project: Project; lang: Lang }) {
  const t = ui[lang];
  const tl = lang === "tl" ? project.tl : undefined;
  const headline = tl?.headline ?? project.headline;
  const role = tl?.role ?? project.role;
  const context = tl ? tl.context : project.context;
  const links = project.links.filter((l) => l.href);
  const otherHref =
    lang === "en" ? `/stories/${project.slug}/tl` : `/stories/${project.slug}`;

  return (
    <div lang={lang}>
      <div className="mt-8 flex flex-wrap items-baseline justify-between gap-3">
        <p className="text-[1rem] italic text-mark">{project.kicker}</p>
        {project.tl && (
          <Link
            href={otherHref}
            hrefLang={lang === "en" ? "tl" : "en"}
            lang={lang === "en" ? "tl" : "en"}
            className={`text-[0.95rem] ${linkClass}`}
          >
            {t.switchTo}
          </Link>
        )}
      </div>
      <h1 className="mt-2 text-[clamp(2.2rem,6vw,3.75rem)] leading-[1.02] font-semibold tracking-[-0.025em] text-balance [font-variation-settings:'opsz'_72]">
        {headline}
      </h1>

      <div className="mt-6 border-b-[3px] border-mark pb-6">
        <p className="text-[1rem] italic text-muted">
          {t.by} Jasmine Fortez &middot; {role}
        </p>
        {context && <p className="mt-3 max-w-[38em] text-[1rem] leading-relaxed">{context}</p>}
        <ul className="mt-3 flex flex-wrap gap-2 font-mono text-[0.75rem] text-mark">
          {project.stack.map((s) => (
            <li key={s} className="rounded-sm bg-mark/10 px-1.5 py-0.5">
              {s}
            </li>
          ))}
        </ul>
      </div>

      {project.leadImage && <StoryFigure figure={project.leadImage} lang={lang} priority />}

      <div className="mt-10 space-y-10">
        {project.article.map((section, i) => {
          const text = tl?.article[i] ?? section;
          return (
            <section key={section.heading}>
              <h2 className="max-w-[34em] text-[1.45rem] leading-tight font-semibold tracking-tight">
                {text.heading}
              </h2>
              <div className="mt-3 max-w-[34em] space-y-5 text-[1.2rem] leading-[1.7]">
                {text.paragraphs.map((para, j) => (
                  <p key={j}>{para}</p>
                ))}
              </div>
              {section.figure && <StoryFigure figure={section.figure} lang={lang} />}
              {section.diagram === "cash-handshake" && <CashHandshakeDiagram lang={lang} />}
              {section.diagram === "rag-pipeline" && <RagDiagram lang={lang} />}
            </section>
          );
        })}
      </div>

      {links.length > 0 && (
        <div className="mt-12 border-t border-rule pt-6">
          <h2 className="text-[1rem] italic text-muted">{t.seeWork}</h2>
          <ul className="mt-2 flex flex-wrap gap-x-6 gap-y-2 text-[1.05rem]">
            {links.map(({ label, labelTl, href }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  {lang === "tl" ? (labelTl ?? label) : label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
