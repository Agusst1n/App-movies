import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
// import movies from './movies.json'
import styles from './MovieGrid.module.css'

export default function MoviesGrid() {
  // const API_KEY = `api_key=3d9d528c10bd10aab1dcbcd5f1f8f9bf`;
  // const BASE_URL = `https://api.themoviedb.org/3`
  // const API_URL= BASE_URL + `/discover/movie?sort_by=popularity.desc&` + API_KEY;
  // let movies = [];

  

  const [movies, setMovies] = useState([])

  useEffect(()=>[
    fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3d9d528c10bd10aab1dcbcd5f1f8f9bf`)
      .then((result)=> result.json())
      .then((data)=>{
        // console.log(data)
        setMovies(data.results)
      })
  ],[])

  return <ul className={styles.movieGrid}>
      {movies.map((movie)=>
      <MovieCard key={movie.id} movie={movie}/> //Le pasamos el atributo movie con movie={movie}, ese atributo lo recibe MovieCard
      )}
  </ul>;
}
