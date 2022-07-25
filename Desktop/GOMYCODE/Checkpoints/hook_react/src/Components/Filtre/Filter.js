
import React from 'react'
import { useState } from 'react';
import moviesList from '../MovieCard/MovieCard'
const Filter = () => {
const [search, setSearch] = useState('');
return (
        <div className="filt">
            {/* <nav className='Nav'>Movie4u</nav> */}
                <input type="text" 
                placeholder="Search Your movie" 
                id='search' 
                onChange={e=> setSearch(e.target.value)}/>
                {moviesList.filter((val)=>{
                    if(search ===''){return val}
                    else if( val.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || parseInt(search) === val.rating)
                    {return val}
                }
                ).map((film,i)=>{
                    return(
                        <div key={i}>
                            <img src={film.posterurl} alt="movie " />
                            <h4>{film.title}</h4>
                            <p>{film.description}</p>
                        </div>
                    )
                })}
            
        </div>
    )
}

export default Filter