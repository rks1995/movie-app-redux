import axios from 'axios';
// Action types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES';
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES';
export const SET_SHOW_FAVOURITES = 'SET_SHOW_FAVOURITES';
export const FETCH_MOVIE_API = 'FETCH_MOVIE_API';

//action creators this function will be called as parameter in dispatch function to trigger reducers
function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies,
  };
}

function addFavMovie(movie) {
  return {
    type: ADD_TO_FAVOURITES,
    movie,
  };
}

function unFavMovie(movie) {
  return {
    type: REMOVE_FROM_FAVOURITES,
    movie,
  };
}

function setShowFavourites(val) {
  return {
    type: SET_SHOW_FAVOURITES,
    val,
  };
}

function handleMovieSearch(movieName) {
  const url = `https://www.omdbapi.com/?apikey=7171195a&t=${movieName}`;

  return function thunkFn(dispatch) {
    axios(url).then((response) => {
      console.log(response.data);
      dispatch(updateSearchResult(response.data));
    });
  };
}

function updateSearchResult(movie) {
  return {
    type: FETCH_MOVIE_API,
    movie,
  };
}

export {
  addMovies,
  addFavMovie,
  unFavMovie,
  setShowFavourites,
  handleMovieSearch,
};
