import autopost1 from "public/autopostagentprojectimages/Screenshot 2026-07-01 171036.png";
import autopost2 from "public/autopostagentprojectimages/Screenshot 2026-07-01 171053.png";
import autopost3 from "public/autopostagentprojectimages/Screenshot 2026-07-01 171110.png";
import autopost4 from "public/autopostagentprojectimages/Screenshot 2026-07-01 171121.png";
import blogGenerator from "public/images/blog-generator.png";
import aivontech1 from "public/aivontech/Screenshot 2026-07-01 171947.png";
import aivontech2 from "public/aivontech/Screenshot 2026-07-01 172004.png";
import aivontech3 from "public/aivontech/Screenshot 2026-07-01 172037.png";
import aivontech4 from "public/aivontech/Screenshot 2026-07-01 172055.png";
import medicalChatbot from "public/images/medical-chatbot.png";
import studynova1 from "public/studynova/Screenshot 2026-07-01 172710.png";
import studynova2 from "public/studynova/Screenshot 2026-07-01 172722.png";
import studynova3 from "public/studynova/Screenshot 2026-07-01 172751.png";
import studynova4 from "public/studynova/Screenshot 2026-07-01 172803.png";
import codewithsunny1 from "public/codewithsunny/Screenshot 2026-07-01 173506.png";
import codewithsunny2 from "public/codewithsunny/Screenshot 2026-07-01 173532.png";
import codewithsunny3 from "public/codewithsunny/Screenshot 2026-07-01 173544.png";
import browserAgent from "public/images/browser-agent.png";
import hafiz1 from "public/images/hafiz-1.png";
import hafiz2 from "public/images/hafiz-2.png";
import hafiz3 from "public/images/hafiz-3.png";

