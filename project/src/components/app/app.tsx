import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import MyList from '../../pages/my-list-page/my-list-page';
import MoviePage from '../../pages/movie-page/movie-page';
import MovieReviewsPage from '../../pages/movie-reviews-page/movie-reviews-page';
import PlayerPage from '../../pages/player-page/player-page';
import EmptyPage from '../../pages/empty-page/empty-page';
import PrivateRoute from '../private-route/private-route';

type MainPageProps = {
  title: string;
  genre: string;
  releaseDate: number;
}

function App({ title, genre, releaseDate }: MainPageProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main}
          element={<MainPage title={title} genre={genre} releaseDate={releaseDate} />}
        />
        <Route path={AppRoute.SignIn}
          element={<LoginPage />}
        />
        <Route path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <MyList />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Film}
          element={<MoviePage title={title} genre={genre} releaseDate={releaseDate} />}
        />
        <Route path={AppRoute.AddReview}
          element={<MovieReviewsPage title={title} genre={genre} releaseDate={releaseDate} />}
        />
        <Route path={AppRoute.Player}
          element={<PlayerPage />}
        />
        <Route path="*"
          element={<EmptyPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
