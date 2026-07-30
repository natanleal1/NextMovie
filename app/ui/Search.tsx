'use client'
import React, { ChangeEvent, useState } from 'react';
import { data } from "../moviesData"
import Link from 'next/link'
import Cards from "./Cards"

export default function Search() {
    const [searchQuery, setSearchQuery] = useState("")
    const [loading, setLoading] = useState(false)
    let movies: typeof data = []

   function searchHandler(e: ChangeEvent<HTMLInputElement>) {
        e.preventDefault()
        if (!searchQuery.trim()) return 
        if (loading) return //Won't allow to search while we search

        setLoading(true)
        try { 
            movies = data.filter((movie) => 
                movie.titulo.toLowerCase().includes(searchQuery.toLowerCase())
            ) 
        } catch (error){
            console.log(error)
        } finally {
            setLoading(false)
        }
    }


    return (
        <>
        <div className="relative w-full text-gray-600">
            <input
                type="search"
                name="search"
                placeholder="Buscar filmes..."
                value={searchQuery}
                className="bg-white h-10 px-5 pr-10 w-full rounded-full text-sm focus:outline-none"
                onChange={(event) => searchHandler(event)}
            />
            <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
                <svg
                    className="h-4 w-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                >
                    <path
                        fillRule="evenodd"
                        d="M13.53 14.47a8 8 0 111.414-1.414l3.96 3.96a1 1 0 01-1.414 1.414l-3.96-3.96zM8 14a6 6 0 100-12 6 6 0 000 12z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
        </div>
        <div>
                {loading ? (
                    <div className="loading">Loading...</div>
                    ): (
                    <div className="movies-grid">
                        {

                            movies.map((m) => (
                            <div className="movie-card">
                                
                                <div className="movie-info" key={m.id}>
                                    <h1>{m.titulo} - {m.ano}</h1>
                                    <p>Gênero: {m.genero}</p>
                                    <Link href={`/movie/${encodeURIComponent(m.titulo)}`}><button>Saiba mais</button></Link>
                                    <button> ♥ curtir </button>
                                </div>
                                
                            </div>
                    ))

                        }
                    </div>)
                }
        </div>
        </>
    )
}