import { useEffect, useState } from 'react';
import { getTrendingApi } from '../../api/movie';
import { Loader } from '../../common/components';
import { MovieList } from '../../components';

import './assets/index.css';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTrending = async () => {
      setIsLoading(true);
      setError('');

      try {
        const data = await getTrendingApi();

        setMovies(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchTrending();
  }, []);

  return (
    <div className='home'>
      {error && <h1>{error}</h1>}
      <h2 className='home-title'>Trending today</h2>
      {isLoading && <Loader />}
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
