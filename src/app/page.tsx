import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hello there! I&apos;m Hussnain Mulazam</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a <Highlight>Full Stack Developer | Agentic AI Developer | Python Developer</Highlight> who loves building AI-powered systems and scalable web applications.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        I have <Highlight>2+ years of experience</Highlight> building production-grade full stack applications, deploying scalable REST APIs, integrating RAG pipelines, and designing autonomous AI agents.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m also the founder of <Highlight>AIvonTech</Highlight>, an AI startup delivering full stack web apps and smart automation systems that reduce manual work.
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}
