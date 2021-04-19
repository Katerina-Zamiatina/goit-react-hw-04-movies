import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import queryString from 'query-string';
import movieApi from '../service/movieApi';
import Container from '../components/Container';
import Searchbar from '../components/SearchBar';
import MovieList from '../components/MovieList';
import LoadMoreButton from '../components/LoadMoreButton';

const MovieSearchPage = () => {
  const location = useLocation();
  const history = useHistory();
  const { search } = location;
  const initialQueryState = queryString.parse(search);

  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState(initialQueryState.query || '');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchQuery) return;
    fetchMovies();
    // eslint-disable-next-line
  }, [searchQuery]);

  const fetchMovies = async () => {
    setIsLoading(true);
    try {
      const results = await movieApi.fetchByQuery(searchQuery, currentPage);
      setMovies(prevMovies => [...prevMovies, ...results]);
      setCurrentPage(prevPage => prevPage + 1);
    } catch (error) {
      setError({ error });
    } finally {
      setIsLoading(false);
    }
  };

  const onChangeQuery = query => {
    setSearchQuery(query);
    setCurrentPage(1);
    setMovies([]);
    setError(null);
    history.push({ ...location, search: `query=${query}` });
  };

  const shouldRenderBtn = movies.length > 0 && !isLoading;

  return (
    <div>
      <Searchbar onSubmit={onChangeQuery} />
      <Container>
        {error && <p>Something went wrong: {error.message}</p>}
        <h1 className="Title">Search Results</h1>
        <MovieList movies={movies} />
        {isLoading && (
          <Loader
            type="ThreeDots"
            color="#4c4e59"
            height={80}
            width={80}
            className="Loader"
          />
        )}
        {shouldRenderBtn && <LoadMoreButton onClick={fetchMovies} />}
      </Container>
    </div>
  );
};

export default MovieSearchPage;
