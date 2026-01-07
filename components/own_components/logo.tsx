"use client"
import { Montserrat } from 'next/font/google'

type Params={
    sizes:"sm"|"lg"|"xl"|"2xl"|"3xl"|"4xl",
}

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['900'],
})

const ActualValues:Record<Params["sizes"],string>={
    sm:"text-sm",
    lg:"text-lg",
    xl:"text-xl",
    "2xl":"text-2xl",
    "3xl":"text-3xl",
    "4xl":"text-4xl",
}

export function Logo({sizes}:Params){
    return(
        <>
            <span className={`${ActualValues[sizes]} ${montserrat.className} font-bold`}>findly<span style={{'color':'#00B351'}}>.</span></span>
        </>
    )
}
