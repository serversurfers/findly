import { NextResponse } from "next/server";

export function GET(){
    const data={
        "home":"/home",
        "about":"/about",
        "contact":"/contact",
        "lost and founds":"/lostAndFounds",
        "other links":"other links"
    }
  return NextResponse.json(data); // simpler than JSON.stringify
}
