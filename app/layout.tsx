import type { Metadata } from "next";
import "@fontsource-variable/newsreader/opsz.css";
import "@fontsource-variable/newsreader/opsz-italic.css";
import "@fontsource/ibm-plex-mono/400.css";
import "./globals.css";
import SiteNav from "./components/site-nav";

export const metadata: Metadata = {
  title: {
    default: "The Jasmine Times",
    template: "%s · The Jasmine Times",
  },
  description:
    "Jasmine Fortez is a software engineer building mobile apps, AI tools, and data products. UC Santa Cruz CS, by way of the Philippines.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <SiteNav />
        {children}
      </body>
    </html>
  );
}
