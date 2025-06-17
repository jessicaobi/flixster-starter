import { useState } from 'react'
import './App.css'
import MovieList from "./Components/MovieList/MovieList";

const App = () => {
  return (
    <>
      <header className="header">
        <h1 id="flixsterTitle">FLIXSTER</h1>
      </header>

      <div className="App">
        <MovieList />
      </div>
    </>
  );
};

export default App;
