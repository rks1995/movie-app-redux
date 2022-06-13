import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleMovieSearch } from '../actions';

export default function Navbar() {
  const [inputText, setInputText] = useState('');
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const { search } = store;

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSearch = () => {
    dispatch(handleMovieSearch(inputText));
  };

  return (
    <div className='nav'>
      <div className='nav-item'>
        <input
          className='search'
          type='text'
          placeholder='search movies'
          value={inputText}
          onChange={handleChange}
        />
        <button className='search-btn' onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
}
