import { useEffect, useState } from 'react';
import { searchMoviesApi } from '../../api/movie';
import { Loader } from '../../common/components';
import { MovieList, SearchForm } from '../../components';
import { useSearchParams } from 'react-router-dom';

import './assets/index.css';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') ?? '';

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      setMovies([]);

      if (!query) return;

      setIsLoading(true);
      setError('');

      try {
        const data = await searchMoviesApi(query);

        setMovies(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [query]);

  const updateSearch = (newValue) => {
    if (query === newValue) return;

    setSearchParams({ query: newValue });
  };

  return (
    <div className="search-movies">
      {error && <h1>{error}</h1>}
      <SearchForm onSubmit={updateSearch} defaultValue={query} />
      {isLoading && <Loader />}
      <MovieList movies={movies} />
    </div>
  );
};

export default Movies;
