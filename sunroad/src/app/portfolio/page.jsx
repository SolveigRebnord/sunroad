import { promises as fs } from 'fs';


import Project from "../components/Project";

export default async function Portfolio() {
  const file = await fs.readFile(process.cwd() + '/src/app/data.json', 'utf8');
  const data = JSON.parse(file);


  return (
    <main className="text-center w-[90%] md:w-[80%] m-auto pt-20 flex flex-col items-center justify-center gap-48">
      {data.map((proj) => <Project project={proj} key={proj.name} />)}
  

    </main>
  );
}

