import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('http://localhost:3001/movies');
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);


  return (
    
      <div>
      {movies.map(movie => (
        <div>
      
        <img src ={movie.poster} alt = "starwars"/>
        </div>
      ))}
      </div>
  
  )
}

export default App
