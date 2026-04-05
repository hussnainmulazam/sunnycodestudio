import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";

const certifications = [
  {
    name: "Stanford University's Code in Place",
    issuer: "Stanford University",
    completionDate: "June 6, 2025",
    description:
      "Completed an introductory programming course equivalent to Stanford's CS106A Programming Methodologies, taught in Python. Covered control flow, loops, conditionals, variables, graphics, lists, and dictionaries. Built projects across Karel the Robot, Console Programming, and Graphics/Lists/Dictionaries, and earned the Final Project Badge.",
  },
  {
    name: "Google IT Automation with Python Professional Certificate",
    issuer: "Google via Coursera",
    completionDate: "September 3, 2025",
    description:
      "Completed a seven-course certificate covering Python, Git, IT automation, troubleshooting, debugging, configuration management, cloud practices, and AI-assisted job search strategies, with hands-on projects for IT support and junior sysadmin roles.",
  },
  {
    name: "Introduction to Generative AI Learning Path (Specialization)",
    issuer: "Google Cloud via Coursera",
    completionDate: "July 31, 2025",
    description:
      "Completed a 4-course specialization on generative AI, LLMs, and responsible AI. Courses: Introduction to Generative AI, Introduction to Large Language Models, Introduction to Responsible AI, and Responsible AI: Applying AI Principles with Google Cloud.",
  },
  {
    name: "AI Foundations",
    issuer: "IBM-SkillsBuild",
    completionDate: "September 13, 2025",
    description:
      "Covered AI concepts, ethics, implications, machine learning fundamentals, and practical applications.",
  },
  {
    name: "Cloud Essentials",
    issuer: "IBM",
    completionDate: "September 14, 2025",
    description:
      "Learned cloud basics (IaaS/PaaS/SaaS), deployment models, IBM Cloud access, product selection, and benefits of IBM Cloud.",
  },
  {
    name: "Introduction to Cloud",
    issuer: "IBM SkillsBuild",
    completionDate: "September 15, 2025",
    description:
      "Completed fundamentals of cloud computing via IBM Developer Skills Network.",
  },
  {
    name: "Troubleshooting and Debugging Techniques",
    issuer: "Google via Coursera",
    completionDate: "August 20, 2025",
    description:
      "Practiced systematic troubleshooting and debugging techniques for real-world software issues.",
  },
  {
    name: "Introduction to Git and GitHub",
    issuer: "Google via Coursera",
    completionDate: "August 14, 2025",
    description:
      "Learned Git/GitHub fundamentals including branching, merging, collaboration workflows, and repository management.",
  },
  {
    name: "Introduction to Generative AI",
    issuer: "Google Cloud via Coursera",
    completionDate: "July 30, 2025",
    description:
      "Explored generative AI fundamentals, core concepts, and practical applications.",
  },
  {
    name: "Using Python to Interact with the Operating System",
    issuer: "Google via Coursera",
    completionDate: "August 11, 2025",
    description:
      "Built automation skills around file manipulation, process management, and OS interactions using Python.",
  },
  {
    name: "Accelerate Your Job Search with AI",
    issuer: "Google via Coursera",
    completionDate: "September 3, 2025",
    description:
      "Learned AI-driven job search strategies including resume optimization and interview preparation.",
  },
  {
    name: "Automating Real-World Tasks with Python",
    issuer: "Google via Coursera",
    completionDate: "September 3, 2025",
    description:
      "Applied Python to automate real tasks like data processing, web scraping, and workflow automation.",
  },
  {
    name: "Introduction to Responsible AI",
    issuer: "Google Cloud via Coursera",
    completionDate: "July 30, 2025",
    description:
      "Studied ethical AI principles: fairness, transparency, privacy, and accountability for responsible implementation.",
  },
  {
    name: "Crash Course on Python",
    issuer: "Google via Coursera",
    completionDate: "August 4, 2025",
    description:
      "Completed an intensive introduction to Python programming: syntax, data structures, and functions.",
  },
  {
    name: "Configuration Management and the Cloud",
    issuer: "Google via Coursera",
    completionDate: "August 30, 2025",
    description:
      "Covered configuration management, infrastructure as code, containers with Docker/Kubernetes, and safe CI/CD-style change deployment. ~18 hours.",
  },
  {
    name: "Responsible AI: Applying AI Principles with Google Cloud",
    issuer: "Google Cloud via Coursera",
    completionDate: "July 31, 2025",
    description:
      "Learned the business case for responsible AI, issue-spotting best practices, Google's AI Principles, and frameworks to operationalize responsible AI. ~1 hour.",
  },
  {
    name: "Introduction to Large Language Models",
    issuer: "Google Cloud via Coursera",
    completionDate: "July 30, 2025",
    description:
      "Covered what LLMs are, use cases, prompt tuning, and Google’s generative AI tools.",
  },
  {
    name: "Python Skill Up",
    issuer: "Not specified",
    completionDate: "Not specified",
    description:
      "Worked on Python skill development, including coding, testing, debugging, and program design (details not specified).",
  },
  {
    name: "Deloitte Australia Cyber Job Simulation on Forage",
    issuer: "Deloitte Australia via Forage",
    completionDate: "September 15, 2025",
    description:
      "Completed a cyber security job simulation: analyzed web activity logs and supported investigation activities in a breach scenario.",
  },
  {
    name: "Deloitte Australia Technology Job Simulation on Forage",
    issuer: "Deloitte Australia via Forage",
    completionDate: "August 16, 2025",
    description:
      "Completed a technology job simulation: development/coding tasks and writing a proposal for a dashboard.",
  },
  {
    name: "Deloitte Australia Data Analytics Job Simulation on Forage",
    issuer: "Deloitte Australia via Forage",
    completionDate: "August 15, 2025",
    description:
      "Completed a data analytics simulation: built a Tableau dashboard and used Excel to classify data and draw conclusions.",
  },
];

