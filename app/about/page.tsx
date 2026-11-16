import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "How a kid who wanted to be a reporter in the Philippines became a software engineer.",
  alternates: { languages: { tl: "/about/tl" } },
};

export default function About() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 pb-24">
      <article className="pt-20 sm:pt-28">
        <h1 className="border-b-[3px] border-mark pb-8 text-[clamp(2.5rem,7vw,4.25rem)] leading-[0.98] font-medium tracking-[-0.02em] [font-variation-settings:'opsz'_72]">
          The dispatch
        </h1>
        <div className="mt-4 flex flex-wrap items-baseline justify-between gap-3">
          <p className="text-[0.95rem] italic text-muted">By Jasmine Fortez</p>
          <Link
            href="/about/tl"
            hrefLang="tl"
            lang="tl"
            className="text-[0.95rem] underline decoration-mark/40 underline-offset-4 transition-colors hover:text-mark hover:decoration-mark"
          >
            Basahin sa Tagalog
          </Link>
        </div>
        <div className="mt-8 max-w-[34em] space-y-6 text-[1.2rem] leading-[1.7]">
          <p>
            <span className="font-medium tracking-wide [font-variant-caps:small-caps]">
              San Jose, Calif.
            </span>{" "}
            &mdash; Before I wrote code, I wanted to be a reporter.
          </p>
          <p>
            In elementary school in the Philippines, my friends and I were always
            trading bugtong, quizzing each other, and eventually making up our
            own.
          </p>
          <blockquote className="border-l-[3px] border-mark pl-5">
            <p lang="tl" className="italic">
              Bugtong, bugtong: laging naka-pink at Hello Kitty headband, pero
              laging late.
            </p>
            <p className="mt-1 text-[1.05rem] text-muted">
              Riddle me this: always in pink with a Hello Kitty headband, but
              always late. (The answer was me.)
            </p>
          </blockquote>
          <p>
            Chismis was how everyone connected, and it was part of my routine.
            Every day after school, the titas would be outside by the ihawan,
            grilling isaw, and I&apos;d walk right up:{" "}
            <em lang="tl">&ldquo;Mare, anong latest?&rdquo;</em> I was just a
            kid, but I was part of that community, and nobody treated me
            otherwise. We&apos;d talk about our days and cover everything: who
            broke up with who, who got together with who, what was going on in
            the barangay, and what was happening to the country and the economy.
            I asked all the questions: who said that? What happened next?{" "}
            <em lang="tl">Tapos ano?</em> I was a proud little Marites. Then
            I&apos;d run inside to report everything back to my nanay, my
            grandmother, who cooked for our whole extended family and didn&apos;t
            go out much anymore. I was her eyes and ears on the street. She got
            the news; I got to be the one who told it.
          </p>
          <p>
            I miss those days, when I knew everybody&apos;s business. I lost that
            routine when we left home.
          </p>
          <p>
            In the U.S., suddenly I was surrounded by jokes I didn&apos;t get. Everyone talked about classics I was
            supposed to love, like <cite>The Notebook</cite>, and movies I&apos;d
            never seen. Every book and conversation assumed background I
            didn&apos;t have. Eventually I quietly gave up on reading. The girl
            who used to make up her own riddles couldn&apos;t understand the
            punchline anymore.
          </p>
          <p>
            Math was different. It was unironically comforting, because it was
            the one thing that stayed the same no matter the country. Logic was
            absolute, and a semicolon meant the same thing in every language. So
            that&apos;s where I went.
          </p>
          <p>
            There, I learned to tell stories a different way. At UC Santa Cruz I
            earned my CS degree with a 3.79, then built a handyman app in
            Singapore, researched AI for education, and designed a carpool app
            from 24 student surveys. Every one of those started with the same
            reporter&apos;s questions: who is this for, what&apos;s really going
            on, and what&apos;s the story behind the numbers?
          </p>
          <p>
            I never stopped being <em>chismosa</em>. I just changed the medium. I
            write my READMEs in English and Tagalog. I treat documentation like
            journalism. And I built this site like a newspaper, because that little
            Marites by the ihawan deserved to finally get her byline.
          </p>
        </div>
      </article>
    </main>
  );
}
