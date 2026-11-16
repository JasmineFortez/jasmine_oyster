import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allProjects } from "../../data/projects";

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

const linkClass =
  "underline decoration-mark/40 underline-offset-4 transition-colors hover:text-mark hover:decoration-mark";

export default async function StoryPage({ params }: PageProps<"/stories/[slug]">) {
  const { slug } = await params;
  const project = allProjects.find((p) => p.slug === slug);
  if (!project) notFound();

  const links = project.links.filter((l) => l.href);

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 pb-24">
      <article className="pt-14 sm:pt-20">
        <Link href="/" className={`text-[0.95rem] text-muted ${linkClass}`}>
          Front page
        </Link>

        <p className="mt-8 text-[1rem] italic text-mark">{project.kicker}</p>
        <h1 className="mt-2 text-[clamp(2.2rem,6vw,3.75rem)] leading-[1.02] font-semibold tracking-[-0.025em] text-balance [font-variation-settings:'opsz'_72]">
          {project.headline}
        </h1>

        <div className="mt-6 border-b-[3px] border-mark pb-6">
          <p className="text-[1rem] italic text-muted">
            By Jasmine Fortez &middot; {project.role}
          </p>
          <ul className="mt-3 flex flex-wrap gap-2 font-mono text-[0.75rem] text-mark">
            {project.stack.map((s) => (
              <li key={s} className="rounded-sm bg-mark/10 px-1.5 py-0.5">
                {s}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 max-w-[34em] space-y-10">
          {project.article.map((section) => (
            <section key={section.heading}>
              <h2 className="text-[1.45rem] leading-tight font-semibold tracking-tight">
                {section.heading}
              </h2>
              <div className="mt-3 space-y-5 text-[1.2rem] leading-[1.7]">
                {section.paragraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
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

        <p className="mt-12 text-[1rem]">
          <Link href="/" className={linkClass}>
            Back to the front page
          </Link>
        </p>
      </article>
    </main>
  );
}