export const products = [
  {
    href: "https://github.com/Sunny-Janjua",
    title: "Hafiz App — AI-Powered Quran Recitation & Tajweed Learning Platform",
    description:
      "Intelligent Quran recitation and Tajweed learning platform analyzing recitation audio in real-time, providing phoneme-level mistake detection, correction, Tajweed rule coaching, and personalized memorization tracking.",
    thumbnail: hafiz1,
    images: [hafiz1, hafiz2, hafiz3],
    stack: ["Next.js", "FastAPI", "Python", "Whisper AI", "PostgreSQL", "Docker"],
    slug: "hafiz-app",
    content: (
      <div>
        <p className="mb-4">
          <strong>Hafiz App</strong> is an AI-powered Quran recitation and Tajweed learning platform engineered to help students, learners, and memorizers (Huffaz) perfect their recitation with real-time AI phoneme accuracy, Tajweed rule verification, and personalized progress tracking.
        </p>
        <p className="mb-6">
          The platform uses state-of-the-art speech recognition and acoustic phoneme analysis to listen to the user&apos;s recitation, compare it against authentic Uthman Taha text and Tajweed rules (such as Ikhfa, Ghunnah, Idgham, Qalqalah, and Madd), and provide instant visual and acoustic guidance.
        </p>

        <h3 className="text-xl font-bold mb-3 text-neutral-900">🎯 Key Capabilities</h3>
        <ul className="list-disc pl-5 mb-6 space-y-2 text-neutral-600">
          <li><strong>Live Audio Waveform &amp; Pronunciation Scoring</strong>: Real-time feedback with accuracy percentages for pronunciation, Makharij, and Tajweed.</li>
          <li><strong>Phoneme-Level Analysis</strong>: Highlights specific Arabic letters and sounds that need improvement.</li>
          <li><strong>Personalized Memorization &amp; Revision Tracker</strong>: Smart spaced-repetition schedules ensuring long-term retention of Ayahs and Surahs.</li>
          <li><strong>Interactive Tajweed Highlighting</strong>: Dynamic color-coded script displaying applicable recitation rules as the user speaks.</li>
        </ul>

        <h3 className="text-xl font-bold mb-3 text-neutral-900">🛠 Architecture &amp; Tech Stack</h3>
        <ul className="list-disc pl-5 mb-6 space-y-2 text-neutral-600">
          <li><strong>Frontend</strong>: Next.js, React, TypeScript, Tailwind CSS, Web Audio API</li>
          <li><strong>Backend</strong>: FastAPI, Python, PostgreSQL, SQLModel, Docker</li>
          <li><strong>AI &amp; Speech</strong>: Custom Whisper speech models, phoneme alignment, audio feature extraction</li>
          <li><strong>Infrastructure</strong>: Containerized Docker deployments, CI/CD automated test pipelines</li>
        </ul>
      </div>
    ),
  },
  {
    href: "https://autopost-agentic-ai-system.vercel.app/",
    title: "AutoPost Agentic AI System",
    description:
      "AutoPost Agentic AI is an intelligent social media automation platform that uses a multi-agent architecture to research trending topics, generate content, create AI images, suggest hashtags, optimize SEO, and schedule or publish posts across multiple platforms.",
    thumbnail: autopost1,
    images: [autopost1, autopost2, autopost3, autopost4],
    stack: ["Next.js", "FastAPI", "OpenAI Agents SDK", "Pinecone", "PostgreSQL"],
    slug: "autopost",
    content: (
      <div>
        <p className="mb-4">
          <strong>AutoPost Agentic AI</strong> is an intelligent social media automation platform built using modern AI agents. The application automatically researches trending topics, generates high-quality content, creates AI-powered captions, suggests hashtags, generates images, schedules posts, and publishes them to multiple social media platforms without requiring constant human intervention.
        </p>
        <p className="mb-6">
          Unlike traditional automation tools, this system uses <strong>Agentic AI</strong>, where autonomous AI agents collaborate to perform complex workflows such as research, content planning, content generation, approval, scheduling, and publishing.
        </p>

        <h3 className="text-xl font-bold mb-3 text-neutral-900">🎯 The Problem</h3>
        <p className="mb-6">
          Managing multiple social media accounts is time-consuming and requires finding trending topics, researching competitors, writing engaging copy, selecting hashtags, generating relevant images, scheduling, and publishing on different platforms. AutoPost Agentic AI solves this by automating the complete pipeline.
        </p>

        <h3 className="text-xl font-bold mb-3 text-neutral-900">💡 The Solution: Specialized AI Agents</h3>
        <p className="mb-4">
          The platform leverages multiple specialized AI agents that communicate and collaborate to complete the content creation pipeline:
        </p>
        <ul className="list-disc pl-5 mb-6 space-y-2 text-neutral-600">
          <li><strong>Research Agent</strong>: Researches trending topics and gathers statistics or competitor insights.</li>
          <li><strong>Content Planner Agent</strong>: Outlines the tone, target audience, and call-to-actions.</li>
          <li><strong>Content Generation Agent</strong>: Writes human-like content for LinkedIn, Twitter/X, and Facebook.</li>
          <li><strong>Image Prompt &amp; Generation Agents</strong>: Formulates high-quality image prompts and generates visuals.</li>
          <li><strong>Hashtag &amp; SEO Agent</strong>: Optimizes readability, keywords, and suggests relevant hashtags.</li>
          <li><strong>Review &amp; Scheduler Agent</strong>: Ensures brand safety, verifies facts, and queues posts.</li>
          <li><strong>Publishing &amp; Analytics Agent</strong>: Deploys posts to multiple platforms and tracks engagement.</li>
        </ul>

        <h3 className="text-xl font-bold mb-3 text-neutral-900">🛠 Tech Stack &amp; Architecture</h3>
        <ul className="list-disc pl-5 mb-6 space-y-2 text-neutral-600">
          <li><strong>Frontend</strong>: Next.js, React, TypeScript, Tailwind CSS, Shadcn UI</li>
          <li><strong>Backend</strong>: FastAPI, Python, SQLModel, PostgreSQL, Alembic, JWT Authentication</li>
          <li><strong>AI &amp; Vector Search</strong>: OpenAI Agents SDK, GPT Models, Pinecone (RAG &amp; memory retrieval)</li>
          <li><strong>DevOps</strong>: Docker, Docker Compose, GitHub Actions, Vercel, Render</li>
        </ul>
      </div>
    ),
  },
  {
    href: "https://github.com/Sunny-Janjua",
    title: "Blog Generator with AI Agents",
    description:
      "AI-powered system that generates SEO-optimized 5,000-word blog posts for any user topic. Stores content in PostgreSQL via SQLModel and uses a multi-agent workflow for research, writing, and editing.",
    thumbnail: blogGenerator,
    images: [blogGenerator],
    stack: ["FastAPI", "OpenAI Agents SDK", "PostgreSQL", "SQLModel"],
    slug: "blog-generator",
    content: (
      <div>
        <p className="mb-4">
          This project implements a multi-agent AI pipeline consisting of specialized agents: a Research Agent, 
          a Writer Agent, a Critic Agent, and a Formatter Agent. Working in sequence, they produce high-quality, 
          SEO-optimized 5,000-word articles in under 10 minutes.
        </p>
        <p className="mb-4">
          The backend is powered by FastAPI, and the generated content, metadata, and agent states are stored 
          reliably in a PostgreSQL database using SQLModel for persistent content management.
        </p>
      </div>
    ),
  },
  {
    href: "https://aivontech.vercel.app",
    title: "AIvonTech — AI Solutions Platform",
    description:
      "AivonTech is an AI-focused software development company specializing in intelligent automation, Agentic AI, full-stack web applications, and scalable backend systems built using FastAPI, Next.js, PostgreSQL, Docker, Pinecone, and LLMs.",
    thumbnail: aivontech1,
    images: [aivontech1, aivontech2, aivontech3, aivontech4],
    stack: ["Next.js", "FastAPI", "OpenAI API", "Pinecone", "PostgreSQL"],
    slug: "aivontech",
    content: (
      <div>
        <p className="mb-4">
          <strong>AivonTech</strong> is a technology company focused on building modern software solutions powered by <strong>Artificial Intelligence</strong>, <strong>Agentic AI</strong>, <strong>Full-Stack Web Development</strong>, and <strong>Cloud Technologies</strong>. The company develops intelligent applications that automate business processes, improve productivity, and deliver scalable digital solutions for startups, enterprises, and individual clients.
        </p>
        <p className="mb-6">
          AivonTech specializes in designing and developing AI-driven products, web applications, APIs, and automation platforms using modern technologies such as Python, FastAPI, Next.js, React, PostgreSQL, Docker, Vector Databases, and Large Language Models (LLMs).
        </p>

        <h3 className="text-xl font-bold mb-3 text-neutral-900">🎯 Mission &amp; Vision</h3>
        <p className="mb-4">
          To empower businesses with innovative AI-powered software solutions that simplify complex workflows, automate repetitive tasks, and accelerate digital transformation through modern technologies.
        </p>
        <p className="mb-6">
          AivonTech aims to be a leading software and AI solutions company recognized for building intelligent, scalable, and reliable applications that create measurable value for businesses worldwide.
        </p>

        <h3 className="text-xl font-bold mb-3 text-neutral-900">🤖 Core Areas of Expertise</h3>
        <ul className="list-disc pl-5 mb-6 space-y-2 text-neutral-600">
          <li><strong>Agentic AI &amp; LLMs</strong>: Large Language Model integrations, autonomous agents, and Multi-Agent systems.</li>
          <li><strong>RAG Pipelines</strong>: Semantic memory indexing and knowledge search via Pinecone Vector Database.</li>
          <li><strong>Full-Stack Web Engineering</strong>: Responsive frontends built with Next.js, React, TypeScript, and Tailwind CSS.</li>
          <li><strong>Robust API Backends</strong>: Scalable, secure controller-based REST APIs built with Python, FastAPI, SQLModel, and Node.js.</li>
          <li><strong>DevOps &amp; Security</strong>: Containerized development using Docker, JWT authentication, and secure cloud pipelines.</li>
        </ul>

        <h3 className="text-xl font-bold mb-3 text-neutral-900">💼 Services Offered</h3>
        <ul className="list-disc pl-5 mb-6 space-y-2 text-neutral-600">
          <li>AI Application Development &amp; Custom Agentic AI Solutions</li>
          <li>Full-Stack Web Application Development &amp; API Integrations</li>
          <li>AI Chatbot &amp; Virtual Assistant Development (with RAG support)</li>
          <li>Workflow Automation, Database Design, Optimization &amp; Cloud Deployment</li>
        </ul>
      </div>
    ),
  },
  {
    href: "https://github.com/Sunny-Janjua",
    title: "Medical Chatbot — Breast Cancer Q&A Platform",
    description:
      "Interactive chatbot for breast cancer Q&A with semantic search via Pinecone. Built with a clean, user-friendly UI emphasizing real-time AI support.",
    thumbnail: medicalChatbot,
    images: [medicalChatbot],
    stack: ["Next.js", "FastAPI", "Pinecone", "OpenAI API"],
    slug: "medical-chatbot",
    content: (
      <div>
        <p className="mb-4">
          Developed an interactive medical chatbot using RAG (Retrieval-Augmented Generation) coupled with 
          Pinecone vector database to provide highly accurate, domain-specific answers for breast cancer queries.
        </p>
        <p className="mb-4">
          The system includes a patient-friendly UI integrated with real-time OpenAI responses, serving as a 
          valuable reference tool for both caregivers and patients.
        </p>
      </div>
    ),
  },
  {
    href: "https://github.com/Sunny-Janjua",
    title: "Study Nova — AI-Powered Learning Platform",
    description:
      "Study Nova is an AI-powered educational platform that delivers personalized learning experiences using Large Language Models (LLMs) and Retrieval-Augmented Generation (RAG) built using Next.js, FastAPI, Pinecone, and PostgreSQL.",
    thumbnail: studynova1,
    images: [studynova1, studynova2, studynova3, studynova4],
    stack: ["Next.js", "FastAPI", "OpenAI Agents SDK", "Pinecone", "PostgreSQL"],
    slug: "studynova",
    content: (
      <div>
        <p className="mb-4">
          <strong>Study Nova</strong> is an AI-powered educational platform designed to make learning more personalized, interactive, and efficient. The platform leverages <strong>Artificial Intelligence</strong>, <strong>Large Language Models (LLMs)</strong>, and <strong>Retrieval-Augmented Generation (RAG)</strong> to help students learn complex topics, upload study materials, ask questions, generate quizzes, summarize documents, and receive personalized learning recommendations.
        </p>
        <p className="mb-6">
          Study Nova aims to bridge the gap between traditional learning methods and modern AI by providing students with a smart learning assistant that understands their educational needs and delivers accurate, context-aware responses.
        </p>

        <h3 className="text-xl font-bold mb-3 text-neutral-900">🎯 The Problem</h3>
        <p className="mb-6">
          Students often struggle to understand complex concepts, spend hours searching for reliable study materials, lack personalized tutoring, or face information overload. Study Nova addresses these problems by providing an AI-powered learning assistant that simplifies studying and improves learning outcomes.
        </p>

        <h3 className="text-xl font-bold mb-3 text-neutral-900">💡 Key AI Features</h3>
        <ul className="list-disc pl-5 mb-6 space-y-2 text-neutral-600">
          <li><strong>AI Learning Assistant</strong>: Chatbot capable of explaining difficult concepts and providing step-by-step solutions.</li>
          <li><strong>Document Processing &amp; RAG</strong>: Upload PDFs/notes to build a personal knowledge base with semantic search via Pinecone.</li>
          <li><strong>AI Summarizer &amp; Flashcard Generator</strong>: Automatically generates revision sheets, bullet-point notes, and memory cards.</li>
          <li><strong>Quiz Generator</strong>: Formulates MCQs, true/false, and practice exams across multiple difficulty levels.</li>
          <li><strong>Study Planner</strong>: Designs customized study schedules based on subjects, exam dates, and available hours.</li>
        </ul>

        <h3 className="text-xl font-bold mb-3 text-neutral-900">🛠 Technology Stack</h3>
        <ul className="list-disc pl-5 mb-6 space-y-2 text-neutral-600">
          <li><strong>Frontend</strong>: Next.js, React, TypeScript, Tailwind CSS, Shadcn UI</li>
          <li><strong>Backend</strong>: FastAPI, Python, SQLModel, PostgreSQL, JWT Authentication</li>
          <li><strong>AI &amp; Vector Search</strong>: OpenAI GPT Models, OpenAI Agents SDK, Pinecone Vector Database</li>
          <li><strong>DevOps</strong>: Docker, Docker Compose, Git, Vercel, Render</li>
        </ul>
      </div>
    ),
  },
  {
    href: "https://github.com/Sunny-Janjua",
    title: "Automated Browser Agent",
    description:
      "AI-driven browser automation performing multi-step tasks including web search, data extraction, and form filling using Playwright and Python.",
    thumbnail: browserAgent,
    images: [browserAgent],
    stack: ["OpenAI Agents SDK", "Playwright", "Python"],
    slug: "browser-agent",
    content: (
      <div>
        <p className="mb-4">
          An AI-powered automated browser agent capable of performing complex multi-step workflows. 
          By combining OpenAI&apos;s Agents SDK with Playwright, the agent acts as an autonomous user on the web.
        </p>
        <p className="mb-4">
          It can execute online research, navigate interfaces, bypass common form-filling hurdles, and extract 
          valuable web data without requiring manual scripts for every webpage layout.
        </p>
      </div>
    ),
  },
  {
    href: "https://github.com/Sunny-Janjua",
    title: "Code with Sunny — AI-Powered Learning & Developer Community Platform",
    description:
      "Code with Sunny is an AI-powered e-learning and developer community platform that provides structured programming courses, interactive coding challenges, AI-assisted learning, progress tracking, and project-based education.",
    thumbnail: codewithsunny1,
    images: [codewithsunny1, codewithsunny2, codewithsunny3],
    stack: ["Next.js", "FastAPI", "OpenAI Agents SDK", "PostgreSQL"],
    slug: "codewithsunny",
    content: (
      <div>
        <p className="mb-4">
          <strong>Code with Sunny</strong> is a comprehensive e-learning and developer community platform designed to help students and aspiring software engineers learn modern technologies through structured courses, hands-on projects, coding challenges, and AI-assisted learning.
        </p>
        <p className="mb-6">
          The application enables users to enroll in courses, track their progress, complete practical assignments, interact with an AI coding assistant, and build real-world projects across web development, artificial intelligence, cloud computing, DevOps, and software engineering.
        </p>

        <h3 className="text-xl font-bold mb-3 text-neutral-900">🎯 The Problem</h3>
        <p className="mb-6">
          Many learners struggle with finding structured and up-to-date learning resources, understanding complex programming concepts, applying theoretical knowledge to real-world projects, and staying motivated. Code with Sunny solves this by combining education, AI assistance, and community engagement.
        </p>

        <h3 className="text-xl font-bold mb-3 text-neutral-900">💡 Features &amp; AI Integration</h3>
        <ul className="list-disc pl-5 mb-6 space-y-2 text-neutral-600">
          <li><strong>AI Programming Tutor</strong>: Instant explanations, code review, bug detection, and assignment guidance using OpenAI Agents SDK.</li>
          <li><strong>Course Management &amp; Streaming</strong>: Enrolling, resume watching, and tracking completion of structured HD video lectures.</li>
          <li><strong>Interactive Coding Challenges</strong>: Algorithms and project-based exercises for beginner, intermediate, and advanced learners.</li>
          <li><strong>Community Discussions</strong>: Q&amp;A, knowledge sharing, and showing off project completions with fellow developers.</li>
        </ul>

        <h3 className="text-xl font-bold mb-3 text-neutral-900">🛠 Technology Stack</h3>
        <ul className="list-disc pl-5 mb-6 space-y-2 text-neutral-600">
          <li><strong>Frontend</strong>: Next.js, React, TypeScript, Tailwind CSS, Shadcn UI</li>
          <li><strong>Backend</strong>: FastAPI, Python, SQLModel, PostgreSQL, JWT Authentication</li>
          <li><strong>AI &amp; Databases</strong>: OpenAI GPT Models, OpenAI Agents SDK, PostgreSQL (relational storage)</li>
          <li><strong>DevOps</strong>: Docker, Docker Compose, GitHub Actions, Vercel, AWS/Render</li>
        </ul>
      </div>
    ),
  },
];

