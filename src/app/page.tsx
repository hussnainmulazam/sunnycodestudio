import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import TimelineDemo from "@/components/timeline-demo";

export default function Home() {
  return (
    <Container>
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-semibold mb-3">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        Available for Full-Stack &amp; AI Engineering
      </div>

      <Heading className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-neutral-900">
        Hello there! I&apos;m Hussnain Mulazam
      </Heading>

      <div className="mt-5 space-y-4 max-w-3xl">
        <Paragraph className="text-base text-neutral-700 font-medium">
          I&apos;m a{" "}
          <Highlight>
            Senior Full Stack AI Developer | React · Next.js · TypeScript · Node.js · Python · AI/LLM · SaaS
          </Highlight>
        </Paragraph>

        <Paragraph className="leading-relaxed">
          With <Highlight>4+ years of experience</Highlight>, I build scalable SaaS
          platforms, AI-powered applications, and production-ready web products
          for startups, businesses, and product teams. I take complete ownership of
          the entire development lifecycle — from architecture and modern UI to
          backend APIs, databases, AI integrations, cloud deployments, CI/CD
          pipelines, and ongoing optimization.
        </Paragraph>

        <Paragraph className="leading-relaxed">
          Senior Full Stack AI Developer at <Highlight>AIvonTech</Highlight> and technical recruiter at{" "}
          <Highlight>The Hafiz Project</Highlight>. Highly experienced in
          LangChain, OpenAI Agents SDK, RAG pipelines, Pinecone vector search,
          FastAPI, Next.js, and containerized Docker deployments.
        </Paragraph>
      </div>

      {/* Second Section: My Professional Journey */}
      <div className="mt-16 mb-20">
        <TimelineDemo />
      </div>

      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 text-neutral-700 text-xs font-semibold uppercase tracking-wider mb-2">
          Portfolio
        </div>
        <Heading
          as="h2"
          className="text-2xl sm:text-3xl font-black tracking-tight text-neutral-900"
        >
          Featured Projects
        </Heading>
        <Paragraph className="text-sm mt-1 max-w-xl">
          Production web apps, intelligent agentic workflows, and SaaS architectures built with modern tech stacks.
        </Paragraph>
      </div>
      <Products />
      <TechStack />
    </Container>
  );
}
