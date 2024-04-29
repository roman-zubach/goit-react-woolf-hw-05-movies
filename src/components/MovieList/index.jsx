import MoviesItem from './MoviesItem';

import './assets/index.css';

export const MovieList = ({ movies }) => {
  return (
    <ul className='movie-list'>
      {movies.map(({ id, title, poster_path }) =>
        <MoviesItem key={id} title={title} img={poster_path} id={id} />,
      )}
    </ul>
  );
};
