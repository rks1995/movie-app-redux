import React from 'react';
import { useDispatch } from 'react-redux';

import { addFavMovie, unFavMovie } from '../store';

export default function MovieCard(props) {
  const { movie, isMovieFavourite } = props;

  const dispatch = useDispatch();

  return (
    <div className='movie-card'>
      <div className='left'>
        <img src={movie.Poster} alt='movie-Poster' width={200} />
      </div>
      <div className='right'>
        <div className='title'>{movie.Plot}</div>
        <div className='footer'>
          <span className='ratings'>{movie.imdbRating}</span>
          {isMovieFavourite(movie) ? (
            <button
              className='unfavourite-btn'
              onClick={() => dispatch(unFavMovie(movie))}
            >
              Unfavourite
            </button>
          ) : (
            <button
              className='favourite-btn'
              onClick={() => dispatch(addFavMovie(movie))}
            >
              Favourite
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
