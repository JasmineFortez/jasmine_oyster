// TODO: add { label: "Resume", href: "/resume.pdf" } once resume.pdf is in /public
const links = [
  { label: "GitHub", href: "https://github.com/JasmineFortez" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jasmine-angel-fortez-9938741b2",
  },
  { label: "Email", href: "mailto:fortezjasmineangel@gmail.com" },
];

export default function ContactLinks() {
  return (
    <ul className="flex gap-5 font-mono text-[0.8rem]">
      {links.map(({ label, href }) => (
        <li key={label}>
          <a
            href={href}
            className="underline decoration-mark/40 decoration-1 underline-offset-4 transition-colors hover:text-mark hover:decoration-mark"
            {...(href.startsWith("http")
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}
