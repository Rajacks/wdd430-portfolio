import ProjectList from "@/components/ProjectList";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
          WDD430 · Web Full-Stack Development
        </p>

        <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
          Hello, I&apos;m Raymund Antrone.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          I&apos;m a student and aspiring web developer learning to build
          useful, accessible, and responsive web applications. This portfolio
          documents my projects and my growth as a developer.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Explore My Projects
          </a>

          <a
            href="/about"
            className="rounded-lg border border-slate-600 px-5 py-3 font-semibold transition hover:bg-slate-800"
          >
            About Me
          </a>
        </div>
      </section>

      <section
        id="projects"
        className="border-t border-slate-800 bg-slate-900/60"
      >
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-3xl font-bold">My Projects</h2>

          <p className="mt-3 text-slate-300">
            A selection of projects from my web development journey.
          </p>

          <div className="mt-8">
            <ProjectList />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12">
        <h2 className="text-2xl font-bold">My Learning Goals</h2>

        <p className="mt-3 max-w-2xl leading-7 text-slate-300">
          I&apos;m continuing to develop my skills in React, Next.js,
          server-side development, databases, and deploying web applications.
        </p>
      </section>
    </main>
  );
}
