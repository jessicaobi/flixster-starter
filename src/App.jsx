import { useState } from 'react'
import './App.css'
import MovieList from "./Components/MovieList/MovieList";
import MovieModal from "./Components/MovieModal/MovieModal"

const App = () => {
  return (
    <>
      <banner>
        <header className="header">
          <h1 id="flixsterTitle">FLIXSTER</h1>
        </header>
      </banner>
      <div className="App">
        <MovieList />
      </div>
      <footer>
        <h4>Flixster Project</h4>
      </footer>
    </>
  );
};

export default App;
