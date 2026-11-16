"use client";

import { useSyncExternalStore } from "react";

// Shows today's date in the visitor's time zone, like a paper's dateline.
// Renders nothing on the server so the static page never shows a stale date.
const subscribe = () => () => {};
const getDate = () =>
  new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

export default function Today() {
  const date = useSyncExternalStore(subscribe, getDate, () => "");
  return <time suppressHydrationWarning>{date}</time>;
}
