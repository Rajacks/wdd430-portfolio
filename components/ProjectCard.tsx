interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  link,
}: ProjectCardProps) {
  return (
    <article className="rounded-2xl border border-slate-700 bg-slate-900 p-6 transition hover:border-cyan-400">
      <h3 className="text-xl font-bold">{title}</h3>

      <p className="mt-3 leading-7 text-slate-300">{description}</p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {technologies.map((technology) => (
          <li
            key={technology}
            className="rounded-full bg-slate-800 px-3 py-1 text-sm text-cyan-300"
          >
            {technology}
          </li>
        ))}
      </ul>

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block font-semibold text-cyan-400 hover:text-cyan-300"
        >
          View Project →
        </a>
      )}
    </article>
  );
}
