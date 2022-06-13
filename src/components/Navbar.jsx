import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { handleMovieSearch } from '../actions';

export default function Navbar(props) {
  const [inputText, setInputText] = useState('');
  const dispatch = useDispatch();

  const {
    search: {
      result: { Title, Poster, imdbRating },
      showSearchResult,
    },
  } = props;

  console.log(showSearchResult);
  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSearch = () => {
    dispatch(handleMovieSearch(inputText));
  };

  const handleAddMovie = (movie) => {
    dispatch({ type: 'ADD_MOVIE_TO_LIST', movie });
  };

  return (
    <div className='nav'>
      <div className='nav-item'>
        <div>
          <input
            className='search'
            type='text'
            placeholder='search movies'
            value={inputText}
            onChange={handleChange}
          />
          {showSearchResult && (
            <div className='show-result'>
              <div className='result-left'>
                <h2 className='title'>{Title}</h2>
                <img src={Poster} alt='movie-poster' width={150} />
              </div>
              <div className='result-right'>
                <p>Ratings : {imdbRating}</p>
                <button
                  className='add-to-movies-btn'
                  onClick={() => handleAddMovie(props.search.result)}
                >
                  Add to movies
                </button>
              </div>
            </div>
          )}
        </div>
        <button className='search-btn' onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
}
