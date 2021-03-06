import React from 'react';
import './Movie.css';
import PropTypes from 'prop-types';
import LineEllipsis from 'react-lines-ellipsis';

function Movie({title, poster, genres, synopsis}){
  return (
        <div className="Movie">
        <div className="Movie__Column">
          <MoviePoster poster={poster} alt={title}/>
        </div>
        <div className="Movie__Column">
          <h1>{title}</h1>
          <div className="Movie__Genres">
              {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
          </div>
          <p className="Movie__Synopsis">
            <LineEllipsis
              text={synopsis}
              maxLine='3'
              ellipsis= '...'
              tringRight
              basedOn='letters'
            />
            
          </p>
        </div>
        </div>
  )
}

function MoviePoster({poster, alt}){
  return (
    <img src = {poster} alt={alt} title={alt} className="Movie__Poster"/>
  )
  
}

function MovieGenre({genre}){
  return (
    <span className="Movie__Genres">{genre}</span>
  )
  
}

Movie.prototype = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  synopsis: PropTypes.string.isRequired
}

MoviePoster.prototype = {
  poster: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

MovieGenre.prototype = {
  genre: PropTypes.string.isRequired
}

export default Movie;