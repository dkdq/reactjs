import React, { useState, useEffect } from 'react';
import MovieCard from "./MovieCard";
import "./App.css";

const API_URL = 'http://omdbapi.com?apikey=32fe1995'

const App = () => {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search)
    }

    const displayButton = search.length > 0;

    // const filteredMovies = movies.filter(movie => movie.includes(search));
    
    useEffect(() => {
        searchMovies('pokemon')
    }, [])

    return (
        <div className='app'>
            <h1>MovieLand</h1>

            <div className='search'>
                <input placeholder='Search for movies' value={search} onChange={e => setSearch(e.target.value)}/>
                <button onClick={() => searchMovies(search)}>Search</button>
                {displayButton && <button onClick={() => setSearch('')}>Clear</button>}
            </div>

            {
                movies?.length > 0 ?
                (
                    <div className='container'>
                        {movies.map(movie =>
                            (
                                <MovieCard movie={movie} key={movie.imdbID}/>
                            )
                        )}
                    </div>
                ) :
                (
                    <div className='empty'>
                        <h2>No movies found</h2>
                    </div>
                )
            }
        </div>
    )
}

export default App;