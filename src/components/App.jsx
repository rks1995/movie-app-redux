import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import FavCard from './FavCard';

import { data } from '../data';
import { addMovies } from '../store';

function App() {
  //useSelector allows you to extract data from the redux store
  // useDispatch returns a reference to the dispatch function from the Redux store. You may use it to dispatch actions as needed
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  const { movies, favourites } = store;

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

  return (
    <div>
      <Navbar />
      <div className='movie-list-container'>
        <div className='tabs'>
          <Link to='/' className='movies-tab'>
            Movies
          </Link>
          <Link to='favourite' className='favourite-tab'>
            Favourite
          </Link>
        </div>
        <div className='movies-list'>
          {movies.map((movie, index) => {
            return (
              <MovieCard
                movie={movie}
                key={index}
                isMovieFavourite={isMovieFavourite}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
