type data ={
    type:'text'|'number'|'password',
    placeholder:string,
    border:'sm'|'lg'|'xl'|'0',
}
const BorderRecord:Record<data['border'],string>={
    sm:'border-[2px]',
    lg:'border-[5px]',
    xl:'border-[7px]',
    "0":'border-[0px]'
}
export function Input(Params:data){
    return(<>
        <input type={Params.type} placeholder={Params.placeholder} className={`${BorderRecord[Params.border]} rounded-b-xl bg-transparent h-full w-full px-[5%] py-1 focus:outline-0 focus:border-0`}/>
    </>)
}