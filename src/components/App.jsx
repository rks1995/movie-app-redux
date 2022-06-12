import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import MovieCard from './MovieCard';

import { data } from '../data';
import { addMovies, setShowFavourites } from '../actions';

function App(props) {
  //useSelector allows you to extract data from the redux store
  // useDispatch returns a reference to the dispatch function from the Redux store. You may use it to dispatch actions as needed
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  //show favourites tells which tab we currently are.
  const {
    movies: { movies, favourites, showFavourites },
    search,
  } = store;

  useEffect(() => {
    console.log('useeffect');
    dispatch(addMovies(data));
  }, [dispatch]);

  // function to check if the movie is in the favourite list or not
  const isMovieFavourite = (movie) => {
    const index = favourites.indexOf(movie);

    if (index === -1) return false;
    return true;
  };

  const displayMovies = showFavourites ? favourites : movies;

  return (
    <div>
      <Navbar />
      <div className='movie-list-container'>
        <div className='tabs'>
          <Link
            to='/'
            className={`movies-tab ${!showFavourites && 'active-tabs'}`}
            onClick={() => dispatch(setShowFavourites(false))}
          >
            Movies
          </Link>
          <Link
            to='/favourite'
            className={`favourite-tab ${showFavourites && 'active-tabs'}`}
            onClick={() => dispatch(setShowFavourites(true))}
          >
            Favourite
          </Link>
        </div>
        <div className='movies-list'>
          {displayMovies.map((movie, index) => {
            return (
              <MovieCard
                movie={movie}
                key={index}
                isMovieFavourite={isMovieFavourite}
              />
            );
          })}
          {displayMovies.length === 0 && (
            <div className='no-movies'>No Movies in Favourites!</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
