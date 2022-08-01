import SimilarFilms from '../../components/similar-films/similar-films';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import { useParams, useNavigate, Link, Navigate } from 'react-router-dom';
import Overview from '../../components/overview/overview';
import Details from '../../components/details/details';
import Reviews from '../../components/reviews/reviews';
import { Tab } from '../../const';
import { getTab } from '../../utils/utils';
import Tabs from '../../components/tabs/tabs';
import { useAppSelector } from '../../hooks/useDispatch';

const MAX_SIMILAR_FILMS_COUNT = 4;


function MoviePage(): JSX.Element {
  const navigate = useNavigate();
  const params = useParams();
  const films = useAppSelector((state) => state.films);
  const film = films.find((filmA) => String(filmA.id) === params.id);
  const favoriteFilmsLength = useAppSelector((state) => state.films).filter((filmA) => filmA.isFavorite).length;
  const similarFilms = films.filter((filmA) => (filmA.genre === film?.genre) && filmA.id !== film?.id).slice(0, MAX_SIMILAR_FILMS_COUNT);

  // if (!film) {
  //   return <Navigate to={'*'} />;
  // }

  const onPlayButtonClickHandler = () => {
    const path = `/player/${film?.id}`;
    navigate(path);
  };

  const onMyListButtonClickHandler = () => {
    const path = '/mylist';
    navigate(path);
  };

  const tab = getTab();

  const bckgColor = {
    backgroundColor: `${film?.backgroundColor}`
  };

  return (
    <body>

      <section className="film-card film-card--full" style={bckgColor}>
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film?.backgroundImage} alt={film?.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo />

            <ul className="user-block">
              <li className="user-block__item">
                <div className="user-block__avatar">
                  <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
                </div>
              </li>
              <li className="user-block__item">
                <a href="#section" className="user-block__link">Sign out</a>
              </li>
            </ul>
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film?.genre}</span>
                <span className="film-card__year">{film?.released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button" onClick={onPlayButtonClickHandler}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button" onClick={onMyListButtonClickHandler}>
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">{favoriteFilmsLength}</span>
                </button>
                <Link to={`/films/${film?.id}/review`} className="btn film-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film?.posterImage} alt={film?.name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <Tabs />

              {
                tab === Tab.Overview &&
                <Overview film={film || null} />
              }

              {
                tab === Tab.Details &&
                <Details film={film || null} />
              }

              {
                tab === Tab.Reviews &&
                <Reviews />
              }
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">

        <SimilarFilms similarFilms={similarFilms} />

        <Footer />
      </div>
    </body>
  );
}

export default MoviePage;
