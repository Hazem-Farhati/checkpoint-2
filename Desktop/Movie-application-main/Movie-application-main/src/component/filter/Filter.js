import React from 'react'
import { useState } from 'react';
import '../filter/Filter.css'
import MovieCard from '../movieCard/MovieCard';
import {Link} from 'react-router-dom'
import AddFilm from '../addFilm/AddFilm';
import Navbar from './Navbar';

const Filter = ({ movies,setMovies }) => {
    const [search, setSearch] = useState('');
    return (
        <div className="filt">
            <Navbar setSearch={setSearch}/>
            <div className='container'>
                    {movies.filter((val) => {
                        if (search === '') { return val }
                        else if (val.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || parseInt(search) === val.rating) return val
                    }
                    ).map((film, i) =>
                        <div key={i}>
                            <Link to='/movietrailer/:trailer'>
                                <MovieCard posterurl={film.posterurl} title={film.title} description={film.description} />
                            </Link>
                        </div>
                    )}
            </div>
            
            <AddFilm movies={movies} setMovies={setMovies}/>
        </div>
    )
}

export default Filter