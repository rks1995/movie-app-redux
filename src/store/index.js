import { createStore } from 'redux';

var initialState = {
  movies: [],
  favourites: [],
};

// Action types
const ADD_MOVIES = 'ADD_MOVIES';
const ADD_FAV = 'ADD_FAV';
const REMOVE_FAV = 'REMOVE_FAV';
//action creators
function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies,
  };
}

function addFavMovie(movie) {
  return {
    type: ADD_FAV,
    movie,
  };
}

function unFavMovie(movie) {
  return {
    type: REMOVE_FAV,
    movie,
  };
}

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        movies: action.movies,
      };
    case ADD_FAV:
      return {
        ...state,
        favourites: [...state.favourites, action.movie],
      };
    case REMOVE_FAV:
      const { movie } = action;
      const newFavorites = state.favourites.filter((item) => item !== movie);
      return {
        ...state,
        favourites: newFavorites,
      };

    default:
      return state;
  }
};

const store = createStore(reducers);

export { store, addMovies, addFavMovie, unFavMovie };