const skills = {
  frontend: [
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "React.js (Hooks)",
    "Responsive UI/UX",
    "Mobile-first Design",
  ],
  backend: [
    "Python (FastAPI)",
    "Node.js",
    "Express.js",
    "SQLModel",
    "Mongoose",
    "Supabase",
    "SQL",
    "PostgreSQL",
    "MongoDB",
    "RESTful APIs",
    "JWT Authentication",
  ],
  ai: [
    "OpenAI Agents SDK",
    "Gemini API",
    "LangChain",
    "Pinecone Vector Database",
    "Playwright Automation",
    "AI (LLMs & Agents)",
    "Streamlit",
  ],
  tools: [
    "Docker",
    "TablePlus",
    "VS Code",
    "Git",
    "GitHub",
    "Cisco Packet Tracer",
    "Canva",
    "MS Office",
  ],
};

const projects = [
  {
    name: "Blog Generator with AI Agents",
    stack: "FastAPI, OpenAI Agents SDK, PostgreSQL",
    description:
      "AI-powered system that generates SEO-optimized 5,000-word blog posts for any user topic. Stores content in PostgreSQL via SQLModel and uses a multi-agent workflow for research, writing, and editing.",
  },
  {
    name: "Medical Chatbot Website",
    stack: "Next.js, FastAPI, Pinecone, OpenAI",
    description:
      "Interactive chatbot for breast cancer Q&A with semantic search via Pinecone. Built with a clean, user-friendly UI emphasizing real-time AI support.",
  },
  {
    name: "E-Commerce API Backend",
    stack: "FastAPI, PostgreSQL, JWT",
    description:
      "Backend API for products, users, carts, and authentication. RESTful, controller-based routing, secure JWT login, and efficient database integration.",
  },
  {
    name: "Instagram-Style UI in React Native",
    stack: "React Native",
    description:
      "Mobile UI inspired by Instagram with story carousel, feed posts, likes, and comments—focused on layout accuracy and smooth performance.",
  },
  {
    name: "Automated Agent for Chrome Automation",
    stack: "OpenAI Agent SDK, Playwright",
    description:
      "AI-driven automation that launches Chrome, selects a Google account, searches Pexels for wallpapers, downloads an image, and sets it as the desktop background.",
  },
  {
    name: "Personal Portfolio Website",
    stack: "Next.js, Tailwind CSS, Vercel",
    description:
      "Responsive personal site showcasing projects, certifications, skills, and resume with SEO optimizations and dynamic sections.",
  },
  {
    name: "Command-Line To-Do List App",
    stack: "Python, SQLite",
    description:
      "Terminal task manager: add/view/update/delete/prioritize tasks with persistent storage and basic search.",
  },
  {
    name: "Number Guessing Game",
    stack: "Python (console)",
    description:
      "Interactive guessing game with hints, attempt-based scoring, and multiple difficulty levels.",
  },
  {
    name: "Basic Calculator",
    stack: "Python (console)",
    description:
      "Calculator with input validation, division-by-zero handling, and continuous calculations until exit.",
  },
  {
    name: "Hangman Game",
    stack: "Python (console)",
    description:
      "Classic hangman with random word selection, input validation, and win/loss logic.",
  },
  {
    name: "Weather CLI Tool",
    stack: "Python, Requests",
    description:
      "CLI that fetches and formats weather data for a city via an external API; practices JSON parsing and argument parsing.",
  },
  {
    name: "Tic-Tac-Toe Game",
    stack: "Python (console)",
    description:
      "Two-player 3x3 game with win/draw checks and optional basic AI opponent (minimax).",
  },
];

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <Heading as="h2" className="text-2xl lg:text-3xl font-black">
        {title}
      </Heading>
      <div className="mt-4">{children}</div>
    </section>
  );
}

