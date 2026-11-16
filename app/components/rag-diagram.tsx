// How the Tech4Good career chatbot answers a question, with Jasmine's parts in pink.
// Drawn inline so it follows light and dark mode.
const mine = [false, true, true, false, true];

const text = {
  en: {
    steps: [
      ["Student asks", "a question"],
      ["Find matching", "interviews"],
      ["Send both", "to the AI"],
      ["AI writes", "an answer"],
      ["Score it: LLM", "+ my review"],
    ],
    title: "How the career chatbot answers a question",
    desc: "A student asks a question. The chatbot finds matching interviews, sends the question and those interviews to the AI, and the AI writes an answer. Answers are then scored by an LLM and reviewed by Jasmine. Jasmine worked on finding matching interviews, the prompt sent to the AI, and scoring the answers.",
    legend: "The parts I worked on",
    caption:
      "How the chatbot answers a question. I tuned the retrieval and the prompt, and helped score the answers.",
  },
  tl: {
    steps: [
      ["Nagtanong ang", "estudyante"],
      ["Hanapin ang", "mga interview"],
      ["Ipadala pareho", "sa AI"],
      ["Sumagot", "ang AI"],
      ["I-score: LLM", "+ review ko"],
    ],
    title: "Paano sumasagot ang career chatbot",
    desc: "Nagtanong ang isang estudyante. Hinahanap ng chatbot ang mga tugmang interview, ipinapadala ang tanong at ang mga interview sa AI, at sumasagot ang AI. Pagkatapos, mina-marka ng isang LLM ang mga sagot at nire-review ni Jasmine. Ginawa ni Jasmine ang paghahanap ng tugmang interview, ang prompt para sa AI, at ang pag-score ng mga sagot.",
    legend: "Ang mga bahaging ginawa ko",
    caption:
      "Paano sumasagot ang chatbot. Inayos ko ang retrieval at ang prompt, at tumulong sa pag-score ng mga sagot.",
  },
};

const W = 124;
const GAP = 22;
const H = 74;
const Y = 30;

export default function RagDiagram({ lang = "en" }: { lang?: "en" | "tl" }) {
  const t = text[lang];
  const steps = t.steps.map((lines, i) => ({ lines, mine: mine[i] }));
  return (
    <figure className="mt-8">
      <svg
        viewBox="0 0 720 150"
        role="img"
        aria-labelledby="rag-title rag-desc"
        className="w-full font-serif"
      >
        <title id="rag-title">{t.title}</title>
        <desc id="rag-desc">{t.desc}</desc>
        <defs>
          <marker id="rag-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
            <path d="M0,0 L10,5 L0,10 z" className="fill-ink" />
          </marker>
        </defs>

        {steps.map((step, i) => {
          const x = 6 + i * (W + GAP);
          return (
            <g key={step.lines[0]}>
              <rect
                x={x}
                y={Y}
                width={W}
                height={H}
                rx="4"
                strokeWidth={step.mine ? 2 : 1.5}
                className={step.mine ? "fill-mark/10 stroke-mark" : "fill-paper stroke-ink"}
              />
              {step.lines.map((line, j) => (
                <text
                  key={line}
                  x={x + W / 2}
                  y={Y + 32 + j * 20}
                  textAnchor="middle"
                  className={`text-[15px] ${step.mine ? "fill-mark font-semibold" : "fill-ink"}`}
                >
                  {line}
                </text>
              ))}
              {i < steps.length - 1 && (
                <path
                  d={`M${x + W + 2} ${Y + H / 2} L${x + W + GAP - 2} ${Y + H / 2}`}
                  className="stroke-ink"
                  strokeWidth="1.5"
                  markerEnd="url(#rag-arrow)"
                />
              )}
            </g>
          );
        })}

        <rect x="4" y="128" width="14" height="14" rx="2" className="fill-mark/10 stroke-mark" strokeWidth="2" />
        <text x="26" y="140" className="fill-muted text-[13px] italic">
          {t.legend}
        </text>
      </svg>
      <figcaption className="mt-2 text-[0.95rem] italic text-muted">
        {t.caption}
      </figcaption>
    </figure>
  );
}
