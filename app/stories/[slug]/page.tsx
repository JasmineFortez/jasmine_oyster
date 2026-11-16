import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import StoryArticle from "../../components/story-article";
import StorySkeleton from "../../components/story-skeleton";
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
  if (!project) return {};
  return {
    title: project.headline,
    description: project.body,
    ...(project.tl && {
      alternates: { languages: { tl: `/stories/${slug}/tl` } },
    }),
  };
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

async function StoryBody({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = allProjects.find((p) => p.slug === slug);
  if (!project) notFound();
  return <StoryArticle project={project} lang="en" />;
}
