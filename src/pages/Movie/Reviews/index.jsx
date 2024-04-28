import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieReviewsApi } from '../../../api/movie';
import { Loader } from '../../../common/components';
import { ReviewList } from '../../../components';

const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchReviews = async () => {
      setIsLoading(true);
      setError('');

      try {
        const data = await getMovieReviewsApi(movieId);

        setReviews(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, [movieId]);

  return (
    <div className="cast">
      {error && <h1>{error}</h1>}
      {isLoading ? (
        <Loader />
      ) : reviews.length > 0 ? (
        <ReviewList items={reviews} />
      ) : (
        <p>No reviews found for this movie.</p>
      )}
    </div>
  );
};

export default Reviews;
