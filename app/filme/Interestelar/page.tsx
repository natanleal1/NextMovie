import Image from "next/image";
import Navbar from "../../ui/Navbar"
import Cards from "../../ui/Cards"
import { data } from "../../moviesData"

export default function Movie() {
    
    const movie = data.filter((data => data.id == 3))
    
    return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        
        <Navbar />

        <h2>{movie[0].titulo} - {movie[0].ano}</h2>
        <p>Sinopse: {movie[0].sinopse}</p>
      

    </div>
    )
}

