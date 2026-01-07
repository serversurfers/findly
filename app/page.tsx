import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      {/* Header */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <h1 className="text-xl font-semibold tracking-tight">Findly</h1>
        <nav className="hidden gap-6 text-sm text-zinc-600 dark:text-zinc-400 sm:flex">
          <Button variant={"ghost"}>
            How it works

          </Button>
          <Button variant={"ghost"}>
            Report item

          </Button>
          <Button variant={"ghost"}>
            Browse

          </Button>


          {/* <a href="#how" className="hover:text-black dark:hover:text-white">
          </a> */}
          {/* <a href="#report" className="hover:text-black dark:hover:text-white">
          </a>
          <a href="#browse" className="hover:text-black dark:hover:text-white">
          </a> */}
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

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          {/* <a
            href="/lost"
            className="rounded-full bg-black px-8 py-3 text-white transition hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
          >
            Report Lost Item
          </a> */}
          <Button size={'lg'} className="py-6">Report Lost Item</Button>
          {/* <a
            href="/found"
            className="rounded-full border border-black px-8 py-3 transition hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black"
          >
            Browse Found Items (Updated)
          </a> */}
              <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline" size={'lg'} className="py-6">Open Dialog</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Name</Label>
              <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Username</Label>
              <Input id="username-1" name="username" defaultValue="@peduarte" />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
          <Button variant={'outline'} size={'lg'} className="py-6">Browse Found Items (Updated)</Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 px-6 py-6 text-center text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
        © {new Date().getFullYear()} Findly · Built for university communities By TheServerSurfers.
      </footer>
    </div>
  );
}
