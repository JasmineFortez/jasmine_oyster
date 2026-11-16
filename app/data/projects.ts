// All project content lives here, so you can edit copy without touching layout.
// Leave a link's href empty ("") and it won't render until you fill it in.

export type ProjectLink = { label: string; href: string };

export type Project = {
  kicker: string; // where / with whom, shown above the headline
  headline: string; // newspaper-style headline
  role: string;
  body: string; // one or two sentences: the problem and what you built
  stack: string[];
  links: ProjectLink[];
};

// The first one is the lead story; the rest run as columns below it.
export const featured: Project[] = [
  {
    kicker: "Variantz, Singapore",
    headline: "Building a handyman app in eight weeks: real-time booking, tracking, and offline payments",
    role: "Application developer, UCEAP Summer Global Internship 2025",
    body: "Taught myself React Native and built features for a cross-platform handyman app, with separate customer and provider apps: real-time booking and tracking, an offline-first cash payment confirmation flow, and ratings. Worked with designers and backend engineers on API integration and stability across devices. Earned a 2025 UCEAP Internship Award.",
    stack: ["React Native", "TypeScript", "APIs", "CI/CD"],
    links: [
      {
        label: "Read the UCEAP award feature",
        href: "https://uceap.universityofcalifornia.edu/awards/jasmine-fortez-internship-2025",
      },
    ],
  },
  {
    kicker: "Tech4Good Lab, UC Santa Cruz",
    headline: "Teaching with retrieval: generative AI research for education",
    role: "GenAI researcher and education lead",
    // TODO: one sentence on what your RAG system did and what you built in it
    body: "Researched retrieval-augmented generation (RAG) for education in UCSC's Tech4Good lab, and led the lab's education work.",
    stack: ["Python", "LLMs", "RAG"],
    links: [{ label: "Repo or paper", href: "" }],
  },
  {
    kicker: "MESA Idea Accelerator, UC Santa Cruz",
    headline: "When 92% of buses pass you by: designing a student carpool app",
    role: "Product and UX lead",
    body: "Synthesized 24 student surveys around a 92% campus bus pass-by rate and designed OMW, an interactive flow that matches commuters into carpools.",
    stack: ["Figma", "User research"],
    links: [
      // TODO: paste the public Figma prototype URL
      { label: "See the Figma prototype", href: "" },
    ],
  },
];

// AI-assisted builds run as short briefs in the sidebar.
export const aiBuilds: Project[] = [
  {
    kicker: "Beautiful As I Am",
    headline: "A beginner coding curriculum for a DC youth nonprofit",
    role: "Developer",
    body: "A React site that teaches girls to code from zero, built with an AI-assisted workflow.",
    stack: ["React", "Vercel"],
    links: [
      { label: "Visit the live site", href: "https://baia-code-confidence.vercel.app" },
    ],
  },
];
