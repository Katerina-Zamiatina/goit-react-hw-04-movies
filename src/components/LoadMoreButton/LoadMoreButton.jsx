import PropTypes from 'prop-types';

const LoadMoreButton = ({ onClick }) => (
  <button type="button" className="Button" onClick={onClick}>
    Load more
  </button>
);

LoadMoreButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default LoadMoreButton;
