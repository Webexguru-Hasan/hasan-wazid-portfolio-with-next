"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import { links } from "./Nav";
import { Button } from "./ui/button";

console.log(links);

const MobileNav = () => {
    const pathname = usePathname()
  return (
    <Sheet>
        <SheetTrigger className="flex justify-center items-center">
            <CiMenuFries className="text-[32px] text-accent" />
        </SheetTrigger>
        <SheetContent className="flex flex-col">
            <div className="mt-20 mb-20">
                <Link href="/">
                <h1 className="text-center text-3xl text-white uppercase">Hasan <span className="text-accent">Wazid.</span></h1>
                
                </Link>
            </div>

            <nav className="flex flex-col justify-center items-center gap-6">
                {links.map((link, index) => {
                    return (
                        <Link className={`${link.path === pathname && "text-accent border-b-[2px] border-accent"} uppercase font-medium hover:text-accent transition-all`} href={link.path} key={index}>{link.name}</Link>
                    )
                })}
            </nav>
            <Link href="/contact" className="flex justify-center items-center mt-6">
                <Button>Hire Me</Button>
            </Link>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav