import type { Metadata } from "next";
import "@fontsource-variable/newsreader/opsz.css";
import "@fontsource-variable/newsreader/opsz-italic.css";
import "@fontsource/ibm-plex-mono/400.css";
import "./globals.css";
import SiteNav from "./components/site-nav";
import SiteFooter from "./components/site-footer";

export const metadata: Metadata = {
  title: {
    default: "The Jasmine Times",
    template: "%s · The Jasmine Times",
  },
  description:
    "Jasmine Fortez is a software engineer building mobile apps, AI tools, and data products. UC Santa Cruz CS, by way of the Philippines.",
};

// Runs before the page paints, so there's no flash of the wrong colors.
// Uses the visitor's saved choice from the toggle, or else their system setting,
// and keeps following the system setting until they pick one.
const themeScript = `(() => {
  const root = document.documentElement;
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  let saved = null;
  try { saved = localStorage.getItem("theme"); } catch {}
  root.dataset.theme = saved === "dark" || saved === "light" ? saved : media.matches ? "dark" : "light";
  media.addEventListener("change", (e) => {
    let picked = null;
    try { picked = localStorage.getItem("theme"); } catch {}
    if (!picked) root.dataset.theme = e.matches ? "dark" : "light";
  });
})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-full flex-col">
        <SiteNav />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
