"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";

import { motion } from "framer-motion";

export default function About() {
  const images = [
    "/img.jpg",
    "/img2.jpg",
    "/img3.jpg",
    "/img4.jpg",
  ];
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt="about"
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}
        {/* 
        // <Image
        //   src="https://images.unsplash.com/photo-1692544350322-ac70cfd63614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
        // />
        // <Image
        //   src="https://images.unsplash.com/photo-1692374227159-2d3592f274c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform -rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        // />
        // <Image
        //   src="https://images.unsplash.com/photo-1692005561659-cdba32d1e4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        // />
        // <Image
        //   src="https://images.unsplash.com/photo-1692445381633-7999ebc03730?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform -rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        // /> */}
      </div>

      <div className="max-w-4xl space-y-4">
        <Paragraph className="mt-4">
          Hey there, I&apos;m <strong>Hussnain Mulazam</strong> — a Senior Full Stack AI Developer based in Lahore, Pakistan with <strong>4+ years of experience</strong> building scalable SaaS platforms, AI-powered applications, and production-ready web products for startups, businesses, and product teams.
        </Paragraph>
        <Paragraph>
          I can take ownership of the complete development lifecycle: from architecture and modern UI to backend APIs, databases, AI integrations, third-party services, cloud deployment, CI/CD pipelines, and ongoing optimization.
        </Paragraph>

        <div className="my-8 p-6 sm:p-7 rounded-2xl border border-neutral-200 bg-white shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-blue-600 text-lg">⚡</span>
            <h3 className="font-heading font-bold text-lg text-neutral-900">
              Core Capabilities &amp; Specializations
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-neutral-100 bg-neutral-50/70">
              <p className="font-bold text-sm text-neutral-900 mb-1">AI &amp; LLM Applications</p>
              <p className="text-xs text-neutral-600 leading-relaxed">
                OpenAI Agents SDK · LangChain · Gemini API · RAG Pipelines · Vector Search · Pinecone · Multi-Agent Workflows · Prompt Engineering · Tool Calling
              </p>
            </div>
            <div className="p-4 rounded-xl border border-neutral-100 bg-neutral-50/70">
              <p className="font-bold text-sm text-neutral-900 mb-1">SaaS &amp; Web Applications</p>
              <p className="text-xs text-neutral-600 leading-relaxed">
                B2B/B2C Multi-Tenant Architecture · Interactive Dashboards · Role-Based Access (RBAC) · JWT Authentication · Stripe Billing · Admin Portals
              </p>
            </div>
            <div className="p-4 rounded-xl border border-neutral-100 bg-neutral-50/70">
              <p className="font-bold text-sm text-neutral-900 mb-1">Full-Stack &amp; Backend Engineering</p>
              <p className="text-xs text-neutral-600 leading-relaxed">
                React · Next.js · TypeScript · Tailwind CSS · Python · FastAPI · Django · Node.js · Express · REST APIs · PostgreSQL · MongoDB
              </p>
            </div>
            <div className="p-4 rounded-xl border border-neutral-100 bg-neutral-50/70">
              <p className="font-bold text-sm text-neutral-900 mb-1">Cloud, DevOps &amp; Delivery</p>
              <p className="text-xs text-neutral-600 leading-relaxed">
                AWS (S3, EC2, RDS, CloudFront) · Docker Containers · Vercel · CI/CD with GitHub Actions · Codebase Takeovers &amp; Performance Tuning
              </p>
            </div>
          </div>
        </div>

        <Paragraph>
          Beyond building, I serve as a <strong>Technical Recruiter at The Hafiz Project</strong> managing end-to-end talent sourcing, technical interview coordination, and hiring pipelines. I develop scalable AI systems at <strong>AIvonTech</strong>, and I mentor developers in Python, FastAPI, and AI integration through <strong>Code with Sunny</strong>.
        </Paragraph>

        <Paragraph>
          Whether you need an intelligent agentic workflow, a high-performance web platform, SaaS architecture, or a codebase takeover with performance optimization, I&apos;m always excited to collaborate and build impactful software.
        </Paragraph>
      </div>
    </div>
  );
}
