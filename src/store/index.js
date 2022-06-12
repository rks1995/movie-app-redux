import { createStore } from 'redux';

var initialState = {
  movies: [],
  favourites: [],
};

// Action types
const ADD_MOVIES = 'ADD_MOVIES';
const ADD_FAV = 'ADD_FAV';

//action creators
function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies,
  };
}

function addFavourites(movie) {
  return {
    type: ADD_FAV,
    movie,
  };
}

const reducers = (state = initialState, action) => {
  if (action.type === ADD_MOVIES) {
    return {
      ...state,
      movies: action.movies,
    };
  }
  if (action.type === ADD_FAV) {
    return {
      ...state,
      favourites: [...state.favourites, action.movie],
    };
  }

  return state;
};

const store = createStore(reducers);

export { store, addMovies, addFavourites };
