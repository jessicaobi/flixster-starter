import React from "react";
import.meta.env.VITE_API_KEY;
import "./MovieModal.css";

const MovieModal = ({ show, onClose, movie }) => {
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
                {movie.id} {movie.title.toUpperCase()}
              </h2>
              <p>
                {/*
                <strong>Types:</strong>{" "}
                {movie.types.map((t) => t.type.name).join(", ")}
              </p>
              <p>
                <strong>Height:</strong> {pokemon.height / 10} m
              </p>
              <p>
                <strong>Weight:</strong> {pokemon.weight / 10} kg
                */}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
