import React from "react";
import "./MovieModal.css";

const MovieModal = ({ show, onClose, movie }) => {
    const api_key = import.meta.env.VITE_API_KEY;

  if (!show) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <button onClick={onClose}>X</button>
        </div>
        <div className="modal-body">
          {!movie ? (
            <p>Loading....</p>
          ) : (
            <div className="details">
              <h2>
                {movie.title}
              </h2>
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={`${movie.title} poster`}
              />{" "}
            <p>Release Date: {movie.release_date}</p>
            <p>Overview: {movie.overview}</p>
            <p>Genres: {movie.genre_ids}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
