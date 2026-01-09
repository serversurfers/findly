import { Button } from "../ui/button";
import { Input } from "../ui/input";

export  function SearchC(){
    return(<>
<div className="border-2 hidden lg:block  h-[40px] w-[342px] mt-[2px] rounded-xl">
    <Input   placeholder="search" type="text" />
    <Button className="absolute ml-[-77px] mt-[7px] h-[24px]" >Ctrl+k</Button>
    </div>
    </>)
}