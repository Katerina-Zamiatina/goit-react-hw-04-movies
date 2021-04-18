import { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import Loader from 'react-loader-spinner';

import movieApi from '../../service/movieApi';

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const match = useRouteMatch();
  const { movieId } = match.params;

  useEffect(() => {
    fetchCast();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchCast = async () => {
    setLoading(true);
    try {
      const { results } = await movieApi.fetchMovieReviews(movieId);
      setReviews(results);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      {isLoading && (
        <Loader
          type="ThreeDots"
          color="#00BFFF"
          height={80}
          width={80}
          className="Loader"
        />
      )}
      <ul>
        {reviews.length > 0 ? (
          reviews.map(({ author, content, id }) => {
            return (
              <li key={id}>
                <h4>{author}</h4>
                <p>{content}</p>
              </li>
            );
          })
        ) : (
          <p>No reviews were left</p>
        )}
      </ul>
      {error && <h2>Something went wrong. Please try again later.</h2>}
    </>
  );
};

export default Review;
