"use client";

import { useSyncExternalStore } from "react";

type Theme = "light" | "dark";

// The current theme lives on <html data-theme="...">, set before paint by the
// script in layout.tsx. This button reads it and flips it.
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
}

const getTheme = (): Theme =>
  document.documentElement.dataset.theme === "dark" ? "dark" : "light";

export default function ThemeToggle() {
  // null on the server, so the button renders the same before and after hydration
  const theme = useSyncExternalStore<Theme | null>(
    subscribe,
    getTheme,
    () => null,
  );
  const next: Theme = theme === "dark" ? "light" : "dark";

  function toggle() {
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // storage can be blocked (private mode); the switch still works for this visit
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme ? `Switch to ${next} mode` : "Switch color mode"}
      title={theme ? `Switch to ${next} mode` : undefined}
      className="-m-1.5 grid size-8 place-items-center rounded-full text-muted transition-colors hover:text-mark"
    >
      {/* Moon in light mode (go dark), sun in dark mode (go light) */}
      <svg
        viewBox="0 0 24 24"
        className="size-[18px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {theme === "dark" ? (
          <>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
          </>
        ) : (
          <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" />
        )}
      </svg>
    </button>
  );
}
