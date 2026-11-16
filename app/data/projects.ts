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
    headline: "Building a handyman app in eight weeks",
    role: "Application developer, UCEAP internship 2025",
    body: "Taught myself React Native and built features for a cross-platform handyman app: real-time booking and tracking, offline-first cash payment confirmation, and ratings. Worked with designers and backend engineers on API integration. Earned a 2025 UCEAP Internship Award.",
    stack: ["React Native", "TypeScript", "APIs"],
    links: [
      {
        label: "UCEAP award feature",
        href: "https://uceap.universityofcalifornia.edu/awards/jasmine-fortez-internship-2025",
      },
    ],
  },
  {
    kicker: "Tech4Good Lab, UC Santa Cruz",
    headline: "Teaching a career chatbot to give better answers",
    role: "GenAI researcher and education lead",
    // TODO: add one result if you have it (e.g. what improved after your prompt changes)
    body: "Refined prompts for a retrieval-augmented generation (RAG) career chatbot that helps UCSC students, and taught generative AI course sections under Prof. David Lee.",
    stack: ["Python", "LLMs", "RAG"],
    links: [{ label: "Repo or paper", href: "" }],
  },
  {
    kicker: "MESA Idea Accelerator, UC Santa Cruz",
    headline: "When the bus drives right past you: a weekly carpool app for UCSC students",
    role: "Co-creator, with Andrew Solis",
    body: "Surveyed 24 students: 22 had been passed by a full bus, and students without cars missed twice as many jobs. Designed OMW, which pairs you with a verified UCSC student on your route every week, so a full bus can't make you late.",
    stack: ["Figma", "User research", "Surveys"],
    links: [
      {
        label: "Figma prototype",
        href: "https://www.figma.com/proto/lgxVNDn9c3hTZZrImHnRy2/Untitled?page-id=0%3A1&node-id=1-2&viewport=451%2C196%2C0.2&t=9fJHaDbRoMlEKHi6-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2",
      },
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
