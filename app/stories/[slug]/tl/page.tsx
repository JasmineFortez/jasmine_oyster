import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import StoryArticle from "../../../components/story-article";
import StorySkeleton from "../../../components/story-skeleton";
import { allProjects } from "../../../data/projects";

// Tagalog versions: only stories that have a `tl` block in projects.ts.
export function generateStaticParams() {
  return allProjects.filter((p) => p.tl).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/stories/[slug]/tl">): Promise<Metadata> {
  const { slug } = await params;
  const project = allProjects.find((p) => p.slug === slug);
  if (!project?.tl) return {};
  return {
    title: project.tl.headline,
    alternates: { languages: { en: `/stories/${slug}` } },
  };
}

const linkClass =
  "underline decoration-mark/40 underline-offset-4 transition-colors hover:text-mark hover:decoration-mark";

export default function TagalogStoryPage({ params }: PageProps<"/stories/[slug]/tl">) {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 pb-24">
      <article className="pt-14 sm:pt-20">
        <Link href="/" className={`text-[0.95rem] text-muted ${linkClass}`}>
          Front page
        </Link>

        <Suspense fallback={<StorySkeleton />}>
          <TagalogStoryBody params={params} />
        </Suspense>

        <p className="mt-12 text-[1rem]" lang="tl">
          <Link href="/" className={linkClass}>
            Bumalik sa front page
          </Link>
        </p>
      </article>
    </main>
  );
}

async function TagalogStoryBody({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = allProjects.find((p) => p.slug === slug);
  if (!project?.tl) notFound();
  return <StoryArticle project={project} lang="tl" />;
}
