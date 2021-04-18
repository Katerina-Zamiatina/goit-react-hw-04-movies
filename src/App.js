import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import AppBar from './components/AppBar';
import routes from './routes';

const HomePage = lazy(() =>
  import('./pages/HomePage' /* webpackChunkName: "HomePage" */),
);
const MovieDetailsPage = lazy(() =>
  import('./pages/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */),
);
const MovieSearchPage = lazy(() =>
  import('./pages/MovieSearchPage' /* webpackChunkName: "MovieSearchPage" */),
);
const NotFoundPage = lazy(() =>
  import('./pages/NotFoundPage' /* webpackChunkName: "NotFoundPage" */),
);

function App() {
  return (
    <>
      <AppBar />
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
          <Route exact path={routes.home} component={HomePage} />
          <Route path={routes.movieDetails} component={MovieDetailsPage} />
          <Route path={routes.movie} component={MovieSearchPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
