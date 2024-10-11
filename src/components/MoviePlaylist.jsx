import { createRandomMovie } from '../data';

function MoviePlaylist({ movies, setMovies }) {
  const handleMovieAdd = (movie) => {
    setMovies((pre) => [...pre, movie]); 
  };

  const handleMovieRemove = (movie) => {
    setMovies((pre) => pre.filter((m) => m !== movie)); kaldır
  };

  const renderedMovies = movies.map((movie) => {
    return (
      <li key={movie}>
        {movie}
        <button onClick={() => handleMovieRemove(movie)} className='button'>
          X
        </button>
      </li>
    );
  });

  return (
    <div className='content'>
      <div className='table-header'>
        <h3 className='subtitle'>Film Listesi</h3>
        <div className='buttons'>
          <button
            onClick={() => handleMovieAdd(createRandomMovie())}
            className='button'
          >
            + Listeye Film Ekle
          </button>
        </div>
      </div>
      <ul>{renderedMovies}</ul>
    </div>
  );
}

export default MoviePlaylist;
