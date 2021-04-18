import PropTypes from 'prop-types';

const GoBackButton = ({ goBack }) => (
  <button className="Button" onClick={goBack}>
    Go Back
  </button>
);

GoBackButton.propTypes = {
  goBack: PropTypes.func.isRequired,
};

export default GoBackButton;
