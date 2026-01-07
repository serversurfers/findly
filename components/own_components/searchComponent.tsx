import { Button } from "../ui/button";
import { Input } from "./inputs/inputComponent";

export  function SearchC(){
    return(<>
    <div className="border-2 border-white h-[40px] w-[342px] mt-[2px] rounded-xl">
    <Input border="0"  placeholder="search" type="text" />
    <Button className="absolute ml-[-77px] mt-[7px] h-[24px]" >Ctrl+k</Button>
    </div>
    </>)
}