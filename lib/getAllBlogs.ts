import glob from "fast-glob";
import * as path from "path";
import fs from "fs";

function extractMetaFromFile(filePath: string) {
  try {
    const raw = fs.readFileSync(filePath, "utf-8");
    const metaMatch = raw.match(/export\s+const\s+meta\s*=\s*(\{[\s\S]*?\n\};)/);
    if (metaMatch) {
      const fn = new Function(`return ${metaMatch[1].replace(/;\s*$/, "")}`);
      return fn();
    }
  } catch (e) {
    console.error("Failed to parse meta from", filePath, e);
  }
  return {};
}

async function importBlog(blogFileName: string) {
  const fullPath = path.join(process.cwd(), "src/app/articles", blogFileName);
  let meta: any = {};
  let component: any = null;

  try {
    const mod = await import(`src/app/articles/${blogFileName}`);
    meta = mod.meta || {};
    component = mod.default || null;
  } catch (err) {
    meta = extractMetaFromFile(fullPath);
  }

  // If meta is empty, fallback to file extraction
  if (!meta || !meta.title) {
    meta = extractMetaFromFile(fullPath);
  }

  return {
    slug: blogFileName.replace(/(\/content)?\.mdx$/, ""),
    ...meta,
    component,
  };
}

export async function getAllBlogs() {
  let blogFileNames = await glob(["*.mdx", "*/content.mdx"], {
    cwd: path.join(process.cwd(), "src/app/articles"),
  });

  let blogs = await Promise.all(
    blogFileNames.map((fileName) => importBlog(fileName))
  );

  return blogs.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });
}

