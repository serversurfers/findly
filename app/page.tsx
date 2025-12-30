import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      {/* Header */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <h1 className="text-xl font-semibold tracking-tight">Findly</h1>
        <nav className="hidden gap-6 text-sm text-zinc-600 dark:text-zinc-400 sm:flex">
          <a href="#how" className="hover:text-black dark:hover:text-white">
            How it works
          </a>
          <a href="#report" className="hover:text-black dark:hover:text-white">
            Report item
          </a>
          <a href="#browse" className="hover:text-black dark:hover:text-white">
            Browse
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="mx-auto flex max-w-6xl flex-col items-center px-6 py-32 text-center">
        <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          Lost something on campus?
          <br />
          <span className="text-zinc-500 dark:text-zinc-400">
            Find it with Findly.
          </span>
        </h2>

        <p className="mt-6 max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
          Findly is a university-focused lost and found platform that helps
          students and staff report, search, and recover lost items easily.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="/lost"
            className="rounded-full bg-black px-8 py-3 text-white transition hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
          >
            Report Lost Item
          </a>
          <a
            href="/found"
            className="rounded-full border border-black px-8 py-3 transition hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black"
          >
            Browse Found Items (Updated)
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 px-6 py-6 text-center text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
        © {new Date().getFullYear()} Findly · Built for university communities
      </footer>
    </div>
  );
}
