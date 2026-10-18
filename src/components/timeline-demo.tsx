import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";

export default function TimelineDemo() {
  const data = [
    {
      title: "Aug 2026 - Present",
      content: (
        <div>
          <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-2">
            Technical Recruiter – The Hafiz Project
          </h3>
          <p className="mb-6 text-xs md:text-sm font-normal text-neutral-800 dark:text-neutral-200">
            Managing end-to-end technical recruitment support, talent acquisition, candidate screening, technical interview coordination, and pipeline tracking using ATS, Google Sheets, and LinkedIn Recruiter.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/img.jpg"
              alt="The Hafiz Project"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Mar 2026 - Present",
      content: (
        <div>
          <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-2">
            Senior Full Stack AI Developer – AIvonTech
          </h3>
          <p className="mb-6 text-xs md:text-sm font-normal text-neutral-800 dark:text-neutral-200">
            Delivering scalable SaaS platforms, intelligent agentic workflows, RAG systems with Pinecone, and production-ready full stack web products.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/img2.jpg"
              alt="AIvonTech"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "May 2024 - Mar 2026",
      content: (
        <div>
          <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-2">
            Web Developer – FISTA SOLUTION
          </h3>
          <p className="mb-6 text-xs md:text-sm font-normal text-neutral-800 dark:text-neutral-200">
            Developed high-performance web applications connecting modern frontends with scalable backend systems. Built responsive interfaces with Tailwind CSS, secure REST APIs with Python & FastAPI, managed PostgreSQL databases, and integrated AI services.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/img3.jpg"
              alt="FISTA SOLUTION"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/profile.jpeg"
              alt="Hussnain Mulazam"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Jan 2024 - Present",
      content: (
        <div>
          <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-2">
            Tech Educator & Developer – Code with Sunny
          </h3>
          <p className="mb-6 text-xs md:text-sm font-normal text-neutral-800 dark:text-neutral-200">
            Mentor developers in Python, FastAPI, Next.js, and LLM integrations through practical, hands-on projects and community education.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/img4.jpg"
              alt="Code with Sunny"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
