
"use client";
import { motion } from "framer-motion";

// swiper import here
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

//react-icon


import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

const projects = [
  {
    num: "01",
    category: "Frontend",
    title: "project 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, odio!",
    stack: [
      {name: "HTML 5"},
      {name: "CSS 3"},
      {name: "JavaScript"},
    ],
    image: "/assets/work/tradella-international-website.png",
    live: "",
    github: ""
  },
  {
    num: "02",
    category: "WordPress",
    title: "project 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, odio!2",
    stack: [
      {name: "WordPress"},
      {name: "Elementor"},
      {name: "Woocomerce"},
    ],
    image: "/assets/work/Broward-Miami-health.png",
    live: "",
    github: ""
  },
  {
    num: "03",
    category: "Frontend",
    title: "project 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, odio!3",
    stack: [
      {name: "WordPress"},
      {name: "Elementor"},
      {name: "Hello Elementor"},
    ],
    image: "/assets/work/forisagency-website.png",
    live: "",
    github: ""
  },
]

const Projects = () => {
  const [works, setWorks] = useState(projects[0]);

  const handleSlideChange = (swiper) =>{
    const currentIndex = swiper.activeIndex;
    setWorks(projects[currentIndex]) 
  }
  return (
    <motion.section initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}}} className="min-h-[80vh] flex flex-col justify-center py-12">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-8">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-7 h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{works.num}

              </div>
              <h3 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{works.category} Projects</h3>
              <p className="text-white/60">{works.description}</p>

              <ul className="flex gap-4">
                {
                  works.stack.map((work, index) => {
                    return (
                      <li key={index} className="text-xl text-accent">{work.name}
                      {index !== works.stack.length - 1 && ","}
                      
                      </li>
                    )
                  })
                }
              </ul>
              <div className="border border-white/20"></div>

              <div className="flex items-center gap-4">
                <Link href={works.live}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsArrowUpRight className="text-white text-2xl group-hover:text-accent" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Live Project</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                </Link>
                <Link href={works.github}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsGithub className="text-white text-2xl group-hover:text-accent" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>GithHb Repository</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                </Link>
              </div>


            </div>
          </div>

          <div className="w-full xl:w-[50%]">
            <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
              {projects.map((project, index) => {
                return <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50 rounded-xl">
                    {/* overlay */}
                    <div className="absolute top-0 bottom-0 bg-black/20 w-full h-full z-10"></div>
                    {/* image */}
                    <div className="relative w-full h-full">
                      <Image src={project.image} fill className="object-cover rounded-xl" alt="project-image" />
                    </div>

                  </div>
                </SwiperSlide>
              })}
            </Swiper>
          </div>
        </div>
      </div>

    </motion.section>
  )
}

export default Projects