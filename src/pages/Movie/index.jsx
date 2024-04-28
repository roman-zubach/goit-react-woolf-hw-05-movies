import { MovieDetails } from '../../components';
import { Link, useLocation, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { getMovieApi } from '../../api/movie';
import { Loader } from '../../common/components';
import { ReactComponent as Icon } from './assets/left-arrow.svg';

import './assets/index.css';

const Movie = () => {
  const { movieId } = useParams();
  const { state } = useLocation();

  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMovie = async () => {
      setIsLoading(true);
      setError('');

      try {
        const data = await getMovieApi(movieId);

        setMovie(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovie();
  }, [movieId]);

  return (
    <div className='movie'>
      <Link className='movie-go-back-link' to={state ?? '/'}>
        <Icon width="32" height="32" /> Go back
      </Link>
      {error && <h1>{error}</h1>}
      {isLoading && <Loader />}
      { movie && <MovieDetails movie={movie} />}
    </div>
  );
};

export default Movie;
