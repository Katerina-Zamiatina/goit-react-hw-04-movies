import { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import Actor from '../Actor';
import Container from '../Container';
import movieApi from '../../service/movieApi';
import Loader from 'react-loader-spinner';
import styles from '../Actor/Actor.module.css';

const Cast = () => {
  const [actors, setActors] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const match = useRouteMatch();
  const { movieId } = match.params;

  useEffect(() => {
    fetchCast();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchCast = async () => {
    setLoading(true);
    try {
      const { cast } = await movieApi.fetchMovieCast(movieId);
      setActors(cast);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      {isLoading && (
        <Loader
          type="ThreeDots"
          color="#4c4e59"
          height={80}
          width={80}
          className="Loader"
        />
      )}
      {actors.length > 0 ? (
        <ul className={styles.Cast}>
          {actors.map(({ id, profile_path, name, character }) => {
            return (
              <li className={styles.ActorCard} key={id}>
                <Actor photo={profile_path} name={name} character={character} />
              </li>
            );
          })}
        </ul>
      ) : (
        <p className={styles.Name}>No information about cast of this film</p>
      )}
      {error && <h2>Something went wrong. Please try again later.</h2>}
    </Container>
  );
};

export default Cast;
