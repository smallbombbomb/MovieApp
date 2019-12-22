import React from 'react';
import './Movie.css';
import PropTypes from 'prop-types';


function Movie({title, poster}){
  return (
        <div>
          <MoviePoster poster={poster}/>
          <h1>{title}</h1>
        </div>
  )
}

function MoviePoster({poster}){
  return (
    <img src = {poster} alt="movie Poster"/>
  )
  
}

Movie.prototype = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
}

MoviePoster.prototype = {
  poster: PropTypes.string.isRequired
}
export default Movie;