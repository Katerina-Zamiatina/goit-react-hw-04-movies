import PropTypes from 'prop-types';
import defaultImg from '../../images/defaultImg.jpeg';

const MoviePreview = ({ movie }) => {
  const { backdrop_path, title, release_date, vote_average } = movie;

  const imgURL = backdrop_path
    ? `https://image.tmdb.org/t/p/w500/${backdrop_path}`
    : defaultImg;
  const year = release_date.slice(0, 4);

  return (
    <div>
      <img className="MovieListItem-image" src={imgURL} alt="" />
      <p className="MovieTitle">{`${title}(${year})`}</p>
      <span>{vote_average}</span>
    </div>
  );
};

MoviePreview.defaultProps = {
  movie: PropTypes.shape({
    release_date: '',
    vote_average: 0,
    backdrop_path: defaultImg,
  }),
};

MoviePreview.propTypes = {
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

export default MoviePreview;
