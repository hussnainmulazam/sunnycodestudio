import React from "react";
import { Heading } from "./Heading";

import {
  IconApi,
  IconCode,
  IconDatabase,
  IconLink,
  IconRobot,
  IconBrandDocker,
  IconBrandJavascript,
  IconBrandNodejs,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandPython,
  IconBrandGithub,
} from "@tabler/icons-react";

export const TechStack = () => {
  const stack = [
    { label: "Python", icon: IconBrandPython },
    { label: "JavaScript", icon: IconBrandJavascript },
    { label: "TypeScript", icon: IconBrandTypescript },
    { label: "Next.js", icon: IconBrandNextjs },
    { label: "React.js", icon: IconBrandReact },
    { label: "Tailwind CSS", icon: IconBrandTailwind },
    { label: "FastAPI", icon: IconApi },
    { label: "Node.js", icon: IconBrandNodejs },
    { label: "Express.js", icon: IconCode },
    { label: "Django", icon: IconCode },
    { label: "PostgreSQL", icon: IconDatabase },
    { label: "MongoDB", icon: IconDatabase },
    { label: "MySQL", icon: IconDatabase },
    { label: "Pinecone", icon: IconDatabase },
    { label: "OpenAI Agents SDK", icon: IconRobot },
    { label: "LangChain", icon: IconLink },
    { label: "Docker", icon: IconBrandDocker },
    { label: "Git & GitHub", icon: IconBrandGithub },
  ];
  return (
    <div>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        Tech Stack
      </Heading>
      <div className="flex flex-wrap">
        {stack.map(({ label, icon: IconComp }) => (
          <span
            key={label}
            className="mr-3 mb-3 inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-700 shadow-sm"
          >
            <IconComp className="h-3.5 w-3.5 mr-2 text-neutral-500" />
            {label}
          </span>
        ))}
      </div>
    </div>
  );
};
