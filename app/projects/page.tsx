import { getAllProjects } from "@/lib/projects";
import ProjectCard from "@/app/components/ProjectCard";

export const metadata = {
  title: "Projects",
  description: "A collection of projects",
};

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  const sorted = projects.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const mainProjects = sorted.filter((p) => !p.fun);
  const funProjects = sorted.filter((p) => p.fun);

  return (
    <div className="flex items-center justify-center font-sans">
      <main className="flex w-full max-w-[1380px] flex-col items-center pt-24 pb-16 px-8 sm:items-start">
        <h1 className="text-4xl font-[500] leading-[1.1] -tracking-[0.0125em] text-foreground pb-8">
          Projects
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          {mainProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              imgUrl={project.featuredImage}
              title={project.title}
              description={project.description}
              link={`/projects/${project.slug}`}
              bgColor={project.accent}
              blurDataURL={project.blurDataURL}
            />
          ))}
        </div>

        {funProjects.length > 0 && (
          <>
            <h2 className="text-3xl font-[500] leading-[1.1] -tracking-[0.0125em] text-foreground pt-20 pb-8">
              Fun
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
              {funProjects.map((project) => (
                <ProjectCard
                  key={project.slug}
                  imgUrl={project.featuredImage}
                  title={project.title}
                  description={project.description}
                  link={`/projects/${project.slug}`}
                  bgColor={project.accent}
                  blurDataURL={project.blurDataURL}
                />
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
