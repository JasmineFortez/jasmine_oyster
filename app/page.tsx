const links = [
  { label: "GitHub", href: "https://github.com/JasmineFortez" },
  { label: "LinkedIn", href: "www.linkedin.com/in/jasmine-angel-fortez-9938741b2" },
  { label: "Email", href: "mailto:fortezjasmineangel@gmail.com" },
];

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col justify-center px-6 py-24">
      <p className="font-mono text-sm text-accent">Hi, I&apos;m</p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
        Jasmine Fortez
      </h1>
      <p className="mt-6 text-lg leading-8 text-muted">
        Before I wrote code, I wanted to be a journalist. Growing up in the Philippines, I fell in love with investigating and relaying information—partly out of raw curiosity, and partly because I was naturally chismosa.

When my family immigrated to the U.S., that dream felt out of reach. Keeping up with English was exhausting, and the fear of being misunderstood pushed me toward mathematics and computer science, where logic was absolute and a semicolon meant the same thing in every language.

After graduating with a 3.79 in CS from UC Santa Cruz and working across data pipelines and mobile apps, I realized technical systems are meaningless if you can't tell the human story behind them. This website is my newsroom: a place to bridge engineering logic with documentation, data storytelling, and the voice I almost left behind.
      </p>

      <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium">
        {links.map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              className="underline decoration-muted/40 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
              {...(href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
