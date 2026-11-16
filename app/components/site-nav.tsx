import Link from "next/link";
import ThemeToggle from "./theme-toggle";

// Only sections that exist go in the nav. Add Kuwaderno (scrapbook) when it's live.
const sections = [
  { label: "Work", href: "/" },
  { label: "About", href: "/about" },
];

export default function SiteNav() {
  return (
    <header className="sticky top-0 z-10 border-b border-rule bg-paper/90 backdrop-blur-sm">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5"
      >
        <Link href="/" className="text-lg font-semibold tracking-tight">
          The Jasmine Times
        </Link>
        <div className="flex items-center gap-6">
          <ul className="flex gap-6 text-[0.95rem]">
            {sections.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-muted transition-colors hover:text-mark"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
