'use client'
import { Forum, M_PLUS_1 } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const forum = Forum({ subsets: ["latin"], weight: ['400'] });
const mplus = M_PLUS_1({ subsets: ["latin"], weight: ['300', '600'] });

const Footer = () => {
    const pathname = usePathname();

    const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

    function scrollToTop() {
        if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
   
    return ( 
    <footer className={`${forum.className} flex flex-row justify-end p-12 items-end mt-14`}>
        <div className="hidden md:inline">
            <Link  href={'/'} ><Image alt="Logo" src={'./sunroad_logo.svg'} height={60} width={60}></Image></Link>
        </div>
        {pathname === '/portfolio' && <button
        className={`${mplus.className}  fixed bottom-0 right-0 text-stone-600 bg-[#FFFEFD] border-y-[1px] border-l-[1px] border-stone-200 rounded-s-lg px-4 py-3  mb-[71px] z-50 items-center text-xs flex gap-2`}
        onClick={scrollToTop}
      >
        TO TOP
        
</button>}
        
    </footer> );
}
 
export default Footer;