import CountUp from "@/components/ui/CountUp"
import Photo from "@/components/ui/Photo"
import Social from "@/components/ui/Social"
import { Button } from "@/components/ui/button"
import { FiDownload } from 'react-icons/fi'

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="h-full flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 py-16">
          {/* home-page-right-col */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Frontend-developer</span>
            <h1 className="h1 my-6">Hello, I am <br /> <span className="text-accent">Hasan wazid</span></h1>
            <p className="text-white/80 max-w-[500px] mb-6 text-center xl:text-justify">I am Hasan Wazid. A Proficient Frontend Developer and CMS expert with more than 3 years of experience delivering clean, functional, and user-friendly websites for my clients. My approach is to understand your needs and work collaboratively to achieve your goals. </p>

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div>
                <Social conatainerStyles="flex gap-4" iconStyles="h-9 w-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
              </div>
            </div>
          </div>
          {/* home-page-left-col */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <div className="pb-10">
        <CountUp />
      </div>
    </section>
  )
}

export default Home
