import Navbar from "../ui/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    
      <Navbar />

      <p>Projeto construído em Next sem utilização de meios de IA para pesquisar. apenas documentações, stackoverflow e muito aprendizado</p>
    
    </div>
   
  );
}

