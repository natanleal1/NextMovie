import Image from "next/image";
import Navbar from "./ui/Navbar";
import Cards from "./ui/Cards";
import Search from "./ui/Search";


{/* <Search /> */}
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        
      <Navbar />

      <Search />
      <br></br>
      <Cards />

    </div>
   
  );
}

