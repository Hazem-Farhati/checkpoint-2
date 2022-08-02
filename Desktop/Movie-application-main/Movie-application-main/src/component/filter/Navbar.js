import React from 'react'

const Navbar = ({setSearch}) => {
return (
    <div>
        <div className='nav'>
                <nav>Movie4u</nav>
                <input type="text"
                    placeholder="Search Your movie"
                    id='search'
                    onChange={e => setSearch(e.target.value)} />
            </div>
    </div>
)
}

export default Navbar