import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import type { Root, Element } from "hast";
import { visit } from "unist-util-visit";

const VIDEO_EXTENSIONS = /\.(mp4|webm|ogg|mov)(\?|$)/i;

function rehypeVideoFromImg() {
  return (tree: Root) => {
    visit(tree, "element", (node: Element, index, parent) => {
      if (
        node.tagName === "img" &&
        typeof node.properties.src === "string" &&
        VIDEO_EXTENSIONS.test(node.properties.src) &&
        parent &&
        typeof index === "number"
      ) {
        const rawSrc = node.properties.src as string;
        const hasControls = rawSrc.includes("?controls");
        const cleanSrc = rawSrc.replace("?controls", "");

        node.tagName = "video";
        node.properties = {
          src: cleanSrc,
          autoPlay: true,
          loop: true,
          muted: true,
          playsInline: true,
          ...(hasControls && { dataControls: "true" }),
        };
        node.children = [];
      }
    });
  };
}

function rehypeImageCaption() {
  return (tree: Root) => {
    visit(tree, "element", (node: Element, index, parent) => {
      if (
        node.tagName === "img" &&
        typeof node.properties.alt === "string" &&
        node.properties.alt.length > 0 &&
        parent &&
        typeof index === "number"
      ) {
        const figure: Element = {
          type: "element",
          tagName: "figure",
          properties: {},
          children: [
            { ...node },
            {
              type: "element",
              tagName: "figcaption",
              properties: {},
              children: [{ type: "text", value: node.properties.alt as string }],
            },
          ],
        };
        parent.children[index] = figure;
      }
    });
  };
}

const projectsDirectory = path.join(process.cwd(), "content/projects");

export interface ProjectFrontmatter {
  title: string;
  date: string;
  description: string;
  category: string;
  featuredImage: string;
  accent: string;
  time: string[];
  contribution: string[];
  tools: string[];
  skills?: string[];
  links?: string[];
  about: string;
  outcome: string;
  listed?: boolean;
  fun?: boolean;
}

export interface Project {
  slug: string;
  frontmatter: ProjectFrontmatter;
  contentHtml: string;
}

export function getProjectSlugs(): string[] {
  const files = fs.readdirSync(projectsDirectory);
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export async function getProjectBySlug(slug: string): Promise<Project> {
  const filePath = path.join(projectsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(fileContents);

  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeImageCaption)
    .use(rehypeVideoFromImg)
    .use(rehypeStringify)
    .process(content);

  return {
    slug,
    frontmatter: data as ProjectFrontmatter,
    contentHtml: result.toString(),
  };
}

export function getAllProjects(): (ProjectFrontmatter & { slug: string })[] {
  const slugs = getProjectSlugs();
  return slugs
    .map((slug) => {
      const filePath = path.join(projectsDirectory, `${slug}.md`);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);
      return { slug, ...(data as ProjectFrontmatter) };
    })
    .filter((project) => project.listed !== false);
}
