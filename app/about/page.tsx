import type { Metadata } from "next";
import ContactLinks from "../components/contact-links";

export const metadata: Metadata = {
  title: "About",
  description:
    "How a kid who wanted to be a reporter in the Philippines became a software engineer.",
};

export default function About() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 pb-32">
      <article className="pt-20 sm:pt-28">
        <h1 className="border-b-[3px] border-mark pb-8 text-[clamp(2.5rem,7vw,4.25rem)] leading-[0.98] font-medium tracking-[-0.02em] [font-variation-settings:'opsz'_72]">
          The dispatch
        </h1>
        <p className="mt-4 text-[0.95rem] italic text-muted">
          By Jasmine Fortez
        </p>
        <div className="mt-8 max-w-[34em] space-y-6 text-[1.2rem] leading-[1.7]">
          <p>
            <span className="font-medium tracking-wide [font-variant-caps:small-caps]">
              San Jose, Calif.
            </span>{" "}
            &mdash; Before I wrote code, I wanted to be a journalist. Growing up
            in the Philippines, I fell in love with investigating and relaying
            information&mdash;partly out of raw curiosity, and partly because I
            was naturally <em>chismosa</em>.
          </p>
          <p>
            When my family immigrated to the U.S., that dream felt out of reach.
            Keeping up with English was exhausting, and the fear of being
            misunderstood pushed me toward mathematics and computer science,
            where logic was absolute and a semicolon meant the same thing in
            every language.
          </p>
          <p>
            After graduating with a 3.79 in CS from UC Santa Cruz and working
            across data pipelines and mobile apps, I realized technical systems
            are meaningless if you can&apos;t tell the human story behind them.
            This website is my newsroom: a place to bridge engineering logic with
            documentation, data storytelling, and the voice I almost left behind.
          </p>
        </div>
        <div className="mt-14 border-t border-rule pt-8">
          <ContactLinks />
        </div>
      </article>
    </main>
  );
}
