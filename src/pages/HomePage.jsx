import { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import MovieList from '../components/MovieList';
import movieApi from '../service/movieApi';

const HomePage = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTrends();
  }, []);

  const fetchTrends = async () => {
    setIsLoading(true);
    try {
      const movies = await movieApi.fetchTrendies();
      setTrendMovies(movies);
    } catch (error) {
      setError({ error });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <h1>Trend Movies</h1>
      {trendMovies ? (
        <MovieList movies={trendMovies} />
      ) : (
        <p>Something went wrong: {error.message}</p>
      )}
      {isLoading && (
        <Loader
          type="ThreeDots"
          color="#00BFFF"
          height={80}
          width={80}
          className="Loader"
        />
      )}
    </>
  );
};

export default HomePage;
