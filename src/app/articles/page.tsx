import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { getAllBlogs } from "../../../lib/getAllBlogs";
import { Blogs } from "@/components/Blogs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Articles | Hussnain Mulazam",
  description:
    "Hussnain Mulazam is a Full-Stack Web Developer and AI Engineer. He builds scalable web apps, REST APIs, and AI-agent powered systems.",
};

export default async function Blog() {
  const blogs = await getAllBlogs();
  const data = blogs.map(({ component, ...meta }) => meta);

  return (
    <Container>
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-semibold mb-3">
        Articles &amp; Insights
      </div>
      <Heading className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-neutral-900">
        Engineering Insights &amp; Articles
      </Heading>
      <Paragraph className="mt-3 mb-10 text-neutral-600 text-sm md:text-base max-w-2xl leading-relaxed">
        Deep dives into AI agent workflows, Next.js optimization, full-stack architecture, and production engineering.
      </Paragraph>
      <Blogs blogs={data} />
    </Container>
  );
}
