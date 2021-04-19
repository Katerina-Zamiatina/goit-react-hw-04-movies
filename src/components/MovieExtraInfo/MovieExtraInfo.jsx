import { lazy, Suspense } from 'react';
import {
  Switch,
  NavLink,
  Route,
  useRouteMatch,
  useLocation,
} from 'react-router-dom';
import Loader from 'react-loader-spinner';

import routes from '../../routes';

const Cast = lazy(() => import('../Cast' /*webpackChunkName: "Cast" */));
const Reviews = lazy(() =>
  import('../Reviews' /*webpackChunkName: "Reviews" */),
);

const MovieExtraInfo = () => {
  const location = useLocation();

  const match = useRouteMatch();
  return (
    <>
      <section>
        <h4 className="ExtraTitle">Additional information</h4>
        <ul>
          <li>
            <NavLink
              activeStyle={{
                fontWeight: 'bold',
                color: '#2b2b2e',
              }}
              exact
              to={{
                pathname: `${match.url}/cast`,
                state: { from: location.state?.from },
              }}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              activeStyle={{
                fontWeight: 'bold',
                color: '#2b2b2e',
              }}
              exact
              to={{
                pathname: `${match.url}/reviews`,
                state: { from: location.state?.from },
              }}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
        <Suspense
          fallback={
            <Loader
              type="ThreeDots"
              color="#4c4e59"
              height={80}
              width={80}
              className="Loader"
            />
          }
        >
          <Switch>
            <Route
              exact
              path={`${match.path}${routes.cast}`}
              component={Cast}
            />
            <Route
              exact
              path={`${match.path}${routes.reviews}`}
              component={Reviews}
            />
          </Switch>
        </Suspense>
      </section>
    </>
  );
};

export default MovieExtraInfo;
