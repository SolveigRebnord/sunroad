import { Bodoni_Moda, M_PLUS_1 } from "next/font/google";
import Image from "next/image";
import Link from "next/link";



const mplus = M_PLUS_1({ subsets: ["latin"], weight: ['300', '600'] });
const bModa = Bodoni_Moda({ subsets: ["latin"], weight: ['400', '600'] });


export default async function Contact() {
  


  return (
    <main className={`${mplus.className} text-center m-auto pt-12`}>

      <h1 className={` text-[42px]`}>Get In Touch</h1>
      <div className="pt-6">
        <p className="flex flex-row justify-center align-baseline gap-2"><Image src="/pin.svg" alt="pin icon" width={20} height={20} />Oslo</p>
     <div className="flex flex-col gap-6 pt-16">
        <p><Link href={'https://www.linkedin.com/in/solveig-rebnord-68b9a3190/'} className="underline  underline-offset-4">LinkedIn</Link></p>
        <p><Link href={'https://github.com/SolveigRebnord'} className="underline underline-offset-4">GitHub</Link></p>
        <p className="pt-10 text-sm">solveig.rebnord@gmail.com</p>
        </div>
      </div>
   
  

    </main>
  );
}

