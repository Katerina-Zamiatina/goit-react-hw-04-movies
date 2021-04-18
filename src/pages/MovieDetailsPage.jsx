import { useState, useEffect } from 'react';
import { useHistory, useRouteMatch, useLocation } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import movieApi from '../service/movieApi';
import MovieListItem from '../components/MovieListItem';
import GoBackButton from '../components/GoBackButton';
import routes from '../routes';

const MovieDetailsPage = () => {
  const match = useRouteMatch();
  const location = useLocation();
  const { push } = useHistory();

  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMovieById();
    // eslint-disable-next-line
  }, []);

  const fetchMovieById = async () => {
    const { movieId } = match.params;
    setIsLoading(true);
    try {
      const resMovie = await movieApi.fetchById(`${movieId}`);
      setMovie(resMovie);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoBack = () => {
    push(location?.state?.from || routes.movies);
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
      <GoBackButton goBack={handleGoBack} />
      {movie && <MovieListItem movie={movie}></MovieListItem>}
      {error && <p>Something went wrong: {error.message}</p>}
    </>
  );
};

export default MovieDetailsPage;
