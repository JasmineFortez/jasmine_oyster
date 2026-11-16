import Link from "next/link";
import ContactLinks from "./components/contact-links";
import ProjectEntry from "./components/project-entry";
import { aiBuilds, featured } from "./data/projects";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 pb-32">
      {/* Nameplate */}
      <section className="border-b-[3px] border-mark pt-20 pb-10 sm:pt-28">
        <h1 className="text-[clamp(3.25rem,11vw,6.5rem)] leading-[0.92] font-medium tracking-[-0.03em] [font-variation-settings:'opsz'_72]">
          Jasmine
          <br />
          Fortez
        </h1>
        <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-md text-xl leading-snug">
            Software engineer who still thinks like a reporter.
            <span className="mt-1 block italic text-muted">
              B.S. in Computer Science, UC Santa Cruz.
            </span>
          </p>
          <ContactLinks />
        </div>
      </section>

      {/* Featured work */}
      <section aria-labelledby="work" className="pt-14">
        <h2 id="work" className="text-2xl font-medium tracking-tight">
          Selected work
        </h2>
        <div className="mt-6">
          {featured.map((p) => (
            <ProjectEntry key={p.title} project={p} />
          ))}
        </div>
      </section>

      {/* AI-assisted builds */}
      <section aria-labelledby="ai-builds" className="pt-16">
        <h2 id="ai-builds" className="text-2xl font-medium tracking-tight">
          AI-assisted builds
        </h2>
        <p className="mt-2 max-w-[34em] text-[1.05rem] leading-relaxed text-muted">
          Smaller projects I shipped fast with AI. Each README covers what I
          directed, what the AI wrote, and what I changed.
        </p>
        <div className="mt-6">
          {aiBuilds.map((p) => (
            <ProjectEntry key={p.title} project={p} size="brief" />
          ))}
        </div>
      </section>

      <p className="mt-16 border-t border-rule pt-8 text-[1.1rem]">
        Why a software engineer built her portfolio like a newsroom:{" "}
        <Link
          href="/about"
          className="underline decoration-mark/40 underline-offset-4 transition-colors hover:text-mark hover:decoration-mark"
        >
          read the story
        </Link>
        .
      </p>
    </main>
  );
}
