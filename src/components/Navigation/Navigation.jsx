import { NavLink } from 'react-router-dom';
import routes from '../../routes';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            exact
            to={routes.home}
            activeStyle={{
              fontSize: 24,
              fontWeight: 'bold',
              color: '#2b2b2e',
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={routes.movies}
            className="NavLink"
            activeStyle={{
              fontSize: 24,
              fontWeight: 'bold',
              color: '#2b2b2e',
            }}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
