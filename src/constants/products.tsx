import autopost from "public/images/autopost.png";
import blogGenerator from "public/images/blog-generator.png";
import aivontech from "public/images/aivontech.png";
import medicalChatbot from "public/images/medical-chatbot.png";
import ecommerceApi from "public/images/ecommerce-api.png";
import browserAgent from "public/images/browser-agent.png";

export const products = [
  {
    href: "https://github.com/Sunny-Janjua",
    title: "AutoPost Agentic AI System",
    description:
      "An agentic AI system that automatically creates, schedules, and publishes social media posts. Supports multiple platforms including LinkedIn, Instagram, Twitter, and Facebook using platform APIs.",
    thumbnail: autopost,
    images: [autopost],
    stack: ["Python", "LangChain", "OpenAI Agents SDK", "Social Media APIs"],
    slug: "autopost",
    content: (
      <div>
        <p className="mb-4">
          AutoPost is an autonomous agentic AI system designed to streamline social media workflows. 
          It takes topic inputs or raw ideas and fully automates the creation of engaging posts tailored 
          for specific platforms.
        </p>
        <p className="mb-4">
          By leveraging platform APIs for LinkedIn, Instagram, Twitter, and Facebook, the system schedules 
          and publishes content at the optimal engagement times, removing human intervention and saving 
          up to 90% of manual posting effort.
        </p>
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
      "A production-ready platform delivering multi-agent AI workflows automating research, content generation, and data processing. Features integrated RAG pipelines and vector search.",
    thumbnail: aivontech,
    images: [aivontech],
    stack: ["Next.js", "FastAPI", "OpenAI API", "PostgreSQL"],
    slug: "aivontech",
    content: (
      <div>
        <p className="mb-4">
          AIvonTech is a comprehensive AI startup platform delivering full stack web apps and agentic AI systems 
          tailored for early-stage startups looking to automate workflows.
        </p>
        <p className="mb-4">
          It integrates retrieval-augmented generation (RAG) pipelines and high-performance vector search to 
          power domain-specific AI features, delivering customized solutions that reduce manual workloads by 60–90%.
        </p>
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
    title: "E-Commerce API Backend",
    description:
      "Backend API for products, users, carts, and authentication. RESTful, controller-based routing, secure JWT login, and efficient database integration.",
    thumbnail: ecommerceApi,
    images: [ecommerceApi],
    stack: ["FastAPI", "PostgreSQL", "JWT Authentication"],
    slug: "ecommerce-api",
    content: (
      <div>
        <p className="mb-4">
          A production-grade REST API backend designed to handle all core aspects of an e-commerce platform, 
          including catalog management, shopping carts, user accounts, and secure order processing.
        </p>
        <p className="mb-4">
          It features a clean controller-based routing architecture, robust JWT authentication, role-based 
          access control, and high-performance database queries integrated with PostgreSQL.
        </p>
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
];

