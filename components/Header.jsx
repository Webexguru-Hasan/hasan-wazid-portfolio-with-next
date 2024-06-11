import Link from "next/link"
import MobileNav from "./MobileNav"
import Nav from "./Nav"
import { Button } from "./ui/button"

const Header = () => {
  return (
    <header className="py-8 xl:py-8 text-white border-b-[1px] border-accent-hover/25">
        <div className="container mx-auto flex justify-between items-center">
            {/* LOGO */}
            <Link href='/'>
            <h1 className="xl:text-4xl text-2xl text-accent font-semibold uppercase">Hasan <span className="text-white">Wazid.</span></h1>
            </Link>

            {/* NAVBAR */}
            {/* desktop-nav-and-hire-me-button */}
            <div className="hidden xl:flex items-center gap-8">
            <Nav />
            <Link href="/contact">
                <Button>Hire Me</Button>
            </Link>
            </div>

            {/* mobile-nav-and-hire-me-button */}
            <div className="xl:hidden flex">
                <MobileNav />
            </div>
            
            </div>
    </header>
  )
}

export default Header