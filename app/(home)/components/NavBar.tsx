import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react'
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";

export default function NavBar({className}:{className?:string}) {

    const socials = [
        {
            link:"www.linkedin.com/in/wrizz",
            label: "LinkedIn",
            Icon: SiLinkedin,
        },
        {
            link:"https://github.com/boiOctave/boiOctave/",
            label: "Github",
            Icon: SiGithub,
        },
        {
            link:"https://x.com/callmewrizz?s=21&t=-UmwOdG1drDHX1pw9_mHJQ",
            label: "X",
            Icon: SiX,
        },
    ]
  return (
    <nav className={cn("py-10 flex justify-between items-center", className) }>
        <h1 className='text-2x1 font-bold underline underline-offset-8 decoration-green-500 -rotate-2'> TechWrizz   💻 </h1>
    <div className="flex items-center gap-5">
        {socials.map((social, index)=>{

            const Icon = social.Icon

            return <Link href={social.link} key={index} aria-label={social.label}>
                <Icon className='w-5 h-5 hover:scale-125 transition-all'/>
            </Link>
        })}
    </div>
    </nav>
    
  )
}
