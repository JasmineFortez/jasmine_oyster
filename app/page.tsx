import Link from "next/link";
import ContactLinks from "./components/contact-links";
import Story from "./components/story";
import Today from "./components/today";
import { aiBuilds, featured } from "./data/projects";

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="border-b border-ink pb-2 text-2xl font-semibold tracking-tight">
      {children}
    </h2>
  );
}

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-6 pb-24">
      {/* Masthead */}
      <header className="pt-12 sm:pt-16">
        <div className="hidden items-end justify-between text-[0.9rem] italic text-muted sm:flex">
          <p>Est. in the Philippines</p>
          {/* Light mode is the morning paper; dark mode is the late edition */}
          <p>
            <span className="dark:hidden">Morning edition</span>
            <span className="hidden dark:inline">Late edition</span>
          </p>
        </div>
        <p className="mt-2 text-center text-[1.15rem] font-semibold tracking-tight sm:mt-0">
          The Jasmine Times
        </p>
        <h1 className="mt-1 text-center text-[clamp(3rem,10.5vw,7.5rem)] leading-[0.95] font-semibold tracking-[-0.035em] [font-variation-settings:'opsz'_72]">
          Jasmine Fortez
        </h1>

        <div className="mt-6 border-y-[3px] border-double border-ink py-2.5">
          <div className="flex flex-col items-center gap-2 text-[0.95rem] sm:flex-row sm:justify-between">
            <span className="text-muted sm:w-1/3">
              <Today />
            </span>
            <span className="italic sm:w-1/3 sm:text-center">
              UC Santa Cruz CS, by way of the Philippines
            </span>
            <span className="sm:flex sm:w-1/3 sm:justify-end">
              <ContactLinks />
            </span>
          </div>
        </div>
      </header>

      {/* From the editor */}
      <section aria-labelledby="from-the-editor" className="mx-auto max-w-2xl py-12 text-center">
        <h2 id="from-the-editor" className="mb-3 text-[1rem] italic text-mark">
          From the editor
        </h2>
        <p className="text-[1.3rem] leading-[1.6] text-balance">
          I&apos;m a software engineer who builds practical, human-centered
          tools. I&apos;ve shipped apps for a startup in Singapore and a youth
          nonprofit in DC. I grew up in the Philippines wanting to be a
          reporter, and I still build like one: I start with the people and
          their story.
        </p>
        <Link
          href="/about"
          className="mt-4 inline-block text-[1rem] underline decoration-mark/40 underline-offset-4 transition-colors hover:text-mark hover:decoration-mark"
        >
          Read the full dispatch
        </Link>
      </section>

      <div className="border-t-[3px] border-mark" />

      {/* Top stories */}
      <section aria-labelledby="work" className="pt-10">
        <SectionHeading id="work">Top stories</SectionHeading>
        <div className="mt-8 grid gap-12 md:grid-cols-3 md:gap-0">
          {featured.map((p, i) => (
            <div
              key={p.headline}
              className={[
                "md:px-7",
                i === 0 ? "md:pl-0" : "md:border-l md:border-rule",
                i === featured.length - 1 ? "md:pr-0" : "",
              ].join(" ")}
            >
              <Story project={p} />
            </div>
          ))}
        </div>
      </section>

      {/* AI-assisted builds */}
      <section aria-labelledby="ai-builds" className="pt-16">
        <SectionHeading id="ai-builds">AI-assisted builds</SectionHeading>
        <p className="mt-3 max-w-[38em] text-[1.02rem] leading-relaxed text-muted">
          Smaller projects I shipped fast with AI. Each README covers what I
          directed, what the AI wrote, and what I changed, in English and
          Tagalog.
        </p>
        <div className="mt-8 grid gap-12 md:grid-cols-3 md:gap-0">
          {aiBuilds.map((p, i) => (
            <div
              key={p.headline}
              className={[
                "md:px-7",
                i % 3 === 0 ? "md:pl-0" : "md:border-l md:border-rule",
              ].join(" ")}
            >
              <Story project={p} size="brief" />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
