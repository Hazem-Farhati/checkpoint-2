import React from 'react'
import './MovieList.css'
import PropTypes  from 'prop-types';
const MovieList = (props) => {
  return (
   
    <div className='poster' >
<img className='MoviCard-poster'
 src={props.poster}
 alt="a" />
<div className='poster-one' >
  <h3>{props.title}</h3> 
  <br />
  <p style={{fontSize:"10px",maxWidth:"50px"}}>{props.posterUrl}</p>
  <br />
  <p>{props.description}</p>
  <br />
  <h3>{props.rating}</h3>
</div>
    </div>
   
  )
}
MovieList.defaultProps = {
  title: "add ur title ",
  poster:"images/test.png",
  posterUrl:"add ur posterUrl",
  description : "add ur description",
  rating:"add ur rating",

};

MovieList.propTypes = {
  title : PropTypes.string,
  posterUrl : PropTypes.string,
  description : PropTypes.string,

};


export default MovieList