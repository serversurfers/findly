"use client";
import NavLink from "./NavLink";
import Search from "./searchComponent";
import { DialogDemo } from "./dialogue/loginAndSignup";
import { SignupDemo } from "./dialogue/signup";
import { useState } from "react";
import { links } from "@/constants";
import Logo from "./logo";

const Heading = () => {
  const [open, setOpen] = useState<boolean>(false);
  //TODO: RESPONSIVENESS
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
            <Logo sizes="2xl" />
            <button
              onClick={() => setOpen((prev) => !prev)}
              className="lg:hidden text-xl font-bold"
              aria-label="Toggle menu"
            >
              {open ? "x" : "☰"}
            </button>
          </div>

          {links.map((item) => (
            <NavLink href={item.href} label={item.label} />
          ))}
        </div>
      </div>

      <div className="flex flex-col w-full lg:w-1/2 lg:flex-row gap-[10px]">
        <Search />
        <DialogDemo />
        <SignupDemo />
      </div>
    </header>
  );
};

export default Heading;
