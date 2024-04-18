import { Bodoni_Moda, Forum, M_PLUS_1 } from "next/font/google";

const bodoni = Bodoni_Moda({ subsets: ["latin"], weight: ['400', '800', '600'] });
const mplus = M_PLUS_1({ subsets: ["latin"], weight: ['200','400', '800', '600'] });

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between p-24">
      <h1 className={`${bodoni.className} font-semibold text-[52px] md:text-[94px]`}>sunroad</h1>
      <p className={`${mplus.className} tracking-wider font-extralight whitespace-nowrap`}>Solveig | Creative Frontend</p>
    </main>
  );
}