export default function ResumePage() {
  return (
    <Container>
      <span className="text-4xl">💼</span>
      <div className="flex items-start justify-between gap-4">
        <Heading className="font-black">Resume</Heading>
        <div className="flex flex-wrap justify-end gap-2">
          <a
            href="/resume.pdf"
            className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-neutral-900 text-white text-sm font-semibold hover:bg-neutral-800 transition-colors"
          >
            Download PDF
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-neutral-100 text-neutral-800 text-sm font-semibold hover:bg-neutral-200 transition-colors"
          >
            View PDF
          </a>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        <p className="text-xl md:text-2xl font-semibold text-primary">
          HUSSNAIN MULAZAM
        </p>
        <Paragraph className="max-w-2xl">
          Full-Stack Web Developer | <Highlight>AI &amp; Agents Developer</Highlight>
        </Paragraph>
        <Paragraph className="max-w-2xl text-xs">
          ATS text version:{" "}
          <a
            className="underline"
            href="/hussnain-mulazam-resume.txt"
            target="_blank"
            rel="noreferrer"
          >
            view
          </a>
        </Paragraph>
        <Paragraph className="max-w-2xl">
          <a className="underline" href="mailto:hussnainmulazam@gmail.com">
            hussnainmulazam@gmail.com
          </a>{" "}
          |{" "}
          <a className="underline" href="tel:+923266655307">
            +92 326 6655307
          </a>
        </Paragraph>
        <Paragraph className="max-w-2xl">
          <a
            className="underline"
            href="https://github.com/Sunny-Janjua"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          |{" "}
          <a
            className="underline"
            href="https://www.linkedin.com/in/hussnain-mulazam-4b3340288/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </Paragraph>
      </div>

      <Section title="Summary">
        <Paragraph className="max-w-3xl">
          Creative and passionate Full-Stack Developer with strong expertise in
          building scalable, user-friendly web applications using React, Next.js,
          FastAPI, Node.js, Express.js, PostgreSQL, and MongoDB. Adept at
          integrating AI agents using OpenAI’s Agents SDK, automating workflows,
          and developing intelligent systems. Skilled in both SQL and NoSQL
          databases and experienced in building RESTful APIs for production-grade
          applications. Currently mentoring and contributing to the developer
          community through Code with Sunny. Strong interest in AI, agents,
          backend development, and future technologies.
        </Paragraph>
      </Section>

      <Section title="Skills & Technologies">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Heading as="h3" className="text-lg lg:text-xl font-black">
              Frontend
            </Heading>
            <ul className="mt-3 list-disc pl-5 text-sm text-secondary space-y-1">
              {skills.frontend.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <Heading as="h3" className="text-lg lg:text-xl font-black">
              Backend
            </Heading>
            <ul className="mt-3 list-disc pl-5 text-sm text-secondary space-y-1">
              {skills.backend.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <Heading as="h3" className="text-lg lg:text-xl font-black">
              AI & Tools
            </Heading>
            <ul className="mt-3 list-disc pl-5 text-sm text-secondary space-y-1">
              {skills.ai.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <Heading as="h3" className="text-lg lg:text-xl font-black">
              Other Tools
            </Heading>
            <ul className="mt-3 list-disc pl-5 text-sm text-secondary space-y-1">
              {skills.tools.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Work Experience">
        <div className="space-y-6">
          <div className="rounded-xl border border-neutral-200 bg-white p-5">
            <Heading as="h3" className="text-lg lg:text-xl font-black">
              Computer Lecturer – Chenab Group of College
            </Heading>
            <Paragraph className="mt-1">
              Duration: August 24, 2025 – Present
            </Paragraph>
            <Paragraph className="mt-3 max-w-3xl">
              Instructed students and professionals on Python &amp; C language fundamentals. Evaluated student progress and mentored them in practical coding assignments.
            </Paragraph>
          </div>

          <div className="rounded-xl border border-neutral-200 bg-white p-5">
            <Heading as="h3" className="text-lg lg:text-xl font-black">
              Agentic AI Developer Intern – FISTA SOLUTION
            </Heading>
            <Paragraph className="mt-1">
              Duration: June 2025 – August 2025
            </Paragraph>
            <Paragraph className="mt-3 max-w-3xl">
              Worked as an Agentic AI Developer intern, contributing to the design and development of autonomous AI agent systems and intelligent automation workflows. Integrated AI solutions into practical applications.
            </Paragraph>
          </div>

          <div className="rounded-xl border border-neutral-200 bg-white p-5">
            <Heading as="h3" className="text-lg lg:text-xl font-black">
              Python Instructor – Corvit System Faisalabad
            </Heading>
            <Paragraph className="mt-1">
              Duration: March 24, 2024 – March 25, 2025 (6 months)
            </Paragraph>
            <Paragraph className="mt-3 max-w-3xl">
              Instructed students and professionals on Python fundamentals, including Object-Oriented Programming (OOP) and automation. Guided students in building automation scripts and practical projects.
            </Paragraph>
          </div>

          <div className="rounded-xl border border-neutral-200 bg-white p-5">
            <Heading as="h3" className="text-lg lg:text-xl font-black">
              Tech Educator &amp; Developer – Code with Sunny
            </Heading>
            <Paragraph className="mt-1">
              Duration: January 2024 – Present
            </Paragraph>
            <Paragraph className="mt-3 max-w-3xl">
              Mentor developers in Python, FastAPI, and full-stack web development through practical, hands-on projects. Foster a community of developers by sharing industry best practices.
            </Paragraph>
          </div>
        </div>
      </Section>

      <Section title="Projects">
        <div className="space-y-5">
          {projects.map((p) => (
            <div
              key={p.name}
              className="rounded-xl border border-neutral-200 bg-white p-5"
            >
              <Heading as="h3" className="text-lg lg:text-xl font-black">
                {p.name}
              </Heading>
              <Paragraph className="mt-1">
                <Highlight>Stack</Highlight>: {p.stack}
              </Paragraph>
              <Paragraph className="mt-3 max-w-3xl">{p.description}</Paragraph>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Education">
        <div className="space-y-4">
          <div className="rounded-xl border border-neutral-200 bg-white p-5">
            <Heading as="h3" className="text-lg lg:text-xl font-black">
              BS Information Technology (BSIT)
            </Heading>
            <Paragraph className="mt-1">
              Government College University, Faisalabad
            </Paragraph>
            <Paragraph className="mt-1">Expected Graduation: 2026</Paragraph>
          </div>
          <div className="rounded-xl border border-neutral-200 bg-white p-5">
            <Heading as="h3" className="text-lg lg:text-xl font-black">
              ICS (Intermediate in Computer Science)
            </Heading>
            <Paragraph className="mt-1">Superior College, Depalpur</Paragraph>
            <Paragraph className="mt-1">Graduated: 2022</Paragraph>
          </div>
        </div>
      </Section>

      <Section title="Certifications & Professional Development">
        <div className="space-y-4">
          {certifications.map((c) => (
            <div
              key={`${c.name}-${c.issuer}-${c.completionDate}`}
              className="rounded-xl border border-neutral-200 bg-white p-5"
            >
              <Heading as="h3" className="text-lg lg:text-xl font-black">
                {c.name}
              </Heading>
              <Paragraph className="mt-1">
                {c.issuer}
                {c.completionDate ? ` • ${c.completionDate}` : ""}
              </Paragraph>
              <Paragraph className="mt-3 max-w-3xl">{c.description}</Paragraph>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Goals & Interests">
        <ul className="space-y-2 text-sm lg:text-base text-secondary">
          <li>
            - Become a Software Engineer and AI Expert
          </li>
          <li>
            - Master AI agents, automation, and real-world integrations
          </li>
          <li>- Passionate about solving complex problems</li>
          <li>- Love exploring tech trends and building creative systems</li>
        </ul>
      </Section>

      <Section title="Languages">
        <ul className="space-y-2 text-sm lg:text-base text-secondary">
          <li>- Urdu (Native)</li>
          <li>- English</li>
        </ul>
      </Section>
    </Container>
  );
}
