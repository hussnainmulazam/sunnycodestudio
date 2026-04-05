import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";

export default function TimelineDemo() {
  const data = [
    {
      title: "Aug 2025 - Present",
      content: (
        <div>
          <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-2">
            Computer Lecturer - Chenab Group of College
          </h3>
          <p className="mb-6 text-xs md:text-sm font-normal text-neutral-800 dark:text-neutral-200">
            Instructed students and professionals on Python & C language fundamentals.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/img.jpg"
              alt="Chenab Group of College"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Jun 2025 - Aug 2025",
      content: (
        <div>
          <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-2">
            Agentic AI Developer Intern – FISTA SOLUTION
          </h3>
          <p className="mb-6 text-xs md:text-sm font-normal text-neutral-800 dark:text-neutral-200">
            Worked as an Agentic AI Developer intern, contributing to the design and development of autonomous AI agent systems and intelligent automation workflows.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/img2.jpg"
              alt="FISTA SOLUTION"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
             <Image
              src="/profile.jpeg"
              alt="Internship"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Mar 2024 - Mar 2025",
      content: (
        <div>
          <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-2">
            Python Instructor - Corvit System Faisalabad
          </h3>
          <p className="mb-6 text-xs md:text-sm font-normal text-neutral-800 dark:text-neutral-200">
            Instructed students and professionals on Python fundamentals, including Object-Oriented Programming (OOP) and automation.
          </p>
          <div className="grid grid-cols-2 gap-4">
             <Image
              src="/img3.jpg"
              alt="Corvit System"
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
            Mentor developers in Python, FastAPI, and full-stack web development through practical, hands-on projects.
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
