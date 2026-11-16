import Link from "next/link";
import ContactLinks from "./components/contact-links";
import Story from "./components/story";
import Today from "./components/today";
import { aiBuilds, featured } from "./data/projects";

export default function Home() {
  const [lead, ...columns] = featured;

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-6 pb-28">
      {/* Masthead */}
      <header className="pt-12 sm:pt-16">
        <div className="hidden items-end justify-between text-[0.9rem] italic text-muted sm:flex">
          <p>Est. Santa Cruz, Calif.</p>
          {/* Light mode is the morning paper; dark mode is the late edition */}
          <p>
            <span className="dark:hidden">Morning edition</span>
            <span className="hidden dark:inline">Late edition</span>
          </p>
        </div>
        <h1 className="mt-2 text-center text-[clamp(2.6rem,9.5vw,7rem)] leading-[0.95] font-semibold tracking-[-0.035em] [font-variation-settings:'opsz'_72]">
          The Jasmine Times
        </h1>

        {/* Dateline bar */}
        <div className="mt-6 border-y-[3px] border-double border-ink py-2.5">
          <div className="flex flex-col items-center gap-2 text-[0.95rem] sm:flex-row sm:justify-between">
            <span className="text-muted">
              <Today />
            </span>
            <span className="font-semibold">Jasmine Fortez, software engineer</span>
            <ContactLinks />
          </div>
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-xl leading-snug text-balance">
          Software engineer building mobile apps, AI tools, and data products.
          <span className="mt-1 block italic text-muted">
            UC Santa Cruz CS, by way of the Philippines.
          </span>
        </p>
      </header>

      {/* Front page */}
      <div className="mt-10 border-t-[3px] border-mark pt-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-0">
          {/* Lead story */}
          <section aria-label="Lead story" className="lg:col-span-8 lg:border-r lg:border-rule lg:pr-10">
            <Story project={lead} size="lead" />

            <div className="mt-10 grid gap-10 border-t border-rule pt-8 md:grid-cols-2 md:gap-0">
              {columns.map((p, i) => (
                <div
                  key={p.headline}
                  className={i === 0 ? "md:border-r md:border-rule md:pr-8" : "md:pl-8"}
                >
                  <Story project={p} />
                </div>
              ))}
            </div>
          </section>

          {/* Sidebar */}
          <aside className="space-y-10 lg:col-span-4 lg:pl-10">
            <section aria-labelledby="briefs">
              <h2 id="briefs" className="border-b border-ink pb-2 text-xl font-semibold tracking-tight">
                AI-assisted builds
              </h2>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
                Smaller projects I shipped fast with AI. Each README covers what
                I directed, what the AI wrote, and what I changed.
              </p>
              <div className="mt-5 space-y-8">
                {aiBuilds.map((p) => (
                  <Story key={p.headline} project={p} size="brief" />
                ))}
              </div>
            </section>

            <section aria-labelledby="dispatch">
              <h2 id="dispatch" className="border-b border-ink pb-2 text-xl font-semibold tracking-tight">
                The dispatch
              </h2>
              <p className="mt-4 text-[1.05rem] leading-[1.65]">
                Before I wrote code, I wanted to be a reporter. Every day after
                school, I&apos;d find the titas by the ihawan and ask,{" "}
                <em lang="tl">&ldquo;Mare, anong latest?&rdquo;</em> Then I&apos;d
                run inside to report it all back to my nanay.
              </p>
              <Link
                href="/about"
                className="mt-3 inline-block text-[0.95rem] underline decoration-mark/40 underline-offset-4 transition-colors hover:text-mark hover:decoration-mark"
              >
                Continue reading
              </Link>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}
