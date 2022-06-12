import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Navbar from './Navbar';
import { data } from '../data';
import MovieCard from './MovieCard';
function App() {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'ADD_MOVIES', movies: data });
  }, []);

  return (
    <div>
      <Navbar />
      <div className='movie-list-container'>
        <div className='tabs'>
          <div className='movies-tab'>Movies</div>
          <div className='favourite-tab'>Favourite</div>
        </div>
        <div className='movies-list'>
          {store.map((movie, index) => {
            return <MovieCard movie={movie} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
