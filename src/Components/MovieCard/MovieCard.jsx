import React, {useState} from "react";
import "./MovieCard.css";
import.meta.env.VITE_API_KEY;


const MovieCard = ({ movie, onClick }) => {
    const [liked, setLiked] = useState(false);
    const [watched, setWatched] = useState(false);
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
        <button
          id="likeButton"
          className={liked ? "active" : ""}
          onClick={(e) => {
            e.stopPropagation();
            setLiked(!liked);
          }}
        >
          Like
        </button>
        <button
          id="watchButton"
          className={watched ? "active" : ""}
          onClick={(e) => {
            e.stopPropagation();
            setWatched(!watched);
          }}
        >
          Watch
        </button>
      </div>
    </>
  );
};

export default MovieCard;
