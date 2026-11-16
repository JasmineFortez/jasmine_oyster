import ContactLinks from "./contact-links";

export default function SiteFooter() {
  return (
    <footer className="border-t border-rule">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-[0.95rem] text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          <span className="font-semibold text-ink">The Jasmine Times</span> is
          written and built by Jasmine Fortez in San Jose, Calif.
        </p>
        <ContactLinks />
      </div>
    </footer>
  );
}
