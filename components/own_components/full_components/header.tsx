"use client";
import { Button } from "@/components/ui/button";
import { NavLink } from "../heading_links";
import { Logo } from "../logo";
import { SearchC } from "../searchComponent";
import { DialogDemo } from "../dialogue/loginAndSignup";
import { SignupDemo } from "../dialogue/signup";
import { useState } from "react";

export function Heading() {
  const links = {
    home1: "/home",
    home2: "/home",
    home3: "/home",
    home4: "/home",
    home5: "/home5",
  };

  const [open, setOpen] = useState<boolean>(false);

  return (
    <header
      className={`
        overflow-hidden
        transition-[max-height] duration-300 ease-in-out
        ${open ? "max-h-[600px]" : "max-h-[80px]"}
        flex flex-col lg:flex-row justify-between
        p-8 py-5 items-center gap-8
      `}
    >
      <div className="flex flex-col w-full lg:flex-row gap-[10px] pt-2">
        <div className="lg:flex ">
          <div className="flex justify-between items-center w-full">
          <Logo sizes="4xl" />
          <button
            onClick={() => setOpen(prev => !prev)}
            className="lg:hidden text-xl font-bold"
            aria-label="Toggle menu"
          >
            {open ? "x" : "☰"}
          </button>
        </div>

        <ul className="flex flex-col lg:flex-row gap-4 mt-1.5">
          {Object.entries(links).map(([text, href]) => (
            <li key={text} className="w-full">
              <NavLink text={text} href={href} />
            </li>
          ))}
        </ul>
        </div>
      </div>

      <div className="flex flex-col w-full lg:w-1/2 lg:flex-row gap-[10px]">
        <SearchC />
        <DialogDemo />
        <SignupDemo />
      </div>
    </header>
  );
}
