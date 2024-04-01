import { Forum } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const forum = Forum({ subsets: ["latin"], weight: ['400'] });


const Footer = () => {
    return ( 
    <footer className={`${forum.className} flex flex-row justify-between p-12 mt-52 align-baseline`}>
        <div>
            <Link href={'/'} ><Image alt="Logo" src={'./sunroad_logo.svg'} height={120} width={120}></Image></Link>
        </div>
        <div className="flex flex-row gap-12 w-fit h-fit">
            <Link href={'/portfolio'}>portfolio</Link>
            <Link href={'/about'}>about</Link>
            <Link href={'/contact'}>contact</Link>
        </div>
        
    </footer> );
}
 
export default Footer;