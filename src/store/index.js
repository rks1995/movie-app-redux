import { createStore } from 'redux';

var initialState = {
  movies: [],
  favourites: [],
  showFavourites: false,
};

// Action types
const ADD_MOVIES = 'ADD_MOVIES';
const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES';
const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES';
const SET_SHOW_FAVOURITES = 'SET_SHOW_FAVOURITES';

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

//reducer will return a new state and re render the component
const reducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        movies: action.movies,
      };
    case ADD_TO_FAVOURITES:
      return {
        ...state,
        favourites: [...state.favourites, action.movie],
      };
    case REMOVE_FROM_FAVOURITES:
      const { movie } = action;
      const newFavorites = state.favourites.filter((item) => item !== movie);
      return {
        ...state,
        favourites: newFavorites,
      };

    case SET_SHOW_FAVOURITES:
      return {
        ...state,
        showFavourites: action.val,
      };

    default:
      return state;
  }
};

const store = createStore(reducers);

export { store, addMovies, addFavMovie, unFavMovie, setShowFavourites };
