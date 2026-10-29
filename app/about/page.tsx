import SkillCard from "@/components/SkillCard";

const skills = [
  {
    title: "Frontend Development",
    description:
      "Learning React, TypeScript, Next.js, and Tailwind CSS to build responsive and accessible user interfaces.",
  },
  {
    title: "Backend Development",
    description:
      "Practicing Node.js, Express, server-side logic, authentication, and API development.",
  },
  {
    title: "Databases",
    description:
      "Learning to organize, query, and manage application data using PostgreSQL.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
          Get to Know Me
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          About Me
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Hello! I&apos;m Raymund Antrone, a student and aspiring web developer.
          I enjoy learning how websites and web applications work, from their
          user interfaces to their server-side logic and databases.
        </p>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">My Learning Journey</h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            Through my coursework, I&apos;ve worked with technologies such as
            JavaScript, TypeScript, React, Node.js, Express, and PostgreSQL.
            I&apos;m now learning Next.js and full-stack development to build
            better and more maintainable web applications.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">My Skills and Learning Areas</h2>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {skills.map((skill) => (
              <SkillCard
                key={skill.title}
                title={skill.title}
                description={skill.description}
              />
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">My Goal</h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            My goal is to keep improving my programming skills, create useful
            projects, and become a capable full-stack developer through
            consistent practice and learning.
          </p>
        </section>
      </section>
    </main>
  );
}
