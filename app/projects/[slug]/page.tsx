import { getProjectBySlug, getProjectSlugs } from "@/lib/projects";
import ArticleContent from "@/app/components/ArticleContent";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const slugs = getProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  try {
    const { frontmatter } = await getProjectBySlug(slug);
    return {
      title: frontmatter.title,
      description: frontmatter.description,
    };
  } catch {
    return {};
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let project;
  try {
    project = await getProjectBySlug(slug);
  } catch {
    notFound();
  }

  const { frontmatter, contentHtml } = project;

  return (
    <div className="flex flex-col w-full pt-16">
      <Link
        href={"/"}
        scroll={false}
        className="group/back text-foreground-muted hover:text-foreground text-md flex items-center w-max gap-1.5 mb-8 transition-colors"
      >
        <span className="inline-block transition-transform group-hover/back:-translate-x-1">
          ←
        </span>
        {"back"}
      </Link>
      <header className="flex flex-col gap-2 w-full pb-4">
        <span className="text-foreground-muted text-sm">
          {frontmatter.category}
        </span>
        <h1 className="text-4xl font-[500] leading-[1.1] -tracking-[0.0125em] text-foreground">
          {frontmatter.title}
        </h1>
        <p className="text-foreground-muted text-lg max-w-[600px]">
          {frontmatter.description}
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12 w-full">
        <ArticleContent html={contentHtml} />

        <aside className="flex flex-col gap-6 text-sm">
          {frontmatter.time && (
            <div>
              <h4 className="text-foreground-muted font-medium pb-1">Year</h4>
              <p className="text-foreground">{frontmatter.time}</p>
            </div>
          )}
          {frontmatter.about && (
            <div>
              <h4 className="text-foreground-muted font-medium pb-1">About</h4>
              <p className="text-foreground">{frontmatter.about}</p>
            </div>
          )}

          {frontmatter.timeline && (
            <div>
              <h4 className="text-foreground-muted font-medium pb-1">
                Timeline
              </h4>
              <p className="text-foreground">
                {frontmatter.timeline.join(" - ")}
              </p>
            </div>
          )}
          {frontmatter.links && (
            <div>
              <h4 className="text-foreground-muted font-medium pb-1">Links</h4>
              <ul className="text-foreground">
                {frontmatter.links.map((link) => (
                  <a
                    target="_blank"
                    className="hover:underline"
                    key={link}
                    href={link}
                  >
                    {link} ↗
                  </a>
                ))}
              </ul>
            </div>
          )}
          {frontmatter.contribution && (
            <div>
              <h4 className="text-foreground-muted font-medium pb-1">
                Contribution
              </h4>
              <ul className="text-foreground">
                {frontmatter.contribution.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}
          {frontmatter.skills && (
            <div>
              <h4 className="text-foreground-muted font-medium pb-1">Skills</h4>
              <ul className="text-foreground">
                {frontmatter.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          )}
          {frontmatter.tools && (
            <div>
              <h4 className="text-foreground-muted font-medium pb-1">Tools</h4>
              <ul className="text-foreground">
                {frontmatter.tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
