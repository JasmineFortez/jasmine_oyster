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
            Chismis was how everyone connected. I&apos;d come home from school to
            find the titas outside, grilling isaw and talking about life.
            I&apos;d stand there and listen, and I felt like I belonged, like I
            knew everything. Then I&apos;d run inside to report it all back to my
            nanay, who was home cooking for our whole household. She got the
            news; I got to be the one who told it.
          </p>
          <p>
            Then my family moved to the U.S., and suddenly I was surrounded by
            jokes I didn&apos;t get. Everyone talked about classics I was
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
            That            So I learned to tell stories a different way. At UC Santa Cruz Iapos;s where I learned to tell stories a different way. At UC Santa Cruz I
            earned my CS degree with a 3.79, then built a handyman app in
            Singapore, researched AI for education, and designed a carpool app
            from 24 student surveys. Every one of those started with the same
            reporter&apos;s questions: who is this for, what&apos;s really going
            on, and what&apos;s the story behind the numbers?
          </p>
          <p>
            I never stopped being <em>chismosa</em>. I just changed the medium. I
            write my READMEs in English and Tagalog. I treat documentation like
            journalism. And I built this site like a newspaper, because that kid
            standing by the ihaw deserved to finally get her byline.
          </p>
        </div>
        <div className="mt-14 border-t border-rule pt-8">
          <ContactLinks />
        </div>
      </article>
    </main>
  );
}
