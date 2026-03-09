import Image from "next/image";
import Header from "./components/Header";
import ProjectCard from "./components/ProjectCard";
import Hero from "./components/Hero";
import { getAllProjects, getBlurDataURL } from "@/lib/projects";
import { Metadata } from "next";

export default async function Home() {
  const projects = await getAllProjects();

  const sorted = projects.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const mainProjects = sorted.filter((p) => !p.fun);
  const funProjects = sorted.filter((p) => p.fun);

  const [junierBlur, moodagentBlur] = await Promise.all([
    getBlurDataURL("/media/projects/junier/thumb.png"),
    getBlurDataURL("/media/projects/moodagent/thumb.png"),
  ]);

  return (
    <>
      <Hero />
      <div className="flex flex-col w-full min-w-0 pt-6 md:pt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <ProjectCard
            imgUrl="/media/projects/junier/thumb.png"
            title="Junier - Making designers work smarter."
            description="2024–Present"
            link="/projects/junier"
            bgColor="#BCC6D1"
            blurDataURL={junierBlur}
          />
          <ProjectCard
            imgUrl="/media/projects/moodagent/thumb.png"
            title="Moodagent - Novel AI-powered music discovery experiences."
            description="2020–2023"
            link="/projects/moodagent"
            bgColor="#C7D1BC"
            blurDataURL={moodagentBlur}
          />
        </div>
        <div className="flex flex-col pt-24 w-full">
          <h1 className="text-4xl font-[500] leading-[1.1] -tracking-[0.0125em] text-foreground pb-8">
            Projects
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
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
        </div>
      </div>
    </>
  );
}

export const metadata: Metadata = {
  title: "Mads Borup Petersen",
  description: "Mads Borup Petersen's personal site.",
};
