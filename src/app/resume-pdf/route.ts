import { PDFDocument, StandardFonts } from "pdf-lib";
import { resumeData } from "@/data/resume";

type PdfFontLike = {
  widthOfTextAtSize: (text: string, size: number) => number;
};

function wrapTextByWidth(
  text: string,
  maxWidth: number,
  font: PdfFontLike,
  fontSize: number
) {
  const words = text.replace(/\s+/g, " ").trim().split(" ").filter(Boolean);
  const lines: string[] = [];
  let line = "";
  for (const w of words) {
    const next = line ? `${line} ${w}` : w;
    if (font.widthOfTextAtSize(next, fontSize) > maxWidth) {
      if (line) lines.push(line);
      line = w;
    } else {
      line = next;
    }
  }
  if (line) lines.push(line);
  return lines;
}

export async function GET() {
  const pdf = await PDFDocument.create();
  const font = await pdf.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdf.embedFont(StandardFonts.HelveticaBold);

  // A4 portrait (points)
  const PAGE_W = 595.28;
  const PAGE_H = 841.89;

  const marginX = 54;
  const marginY = 54;
  const bodySize = 10.5;
  const leading = 16.5; // generous to avoid overlap
  const sectionGap = 10;
  const paragraphGap = 6;

  let page = pdf.addPage([PAGE_W, PAGE_H]);
  let { width, height } = page.getSize();
  let y = height - marginY;

  const maxWidth = width - marginX * 2;

  const ensureSpace = (need = leading) => {
    if (y < marginY + need) {
      page = pdf.addPage([PAGE_W, PAGE_H]);
      ({ width, height } = page.getSize());
      y = height - marginY;
    }
  };

  const addLine = (
    text: string,
    opts?: { bold?: boolean; size?: number; indent?: number }
  ) => {
    const size = opts?.size ?? bodySize;
    const usedFont = opts?.bold ? fontBold : font;
    const indent = opts?.indent ?? 0;
    ensureSpace(leading);
    page.drawText(text, { x: marginX + indent, y, size, font: usedFont });
    y -= leading;
  };

  const addWrapped = (
    text: string,
    opts?: { bold?: boolean; size?: number; indent?: number }
  ) => {
    const size = opts?.size ?? bodySize;
    const usedFont = opts?.bold ? fontBold : font;
    const indent = opts?.indent ?? 0;
    for (const line of wrapTextByWidth(text, maxWidth - indent, usedFont, size)) {
      addLine(line, { ...opts, indent });
    }
  };

  const addSectionTitle = (t: string) => {
    y -= sectionGap;
    addLine(t.toUpperCase(), { bold: true, size: 11.5 });
  };

  // Header
  addLine(resumeData.name, { bold: true, size: 18 });
  addLine(resumeData.title, { size: 12 });
  addLine(
    `Email: ${resumeData.contact.email}   Phone: ${resumeData.contact.phone}`,
    { size: 11 }
  );
  addWrapped(`GitHub: ${resumeData.contact.github}`, { size: 11 });
  addWrapped(`LinkedIn: ${resumeData.contact.linkedin}`, { size: 11 });

  // Summary
  addSectionTitle("Summary");
  addWrapped(resumeData.summary);
  y -= paragraphGap;

  // Skills
  addSectionTitle("Skills");
  addWrapped(`Frontend: ${resumeData.skills.frontend.join(", ")}`);
  addWrapped(`Backend: ${resumeData.skills.backend.join(", ")}`);
  addWrapped(`AI & Tools: ${resumeData.skills.ai.join(", ")}`);
  addWrapped(`Other Tools: ${resumeData.skills.tools.join(", ")}`);
  y -= paragraphGap;

  // Experience
  addSectionTitle("Work Experience");
  for (const e of resumeData.experience) {
    addWrapped(`${e.role} — ${e.company}`, { bold: true });
    addLine(e.duration, { size: 10 });
    addWrapped(e.description);
    y -= paragraphGap;
  }

  // Projects
  addSectionTitle("Projects");
  for (const p of resumeData.projects) {
    addWrapped(p.name, { bold: true });
    addWrapped(`Stack: ${p.stack}`);
    addWrapped(p.description);
    y -= paragraphGap;
  }

  // Education
  addSectionTitle("Education");
  for (const ed of resumeData.education) {
    addWrapped(`${ed.program} — ${ed.school}`, { bold: true });
    addLine(ed.date, { size: 10 });
    y -= paragraphGap;
  }

  // Certifications
  addSectionTitle("Certifications");
  for (const c of resumeData.certifications) {
    addWrapped(`${c.name} — ${c.issuer} — ${c.completionDate}`);
  }
  y -= paragraphGap;

  // Goals & Languages
  addSectionTitle("Goals & Interests");
  for (const g of resumeData.goalsAndInterests) addWrapped(`- ${g}`, { indent: 10 });

  addSectionTitle("Languages");
  for (const lang of resumeData.languages) addLine(`- ${lang}`, { indent: 10 });

  const bytes = await pdf.save();
  return new Response(bytes, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="hussnain-mulazam-resume.pdf"',
      "Cache-Control": "no-store",
    },
  });
}

