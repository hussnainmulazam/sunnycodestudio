import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import React from "react";
import { Metadata } from "next";
import About from "@/components/About";
import TimelineDemo from "@/components/timeline-demo";

export const metadata: Metadata = {
  title: "About | Hussnain Mulazam",
  description:
    "Hussnain Mulazam is a Full-Stack Web Developer and AI & Agents Developer. He builds scalable web apps, REST APIs, and AI-agent powered systems, and mentors developers through Code with Sunny.",
};

export default function AboutPage() {
  return (
    <Container>
      <span className="text-4xl">💬</span>
      <Heading className="font-black">About Me</Heading>
      <About />
      <div className="mt-10">
        <TimelineDemo />
      </div>
    </Container>
  );
}
