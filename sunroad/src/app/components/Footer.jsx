import { Forum } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const forum = Forum({ subsets: ["latin"], weight: ['400'] });


const Footer = () => {
    return ( 
    <footer className={`${forum.className} flex flex-row justify-end p-12 items-end mt-14`}>
        <div className="hidden md:inline">
            <Link  href={'/'} ><Image alt="Logo" src={'./sunroad_logo.svg'} height={60} width={60}></Image></Link>
        </div>
       
        
    </footer> );
}
 
export default Footer;