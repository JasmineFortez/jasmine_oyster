// All project content lives here, so you can edit copy without touching layout.
// Leave a link's href empty ("") and it won't render until you fill it in.
// Each project gets its own article page at /stories/<slug>.

export type ProjectLink = { label: string; href: string };

export type Figure = { src: string; alt: string; caption: string };

export type ArticleSection = {
  heading: string;
  paragraphs: string[];
  figure?: Figure; // optional image shown after the section's paragraphs
  diagram?: "cash-handshake" | "rag-pipeline"; // optional built-in diagram shown after the paragraphs
};

export type Project = {
  slug: string; // URL for the full story: /stories/<slug>
  kicker: string; // where / with whom, shown above the headline
  headline: string; // newspaper-style headline
  role: string;
  body: string; // front-page teaser: one or two sentences
  stack: string[];
  links: ProjectLink[];
  context?: string; // optional short note under the byline explaining the program or company
  leadImage?: Figure; // optional image at the top of the full story
  article: ArticleSection[]; // the full story
};

export const featured: Project[] = [
  {
    slug: "variantz",
    kicker: "Variantz, Singapore",
    headline: "Building an Uber for handymen in eight weeks",
    role: "Application developer intern, Summer 2024",
    body: "Co-developed Merchanex, an Uber-style handyman app, as two React Native apps in 8 weeks. I built the customer app's service browsing, sorted by distance with filters and star ratings, and designed a cash payment confirmation flow. Earned a 2025 UCEAP Internship Award.",
    stack: ["React Native", "TypeScript", "APIs"],
    links: [
      {
        label: "UCEAP award feature",
        href: "https://uceap.universityofcalifornia.edu/awards/jasmine-fortez-internship-2025",
      },
    ],
    context:
      "Variantz is a startup in Singapore. I joined as an application developer intern in summer 2024 through UCEAP's Summer Global Internship program.",
    article: [
      {
        heading: "The assignment",
        paragraphs: [
          "Variantz was building Merchanex, an app that works like Uber but for handyman services: customers find and book help, and service providers take the jobs. That meant two apps that had to work together, one for customers and one for providers, built in eight weeks.",
          "I joined a team of UI/UX designers and backend developers. I had never written React Native before, so I taught myself on the job.",
        ],
      },
      {
        heading: "What I owned: finding the right handyman",
        paragraphs: [
          "My main piece was the service browsing experience in the customer app. It's the first thing every customer touches before they book anything, so it had to make finding help feel easy.",
          "By default, results are sorted by who's closest, because for a handyman, distance matters most. From there, customers can switch to sorting by star rating to see the best-reviewed providers first, or use filters to narrow down the services they need.",
        ],
      },
      {
        heading: "The cash problem",
        paragraphs: [
          "A lot of handyman jobs get paid in cash, and cash never touches the app. That raised a real question: if the money changes hands in person, how do both sides know the payment actually happened?",
          "I designed a cash payment confirmation flow that works like a mutual handshake between the two apps: the customer and the provider each confirm the payment, and the booking is only marked complete once both have. Nobody has to take the other person's word for it.",
        ],
        diagram: "cash-handshake",
      },
      {
        heading: "Building as a team",
        paragraphs: [
          "Beyond my own features, I collaborated on map-based location tracking, provider ratings, and booking. I worked with the backend developers on API integration and with the designers to keep the apps smooth and stable across different devices.",
          "We built the prototype on a mock database, so the apps could move forward before the real backend was ready. I also documented our processes and CI/CD practices so the next person could pick up where we left off.",
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
    role: "GenAI researcher and education lead, 2025",
    body: "Tuned a RAG career chatbot built with LangChain and OpenAI, drawing on interviews with people from every kind of career path, and measured the improvements with LLM scoring and my own review. Also taught generative AI to 40+ engineering students.",
    stack: ["Python", "LangChain", "OpenAI API", "RAG"],
    links: [{ label: "Repo or paper", href: "" }],
    context:
      "UC Santa Cruz's Tech4Good Lab is led by Prof. David Lee. I joined as a generative AI researcher and education lead from January to June 2025.",
    article: [
      {
        heading: "The project",
        paragraphs: [
          "The lab was building a career chatbot to help UCSC students figure out their next steps. It drew on real interviews with people whose careers looked very different: some followed a straight line, some changed direction partway through, and some went to trade school instead of a four-year path.",
          "That range was the point. A student who doesn't fit the usual mold should still be able to find someone whose story looks like theirs.",
        ],
      },
      {
        heading: "How it works",
        paragraphs: [
          "The chatbot uses retrieval-augmented generation (RAG). Before it answers, it searches the interviews for the ones that best match the student's question, then hands those to the AI along with the question. That way the answer is grounded in real people's experiences instead of generic advice.",
        ],
        diagram: "rag-pipeline",
      },
      {
        heading: "What I did",
        paragraphs: [
          "Working with LangChain and the OpenAI API, I tuned the two parts that decide how good an answer is: how well the chatbot finds the right interviews for each question, and the prompt that tells the AI how to use them.",
        ],
      },
      {
        heading: "How we knew it got better",
        paragraphs: [
          "Changing prompts is easy. Knowing whether an answer actually got better is the hard part. We evaluated answers two ways: LLM scoring, where another model grades each answer against set metrics, and my own review, where I read the answers myself.",
          "Each one catches what the other misses. Automated scoring can check a lot of answers quickly, and reading them myself caught the things a score can't, like an answer that sounds confident but doesn't really help.",
        ],
      },
      {
        heading: "Teaching it",
        paragraphs: [
          "As the lab's education lead, I taught lab sections for more than 40 engineering students on vector retrieval, prompt engineering, and how to evaluate what an LLM gives back. Explaining these ideas to others made me understand them a lot better myself.",
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
      { label: "Full pitch deck (PDF)", href: "/stories/omw/omw-pitch-deck.pdf" },
    ],
    context:
      "The MESA Idea Accelerator starts with a one-week, in-person course in human-centered design, followed by about two months of remote work to research, build, and pitch an idea. It's sponsored by Edwards Lifesciences, Keysight Technologies, and the Society for Information Management (SIM).",
    leadImage: {
      src: "/stories/omw/slide-01.webp",
      alt: "Title slide: OMW, On time. Matched. Weekly. Presented by Jasmine Fortez and Andrew Solis at MESA Idea Accelerator 2026.",
      caption: "The opening slide of our MESA Idea Accelerator 2026 pitch.",
    },
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
        figure: {
          src: "/stories/omw/slide-03.webp",
          alt: "Survey results slide: 92% (22 of 24 students) have been passed by a full bus, 10 got passed 6 or more times; 67% (16 of 24) don't have regular car access; 5 of 8 students with a car still ride the bus.",
          caption: "Our survey of 24 UCSC students.",
        },
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
          "Partway through the program, our original team lead stepped away. Instead of letting the project stall, I stepped up to lead it, and I built the Figma prototype and the pitch with my teammate Andrew Solis.",
        ],
        figure: {
          src: "/stories/omw/slide-07.webp",
          alt: "Slide titled Redefining On My Way, with three columns: On time, Matched, Weekly, each describing one of OMW's promises.",
          caption: "OMW's three promises: on time, matched, weekly.",
        },
      },
      {
        heading: "Why it feels like a dating app",
        paragraphs: [
          "Students already know how to find a match on their phones. They do it on Tinder and Hinge. So instead of inventing a new interface, I borrowed what they already use: a matching screen and a compatibility percentage that shows how well you and a driver line up, based on things like your route and your dealbreakers.",
          "Nobody has to learn a new app to use it, and it makes finding a carpool feel fun instead of like a chore.",
        ],
      },
      {
        heading: "What I'd do differently",
        paragraphs: [
          "We didn't win the accelerator, and looking back, I know why. I did the research on the problem: I surveyed 24 students, talked with a MESA counselor, and looked at every option students already had, from bus trackers to Uber to carpool boards. By the end, I understood exactly why students were getting stranded.",
          "What I didn't do was test my answer. I never asked students if they'd actually use OMW. Would they trust another student to drive them every week? Would drivers sign up? I designed the solution before checking it with the people it was for.",
          "Next time, I'd put a rough prototype in front of students and drivers early, before polishing the pitch. The research also changed my thinking in one big way: transit doesn't just cost students jobs, it shapes which classes they take.",
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
