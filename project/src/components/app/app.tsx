import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import MyList from '../../pages/my-list-page/my-list-page';
import MoviePage from '../../pages/movie-page/movie-page';
import PlayerPage from '../../pages/player-page/player-page';
import EmptyPage from '../../pages/empty-page/empty-page';
import PrivateRoute from '../private-route/private-route';
import AddReviewPage from '../../pages/add-review-page/add-review-page';
import { useAppSelector } from '../../hooks/useDispatch';
import LoadingPage from '../../pages/loading-page/loading-page';
import { selectLoadingDataStatus } from '../../store/films-process/selectors';
import { selectAuth } from '../../store/user-process/selectors';


function App(): JSX.Element {
  const isDataLoaded = useAppSelector(selectLoadingDataStatus);
  const authorizationStatus = useAppSelector(selectAuth);

  if (isDataLoaded) {
    return <LoadingPage />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main}
          element={<MainPage />}
        />
        <Route path={AppRoute.SignIn} element={<LoginPage />} />
        <Route path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={authorizationStatus}
            >
              <MyList />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Film} element={<MoviePage />} />
        <Route path={AppRoute.AddReview}
          element={
            <PrivateRoute
              authorizationStatus={authorizationStatus}
            >
              <AddReviewPage />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Player} element={<PlayerPage />} />
        <Route path="*" element={<EmptyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
