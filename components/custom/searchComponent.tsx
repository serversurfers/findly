import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Search = () => {
  return (
    <>
      <div className="w-[342px]">
        <Input placeholder="search" type="text" />
        <Button className="absolute ml-[-77px] mt-[7px] h-[24px] rounded-sm">
          Ctrl+k
        </Button>
      </div>
    </>
  );
};
export default Search;
