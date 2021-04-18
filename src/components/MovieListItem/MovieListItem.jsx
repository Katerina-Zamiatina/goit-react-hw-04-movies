import PropTypes from 'prop-types';
import MovieExtraInfo from '../MovieExtraInfo';
import defaultImg from '../../images/defaultImg.jpeg';

const MovieListItem = ({ movie }) => {
  const {
    poster_path,
    title,
    release_date,
    vote_average,
    overview,
    genres,
  } = movie;

  const imgURL = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : defaultImg;

  const userScore = vote_average * 10;
  const movieGenres = genres.map(genre => genre.name + ' ');
  const year = release_date.slice(0, 4);

  return (
    <article>
      <div className="MovieCard">
        <div>
          <img src={imgURL} alt={title} />
        </div>
        <div>
          <p className="MovieTitle">{`${title} (${year})`}</p>
          <span className="MovieScore">User score : {userScore}%</span>
          <p>Overview: {overview}</p>
          <p>Genres: {movieGenres}</p>
        </div>
      </div>

      <MovieExtraInfo />
    </article>
  );
};

MovieListItem.defaultProps = {
  movie: PropTypes.shape({
    release_date: '',
    vote_average: 0,
    poster_path: defaultImg,
    overview: '',
    genres: [],
  }),
};

MovieListItem.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    poster_path: PropTypes.string,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      }),
    ),
  }),
};

export default MovieListItem;
