import React, { useState } from 'react'
import '../filter/Filter.css'
import '../addFilm/addfilm.css'

const AddFilm = ({movies,setMovies}) => {
    const [newMovie, setNewMovie] = useState({
        posterurl:"",
        title:"",
        description:"",
    });
const AddFilm=()=>{setMovies([...movies,newMovie])}
const [show, setShow] = useState(false);
    return (
        <div>
            <div className='bttn'>
                <button onClick={e => setShow(true)} id='addfilm'>Add Film</button>     {/*button allow user to access to add film*/}
            </div>
            {show && <div className='addCardd'>
                <input className='add' onChange={e => setNewMovie({ ...newMovie, posterurl: e.target.value })} type="text" placeholder='image' />
                <input className='add' onChange={e => setNewMovie({ ...newMovie, title: e.target.value })} type="text" placeholder='title' />
                <input className='add' onChange={e => setNewMovie({ ...newMovie, description: e.target.value })} type="text" placeholder='description' />
                <button onClick={e => AddFilm(e.target.value)} id='add-film'>Add Film</button>
            </div>}      {/* if show=true button is clicked then acess to add movie  */}
        </div>
    )
}
export default AddFilm