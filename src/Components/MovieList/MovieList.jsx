import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../MovieCard/MovieCard";
import MovieModal from "../MovieModal/MovieModal";

import "./MovieList.css";

const MovieList = () => {
  const [movies, setMovie] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const api_key = import.meta.env.VITE_API_KEY;

  //use API key in .env file
  // 1 fetch list on mount
  useEffect(() => {
    const fetchList = async () => {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`
        );
        setMovie(data.results);
        console.log(data.results);
      } catch (err) {
        console.error("Error fetching list: ", err);
      }
    };
    fetchList();
  }, []);

  //2 when card clicked, fetch details & open modal
  const handleCardClick = async (name) => {
    setShowModal(true);
    setSelectedMovie(null); //trigger the loading state
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=488d5a9ac782826d66a2bc2213f6bc82`
      );
      setSelectedMovie(data);
    } catch (err) {
      console.error(`Error fetching ${id}: `, err);
    }
  };

  //3 close modal
  const handleClose = () => {
    setShowModal(false);
    setSelectedMovie(null);
  };

  return (
    <>
      <div className="movie-list">
        {movies.map((movie, index) => (
          //i need to call the MovieCard component
          <MovieCard
            key= {index} //using name as a key
            movie ={movie} //using name as the value for the name of the movie
            onClick={() => handleCardClick(movie.id)}
          />
        ))}
      </div>

      <MovieModal
        show={showModal}
        onClose={handleClose}
        movie={selectedMovie}
      />
    </>
  );
};

export default MovieList;
