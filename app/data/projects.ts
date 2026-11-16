// All project content lives here, so you can edit copy without touching layout.
// Leave a link's href empty ("") and it won't render until you fill it in.
// Each project gets its own article page at /stories/<slug>.
// A project with a `tl` block also gets a Tagalog version at /stories/<slug>/tl.

export type ProjectLink = { label: string; href: string; labelTl?: string };

export type Figure = { src: string; alt: string; caption: string; captionTl?: string };

export type ArticleSection = {
  heading: string;
  paragraphs: string[];
  figure?: Figure; // optional image shown after the section's paragraphs
  diagram?: "cash-handshake" | "rag-pipeline"; // optional built-in diagram shown after the paragraphs
};

// Tagalog version of a story. Sections line up with the English ones by order,
// so figures and diagrams are reused from the English sections.
export type TagalogStory = {
  headline: string;
  role: string;
  context?: string;
  article: { heading: string; paragraphs: string[] }[];
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
  tl?: TagalogStory; // optional Tagalog version
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
        labelTl: "Basahin ang UCEAP feature",
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
    tl: {
      headline: "Gumawa ng Uber para sa mga handyman sa loob ng walong linggo",
      role: "Application developer intern, Summer 2024",
      context:
        "Ang Variantz ay isang startup sa Singapore. Sumali ako bilang application developer intern noong summer 2024 sa pamamagitan ng Summer Global Internship program ng UCEAP.",
      article: [
        {
          heading: "Ang assignment",
          paragraphs: [
            "Ginagawa ng Variantz ang Merchanex, isang app na parang Uber pero para sa handyman services: naghahanap at nagbu-book ng tulong ang mga customer, at tinatanggap ng mga service provider ang mga trabaho. Ibig sabihin, dalawang app na kailangang magtulungan, isa para sa customers at isa para sa providers, na gagawin sa loob ng walong linggo.",
            "Sumali ako sa isang team ng UI/UX designers at backend developers. Hindi pa ako nakakasulat ng React Native dati, kaya tinuruan ko ang sarili ko habang nagtatrabaho.",
          ],
        },
        {
          heading: "Ang hawak ko: paghahanap ng tamang handyman",
          paragraphs: [
            "Ang pangunahing ginawa ko ay ang service browsing experience sa customer app. Ito ang unang hinahawakan ng bawat customer bago sila mag-book, kaya dapat madali ang paghahanap ng tulong.",
            "By default, naka-sort ang results ayon sa kung sino ang pinakamalapit, dahil para sa handyman, distansya ang pinakamahalaga. Mula doon, puwedeng lumipat ang customer sa pag-sort ayon sa star rating para makita muna ang may pinakamagandang reviews, o gumamit ng filters para paliitin ang mga serbisyong kailangan nila.",
          ],
        },
        {
          heading: "Ang problema sa cash",
          paragraphs: [
            "Maraming handyman job ang binabayaran nang cash, at hindi dumadaan sa app ang cash. Kaya may totoong tanong: kung personal na iniabot ang pera, paano malalaman ng dalawang panig na talagang nangyari ang bayad?",
            "Nag-design ako ng cash payment confirmation flow na parang mutual handshake sa pagitan ng dalawang app: parehong kinukumpirma ng customer at ng provider ang bayad, at saka lang nagiging complete ang booking kapag pareho na silang nag-confirm. Walang kailangang umasa lang sa salita ng isa't isa.",
          ],
        },
        {
          heading: "Pagbuo bilang team",
          paragraphs: [
            "Bukod sa sarili kong features, tumulong ako sa map-based location tracking, provider ratings, at booking. Nakipagtrabaho ako sa backend developers para sa API integration, at sa mga designer para manatiling smooth at stable ang apps sa iba't ibang device.",
            "Ginawa namin ang prototype sa isang mock database, para makausad ang apps kahit hindi pa handa ang totoong backend. Dinokumento ko rin ang mga proseso at CI/CD practices namin para madaling maituloy ng susunod na hahawak.",
          ],
        },
        {
          heading: "Ang natutunan ko",
          paragraphs: [
            "Ang pag-aral ng bagong framework nang mag-isa, may deadline, at nasa bagong bansa pa, iyon ang pinakanagustuhan ko. Iyon ang naglapit sa akin sa mobile at backend work. Nakakuha ang internship ng 2025 UCEAP Internship Award.",
          ],
        },
      ],
    },
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
    tl: {
      headline: "Tinuruan ang isang career chatbot na magbigay ng mas magandang sagot",
      role: "GenAI researcher at education lead, 2025",
      context:
        "Ang Tech4Good Lab ng UC Santa Cruz ay pinamumunuan ni Prof. David Lee. Sumali ako bilang generative AI researcher at education lead mula Enero hanggang Hunyo 2025.",
      article: [
        {
          heading: "Ang project",
          paragraphs: [
            "Gumagawa ang lab ng career chatbot para tulungan ang mga UCSC student na alamin ang susunod nilang hakbang. Gumamit ito ng totoong interviews ng mga taong magkakaiba ang career: may diretso ang landas, may nag-iba ng direksyon sa gitna, at may nag-trade school imbes na four-year na kurso.",
            "Iyon talaga ang punto ng iba't ibang kuwento. Ang estudyanteng hindi pasok sa karaniwang hulma ay dapat makahanap pa rin ng taong kahawig ng kuwento niya.",
          ],
        },
        {
          heading: "Paano ito gumagana",
          paragraphs: [
            "Gumagamit ang chatbot ng retrieval-augmented generation (RAG). Bago ito sumagot, hinahanap muna nito sa mga interview ang pinakatugma sa tanong ng estudyante, at ibinibigay ang mga iyon sa AI kasama ng tanong. Dahil dito, nakabase ang sagot sa karanasan ng totoong tao, hindi sa generic na advice.",
          ],
        },
        {
          heading: "Ang ginawa ko",
          paragraphs: [
            "Gamit ang LangChain at OpenAI API, inayos ko ang dalawang bahagi na nagdedesisyon kung gaano kaganda ang sagot: kung gaano kahusay mahanap ng chatbot ang tamang interviews para sa bawat tanong, at ang prompt na nagsasabi sa AI kung paano gamitin ang mga iyon.",
          ],
        },
        {
          heading: "Paano namin nalaman na gumanda ito",
          paragraphs: [
            "Madali lang magpalit ng prompt. Ang mahirap ay malaman kung talagang gumanda ang sagot. Sinuri namin ang mga sagot sa dalawang paraan: LLM scoring, kung saan ibang model ang nagmamarka sa bawat sagot ayon sa mga itinakdang metrics, at ang sarili kong review, kung saan binabasa ko mismo ang mga sagot.",
            "Nahuhuli ng bawat isa ang nalalampasan ng isa. Kayang i-check ng automated scoring ang maraming sagot nang mabilis, at nahuli ng pagbabasa ko ang mga bagay na hindi nakikita ng score, gaya ng sagot na mukhang sigurado pero hindi naman talaga nakakatulong.",
          ],
        },
        {
          heading: "Pagtuturo nito",
          paragraphs: [
            "Bilang education lead ng lab, nagturo ako ng lab sections para sa mahigit 40 engineering students tungkol sa vector retrieval, prompt engineering, at kung paano suriin ang ibinibigay ng isang LLM. Ang pagpapaliwanag ng mga ideyang ito sa iba ang nagpalalim ng pag-intindi ko.",
          ],
        },
      ],
    },
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
        labelTl: "Tingnan ang Figma prototype",
        href: "https://www.figma.com/proto/lgxVNDn9c3hTZZrImHnRy2/Untitled?page-id=0%3A1&node-id=1-2&viewport=451%2C196%2C0.2&t=9fJHaDbRoMlEKHi6-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2",
      },
      { label: "Full pitch deck (PDF)", labelTl: "Buong pitch deck (PDF)", href: "/stories/omw/omw-pitch-deck.pdf" },
    ],
    context:
      "The MESA Idea Accelerator starts with a one-week, in-person course in human-centered design, followed by about two months of remote work to research, build, and pitch an idea. It's sponsored by Edwards Lifesciences, Keysight Technologies, and the Society for Information Management (SIM).",
    leadImage: {
      src: "/stories/omw/slide-01.webp",
      alt: "Title slide: OMW, On time. Matched. Weekly. Presented by Jasmine Fortez and Andrew Solis at MESA Idea Accelerator 2026.",
      caption: "The opening slide of our MESA Idea Accelerator 2026 pitch.",
      captionTl: "Ang unang slide ng pitch namin sa MESA Idea Accelerator 2026.",
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
          captionTl: "Ang survey namin sa 24 na UCSC student.",
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
          captionTl: "Ang tatlong pangako ng OMW: on time, matched, weekly.",
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
    tl: {
      headline: "Kapag nilagpasan ka ng bus: isang weekly carpool app para sa mga UCSC student",
      role: "Project lead: gumawa ng prototype at pitch, kasama si Andrew Solis",
      context:
        "Nagsisimula ang MESA Idea Accelerator sa isang linggong in-person na course sa human-centered design, kasunod ang mga dalawang buwang remote work para mag-research, bumuo, at mag-pitch ng isang ideya. Sponsored ito ng Edwards Lifesciences, Keysight Technologies, at Society for Information Management (SIM).",
      article: [
        {
          heading: "2:20 p.m. sa Baskin Circle",
          paragraphs: [
            "Kakatapos lang ng Discrete Math, at may shift ka sa downtown nang 3:00. Dumating ang Line 18 at nilagpasan ka lang, punong-puno hanggang pinto. Ang pagpipilian mo: maghintay ng 35 minuto at ma-late, o magbayad ng $25 sa Uber.",
            "Para sa maraming UC Santa Cruz student, hindi ito hypothetical. Normal na Martes lang ito.",
          ],
        },
        {
          heading: "Ang nalaman namin",
          paragraphs: [
            "Nag-survey kami ng 24 na estudyante. 22 sa kanila ang nalagpasan na ng punong bus, at 10 ang nalagpasan nang anim na beses o higit pa. 16 ang walang regular na access sa kotse, at kahit sa mga may kotse, 5 sa 8 ang sumasakay pa rin ng bus.",
            "Pinakatinamaan ang mga walang kotse: 9 sa 16 ang hindi nakapasok sa trabaho dahil sa transit, kumpara sa 2 sa 8 na may kotse. Sabi sa amin ng isang MESA counselor, nakakita na siya ng mga estudyanteng pumipili ng klase ayon sa schedule ng bus imbes na kung ano talaga ang gusto nilang pag-aralan.",
          ],
        },
        {
          heading: "Bakit kulang ang mga existing na option",
          paragraphs: [
            "Ipinapakita ng mga bus tracker gaya ng Google Maps, Transit, METRO Real-Time, at SlugLoop kung nasaan ang bus, pero hindi kung may puwesto pa. Masyadong mahal ang Uber at Lyft para sa araw-araw na biyahe papunta sa part-time job. Ang mga carpool board sa Facebook at Reddit ay para sa weekend na pag-uwi, at kadalasan patay na.",
          ],
        },
        {
          heading: "Ang dinesign ko",
          paragraphs: [
            "Ang OMW, short for “on my way,” ay nakabase sa tatlong pangako. On time: naka-save na ang upuan mo bago ka pa umalis sa klase, kaya hindi ka mala-late dahil sa punong bus. Matched: ipapares ka sa isang verified na UCSC student sa ruta mo na pareho ang dealbreakers mo, gaya ng tahimik na biyahe o bawal manigarilyo. Weekly: isang beses mo lang ise-set ang schedule mo at iisang tao ang kasabay mo bawat linggo, walang posting at walang paghihintay kung may sasagot.",
            "Sa gitna ng program, umalis ang orihinal naming team lead. Imbes na hayaang huminto ang project, ako ang tumayong lead, at ginawa ko ang Figma prototype at ang pitch kasama ang teammate kong si Andrew Solis.",
          ],
        },
        {
          heading: "Bakit parang dating app",
          paragraphs: [
            "Alam na ng mga estudyante kung paano maghanap ng match sa phone nila. Ginagawa nila iyon sa Tinder at Hinge. Kaya imbes na gumawa ng bagong interface, hiniram ko ang alam na nila: isang matching screen at compatibility percentage na nagpapakita kung gaano kayo katugma ng isang driver, base sa mga bagay gaya ng ruta at dealbreakers mo.",
            "Walang kailangang mag-aral ng bagong app para gamitin ito, at nagiging masaya ang paghahanap ng carpool imbes na pabigat.",
          ],
        },
        {
          heading: "Ang gagawin ko nang iba",
          paragraphs: [
            "Hindi kami nanalo sa accelerator, at sa pagbabalik-tanaw, alam ko kung bakit. Ginawa ko ang research sa problema: nag-survey ako ng 24 na estudyante, kinausap ang isang MESA counselor, at tiningnan ang bawat option na meron na ang mga estudyante, mula sa bus trackers hanggang Uber at carpool boards. Sa huli, naintindihan ko nang buo kung bakit naiistranded ang mga estudyante.",
            "Ang hindi ko nagawa ay subukan ang sagot ko. Hindi ko tinanong ang mga estudyante kung talagang gagamitin nila ang OMW. Magtitiwala ba sila sa ibang estudyante na isakay sila bawat linggo? Magsa-sign up ba ang mga driver? Dinesign ko ang solusyon bago ko ito sinubukan sa mga taong para dito.",
            "Sa susunod, ipapakita ko agad ang isang rough prototype sa mga estudyante at driver, bago pa pakinisin ang pitch. May isang malaking binago rin ang research sa pag-iisip ko: hindi lang trabaho ang nawawala sa mga estudyante dahil sa transit, hinuhubog din nito kung anong klase ang kinukuha nila.",
          ],
        },
      ],
    },
  },
];

