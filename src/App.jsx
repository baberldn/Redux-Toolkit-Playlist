import { useState } from 'react';
import MoviePlaylist from './components/MoviePlaylist';
import SongPlaylist from './components/SongPlaylist';

export default function App() {
  const [movies, setMovies] = useState([]); 
  const [songs, setSongs] = useState([]); 

  const handleResetClick = () => {
    setMovies([]); 
    setSongs([]);  
  };

  return (
    <div className='container'>
      <button onClick={handleResetClick} className='button-clear'>
        Listeleri Sil
      </button>
      <hr />
      <MoviePlaylist movies={movies} setMovies={setMovies} />
      <hr />
      <SongPlaylist songs={songs} setSongs={setSongs} />
    </div>
  );
}
