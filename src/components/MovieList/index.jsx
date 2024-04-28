import MoviesItem from './MoviesItem';
import { useLocation, useNavigate } from 'react-router-dom';

import './assets/index.css';

export const MovieList = ({ movies }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const showMovie = (id) => {
    navigate(`/movies/${id}`, { state: location });
  };

  return (
    <ul className='movie-list'>
      {movies.map(({ id, title, poster_path }) =>
        <MoviesItem key={id} title={title} img={poster_path} onClick={() => showMovie(id)} />,
      )}
    </ul>
  );
};
