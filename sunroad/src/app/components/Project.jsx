'use client'
import "../globals.css";

import { Bodoni_Moda, M_PLUS_1 } from "next/font/google";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const bodom = Bodoni_Moda({ subsets: ["latin"], weight: ['400'] });
const mplus = M_PLUS_1({ subsets: ["latin"], weight: ['300', '600'] });

let tools = ['CSS', 'HTML', 'Javascript']


const Project = ({project}) => {
    const componentRef = useRef(null);
    const [fade, setFade] = useState(false);
    

    useEffect(() => {
        const fadeIn = () => {
            const componentRefCurrent = componentRef.current;

          if (componentRefCurrent) {
            const { top, bottom } = componentRefCurrent.getBoundingClientRect();
            setTimeout(() => {
                setFade(top < window.innerHeight && bottom >= 0);
            }, 100);
          }
        };
        window.addEventListener("scroll", fadeIn);
        fadeIn();
        return () => {
          window.removeEventListener("scroll", fadeIn);
        };
      }, []);

const [opacity1, setOpacity1] = useState(0);
const [opacity2, setOpacity2] = useState(0);
const [opacity3, setOpacity3] = useState(0);
const img1Ref = useRef(null);
const img2Ref = useRef(null);
const img3Ref = useRef(null);

useEffect(() => {
    const fadeIn = (ref, setOpacity) => {
            setOpacity(1);
    };
    fadeIn(img1Ref, setOpacity1);
    fadeIn(img2Ref, setOpacity2);
    fadeIn(img3Ref, setOpacity3);
}, []);



const divStyle1 = { opacity: opacity1, transition: 'opacity 200ms ease-in' };
const divStyle2 = { opacity: opacity2, transition: 'opacity 400ms ease-in 200ms' };
const divStyle3 = { opacity: opacity3, transition: 'opacity 400ms ease-in 400ms' };

    return ( 
        <section ref={componentRef} className={`opacity-0 transition-opacity 500ms ease-in relative flex flex-row justify-left gap-24 items-center h-[350px]  ${fade ? "opacity-100" : ""}`}>
            <div className="relative w-[580px] h-full">
                <div className="absolute left-0 bottom-0 w-[180px] h-[300px] [box-shadow:rgba(50,_50,_93,_0.25)_0px_13px_27px_-5px,_rgba(0,_0,_0,_0.3)_0px_8px_16px_-8px] " 
                ref={img1Ref}
                style={divStyle1}>
       
                <Image  src={project.img1} style={{objectFit: "cover"}} quality={100} fill={true} alt="img"/>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-[180px] h-[300px]  
                [box-shadow:rgba(50,_50,_93,_0.25)_0px_13px_27px_-5px,_rgba(0,_0,_0,_0.3)_0px_8px_16px_-8px]
                "  ref={img2Ref}
                style={divStyle3}>
                    
                    <Image src={project.img2}
                    style={{objectFit: "cover", objectPosition: 'center'}} 
                    quality={100} 
                    fill={true} 
                    alt="img"/>
                </div>
                <div ref={img3Ref}
                       style={divStyle2} className="absolute right-0 bottom-2 w-[180px] h-[280px] [box-shadow:rgba(50,_50,_93,_0.25)_0px_13px_27px_-5px,_rgba(0,_0,_0,_0.3)_0px_8px_16px_-8px]
">
                    <Image  src={project.img3}
                        style={{objectFit: "cover", objectPosition: 'center'}} 
                        quality={100} 
                        fill={true} 
                        alt="img"/>
                </div>
            </div>
            <div className={`${mplus.className} flex w-fit flex-col justify-start items-start gap-4 text-left text-sm`}>
                <h2 className=" text-base flex flex-row gap-4 items-baseline tracking-wide"><span className={`${bodom.className} text-[36px] text-[#2D2828]`}>{project.id}. </span> {project.title}</h2>
                <ul className="flex flex-row gap-3">{project.code.map((name) => <li className="font-semibold text-xs tracking-wide bg-gray-100 p-1.5 rounded-md">{name}</li>)}
                 </ul>
                <p className="text-xs pt-4">{project.desc}</p>
                <ul className="flex flex-row gap-6 pt-8">{project.links.map((link) => <Link target="blank" href={link.link} className="underline first-of-type:pr-6">{link.title}</Link>)}
                 </ul>
            </div>
        </section>
     );
}
 
export default Project;