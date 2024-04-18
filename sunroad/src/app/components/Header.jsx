'use client'
import { Forum, M_PLUS_1 } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const forum = Forum({ subsets: ["latin"], weight: ['400'] });
const mplus = M_PLUS_1({ subsets: ["latin"], weight: ['300', '600'] });



const Header = () => {
    const pathname = usePathname()


    return ( 
    <header className={`${mplus.className} flex flex-col md:flex-row justify-between py-16 md:py-12 md:px-20 items-center gap-12 md:gap-0 md:items-end`}>
        <div>
            {pathname !== '/' && <Link href={'/'} ><Image alt="Logo" src={'./sunroad_logo.svg'} height={190} width={190}></Image></Link>}
        </div>
        <div className="flex flex-row text-sm gap-12 w-fit h-fit">
            <Link className={` ${pathname === '/portfolio' ? 'underline underline-offset-2' : ''}`} href={'/portfolio'}>portfolio</Link>
            <Link className={` ${pathname === '/contact' ? 'underline underline-offset-2' : ''}`} href={'/contact'}>contact</Link>
        </div>
        
    </header> );
}
 
export default Header;