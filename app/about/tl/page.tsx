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
            Noong elementary ako sa Pilipinas, lagi kaming nagbabatuhan ng bugtong ng mga
            kaibigan ko, nagtatanungan, hanggang sa gumagawa na kami ng sarili naming
            bugtong.
          </p>
          <blockquote className="border-l-[3px] border-mark pl-5">
            <p className="italic">
              Bugtong, bugtong: laging naka-pink at Hello Kitty headband, pero laging late.
            </p>
            <p className="mt-1 text-[1.05rem] text-muted">(Ako ang sagot.)</p>
          </blockquote>
          <p>
            Chismis ang paraan ng pagkakakonekta ng lahat, at parte ito ng routine ko.
            Araw-araw pagkatapos ng klase, nandoon ang mga tita sa may ihawan, nag-iihaw
            ng isaw, at lalapit agad ako: <em>&ldquo;Mare, anong latest?&rdquo;</em> Bata
            pa lang ako, pero parte ako ng komunidad na iyon, at walang tumrato sa akin
            nang iba. Nagkukuwentuhan kami tungkol sa araw namin at sa lahat ng balita:
            sino ang naghiwalay, sino ang nagkatuluyan, ano ang nangyayari sa barangay,
            at ano ang lagay ng bansa at ng ekonomiya. Ako ang laging nagtatanong:
            Sino&apos;ng nagsabi? Ano&apos;ng nangyari? <em>Tapos ano?</em> Ako
            &apos;yung tinatawag ngayong <em>Marites</em>: slang para sa chismosa ng kapitbahayan,
            galing mismo sa tanong na lagi kong bungad,{" "}
            <em>&ldquo;Mare, anong latest?&rdquo;</em> Pagkatapos, tatakbo ako sa loob para i-report lahat
            kay Nanay, ang lola ko, na nagluluto para sa buong extended family namin at
            hindi na masyadong lumalabas. Ako ang mga mata at tainga niya sa kalye. Siya
            ang nakakakuha ng balita; ako ang nagkukuwento.
          </p>
          <p>
            Miss ko ang mga araw na iyon, noong alam ko ang buhay ng lahat. Nawala ang
            routine na iyon nang umalis kami sa amin.
          </p>
          <p>
            Sa U.S., bigla akong napaligiran ng mga biro na hindi ko gets. Pinag-uusapan
            ng lahat ang mga classic na dapat daw ay gusto ko, gaya ng{" "}
            <cite lang="en">The Notebook</cite>, at mga pelikulang hindi ko pa
            napapanood. Bawat libro at bawat usapan ay umaasa sa background na wala ako.
            Kalaunan, tahimik akong tumigil sa pagbabasa. Ang batang dati&apos;y
            gumagawa ng sariling bugtong, hindi na makuha ang punchline.
          </p>
          <p>
            Iba ang math. Unironically comforting ito, dahil ito lang ang hindi nagbabago
            kahit saang bansa. Absolute ang logic, at pareho ang ibig sabihin ng semicolon
            sa bawat wika. Kaya doon ako pumunta.
          </p>
          <p>
            Doon ako natutong magkuwento sa ibang paraan. Sa UC Santa Cruz, nakuha ko ang
            CS degree ko na may 3.79, tapos gumawa ako ng handyman app sa Singapore,
            nag-research ng AI para sa edukasyon, at nag-design ng carpool app mula sa
            survey ng 24 na estudyante. Nagsimula ang bawat isa sa parehong tanong ng
            isang reporter: para kanino ito, ano talaga ang nangyayari, at ano ang kuwento
            sa likod ng mga numero?
          </p>
          <p>
            Hindi ako tumigil sa pagiging <em>chismosa</em>. Iba lang ang medium.
            Sinusulat ko ang mga README ko sa English at Tagalog. Tinatrato ko ang
            documentation na parang journalism. At ginawa ko ang site na ito na parang
            diyaryo, dahil karapat-dapat nang magkaroon ng byline ang batang Marites sa
            may ihawan.
          </p>
        </div>
      </article>
    </main>
  );
}
