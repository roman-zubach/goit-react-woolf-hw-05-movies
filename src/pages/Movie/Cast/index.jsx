import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCastApi } from '../../../api/movie';
import { Loader } from '../../../common/components';
import { CastList } from '../../../components';

import './assets/index.css'

const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCast = async () => {
      setIsLoading(true);
      setError('');

      try {
        const data = await getMovieCastApi(movieId);

        setCast(data.cast);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCast();
  }, [movieId]);

  return (
    <div className='cast'>
      {error && <h1>{error}</h1>}
      {isLoading ? <Loader /> : <CastList casts={cast} />}
    </div>
  );
};

export default Cast;
