'use client'
import { data } from "../moviesData"
import Link from 'next/link'
 
export default function Cards() {
    
    const posts = data



    // <button className={`favorite-btn ${ favorite ? "active":"" }`} onClick={onFavorite}> ♥ </button>
    return (
        <div className="movies-grid">
            {posts.map((post) => (
                <div className="movie-card">
                    
                    <div className="movie-info">
                        <h1>{post.titulo} - {post.ano}</h1>
                        <p>Gênero: {post.genero}</p>
                        <Link href={`/filme/${encodeURIComponent(post.titulo)}`}><button>Saiba mais</button></Link>
                        <button> ♥ curtir </button>
                    </div>

                     
                </div>
            ))}
        </div>
    )
}