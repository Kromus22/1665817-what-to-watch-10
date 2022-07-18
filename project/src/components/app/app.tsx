import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import MyList from '../../pages/my-list-page/my-list-page';
import MoviePage from '../../pages/movie-page/movie-page';
import PlayerPage from '../../pages/player-page/player-page';
import EmptyPage from '../../pages/empty-page/empty-page';
import PrivateRoute from '../private-route/private-route';
import AddReviewPage from '../../pages/add-review-page/add-review-page';
import { Film } from '../../types/films';
import Overview from '../overview/overview';
import Details from '../details/details';
import Reviews from '../reviews/reviews';

type MainPageProps = {
  title: string;
  genre: string;
  releaseDate: number;
  films: Film[];
}

function App({ title, genre, releaseDate, films }: MainPageProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main}
          element={<MainPage title={title} genre={genre} releaseDate={releaseDate} films={films} />}
        />
        <Route path={AppRoute.SignIn}
          element={<LoginPage />}
        />
        <Route path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <MyList films={films} />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Film} element={<MoviePage films={films} />} />
        <Route path={AppRoute.Overview} element={<Overview films={films} />} />
        <Route path={AppRoute.Details} element={<Details films={films} />} />
        <Route path={AppRoute.Reviews} element={<Reviews films={films} />} />

        <Route path={AppRoute.AddReview}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <AddReviewPage films={films} />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Player} element={<PlayerPage films={films} />} />
        <Route path="*"
          element={<EmptyPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
