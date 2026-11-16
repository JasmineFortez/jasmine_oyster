// All project content lives here, so you can edit copy without touching layout.
// Leave a link's href empty ("") and it won't render until you fill it in.
// Each project gets its own article page at /stories/<slug>.

export type ProjectLink = { label: string; href: string };

export type ArticleSection = { heading: string; paragraphs: string[] };

export type Project = {
  slug: string; // URL for the full story: /stories/<slug>
  kicker: string; // where / with whom, shown above the headline
  headline: string; // newspaper-style headline
  role: string;
  body: string; // front-page teaser: one or two sentences
  stack: string[];
  links: ProjectLink[];
  article: ArticleSection[]; // the full story
};

export const featured: Project[] = [
  {
    slug: "variantz",
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
    article: [
      {
        heading: "The assignment",
        paragraphs: [
          "Variantz, an early-stage startup in Singapore, was building an on-demand handyman service. It needed two apps that worked together: one for customers booking a job, and one for the handymen taking it.",
          "I joined as an application developer through UCEAP's Summer Global Internship. I had never written React Native before.",
        ],
      },
      {
        heading: "What I built",
        paragraphs: [
          "I taught myself React Native and built features across both apps: real-time booking and tracking, sorting handymen by star rating, ratings after a job, and a cash payment confirmation flow so a job could be marked as paid even when the customer paid in cash.",
          "The prototype ran on a mock database, which let the team test the full booking flow before the backend was finished.",
        ],
      },
      {
        heading: "How I worked",
        paragraphs: [
          "Most days were coding, debugging, and API integration. I worked closely with designers and backend engineers to keep the experience smooth and stable across different devices, and I documented our processes and CI/CD practices so the next person could pick up where I left off.",
        ],
      },
      {
        heading: "What I took away",
        paragraphs: [
          "Learning a new framework on my own, on a deadline, in a new country, was the part I loved most. It's what pulled me toward mobile and backend work. The internship earned a 2025 UCEAP Internship Award.",
        ],
      },
    ],
  },
  {
    slug: "tech4good-career-chatbot",
    kicker: "Tech4Good Lab, UC Santa Cruz",
    headline: "Teaching a career chatbot to give better answers",
    role: "GenAI researcher and education lead",
    body: "Refined prompts for a retrieval-augmented generation (RAG) career chatbot that helps UCSC students, and taught generative AI course sections under Prof. David Lee.",
    stack: ["Python", "LLMs", "RAG"],
    links: [{ label: "Repo or paper", href: "" }],
    // TODO: this story is thin. Add what the chatbot answered, what you changed in
    // the prompts, and one result (what got better after your changes).
    article: [
      {
        heading: "The project",
        paragraphs: [
          "UCSC's Tech4Good Lab was building a career chatbot to help students with questions about jobs and internships. It used retrieval-augmented generation (RAG): before answering, the chatbot looks up relevant documents, so its answers are grounded in real information instead of guesses.",
        ],
      },
      {
        heading: "What I did",
        paragraphs: [
          "I refined the chatbot's prompts so its answers were clearer and more useful to students.",
          "As the lab's education lead, I also taught generative AI course sections under Prof. David Lee, helping other students understand how these tools work and where they fall short.",
        ],
      },
    ],
  },
  {
    slug: "omw-carpool",
    kicker: "MESA Idea Accelerator, UC Santa Cruz",
    headline: "When the bus drives right past you: a weekly carpool app for UCSC students",
    role: "Project lead: built the prototype and pitch, with Andrew Solis",
    body: "Surveyed 24 students: 22 had been passed by a full bus, and students without cars missed twice as many jobs. I designed OMW, which pairs you with a verified UCSC student on your route every week, so a full bus can't make you late.",
    stack: ["Figma", "User research", "Surveys"],
    links: [
      {
        label: "Figma prototype",
        href: "https://www.figma.com/proto/lgxVNDn9c3hTZZrImHnRy2/Untitled?page-id=0%3A1&node-id=1-2&viewport=451%2C196%2C0.2&t=9fJHaDbRoMlEKHi6-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2",
      },
    ],
    article: [
      {
        heading: "2:20 p.m. at Baskin Circle",
        paragraphs: [
          "Discrete Math just ended, and you have a 3:00 shift downtown. Line 18 pulls up and drives right past you, packed to the doors. Your options: wait 35 minutes and show up late, or pay $25 for an Uber.",
          "For a lot of UC Santa Cruz students, that isn't a hypothetical. It's a normal Tuesday.",
        ],
      },
      {
        heading: "What we found",
        paragraphs: [
          "We surveyed 24 students. 22 of them had been passed by a full bus, and 10 had been passed six or more times. 16 didn't have regular access to a car, and even among students with cars, 5 of 8 still rode the bus.",
          "Students without cars were hit hardest: 9 of 16 had missed work because of transit, compared with 2 of 8 students who had cars. A MESA counselor told us she'd seen students pick classes around bus schedules instead of what they actually wanted to study.",
        ],
      },
      {
        heading: "Why existing options fall short",
        paragraphs: [
          "Bus trackers like Google Maps, Transit, METRO Real-Time, and SlugLoop show where a bus is, not whether it has room. Uber and Lyft are too expensive for a daily commute to a part-time job. Carpool boards on Facebook and Reddit are built for weekend trips home, and they're usually dead.",
        ],
      },
      {
        heading: "What I designed",
        paragraphs: [
          "OMW, short for “on my way,” is built on three promises. On time: your seat is saved before you leave class, so a full bus can't make you late. Matched: you're paired with a verified UCSC student on your route who shares your dealbreakers, like a quiet ride or no smoking. Weekly: you set your schedule once and ride with the same person every week, with no posting and no hoping someone replies.",
          "I led the project with my teammate Andrew Solis, and I built the Figma prototype and the pitch.",
        ],
      },
      {
        heading: "The plan, and what I'd change",
        paragraphs: [
          "Our rollout plan was to build the app and recruit riders and drivers in the fall, pilot one route between Baskin Engineering and downtown Santa Cruz in winter, then add routes in spring. The biggest ask was an intro to campus Transportation and Parking Services for pickup hubs and carpool permit perks.",
          "The research changed our thinking: transit doesn't just cost students jobs, it shapes which classes they take. If I did it again, I'd talk to drivers sooner.",
        ],
      },
    ],
  },
];

