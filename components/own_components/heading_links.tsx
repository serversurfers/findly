import Link from "next/link"
import { Button } from "../ui/button"

// type data={
//     text:'home'|'about'|'contact'|'lost and founds'|'other links',
// }

type data={
    text:'home1'|'home2'|'home3'|'home4'|'home5',
}
// const ValuesLinks:Record<data['text'], string>={
//     home:'/home',
//     about:'/about',
//     contact:'/contact',
//     "lost and founds":'/lostAndFounds',
//     "other links":'other links'
// }
const ValuesLinks:Record<data['text'], string>={
    home1:'home',
    home2:'home',
    home3:'home3',
    "home4":'home4',
    "home5":'home5'
}
export function NavLink({text}:data){
    console.log(text)
    return(<>
        <Link href={ValuesLinks[text]} className="w-full text-right"><Button variant={"ghost"} className="button w-full text-right ">{text}</Button></Link>
    </>)
}