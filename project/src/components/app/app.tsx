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

type MainPageProps = {
  title: string;
  genre: string;
  releaseDate: number;
  films: Film[];
  similarFilms: Film[];
}

function App({ title, genre, releaseDate, films, similarFilms }: MainPageProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main}
          element={<MainPage title={title} genre={genre} releaseDate={releaseDate} films={films} />}
        />
        <Route path={AppRoute.Genre.path}
          element={<MainPage title={title} genre={genre} releaseDate={releaseDate} films={films} />}
        />
        <Route path={AppRoute.SignIn} element={<LoginPage />} />
        <Route path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <MyList films={films} />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Film} element={<MoviePage similarFilms={similarFilms} />} />
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
        <Route path="*" element={<EmptyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
