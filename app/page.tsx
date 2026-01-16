import Heading from "@/components/custom/header";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      {/* Header */}
      <Heading />
      {/* Hero Section */}
      <main className="mx-auto flex max-w-6xl flex-col items-center px-6 py-32 text-center">
        <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          Lost something on campus?
          <br />
          <span className="text-zinc-500 dark:text-zinc-400">
            Find it with Findly.
          </span>
        </h2>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">

          <Button size={"lg"} className="py-6">
            Report Lost Item
          </Button>

          <Button variant={"outline"} size={"lg"} className="py-6">
            Browse Found Items (Updated)
          </Button>
        </div>
      </main>

     
      {/* Footer */}
      <footer className="border-t border-zinc-200 px-6 py-6 text-center text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
        © {new Date().getFullYear()} Findly · Built for university communities
        By TheServerSurfers.
      </footer>
    </div>
  );
}
