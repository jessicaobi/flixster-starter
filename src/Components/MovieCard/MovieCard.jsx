import React from "react";
import "./MovieCard.css";
import.meta.env.VITE_API_KEY;

const MovieCard = ({ movie, onClick }) => {
  console.log(movie);
  // console.log(movie.poster_path)
  return (
    <>
      <div className="movie-item" onClick={onClick}>
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={`${movie.title} poster`}
        />

        <h4>{movie.title}</h4>
        <h5>Vote Average: {movie.vote_average}</h5>
      </div>
    </>
  );
};

export default MovieCard;
