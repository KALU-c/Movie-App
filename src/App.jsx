import './App.css'
import { useEffect, useState } from "react"
import SearchIcon from "./search.svg"
import MovieCard from './MovieCard';

const API_KEY = import.meta.env.VITE_API;
console.log("API URL", API_KEY);

function App() {

  const [ movies, setMovies ] = useState([]);
  const [ search, setSearch ] = useState('');

  movies.map((movie) => {
    if(movie.poster_path) {
      movie.poster_path = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    }
  });

  const searchMovies = async (title) => {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${title}&api_key=${API_KEY}`);
    const data = await response.json();

    const sortedArray = data.results.sort((a, b) => b.vote_average - a.vote_average);

    console.log(sortedArray);
    setMovies(sortedArray);
  }

  useEffect(() => {
    searchMovies('Matrix');
  }, []);
  return (
    <div className='app'>
      <h1>RealKal Movies</h1>
      <div className="search">
        <input
          placeholder='search for movies'
          value={search}
          onChange={(event) => (
            setSearch(event.target.value)
          )} 
        />
        <img 
          src={SearchIcon} 
          alt="search" 
          onClick={() => (
            searchMovies(search)
          )}
        />
      </div>

      {
        movies.length > 0
        ? (
          <div className="container">
            {
              movies.map((movie, index) => (
                <MovieCard movie={movie} key={index}/>
              ))
            }
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found.</h2>
          </div>
        )
      }
    </div>
  )
}

export default App
