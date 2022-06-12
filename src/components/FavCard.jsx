import React from 'react';
import { useDispatch } from 'react-redux';

import { unFavMovie } from '../store';

export default function FavCard(props) {
  const { movie } = props;
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
          <button
            className='add-btn'
            onClick={() => dispatch(unFavMovie(movie))}
          >
            Unfavourites
          </button>
        </div>
      </div>
    </div>
  );
}