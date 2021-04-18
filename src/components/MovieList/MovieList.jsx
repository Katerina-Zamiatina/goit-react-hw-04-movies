import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import MoviePreview from '../MoviePreview/MoviePreview';
import Container from '../Container';
import routes from '../../routes';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <Container>
      <ul className="MovieList">
        {movies.map(movie => (
          <li className="MovieListItem" key={movie.id}>
            <Link
              to={{
                pathname: `${routes.movies}/${movie.id}`,
                state: {
                  from: location,
                },
              }}
            >
              <MoviePreview movie={movie} />
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    }),
  ),
  // location: PropTypes.object.isRequired,
};

export default MovieList;
