import type { Metadata } from "next";
import "@fontsource-variable/newsreader/opsz.css";
import "@fontsource-variable/newsreader/opsz-italic.css";
import "@fontsource/ibm-plex-mono/400.css";
import "./globals.css";
import SiteNav from "./components/site-nav";

export const metadata: Metadata = {
  title: {
    default: "Jasmine Fortez",
    template: "%s · Jasmine Fortez",
  },
  description:
    "Jasmine Fortez is a software engineer from UC Santa Cruz who still thinks like a reporter.",
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
