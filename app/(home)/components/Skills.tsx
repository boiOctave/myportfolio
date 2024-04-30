"use client"

import React from 'react'
import Title from './Title'
import { HoverEffect } from '@/components/ui/card-hover'
import { SiGit, SiJavascript, SiMongodb, SiMysql, SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss } from 'react-icons/si'
import { FaJava } from 'react-icons/fa'

export default function Skills() {

    const skills =[
        {
            text:"React",
            Icon: SiReact
        },
        {
            text:"Next.js",
            Icon: SiNextdotjs
        },
        {
            text:"Tailwind",
            Icon: SiTailwindcss
        },
        {
            text:"Git",
            Icon: SiGit
        },
        {
            text:"JavaScript",
            Icon: SiJavascript
        },
        {
            text:"Node",
            Icon: SiNodedotjs
        },
        {
            text:"Java",
            Icon: FaJava
        },
        {
            text:"SQL",
            Icon: SiMysql
        },
        {
            text:"Mongo DB",
            Icon: SiMongodb
        },
   
    ]
  return (


   <div className='max-w-5xl mx-auto px-8 '>
        <Title text='Skiils 👷🏼'  className='flex flex-col items-center justify-center -rotate-6'/>
   
   <HoverEffect items={skills}/>
   </div>
  )
}
