import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { resumeData } from "@/data/resume";
import { IconCheck, IconExternalLink } from "@tabler/icons-react";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <Heading as="h2" className="text-2xl lg:text-3xl font-black">
        {title}
      </Heading>
      <div className="mt-4">{children}</div>
    </section>
  );
}

export default function ResumePage() {
  return (
    <Container>
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-semibold mb-3">
        Curriculum Vitae
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-200">
        <div>
          <Heading className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-neutral-900">
            Professional Resume
          </Heading>
          <p className="text-xs text-neutral-500 mt-1">
            Lahore, Pakistan · Verified Full Stack AI Developer
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <a
            href="/resume-pdf"
            className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-neutral-900 text-white text-xs font-semibold hover:bg-neutral-800 transition-colors shadow-2xs"
          >
            Download PDF
          </a>
          <a
            href="/resume-pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-neutral-200 bg-white text-neutral-800 text-xs font-semibold hover:bg-neutral-50 transition-colors shadow-2xs"
          >
            View PDF
          </a>
        </div>
      </div>

      <div className="mt-8 space-y-3">
        <h2 className="font-heading font-black text-2xl md:text-3xl text-neutral-900">
          {resumeData.name}
        </h2>
        <p className="text-sm md:text-base font-semibold text-blue-600">
          {resumeData.headline}
        </p>
        <Paragraph className="max-w-2xl text-xs text-neutral-500">
          ATS text version:{" "}
          <a
            className="underline text-blue-600 hover:text-blue-800 font-medium"
            href="/hussnain-mulazam-resume.txt"
            target="_blank"
            rel="noreferrer"
          >
            view plain text
          </a>
        </Paragraph>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-neutral-600 pt-1">
          <a
            className="underline hover:text-neutral-900"
            href={`mailto:${resumeData.contact.email}`}
          >
            {resumeData.contact.email}
          </a>
          <span>•</span>
          <a
            className="underline hover:text-neutral-900"
            href={`tel:${resumeData.contact.phone.replace(/\s+/g, "")}`}
          >
            {resumeData.contact.phone}
          </a>
          <span>•</span>
          <a
            className="underline hover:text-neutral-900"
            href={resumeData.contact.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <span>•</span>
          <a
            className="underline hover:text-neutral-900"
            href={resumeData.contact.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <span>•</span>
          <a
            className="underline hover:text-neutral-900"
            href={resumeData.contact.upwork}
            target="_blank"
            rel="noreferrer"
          >
            Upwork
          </a>
        </div>
      </div>

      <Section title="Summary">
        <Paragraph className="max-w-3xl leading-relaxed">
          {resumeData.summary}
        </Paragraph>
      </Section>

      <Section title="How I Work">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-neutral-700">
          {resumeData.workPrinciples.map((item) => (
            <div key={item} className="flex items-start gap-2">
              <IconCheck className="h-4 w-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Skills &amp; Technologies">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-neutral-200 bg-white p-5">
            <Heading as="h3" className="text-base font-bold text-neutral-900">
              Frontend Development
            </Heading>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {resumeData.skills.frontend.map((s) => (
                <span
                  key={s}
                  className="px-2.5 py-1 rounded-md bg-neutral-100 text-xs font-medium text-neutral-800"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-neutral-200 bg-white p-5">
            <Heading as="h3" className="text-base font-bold text-neutral-900">
              Backend &amp; APIs
            </Heading>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {resumeData.skills.backend.map((s) => (
                <span
                  key={s}
                  className="px-2.5 py-1 rounded-md bg-neutral-100 text-xs font-medium text-neutral-800"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-neutral-200 bg-white p-5">
            <Heading as="h3" className="text-base font-bold text-neutral-900">
              AI &amp; LLM Applications
            </Heading>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {resumeData.skills.ai.map((s) => (
                <span
                  key={s}
                  className="px-2.5 py-1 rounded-md bg-neutral-100 text-xs font-medium text-neutral-800"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-neutral-200 bg-white p-5">
            <Heading as="h3" className="text-base font-bold text-neutral-900">
              Cloud, DevOps &amp; Tools
            </Heading>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {resumeData.skills.tools.map((s) => (
                <span
                  key={s}
                  className="px-2.5 py-1 rounded-md bg-neutral-100 text-xs font-medium text-neutral-800"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section title="Work Experience">
        <div className="space-y-6">
          {resumeData.experience.map((e) => (
            <div
              key={`${e.role}-${e.company}`}
              className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <Heading as="h3" className="text-lg lg:text-xl font-bold">
                  {e.role} – <span className="text-emerald-600">{e.company}</span>
                </Heading>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-700">
                  {e.duration}
                </span>
              </div>
              <Paragraph className="mt-3 max-w-3xl text-sm leading-relaxed text-neutral-700">
                {e.description}
              </Paragraph>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Featured Projects">
        <div className="space-y-5">
          {resumeData.projects.map((p) => (
            <div
              key={p.name}
              className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm"
            >
              <Heading as="h3" className="text-base lg:text-lg font-bold text-neutral-900">
                {p.name}
              </Heading>
              <Paragraph className="mt-1 text-xs">
                <Highlight>Stack</Highlight>: {p.stack}
              </Paragraph>
              <Paragraph className="mt-2.5 max-w-3xl text-sm leading-relaxed text-neutral-700">
                {p.description}
              </Paragraph>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Education">
        <div className="space-y-4">
          {resumeData.education.map((ed) => (
            <div
              key={`${ed.program}-${ed.school}`}
              className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm"
            >
              <Heading as="h3" className="text-base lg:text-lg font-bold text-neutral-900">
                {ed.program}
              </Heading>
              <Paragraph className="mt-1 text-sm text-neutral-700">{ed.school}</Paragraph>
              <Paragraph className="mt-1 text-xs font-medium text-neutral-500">{ed.date}</Paragraph>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Certifications &amp; Credentials">
        <div className="space-y-4">
          {resumeData.certifications.map((c) => (
            <div
              key={`${c.name}-${c.issuer}`}
              className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <Heading as="h3" className="text-base lg:text-lg font-bold text-neutral-900">
                  {c.name}
                </Heading>
                {c.completionDate && (
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-neutral-100 text-neutral-600">
                    {c.completionDate}
                  </span>
                )}
              </div>
              <p className="mt-1 text-xs font-medium text-neutral-500">
                Provider: {c.issuer}
              </p>
              {c.description && (
                <Paragraph className="mt-2 max-w-3xl text-xs md:text-sm text-neutral-700">
                  {c.description}
                </Paragraph>
              )}
              {c.link && (
                <a
                  href={c.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-sky-600 hover:text-sky-800"
                >
                  Verify Certificate
                  <IconExternalLink className="h-3 w-3" />
                </a>
              )}
            </div>
          ))}
        </div>
      </Section>

      <Section title="Languages">
        <div className="flex flex-wrap gap-3">
          {resumeData.languages.map((l) => (
            <span
              key={l}
              className="px-3.5 py-1.5 rounded-lg border border-neutral-200 bg-white text-sm font-medium text-neutral-800 shadow-sm"
            >
              {l}
            </span>
          ))}
        </div>
      </Section>

      <Section title="Goals &amp; Professional Focus">
        <ul className="space-y-2 text-sm text-neutral-700">
          {resumeData.goalsAndInterests.map((g) => (
            <li key={g} className="flex items-start gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-neutral-400 mt-2 flex-shrink-0" />
              <span>{g}</span>
            </li>
          ))}
        </ul>
      </Section>
    </Container>
  );
}
