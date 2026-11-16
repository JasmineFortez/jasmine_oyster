import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import CashHandshakeDiagram from "../../components/cash-handshake-diagram";
import RagDiagram from "../../components/rag-diagram";
import { allProjects, type Figure } from "../../data/projects";

// Prerender one page per story. Unknown slugs fall through to notFound() below.
export function generateStaticParams() {
  return allProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/stories/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = allProjects.find((p) => p.slug === slug);
  return project ? { title: project.headline, description: project.body } : {};
}

// Slides and screenshots are 16:9, like a photo in a news story.
function StoryFigure({ figure, priority = false }: { figure: Figure; priority?: boolean }) {
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
        {figure.caption}
      </figcaption>
    </figure>
  );
}

const linkClass =
  "underline decoration-mark/40 underline-offset-4 transition-colors hover:text-mark hover:decoration-mark";

// The page shell (navigation links) renders instantly on click. The story itself
// depends on the URL, so it streams in from behind <Suspense>. Every story is
// prerendered at build time, so in production the fallback barely shows.
export default function StoryPage({ params }: PageProps<"/stories/[slug]">) {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 pb-24">
      <article className="pt-14 sm:pt-20">
        <Link href="/" className={`text-[0.95rem] text-muted ${linkClass}`}>
          Front page
        </Link>

        <Suspense fallback={<StorySkeleton />}>
          <StoryBody params={params} />
        </Suspense>

        <p className="mt-12 text-[1rem]">
          <Link href="/" className={linkClass}>
            Back to the front page
          </Link>
        </p>
      </article>
    </main>
  );
}

// Grey placeholder bars in the shape of a story, shown while it loads.
function StorySkeleton() {
  const bar = "rounded-sm bg-rule motion-safe:animate-pulse";
  return (
    <div aria-hidden="true">
      <div className={`mt-8 h-4 w-48 ${bar}`} />
      <div className={`mt-4 h-12 w-full ${bar}`} />
      <div className={`mt-3 h-12 w-2/3 ${bar}`} />
      <div className={`mt-8 h-4 w-80 ${bar}`} />
      <div className="mt-6 border-b-[3px] border-mark" />
      <div className="mt-10 space-y-3">
        <div className={`h-4 w-full ${bar}`} />
        <div className={`h-4 w-full ${bar}`} />
        <div className={`h-4 w-5/6 ${bar}`} />
      </div>
    </div>
  );
}

async function StoryBody({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = allProjects.find((p) => p.slug === slug);
  if (!project) notFound();

  const links = project.links.filter((l) => l.href);

  return (
    <>
      <p className="mt-8 text-[1rem] italic text-mark">{project.kicker}</p>
      <h1 className="mt-2 text-[clamp(2.2rem,6vw,3.75rem)] leading-[1.02] font-semibold tracking-[-0.025em] text-balance [font-variation-settings:'opsz'_72]">
        {project.headline}
      </h1>

      <div className="mt-6 border-b-[3px] border-mark pb-6">
        <p className="text-[1rem] italic text-muted">
          By Jasmine Fortez &middot; {project.role}
        </p>
        {project.context && (
          <p className="mt-3 max-w-[38em] text-[1rem] leading-relaxed">
            {project.context}
          </p>
        )}
        <ul className="mt-3 flex flex-wrap gap-2 font-mono text-[0.75rem] text-mark">
          {project.stack.map((s) => (
            <li key={s} className="rounded-sm bg-mark/10 px-1.5 py-0.5">
              {s}
            </li>
          ))}
        </ul>
      </div>

      {project.leadImage && <StoryFigure figure={project.leadImage} priority />}

      <div className="mt-10 space-y-10">
        {project.article.map((section) => (
          <section key={section.heading}>
            <h2 className="max-w-[34em] text-[1.45rem] leading-tight font-semibold tracking-tight">
              {section.heading}
            </h2>
            <div className="mt-3 max-w-[34em] space-y-5 text-[1.2rem] leading-[1.7]">
              {section.paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            {section.figure && <StoryFigure figure={section.figure} />}
            {section.diagram === "cash-handshake" && <CashHandshakeDiagram />}
            {section.diagram === "rag-pipeline" && <RagDiagram />}
          </section>
        ))}
      </div>

      {links.length > 0 && (
        <div className="mt-12 border-t border-rule pt-6">
          <h2 className="text-[1rem] italic text-muted">See the work</h2>
          <ul className="mt-2 flex flex-wrap gap-x-6 gap-y-2 text-[1.05rem]">
            {links.map(({ label, href }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
