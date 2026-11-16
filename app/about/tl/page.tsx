import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mula sa ihawan hanggang sa terminal",
  description:
    "Paano naging software engineer ang isang batang gustong maging reporter sa Pilipinas.",
  alternates: { languages: { en: "/about" } },
};

// Tagalog version of the About page. Keep it in step with ../page.tsx.
export default function AboutTagalog() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 pb-24" lang="tl">
      <article className="pt-20 sm:pt-28">
        <h1 className="border-b-[3px] border-mark pb-8 text-[clamp(2.5rem,7vw,4.25rem)] leading-[0.98] font-medium tracking-[-0.02em] [font-variation-settings:'opsz'_72]">
          Mula sa ihawan hanggang sa terminal
        </h1>
        <div className="mt-4 flex flex-wrap items-baseline justify-between gap-3">
          <p className="text-[0.95rem] italic text-muted">Ni Jasmine Fortez</p>
          <Link
            href="/about"
            hrefLang="en"
            lang="en"
            className="text-[0.95rem] underline decoration-mark/40 underline-offset-4 transition-colors hover:text-mark hover:decoration-mark"
          >
            Read in English
          </Link>
        </div>
        <div className="mt-8 max-w-[34em] space-y-6 text-[1.2rem] leading-[1.7]">
          <p>
            <span className="font-medium tracking-wide [font-variant-caps:small-caps]">
              San Jose, Calif.
            </span>{" "}
            &mdash; Bago ako natutong mag-code, gusto kong maging reporter.
          </p>
          <p>
            Noong elementary ako sa Pilipinas, nagbabatuhan kami ng bugtong ng mga kaibigan
            ko, nagtatanungan hanggang sa gumagawa na kami ng sarili naming bugtong.
          </p>
          <blockquote className="border-l-[3px] border-mark pl-5">
            <p className="italic">
              Bugtong, bugtong: laging naka-pink at Hello Kitty headband, pero laging late.
            </p>
            <p className="mt-1 text-[1.05rem] text-muted">(Ako ang sagot.)</p>
          </blockquote>
          <p>
            Chismis ang nagkokonekta sa lahat. Araw-araw pagkatapos ng klase, nandoon ang
            mga tita sa may ihawan, nag-iihaw ng isaw, at lalapit agad ako:{" "}
            <em>&ldquo;Mare, anong latest?&rdquo;</em> Diyan galing ang salitang{" "}
            <em>Marites</em> ngayon, slang para sa chismosa ng kapitbahayan, at isa akong
            proud na batang Marites. Bata pa lang ako, pero parte ako ng komunidad na iyon.
            Lahat pinag-uusapan namin: sino ang naghiwalay, sino ang nagkatuluyan, ano ang
            nangyayari sa barangay, sa bansa, sa ekonomiya. Lagi kong tanong:{" "}
            <em>Tapos ano?</em>
          </p>
          <p>
            Pagkatapos, tatakbo ako sa loob at ire-report lahat kay Nanay, ang lola ko.
            Nagluluto siya para sa buong extended family namin, pero dahil matanda na siya,
            hindi na talaga siya makalabas ng bahay. Kaya ako ang nagdadala ng labas sa
            kanya. Ako ang mga mata at tainga niya sa kalye.
          </p>
          <p>
            Miss ko na alam ko ang buhay ng lahat. Nawala ang routine na iyon nang umalis
            kami sa amin.
          </p>
          <p>
            Sa U.S., bigla na lang, hindi ko na gets ang mga biro. Pinag-uusapan ng lahat ang
            mga classic na dapat daw ay gusto ko, gaya ng <cite lang="en">The Notebook</cite>,
            at mga pelikulang hindi ko pa napapanood. Kalaunan, tahimik akong tumigil sa
            pagbabasa. Ang batang dati&apos;y gumagawa ng sariling bugtong, hindi na masundan
            ang punchline.
          </p>
          <p>
            Iba ang math. Pareho ito kahit saang bansa, at unironically comforting iyon.
            Pareho ang ibig sabihin ng semicolon sa bawat wika. Kaya doon ako pumunta.
          </p>
          <p>
            Doon ako natutong magkuwento sa ibang paraan. Nakuha ko ang CS degree ko sa UC
            Santa Cruz na may 3.79, gumawa ng handyman app sa Singapore, nag-research ng AI
            para sa edukasyon, at nag-design ng carpool app mula sa survey ng 24 na
            estudyante. Nagsimula ang bawat isa sa tanong ng isang reporter: para kanino ito,
            at ano ang kuwento sa likod ng mga numero?
          </p>
          <p>
            Hindi ako tumigil sa pagiging <em>chismosa</em>. Iba lang ang medium. Sinusulat ko
            ang mga README ko sa English at Tagalog, at ginawa ko ang site na ito na parang
            diyaryo, dahil karapat-dapat magkaroon ng byline ang batang Marites sa may
            ihawan.
          </p>
        </div>
      </article>
    </main>
  );
}
