import SimilarFilms from '../../components/similar-films/similar-films';
import Footer from '../../components/footer/footer';
import { useParams, useNavigate } from 'react-router-dom';
import Overview from '../../components/overview/overview';
import Details from '../../components/details/details';
import Reviews from '../../components/reviews/reviews';
import { Tab } from '../../const';
import { getTab } from '../../utils/utils';
import Tabs from '../../components/tabs/tabs';
import { useAppSelector, useAppDispatch } from '../../hooks/useDispatch';
import Header from '../../components/header/header';
import { fetchFilm, fetchSimilarFilms, fetchFilmComments } from '../../store/api-actions';
import { useEffect } from 'react';
import AddReviewButton from '../../components/add-review-btn/add-review-btn';
import { AuthorizationStatus } from '../../const';
import EmptyPage from '../empty-page/empty-page';
import { selectAuth } from '../../store/user-process/selectors';
import { selectFilm, selectComments, selectSimilarFilms } from '../../store/film-process/selectors';
import MyListBtn from '../../components/my-list-btn/my-list-btn';


function MoviePage(): JSX.Element {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(selectAuth);
  const filmComments = useAppSelector(selectComments);
  const film = useAppSelector(selectFilm);
  const similarFilms = useAppSelector(selectSimilarFilms);

  useEffect(() => {
    if (params.id) {
      dispatch(fetchFilm(params.id));
      dispatch(fetchSimilarFilms(params.id));
      dispatch(fetchFilmComments(params.id));
    }
  }, [dispatch, params.id]);

  const onPlayButtonClickHandler = () => {
    const path = `/player/${film.id}`;
    navigate(path);
  };

  const tab = getTab();

  const bckgColor = {
    backgroundColor: `${film?.backgroundColor}`
  };

  if (!film.name) {
    return <EmptyPage />;
  }

  return (
    <>

      <section className="film-card film-card--full" style={bckgColor}>
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header />

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button" onClick={onPlayButtonClickHandler}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <MyListBtn />
                {authStatus === AuthorizationStatus.Auth ? <AddReviewButton id={film.id} /> : null}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.posterImage} alt={film.name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <Tabs />

              {
                tab === Tab.Overview &&
                <Overview film={film} />
              }

              {
                tab === Tab.Details &&
                <Details film={film} />
              }

              {
                tab === Tab.Reviews &&
                <Reviews reviews={filmComments} />
              }
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">

        <SimilarFilms similarFilms={similarFilms} />

        <Footer />
      </div>
    </>
  );
}

export default MoviePage;
