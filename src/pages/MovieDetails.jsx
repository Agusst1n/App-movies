// import movie from './movies.json'
import styles from './MovieDetails.module.css'
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';

export default function MovieDetails() {
  const {movieId} = useParams();
  const [movie, setMovie] = useState(null)
  const [isLoading, setIsLoading] = useState(true);
  // console.log(movieId)
  // const API_KEY = `3d9d528c10bd10aab1dcbcd5f1f8f9bf`

  useEffect(()=>{
    setIsLoading(true);

    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=3d9d528c10bd10aab1dcbcd5f1f8f9bf`)
    .then((result)=> result.json())
    .then((data)=>{
      setIsLoading(false);
      setMovie(data)
    });
  },[movieId]);

  if(isLoading){
    return <Spinner/>
  }

  if(!movie){
    return null;
  }
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;

  return <div className={styles.container}>
      <img className={`${styles.col} ${styles.movieImage}`} src={imageUrl} alt={movie.title} />
      <div className={`${styles.col} ${styles.movieDetails}`}>
        <p className={`${styles.firstP}`}><strong>Title: </strong>{movie.title}</p>
        <p><strong>Genres: </strong>{movie.genres.map(genre => genre.name).join(", ")}</p>
        <p><strong>Description: </strong>{movie.overview}</p>
      </div>
  </div>;
}
