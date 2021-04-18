import defaultAvatar from '../../images/defaultAvatar.png';
import styles from './Actor.module.css';

const Actor = ({ photo, name, character }) => {
  const actorImgUrl = photo
    ? `https://image.tmdb.org/t/p/w300${photo}`
    : defaultAvatar;

  return (
    <>
      <img className={styles.Avatar} src={actorImgUrl} alt={name} />
      <p>{name}</p>
      <p>Character: {character}</p>
    </>
  );
};

export default Actor;
