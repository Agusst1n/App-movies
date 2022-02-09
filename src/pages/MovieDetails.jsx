import movie from './movies.json'
import styles from './MovieDetails.module.css'
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function MovieDetails() {

  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;

  const {movieId} = useParams();
  // const [movie, setMovie] = useState(null)
  console.log(movieId)

  // useEffect(()=>{
  //   // fetch(`
  //   // https://api.themoviedb.org/3/movie/${movieId}?api_key=3d9d528c10bd10aab1dcbcd5f1f8f9bf`)
  //   // .then((result)=> result.json())
  //   // .then((data)=>{
  //   //   setMovie(data)
  //   // });
  // },[movieId]);

  // if(!movie){
  //   return null;
  // }

  return <div className={styles.container}>
      <img className={`${styles.col} ${styles.movieImage}`} src={imageUrl} alt={movie.title} />
      <div className={`${styles.col} ${styles.movieDetails}`}>
        <p className={`${styles.firstP}`}><strong>Title: </strong>{movie.title}</p>
        <p><strong>Genres: </strong>{movie.genres.map(genre => genre.name).join(", ")}</p>
        <p><strong>Description: </strong>{movie.overview}</p>
      </div>
  </div>;
}
