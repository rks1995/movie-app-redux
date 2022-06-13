// Action types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES';
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES';
export const SET_SHOW_FAVOURITES = 'SET_SHOW_FAVOURITES';

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

export { addMovies, addFavMovie, unFavMovie, setShowFavourites };
