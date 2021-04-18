import { lazy, Suspense } from 'react';
import { Switch, NavLink, Route, useRouteMatch } from 'react-router-dom';
import Loader from 'react-loader-spinner';

import routes from '../../routes';

const Cast = lazy(() => import('../Cast' /*webpackChunkName: "Cast" */));
const Reviews = lazy(() =>
  import('../Reviews' /*webpackChunkName: "Reviews" */),
);

const MovieExtraInfo = () => {
  const match = useRouteMatch();
  return (
    <>
      <section>
        <h4>Additional information</h4>
        <ul>
          <li>
            <NavLink exact to={`${match.url}/cast`}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink exact to={`${match.url}/reviews`}>
              Reviews
            </NavLink>
          </li>
        </ul>
        <Suspense
          fallback={
            <Loader
              type="ThreeDots"
              color="#00BFFF"
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
