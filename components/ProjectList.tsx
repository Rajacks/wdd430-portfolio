import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "CSE340 Web Backend",
    description:
      "A web application built with Node.js, Express, EJS, and PostgreSQL, featuring user registration, login, and volunteering functionality.",
    technologies: ["Node.js", "Express", "EJS", "PostgreSQL"],
    link: "https://github.com/Rajacks/CSE340",
  },
  {
    title: "Personal Portfolio",
    description:
      "My personal portfolio website, created to introduce myself and showcase my web development journey and projects.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://rajacks.github.io/Raymund-Antrone-s-Portfolio/",
  },
];

export default function ProjectList() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  );
}
