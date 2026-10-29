import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-slate-800 bg-slate-950 text-white">
      <nav
        className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-cyan-400"
        >
          Raymund&apos;s Portfolio
        </Link>

        <div className="flex gap-6 text-sm font-medium">
          <Link href="/" className="transition hover:text-cyan-400">
            Home
          </Link>

          <Link href="/about" className="transition hover:text-cyan-400">
            About
          </Link>
        </div>
      </nav>
    </header>
  );
}
