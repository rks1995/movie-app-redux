import Navbar from './Navbar';
import { data } from '../data';
import MovieCard from './MovieCard';
function App() {
  return (
    <div>
      <Navbar />
      <div className='movie-list-container'>
        <div className='tabs'>
          <div className='movies-tab'>Movies</div>
          <div className='favourite-tab'>Favourite</div>
        </div>
        <div className='movies-list'>
          {data.map((movie) => {
            return <MovieCard movie={movie} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
