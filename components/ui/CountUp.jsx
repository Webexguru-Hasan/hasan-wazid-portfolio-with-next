"use client";
import CountUp from "react-countup";
const counts = [
    {
        num: 3,
        text: "Years of Experiences"
    },
    {
        num: 4,
        text: "Technology Master"
    },
    {
        num: 50,
        text: "Project Completed"
    },
    {
        num: 30,
        text: "Happy Clients"
    },
]

const Count = () => {
  return (
    <section>
        <div className="container mx-auto">
            <div className="flex flex-wrap gap-6 max-w-[80vw] max-auto xl:max-w-none">
                {counts.map((count, index) => {
                    return (
                    <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start" key={index}>
                        <CountUp end={count.num} duration={5} delay={2} className="text-4xl xl:text-6xl font-extrabold" />
                        <p className={`${count.text.length> 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>{count.text}</p>
                    </div>
                    )
                    
                })}
            </div>

        </div>
    </section>
  )
}

export default Count