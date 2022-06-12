import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Navbar from './Navbar';
import { data } from '../data';
import MovieCard from './MovieCard';
import { addMovies } from '../store';

function App() {
  //useSelector allows you to extract data from the redux store
  // useDispatch returns a reference to the dispatch function from the Redux store. You may use it to dispatch actions as needed
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  const { movies } = store;

  useEffect(() => {
    console.log('useeffect');
    dispatch(addMovies(data));
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <div className='movie-list-container'>
        <div className='tabs'>
          <div className='movies-tab'>Movies</div>
          <div className='favourite-tab'>Favourite</div>
        </div>
        <div className='movies-list'>
          {movies.map((movie, index) => {
            return <MovieCard movie={movie} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
