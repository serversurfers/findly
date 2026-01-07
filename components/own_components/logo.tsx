"use client"

type Params={
    size:"sm"|"lg"|"xl"|"2xl"|"3xl"|"4xl",
}

const ActualValues:Record<Params["size"],string>={
    sm:"text-sm",
    lg:"text-lg",
    xl:"text-xl",
    "2xl":"text-2xl",
    "3xl":"text-3xl",
    "4xl":"text-3xl",
}

export function Logo({size}:Params){
    return(
        <>
            <span className={`${ActualValues[size]} font-bold`}>Logo</span>
        </>
    )
}