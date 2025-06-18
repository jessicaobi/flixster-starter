import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../MovieCard/MovieCard";
import MovieModal from "../MovieModal/MovieModal";
import "./MovieList.css";
import { FaSearch } from "react-icons/fa";


const MovieList = () => {
  const [movies, setMovie] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const api_key = import.meta.env.VITE_API_KEY;
  const search_url = import.meta.env.VITE_SEARCH_URL;
  const [pages, setPages] = useState(1);

//   if(!show) {
//     return null;
//   }
  //use API key in .env file
  // 1 fetch list on mount
  useEffect(() => {
    const fetchList = async () => {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&page=${pages}`
        );
        setMovie(prev => pages === 1 ? data.results : [...prev, ...data.results]);

      } catch (err) {
        console.error("Error fetching list: ", err);
      }
    };
    fetchList();
  }, [pages]);





  //2 when card clicked, fetch details & open modal
  const handleCardClick = async (id) => {
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

  //For load more
  const showMoreItems = () => {
    setPages(prev => prev + 1);
  };

  const [results, setResults] = useState([]);

    const [input, setInput] = useState("");
    const [search, setSearch] = useState("");

    const handleSubmit = (e) => {
        console.log(input);
        e.preventDefault();
        setSearch(input);
        fetchData(input);
    

    }
    const fetchData = (value) => {
        fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${value}`
        )
          .then((response) => response.json())
          .then((json) => {
            const results = (json.results || []).filter((user) => {
              return (
                value &&
                user &&
                user.title &&
                user.title.toLowerCase().includes(value)
              );
            });

            setResults(results);
          });
    }
    const handleChange = (value) =>{
        setInput(value);
    }




    const [filterChoice, setFilterChoice] = useState(null);

    const handleDropDown = (e) => {
      setFilterChoice(e.target.value);
    };



  useEffect(() => {
    if (!filterChoice) return;

    const fetchFilteredMovie = async () => {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/discover/movie`,
{
  params:{
  api_key: api_key,
  sort_by: filterChoice,

},
      }
        ); 
           setMovie(data.results);

      } catch (err) {
        console.error("Error fetching sorted list: ", err);
      }
    };
    fetchFilteredMovie();
  }, [filterChoice]);






  return (
    <>
      <nav>
        <div className="search-bar-container">
          <div className="input-wrapper">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Search"
                value={input}
                onChange={(e) => handleChange(e.target.value)}
              />
              <button className="submit-button">Search</button>
            </form>

            <button
              className="submit-button"
              type="button"
              onClick={() => {
                setInput("");
                setSearch("");
                setResults([]);
              }}
            >
              Clear
            </button>
          </div>

          <div className="dropDown">
            <select value={filterChoice} onChange={handleDropDown}>
              <option value="popularity.desc">Default</option>
              <option value="original_title.asc">Alphabetic, A-Z</option>
              <option value="primary_release_date.desc">Release Date</option>
              <option value="vote_average.desc">Vote Average</option>
            </select>
          </div>
        </div>
      </nav>
      {results.length > 0 ? (
        <div className="results-list">
          {results.map((movie, index) => (
            <MovieCard
              key={movie.id || index}
              movie={movie}
              onClick={() => handleCardClick(movie.id)}
            />
          ))}
        </div>
      ) : (
        <div className="movie-list">
          {movies.map((movie, index) => (
            <MovieCard
              key={movie.id || index}
              movie={movie}
              onClick={() => handleCardClick(movie.id)}
            />
          ))}
          <div className="loadMoreButton">
            <button onClick={showMoreItems}>Load More</button>
          </div>
        </div>
      )}

      <MovieModal
        show={showModal}
        onClose={handleClose}
        movie={selectedMovie}
      />
    </>
  );
};

export default MovieList;