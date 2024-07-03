"use client";



import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+88) 01724-248264"
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "webexhuruhasan95@gmail.com"
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Beanibazr, Sylhet, Bangladesh"
  },
]

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";


const Contact = () => {
  return (
    <motion.section initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 2.4, durs
      : 0.4, ease: "easeIn"
    }}} className="py-6">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-10">
          {/* form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#232329]" rounded-xl>
              <h3 className="xl:text-4xl text-3xl text-accent font-bold">Let&apos;s Work Together</h3>
              <p className="text-white/60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, illo.</p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="your first name" />
                <Input type="lastname" placeholder="your last name" />
                <Input type="email" placeholder="your email address" />
                <Input type="number" placeholder="your mobile number" />
                

              </div>

              {/* select-service */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a Service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>
                      Select a Service
                    </SelectLabel>
                    <SelectItem value="est">Web Development</SelectItem>
                    <SelectItem value="cst">UI Design</SelectItem>
                    <SelectItem value="mst">Graphics Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea placeholder="Type a Message here" />
              <Button className="max-w-40">Send Message</Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex order-1 xl:order-none items-center xl:justify-end mb-8 xl:mb-0">
          <ul className="flex flex-col gap-10">
          {info.map((item, index) => {
          return (
           <li key={index} className="flex items-center gap-6">
          <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] flex justify-center items-center bg-[#232329] text-accent rounded-md text-[28px]">{item.icon}</div>
          <div className="flex-1">
          <p className="text-white/60">{item.title}</p>
          <h3 className="text-xl">{item.description}</h3>
          </div>
          </li>
          )
          })}
          </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact