"use client";

// react-icons
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BsBootstrap } from "react-icons/bs";
import { FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiSass, SiTailwindcss, SiTypescript } from 'react-icons/si';

import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "framer-motion";

const about  = {
    title: "About me",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, ipsa!5",

    info: [
      {
        fileName: "Name",
        fileValue: "Hasan Wazid"
      },
      {
        fileName: "Phone",
        fileValue: "(+880) 01724 248264"
      },
      {
        fileName: "Experience",
        fileValue: "3+ Years"
      },
      {
        fileName: "Linkedin",
        fileValue: "hasan07"
      },
      {
        fileName: "Nationality",
        fileValue: "Bangladeshi"
      },
      {
        fileName: "email",
        fileValue: "webexguruhasan95@gmail.com"
      },
      {
        fileName: "Freelance",
        fileValue: "Available"
      },
      {
        fileName: "Language",
        fileValue: "English, Bangla, Spanish"
      },
    ]
  }


const experience = {
    icon: "/assets/resume/badge.svg",
    title: "My Experience",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, ipsa!10",

    items: [
      {
        company: "TimesIt",
        position: "Frontend Developer",
        duration: "2021 - 2021"
      },
      {
        company: "Tiejet",
        position: "WordPress Developer",
        duration: "2022 - 2023"
      },
      {
        company: "Fiverr",
        position: "WordPress Developer",
        duration: "2021 - Present"
      },
      {
        company: "Upwork",
        position: "WordPress Developer",
        duration: "2021 - Present"
      },
    ],
  }


const education = {
    icon: "/assets/resume/cap.svg",
    title: "My Education",
    description: "lorem education",

    items: [
      {
        institution: "Online Course Platform",
        degree: "Frontend Developer",
        duration: "2021-2022",
      },
      {
        institution: "Sylhet Govt Alia Madrasha",
        degree: "BCS Honours",
        duration: "2014-2018",
      },
    ]
  }


const skills = {
    title: "My Skills",
    description: "lorem skills",

    skillslist: [
      {
        icon: <FaHtml5 />,
        name: "Html5",
      },
      {
        icon: <FaCss3 />,
        name: "CSS3",
      },
      {
        icon: <FaJs />,
        name: "JavaScript",
      },
      {
        icon: <SiTypescript />,
        name: "TypeScript",
      },
      {
        icon: <FaReact />,
        name: "React",
      },
      {
        icon: <SiNextdotjs />,
        name: "NextJs",
      },
      {
        icon: <SiTailwindcss />,
        name: "TailWIndCss",
      },
      {
        icon: <BsBootstrap />,
        name: "Bootstrap",
      },
      {
        icon: <SiSass />,
        name: "SASS",
      },
      
    ]
  }



const Resume = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity:1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn"}}} className="min-h-[80vh] flex justify-center items-center py-12">
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60x]">
          <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/* Tabs-content */}
          
          <div className="min-h-[70vh] w-full mt-6 xl:mt-0 xl:ml-6 ml-0">
            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-5 text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>

                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-7">
                    {experience.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] py-6 px-10 h-[184px] rounded-xl flex justify-center items-center flex-col xl:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl xl:text-2xl max-w-[260px] xl:max-w-full text-center lg:text-left h-[60px]">{item.position}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>

              </div>
            </TabsContent>
            
            {/* Education */}
            <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-5 text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>

                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-7">
                    {education.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] py-6 px-10 h-[184px] rounded-xl flex justify-center items-center flex-col xl:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl xl:text-2xl xl:max-w-full text-center lg:text-left h-[60px]">{item.institution}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.degree}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>

              </div>
              
            </TabsContent>
            
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
            <div className="flex flex-col gap-7">
              <div className="flex flex-col gap-7 text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
              </div>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 xl:gap-[30px]">
                {
                  skills.skillslist.map((item, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">{item.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{item.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
            </TabsContent>
            {/* about-me */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
            <div className="flex flex-col gap-7">
            <h3 className="text-3xl font-bold">{about.title}</h3>
            <p className="text-white/60 max-w-[600px] mx-auto xl:mx-0">{about.description}</p>

            <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 mx-auto xl:mx-0">
            {about.info.map((item, index) => {
            return (
            <li key={index} className="flex justify-center items-center xl:justify-start gap-4">
            <span className="text-white/60">{item.fileName}</span>
            <span className="text-xl">{item.fileValue}</span>
            </li>
            )
            })}
            </ul>
            </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>

    </motion.div>
  )
}

export default Resume