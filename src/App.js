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
// const Cast = lazy(() =>
//   import('./components/Cast' /*webpackChunkName: "Cast" */),
// );
// const Reviews = lazy(() =>
//   import('./components/Reviews' /*webpackChunkName: "Reviews" */),
// );

function App() {
  return (
    <>
      <AppBar />
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
          <Route exact path={routes.home} component={HomePage} />
          <Route path={routes.movieDetails} component={MovieDetailsPage} />
          {/* <Route
            path={routes.movieDetails}
            component={MovieDetailsPage}
            render={({ match: { url } }) => (
              <>
                <Route path={`${url}${routes.cast}`} component={Cast} />
                <Route path={`${url}${routes.reviews}`} component={Reviews} />
              </>
            )}
          ></Route> */}
          <Route path={routes.movie} component={MovieSearchPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
