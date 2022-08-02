import { Link } from 'react-router-dom'
import '../filter/Filter.css'
const MovieCard = (props) => {
  return (
    <div>
      <Link to={`/movietrailer/${props.description}  `}>

      <div className='cont'>
        <div className='imag'>
          <img src={props.posterurl} alt='Moviesimg' />
        </div>
        <div className='descr' >
          <h4>{props.title}</h4>
          <p>{props.description}</p>
        </div>
      </div>
      <div className='addFilm'>
      </div>
      </Link>

    </div>
  )
}

export default MovieCard