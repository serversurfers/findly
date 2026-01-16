import Link from "next/link"
import { Button } from "../ui/button"

interface LinkInterface{
    label:string;
    href:string;
}

const NavLink:React.FC<LinkInterface> =({label,href})=>{
    return(<>
        <Link href={href} ><Button variant={"ghost"}>{label}</Button></Link>
    </>)
}

export default NavLink