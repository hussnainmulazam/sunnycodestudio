import Head from "next/head";
import Image from "next/image";
import { formatDate } from "../../lib/formatDate";
import { Prose } from "@/components/Prose";
import { Container } from "./Container";
import { Heading } from "./Heading";
import Link from "next/link";
import { Paragraph } from "./Paragraph";

function ArrowLeftIcon(props: any) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BlogLayout({
  children,
  meta,
  isRssFeed = false,
  previousPathname,
}: any) {
  return (
    <Container>
      <article className="max-w-3xl">
        <header className="flex flex-col">
          <Link
            href="/articles"
            className="group inline-flex items-center gap-2 mb-6 text-xs font-semibold text-neutral-600 hover:text-blue-600 transition-colors w-fit px-3 py-1.5 rounded-full border border-neutral-200 bg-white hover:border-neutral-300 shadow-2xs"
          >
            <ArrowLeftIcon className="h-3.5 w-3.5 stroke-neutral-500 group-hover:stroke-blue-600 transition-colors" />
            <span>Back to articles</span>
          </Link>

          <div className="flex flex-wrap items-center gap-2 mb-3">
            {meta.tags?.map((tag: string) => (
              <span
                key={tag}
                className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-200/60"
              >
                {tag}
              </span>
            ))}
            <time
              dateTime={meta.date}
              className="text-xs font-medium text-neutral-500 ml-auto"
            >
              {formatDate(meta.date)}
            </time>
          </div>

          <Heading className="text-2xl sm:text-3xl lg:text-4xl font-black text-neutral-900 tracking-tight py-2 leading-tight">
            {meta.title}
          </Heading>

          {meta.description && (
            <Paragraph className="text-neutral-600 text-base md:text-lg mt-2 mb-6 leading-relaxed">
              {meta.description}
            </Paragraph>
          )}

          <div className="w-full mt-2 rounded-2xl overflow-hidden border border-neutral-200/80 shadow-sm relative">
            <Image
              src={meta.image}
              alt={meta.title}
              height="800"
              width="1200"
              priority
              className="object-cover w-full max-h-[420px]"
            />
          </div>
        </header>
        <Prose className="mt-8 font-body text-neutral-700">{children}</Prose>
      </article>
    </Container>
  );
}