// AI-assisted builds run as short briefs below the top stories.
export const aiBuilds: Project[] = [
  {
    slug: "baia-code-confidence",
    kicker: "Beautiful As I Am, Washington, D.C.",
    headline: "I do, we do, you do: a three-week coding curriculum for young girls",
    role: "Volunteer curriculum designer and developer",
    body: "When BAIA wanted a STEM curriculum for elementary-school girls, I volunteered to build it: three weeks in Scratch that move from \u201cI do\u201d (learning the basics) to \u201cwe do\u201d (building a project together) to \u201cyou do\u201d (each girl's own project).",
    stack: ["Scratch", "React", "Vercel", "AI-assisted"],
    links: [
      { label: "Visit the live site", labelTl: "Bisitahin ang site", href: "https://baia-code-confidence.vercel.app" },
    ],
    context:
      "Beautiful As I Am (BAIA) is a youth mentorship nonprofit in Washington, D.C. I started there as a communications and programs intern and later became its software developer.",
    article: [
      {
        heading: "Why it exists",
        paragraphs: [
          "BAIA's leader wanted a STEM curriculum for the elementary-school girls in the program, and she wanted it to run for three weeks. I volunteered to build it.",
          "Most of these girls had never written a line of code. The goal wasn't to turn them into programmers in three weeks. It was to help them walk away thinking, \u201cI can do this.\u201d",
        ],
      },
      {
        heading: "I do, we do, you do",
        paragraphs: [
          "I built the three weeks around a classic teaching rhythm, one week per step. Week one is \u201cI do\u201d: the girls learn basic coding concepts. Week two is \u201cwe do\u201d: we build a project together. Week three is \u201cyou do\u201d: each girl makes her own project.",
          "For a beginner, that order matters. Nobody gets thrown into the deep end, and by the time a girl is building on her own, she's already done it once with support. That's where the name comes from. The whole curriculum is built to grow confidence, one step at a time, and I made sure every lesson fit that structure.",
        ],
      },
      {
        heading: "Coding in Scratch",
        paragraphs: [
          "The lessons use Scratch, where kids snap together colorful code blocks instead of typing. It lets young kids focus on how code thinks, like loops, events, and steps in order, without getting stuck on typos.",
          "I made the curriculum bright and colorful on purpose. For elementary-school girls, it should look like something fun to play with, not homework.",
        ],
      },
      {
        heading: "Built to feel like BAIA",
        paragraphs: [
          "I wanted the site to feel like part of the BAIA community, not a separate tool. I designed the events page myself, and I wrote the main button, \u201cJoin the Village,\u201d to echo BAIA's own slogan.",
        ],
      },
      {
        heading: "How I used AI",
        paragraphs: [
          "This was my first project built with an AI coding agent. I used Claude Code to build the React site and deployed it on Vercel. I decided what the curriculum taught, how the three weeks were structured, and how the site should look and feel. Claude Code helped me turn that into working pages quickly.",
          "Being my first time, I learned a lot about how to work with an AI. The site worked, but the code wasn't as clean as I'd want if someone else had to maintain it. That's the real lesson: AI can get you to a working version fast, but you're still responsible for understanding and cleaning up what it writes.",
        ],
      },
      {
        heading: "What's next",
        paragraphs: [
          "The curriculum didn't launch with the girls this time. Instead of letting it sit, I'm building a 2.0, aiming for a launch next summer. That means cleaning up the code, sharpening the lessons, and writing a bilingual README, in English and Tagalog, that explains what I directed, what the AI wrote, and what I changed.",
        ],
      },
    ],
    tl: {
      headline: "I do, we do, you do: tatlong linggong coding curriculum para sa mga batang babae",
      role: "Volunteer curriculum designer at developer",
      context:
        "Ang Beautiful As I Am (BAIA) ay isang youth mentorship nonprofit sa Washington, D.C. Nagsimula ako doon bilang communications and programs intern, at kalaunan ay naging software developer nila.",
      article: [
        {
          heading: "Bakit ito ginawa",
          paragraphs: [
            "Gusto ng leader ng BAIA ng STEM curriculum para sa mga batang babae sa elementary na kasali sa program, at gusto niyang tumagal ito ng tatlong linggo. Nag-volunteer ako na gawin ito.",
            "Karamihan sa kanila, hindi pa nakakapag-code kahit kailan. Hindi naman goal na gawin silang programmer sa loob ng tatlong linggo. Ang goal ay umuwi silang iniisip, \u201cKaya ko 'to.\u201d",
          ],
        },
        {
          heading: "I do, we do, you do",
          paragraphs: [
            "Binuo ko ang tatlong linggo sa isang klasikong paraan ng pagtuturo, isang linggo bawat hakbang. Sa unang linggo, \u201cI do\u201d: pinag-aaralan ng mga bata ang basic coding concepts. Sa ikalawang linggo, \u201cwe do\u201d: sabay-sabay kaming gumagawa ng project. Sa ikatlong linggo, \u201cyou do\u201d: gumagawa ang bawat isa ng sarili niyang project.",
            "Para sa beginner, mahalaga ang ganitong pagkakasunod-sunod. Walang itinatapon agad sa malalim, at pagdating ng oras na mag-isa na silang gagawa, nagawa na nila ito dati nang may gumagabay. Dito galing ang pangalan: ginawa ang buong curriculum para lumaki ang kumpiyansa nila, paunti-unti. Siniguro kong sumusunod ang bawat lesson sa ganitong structure.",
          ],
        },
        {
          heading: "Coding gamit ang Scratch",
          paragraphs: [
            "Gumagamit ang mga lesson ng Scratch, kung saan pinagdudugtong ng mga bata ang makukulay na code blocks imbes na mag-type. Dahil dito, nakakapag-focus sila sa kung paano mag-isip ang code, gaya ng loops, events, at mga hakbang na sunod-sunod, nang hindi naiipit sa typos.",
            "Sinadya kong gawing makulay ang curriculum. Para sa mga batang babae sa elementary, dapat parang laro ito, hindi parang homework.",
          ],
        },
        {
          heading: "Ginawa para maramdamang BAIA",
          paragraphs: [
            "Gusto kong maramdaman na parte ng BAIA community ang site, hindi hiwalay na tool. Ako mismo ang nag-design ng events page, at isinulat ko ang main button, \u201cJoin the Village,\u201d para tumugma sa sariling slogan ng BAIA.",
          ],
        },
        {
          heading: "Paano ko ginamit ang AI",
          paragraphs: [
            "Ito ang una kong project na ginawa gamit ang isang AI coding agent. Gumamit ako ng Claude Code para buuin ang React site, at ni-deploy ko ito sa Vercel. Ako ang nagdesisyon kung ano ang ituturo ng curriculum, paano hahatiin ang tatlong linggo, at ano ang itsura at pakiramdam ng site. Tinulungan ako ng Claude Code na gawin itong gumaganang pages nang mabilis.",
            "Dahil first time ko, ang dami kong natutunan sa pakikipagtrabaho sa AI. Gumana ang site, pero hindi ganoon kalinis ang code kung ibang tao ang magme-maintain nito. Iyon ang tunay na aral: kaya kang dalhin ng AI sa isang working version nang mabilis, pero ikaw pa rin ang responsable na intindihin at linisin ang isinulat nito.",
          ],
        },
        {
          heading: "Ano ang susunod",
          paragraphs: [
            "Hindi na-launch ang curriculum sa mga bata ngayon. Imbes na hayaan lang, gumagawa ako ng 2.0, at target kong i-launch ito sa susunod na summer. Ibig sabihin, lilinisin ko ang code, aayusin ang mga lesson, at magsusulat ng bilingual README, sa English at Tagalog, na nagpapaliwanag kung ano ang dinirekta ko, ano ang isinulat ng AI, at ano ang binago ko.",
          ],
        },
      ],
    },
  },
];

export const allProjects = [...featured, ...aiBuilds];
