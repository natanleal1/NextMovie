import Image from "next/image";
import Navbar from "../ui/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    
      <Navbar />

      <p> Não há favoritos no momento</p>
    
    </div>
   
  );
}

