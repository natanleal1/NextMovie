// legado
// import { data } from "../../moviesData"
// import Navbar from "../../ui/Navbar"

// export async function generateStaticParams() {
//   const posts = data
 
//   return posts.map((post) => ({
//     titulo: post.titulo,
//   }))
// }
 
// export default async function Page({  params }: {  params: Promise<{ titulo: string }>}) {
//   const { titulo } = await params
  
//   return (
//     <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            
//         <Navbar />
    
//         <p>{post.descricao}</p>
          
    
//         </div>
//   )
// }