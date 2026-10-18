import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import React from "react";
import { Metadata } from "next";
import About from "@/components/About";
import TimelineDemo from "@/components/timeline-demo";

export const metadata: Metadata = {
  title: "About | Hussnain Mulazam",
  description:
    "Hussnain Mulazam is a Senior Full Stack AI Developer with 4+ years of experience building scalable SaaS platforms, AI agents, RAG pipelines, and full-stack web products.",
};

import { Paragraph } from "@/components/Paragraph";

export default function AboutPage() {
  return (
    <Container>
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-semibold mb-3">
        Background &amp; Experience
      </div>
      <Heading className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-neutral-900">
        About Me
      </Heading>
      <Paragraph className="mt-3 text-neutral-600 text-sm md:text-base max-w-2xl leading-relaxed">
        Senior Full Stack AI Developer specializing in scalable SaaS architectures, autonomous AI agents, and production-ready web engineering.
      </Paragraph>

      <div className="mt-12 mb-16">
        <TimelineDemo />
      </div>
      <About />
    </Container>
  );
}
