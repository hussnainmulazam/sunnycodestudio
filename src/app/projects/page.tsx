import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Projects | Hussnain Mulazam",
  description:
    "Hussnain Mulazam is a Full-Stack Web Developer and AI Engineer. He builds scalable web apps, REST APIs, and AI-agent powered systems.",
};

export default function Projects() {
  return (
    <Container>
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-semibold mb-3">
        Engineered Solutions
      </div>
      <Heading className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-neutral-900">
        What I&apos;ve Been Building
      </Heading>
      <Paragraph className="mt-3 mb-10 text-neutral-600 text-sm md:text-base max-w-2xl leading-relaxed">
        A curated showcase of production SaaS platforms, autonomous AI agent architectures, and full-stack web applications.
      </Paragraph>

      <Products />
    </Container>
  );
}
