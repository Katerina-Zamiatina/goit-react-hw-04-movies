import PropTypes from 'prop-types';
import defaultAvatar from '../../images/defaultAvatar.png';
import styles from './Actor.module.css';

const Actor = ({ photo, name, character }) => {
  const actorImgUrl = photo
    ? `https://image.tmdb.org/t/p/w300${photo}`
    : defaultAvatar;

  return (
    <>
      <img className={styles.Avatar} src={actorImgUrl} alt={name} />
      <p className={styles.Name}>{name}</p>
      <p className={styles.Name}>Character: {character}</p>
    </>
  );
};

Actor.dedaultProps = {
  photo: defaultAvatar,
};

Actor.propTypes = {
  photo: PropTypes.string,
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
};

export default Actor;
