import fs from "fs";
import path from "path";

export interface Essay {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  category: "Book Highlights" | "Finance" | "Strategy" | "Culture";
  summary: string;
  content: string;
  originalBookLink?: string;
}

const essaysDirectory = path.join(process.cwd(), "content", "essays");

/**
 * Clean zero-dependency YAML frontmatter parser
 */
function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/;
  const match = frontmatterRegex.exec(fileContent);

  if (!match) {
    return { data: {} as Record<string, string>, content: fileContent };
  }

  const frontmatterBlock = match[1];
  const content = match[2];
  const data: Record<string, string> = {};

  frontmatterBlock.split("\n").forEach((line) => {
    const colonIdx = line.indexOf(":");
    if (colonIdx !== -1) {
      const key = line.slice(0, colonIdx).trim();
      const value = line.slice(colonIdx + 1).trim();
      data[key] = value;
    }
  });

  return { data, content };
}

/**
 * Returns all essays loaded directly from the /content/essays/*.md directory
 */
export function getAllEssays(): Essay[] {
  if (!fs.existsSync(essaysDirectory)) {
    return [];
  }

  const filenames = fs.readdirSync(essaysDirectory);
  const essays = filenames
    .filter((file) => file.endsWith(".md"))
    .map((filename) => {
      const filePath = path.join(essaysDirectory, filename);
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { data, content } = parseFrontmatter(fileContent);

      return {
        id: data.id || filename.replace(/\.md$/, ""),
        slug: data.slug || filename.replace(/\.md$/, ""),
        title: data.title || "Untitled Essay",
        subtitle: data.subtitle || "",
        date: data.date || "",
        readTime: data.readTime || "",
        category: (data.category as any) || "Book Highlights",
        summary: data.summary || "",
        originalBookLink: data.originalBookLink || undefined,
        content: content.trim(),
      } as Essay;
    });

  return essays;
}

/**
 * Fetch a single essay by slug
 */
export function getEssayBySlug(slug: string): Essay | undefined {
  return getAllEssays().find((essay) => essay.slug === slug);
}
