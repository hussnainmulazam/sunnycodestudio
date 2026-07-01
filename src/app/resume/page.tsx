import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { resumeData } from "@/data/resume";

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
      <span className="text-4xl">💼</span>
      <div className="flex items-start justify-between gap-4">
        <Heading className="font-black">Resume</Heading>
        <div className="flex flex-wrap justify-end gap-2">
          <a
            href="/resume-pdf"
            className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-neutral-900 text-white text-sm font-semibold hover:bg-neutral-800 transition-colors"
          >
            Download PDF
          </a>
          <a
            href="/resume-pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-neutral-100 text-neutral-800 text-sm font-semibold hover:bg-neutral-200 transition-colors"
          >
            View PDF
          </a>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        <p className="text-xl md:text-2xl font-semibold text-primary">
          {resumeData.name}
        </p>
        <Paragraph className="max-w-2xl">
          {resumeData.title}
        </Paragraph>
        <Paragraph className="max-w-2xl text-xs">
          ATS text version:{" "}
          <a
            className="underline"
            href="/hussnain-mulazam-resume.txt"
            target="_blank"
            rel="noreferrer"
          >
            view
          </a>
        </Paragraph>
        <Paragraph className="max-w-2xl">
          <a className="underline" href={`mailto:${resumeData.contact.email}`}>
            {resumeData.contact.email}
          </a>{" "}
          |{" "}
          <a className="underline" href={`tel:${resumeData.contact.phone.replace(/\s+/g, '')}`}>
            {resumeData.contact.phone}
          </a>
        </Paragraph>
        <Paragraph className="max-w-2xl">
          <a
            className="underline"
            href={resumeData.contact.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          |{" "}
          <a
            className="underline"
            href={resumeData.contact.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </Paragraph>
      </div>

      <Section title="Summary">
        <Paragraph className="max-w-3xl">
          {resumeData.summary}
        </Paragraph>
      </Section>

      <Section title="Skills & Technologies">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Heading as="h3" className="text-lg lg:text-xl font-black">
              Frontend
            </Heading>
            <ul className="mt-3 list-disc pl-5 text-sm text-secondary space-y-1">
              {resumeData.skills.frontend.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <Heading as="h3" className="text-lg lg:text-xl font-black">
              Backend
            </Heading>
            <ul className="mt-3 list-disc pl-5 text-sm text-secondary space-y-1">
              {resumeData.skills.backend.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <Heading as="h3" className="text-lg lg:text-xl font-black">
              AI & Tools
            </Heading>
            <ul className="mt-3 list-disc pl-5 text-sm text-secondary space-y-1">
              {resumeData.skills.ai.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <Heading as="h3" className="text-lg lg:text-xl font-black">
              Other Tools
            </Heading>
            <ul className="mt-3 list-disc pl-5 text-sm text-secondary space-y-1">
              {resumeData.skills.tools.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Work Experience">
        <div className="space-y-6">
          {resumeData.experience.map((e) => (
            <div
              key={`${e.role}-${e.company}`}
              className="rounded-xl border border-neutral-200 bg-white p-5"
            >
              <Heading as="h3" className="text-lg lg:text-xl font-black">
                {e.role} – {e.company}
              </Heading>
              <Paragraph className="mt-1">
                Duration: {e.duration}
              </Paragraph>
              <Paragraph className="mt-3 max-w-3xl">{e.description}</Paragraph>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Projects">
        <div className="space-y-5">
          {resumeData.projects.map((p) => (
            <div
              key={p.name}
              className="rounded-xl border border-neutral-200 bg-white p-5"
            >
              <Heading as="h3" className="text-lg lg:text-xl font-black">
                {p.name}
              </Heading>
              <Paragraph className="mt-1">
                <Highlight>Stack</Highlight>: {p.stack}
              </Paragraph>
              <Paragraph className="mt-3 max-w-3xl">{p.description}</Paragraph>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Education">
        <div className="space-y-4">
          {resumeData.education.map((ed) => (
            <div
              key={`${ed.program}-${ed.school}`}
              className="rounded-xl border border-neutral-200 bg-white p-5"
            >
              <Heading as="h3" className="text-lg lg:text-xl font-black">
                {ed.program}
              </Heading>
              <Paragraph className="mt-1">{ed.school}</Paragraph>
              <Paragraph className="mt-1">{ed.date}</Paragraph>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Certifications & Professional Development">
        <div className="space-y-4">
          {resumeData.certifications.map((c) => (
            <div
              key={`${c.name}-${c.issuer}`}
              className="rounded-xl border border-neutral-200 bg-white p-5"
            >
              <Heading as="h3" className="text-lg lg:text-xl font-black">
                {c.name}
              </Heading>
              <Paragraph className="mt-1">
                {c.issuer}
                {c.completionDate ? ` • ${c.completionDate}` : ""}
              </Paragraph>
              {c.description && (
                <Paragraph className="mt-3 max-w-3xl">{c.description}</Paragraph>
              )}
            </div>
          ))}
        </div>
      </Section>

      <Section title="Goals & Interests">
        <ul className="space-y-2 text-sm lg:text-base text-secondary">
          {resumeData.goalsAndInterests.map((g) => (
            <li key={g}>- {g}</li>
          ))}
        </ul>
      </Section>

      <Section title="Languages">
        <ul className="space-y-2 text-sm lg:text-base text-secondary">
          {resumeData.languages.map((l) => (
            <li key={l}>- {l}</li>
          ))}
        </ul>
      </Section>
    </Container>
  );
}
