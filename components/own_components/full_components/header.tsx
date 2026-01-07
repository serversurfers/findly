// app/components/heading.tsx
import { Button } from "@/components/ui/button";
import { NavLink } from "../heading_links";
import { Logo } from "../logo";
import { SearchC } from "../searchComponent";
type data={
    text:'home'|'about'|'contact'|'home'|'other links',
}
export async function Heading() {
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/home`
//   );
//   const links: Record<string, data> = await res.json();

const links={
        "home1":"/home",
        "home2":"/home",
        "home3":"/home",
        "home4":"/home",
        "home5":"/home5"
    }
console.log(links);

  return (
    <div className="flex justify-between  p-8 py-5 items-center gap-8">
      <div className="flex gap-[10px] pt-2">
      <Logo sizes="4xl" />
      <ul className="flex gap-4 mt-1.5">
        {Object.entries(links).map(([text, href]) => (
          <li key={text}>
            <NavLink text={text} href={href} />
          </li>
        ))}
      </ul>
      </div>
      <div className="flex gap-[10px]">
        <SearchC/>
        <Button variant={'ghost'} className="mt-1">login</Button>
        <Button variant={'default'}  className="mt-1">signup</Button>
      </div>
    </div>
  );
}
