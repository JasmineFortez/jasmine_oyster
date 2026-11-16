// All project content lives here, so you can edit copy without touching layout.
// Leave a link's href empty ("") and it won't render until you fill it in.

export type ProjectLink = { label: string; href: string };

export type Project = {
  title: string;
  context: string; // where / with whom
  role: string;
  summary: string; // one or two sentences: the problem and what you built
  stack: string[];
  links: ProjectLink[];
};

export const featured: Project[] = [
  {
    title: "Variantz: customer and provider apps",
    context: "Variantz, Singapore (UCEAP)",
    role: "Application developer",
    summary:
      "Co-developed two cross-platform React Native apps in an 8-week sprint, including an offline-first cash payment confirmation flow, map location tracking, and ratings. The internship earned a UCEAP award.",
    stack: ["React Native", "TypeScript", "Maps"],
    links: [
      // TODO: paste the UCSC Global Learning / UCEAP article URL
      { label: "UCEAP feature", href: "" },
    ],
  },
  {
    title: "Generative AI research",
    context: "Tech4Good Lab, UC Santa Cruz",
    role: "GenAI researcher and education lead",
    // TODO: one sentence on what your RAG system did and what you built in it
    summary:
      "Researched retrieval-augmented generation (RAG) for education as part of UCSC's Tech4Good lab, and led the lab's education work.",
    stack: ["Python", "LLMs", "RAG"],
    links: [{ label: "Repo or paper", href: "" }],
  },
  {
    title: "OMW: student carpool matching",
    context: "MESA Idea Accelerator, UC Santa Cruz",
    role: "Product and UX lead",
    summary:
      "Synthesized 24 student surveys around a 92% campus bus pass-by rate and designed an interactive flow that matches commuters into carpools.",
    stack: ["Figma", "User research"],
    links: [
      // TODO: paste the public Figma prototype URL
      { label: "Figma prototype", href: "" },
    ],
  },
];

export const aiBuilds: Project[] = [
  {
    title: "BAIA Code Confidence",
    context: "Beautiful As I Am",
    role: "Developer",
    summary:
      "A beginner-friendly coding curriculum site for a DC youth mentorship nonprofit, built with an AI-assisted workflow.",
    stack: ["React", "Vercel"],
    links: [
      { label: "Live site", href: "https://baia-code-confidence.vercel.app" },
    ],
  },
];