// AI-assisted builds run as short briefs below the top stories.
export const aiBuilds: Project[] = [
  {
    slug: "baia-code-confidence",
    kicker: "Beautiful As I Am",
    headline: "A beginner coding curriculum for a DC youth nonprofit",
    role: "Developer",
    body: "A React site that teaches girls to code from zero, built with an AI-assisted workflow.",
    stack: ["React", "Vercel"],
    links: [
      { label: "Visit the live site", href: "https://baia-code-confidence.vercel.app" },
    ],
    article: [
      {
        heading: "What it is",
        paragraphs: [
          "Beautiful As I Am is a youth mentorship nonprofit in Washington, D.C. Code Confidence is a beginner-friendly coding curriculum I built for its girls, designed for students starting from zero.",
        ],
      },
      {
        heading: "How I built it",
        paragraphs: [
          "I built it in React with an AI-assisted workflow and deployed it on Vercel. I designed the events page myself, and I wrote the main call to action, “Join the Village,” to match BAIA's own slogan, so the site feels like part of the community rather than a separate tool.",
        ],
      },
      {
        heading: "Where it stands",
        paragraphs: [
          "The site is deployed but hasn't launched to the BAIA girls yet. Next up is cleaning up the code and writing a bilingual README that explains what I directed, what the AI wrote, and what I changed.",
        ],
      },
    ],
  },
];

export const allProjects = [...featured, ...aiBuilds];
