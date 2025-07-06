import React from "react"
import Link from "next/link"


export default function Header(){
    return(
     <div 
     className={"container mx-auto flex items-center border-b-2 px-6 py-2 h-24"

     }
     >
        <h1 className="font-bold">Splash-next</h1>
        <div className="grow">
        <div 
        className="flex items-center justify-center gap-6 md:gap-8"
        >
            <Link href="Home">Home</Link>
             <Link href="Blog">Blog</Link>
              <Link href="Shop">Shop</Link>
               <Link href="contact">Contact</Link>
                <Link href='about'>About</Link>
        </div>
     </div>
     </div>
     
    )
}