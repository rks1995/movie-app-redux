import React, { Component } from 'react';

export default class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div className='movie-card'>
        <div className='left'>
          <img src={movie.Poster} alt='movie-Poster' width={200} />
        </div>
        <div className='right'>
          <div className='title'>{movie.Plot}</div>
          <div className='footer'>
            <span className='ratings'>{movie.imdbRating}</span>
            <button className='add-btn'>Favourites</button>
          </div>
        </div>
      </div>
    );
  }
}
