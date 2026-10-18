import React from "react";
import { Heading } from "./Heading";

import {
  IconApi,
  IconCode,
  IconDatabase,
  IconLink,
  IconBrandDocker,
  IconBrandJavascript,
  IconBrandNodejs,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandPython,
  IconBrandGithub,
  IconBrandOpenai,
  IconBrandAws,
  IconBrandVercel,
  IconBrandStripe,
} from "@tabler/icons-react";

export const TechStack = () => {
  const stack = [
    { label: "React", icon: IconBrandReact },
    { label: "Next.js", icon: IconBrandNextjs },
    { label: "TypeScript", icon: IconBrandTypescript },
    { label: "JavaScript", icon: IconBrandJavascript },
    { label: "Tailwind CSS", icon: IconBrandTailwind },
    { label: "Python", icon: IconBrandPython },
    { label: "FastAPI", icon: IconApi },
    { label: "Django", icon: IconCode },
    { label: "Node.js", icon: IconBrandNodejs },
    { label: "Express.js", icon: IconCode },
    { label: "OpenAI Agents & LLMs", icon: IconBrandOpenai },
    { label: "LangChain", icon: IconLink },
    { label: "PostgreSQL", icon: IconDatabase },
    { label: "MongoDB", icon: IconDatabase },
    { label: "Pinecone", icon: IconDatabase },
    { label: "AWS (S3/EC2/RDS)", icon: IconBrandAws },
    { label: "Docker", icon: IconBrandDocker },
    { label: "Vercel", icon: IconBrandVercel },
    { label: "Stripe", icon: IconBrandStripe },
    { label: "Git & GitHub", icon: IconBrandGithub },
  ];
  return (
    <div>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        Core Tech Stack
      </Heading>
      <div className="flex flex-wrap">
        {stack.map(({ label, icon: IconComp }) => (
          <span
            key={label}
            className="mr-3 mb-3 inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs text-neutral-700 shadow-sm transition hover:border-neutral-300 hover:shadow"
          >
            <IconComp className="h-3.5 w-3.5 mr-2 text-neutral-500" />
            {label}
          </span>
        ))}
      </div>
    </div>
  );
};
