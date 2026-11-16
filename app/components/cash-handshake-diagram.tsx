// The Merchanex cash payment flow: both sides confirm before a booking completes.
// Drawn inline so it follows light and dark mode.
export default function CashHandshakeDiagram() {
  const box = "fill-paper stroke-ink";
  const label = "fill-ink text-[15px]";
  const small = "fill-muted text-[12.5px] italic";

  return (
    <figure className="mt-8">
      <svg
        viewBox="0 0 720 230"
        role="img"
        aria-labelledby="cash-flow-title cash-flow-desc"
        className="w-full font-serif"
      >
        <title id="cash-flow-title">Cash payment confirmation flow</title>
        <desc id="cash-flow-desc">
          After the job is done, the customer confirms they paid in cash and the provider
          confirms they received it. The booking is marked complete only when both have
          confirmed.
        </desc>

        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
            <path d="M0,0 L10,5 L0,10 z" className="fill-ink" />
          </marker>
        </defs>

        {/* Job done */}
        <rect x="10" y="90" width="150" height="50" rx="4" className={box} strokeWidth="1.5" />
        <text x="85" y="120" textAnchor="middle" className={label}>Job is done</text>

        {/* Arrows out to both confirmations */}
        <path d="M160 115 C 200 115, 200 55, 240 55" fill="none" className="stroke-ink" strokeWidth="1.5" markerEnd="url(#arrow)" />
        <path d="M160 115 C 200 115, 200 175, 240 175" fill="none" className="stroke-ink" strokeWidth="1.5" markerEnd="url(#arrow)" />

        {/* Customer confirms */}
        <rect x="242" y="25" width="220" height="60" rx="4" className={box} strokeWidth="1.5" />
        <text x="352" y="51" textAnchor="middle" className={label}>Customer confirms</text>
        <text x="352" y="71" textAnchor="middle" className={small}>&ldquo;I paid in cash&rdquo;</text>

        {/* Provider confirms */}
        <rect x="242" y="145" width="220" height="60" rx="4" className={box} strokeWidth="1.5" />
        <text x="352" y="171" textAnchor="middle" className={label}>Provider confirms</text>
        <text x="352" y="191" textAnchor="middle" className={small}>&ldquo;I received the cash&rdquo;</text>

        {/* Arrows into completion */}
        <path d="M462 55 C 502 55, 502 115, 542 115" fill="none" className="stroke-ink" strokeWidth="1.5" markerEnd="url(#arrow)" />
        <path d="M462 175 C 502 175, 502 115, 542 115" fill="none" className="stroke-ink" strokeWidth="1.5" markerEnd="url(#arrow)" />

        {/* Booking complete */}
        <rect x="544" y="85" width="166" height="60" rx="4" className="fill-mark/10 stroke-mark" strokeWidth="2" />
        <text x="627" y="111" textAnchor="middle" className="fill-mark text-[15px] font-semibold">Booking complete</text>
        <text x="627" y="131" textAnchor="middle" className={small}>only when both agree</text>
      </svg>
      <figcaption className="mt-2 text-[0.95rem] italic text-muted">
        The cash handshake: neither side goes first, and the booking only completes once both
        have confirmed.
      </figcaption>
    </figure>
  );
}
