import React from "react";
import {
  SiCss3,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMui,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiSpringboot,
} from "react-icons/si";
import Title from "./Title";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { Icon } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Bitcoin Project",
      tech: [SiReact, SiMui, SiMongodb, SiNodedotjs, SiExpress],
      link: "https://octave-brokerfrontend.netlify.app",
      cover: "/btc.png",
      background: "bg-green-500",
    },
    {
      title: "AceVest Project",
      tech: [SiHtml5, SiCss3, SiJavascript],
      link: "https://boioctave.github.io/acevestfrontend.github.io/dashboard.html",
      cover: "/ace.png",
      background: "bg-indigo-500",
    },
    {
      title: "CountDown Project",
      tech: [SiReact, SiMui, SiMongodb, SiNodedotjs, SiExpress],
      link: "https://countdownnew-app.netlify.app/",
      cover: "/countdown.png",
      background: "bg-indigo-500",
    },
    {
      title: "MetaHotel Project",
      tech: [SiReact, SiMui],
      link: "https://octave-metabnb.netlify.app",
      cover: "/meta.png",
      background: "bg-green-500",
    },
    {
      title: "Ecommerce Project (Upcoming..)",
      tech:  [SiNextdotjs, SiMui, SiMongodb, SiSpringboot],
      link: "https://techrizz.netlify.app",
      cover: "/nest.png",
      background: "bg-green-500",
    },
  ];
  return (
    <div className="py-10 p-5 sm:p-0">
      {" "}
      <Title
        className="flex flex-col items-center justify-center rotate-6'"
        text="Projects 🏗"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
        {
            projects.map((project, index)=>{
                return <Link key={index} className="" href={project.link}>
                    <div className={cn("p-5 rounded-md", project.background)}>
                        <DirectionAwareHover
                        imageUrl={project.cover}
                        className="w-full space-y-5 cursor-pointer"
                        >
                            <div className="space-y-5">

                      
                            <h1 className="text-2xl font-bold">{project.title}</h1>

                            <div className="flex items-center gap-5">
                                {project.tech.map((Icon, index)=>{
                                    return <Icon className="w-8 h-8" key={index} />
                                })}
                            </div>
                            </div>

                            </DirectionAwareHover>
                    </div>
                </Link>
            })
        }
      </div>
    </div>
  );
}
