import Footer from '../../components/footer/footer';
import { useNavigate } from 'react-router-dom';
import FilmsListMain from '../../components/films-list-main/films-list-main';
import GenreTabs from '../../components/genre-tabs/genre-tabs';
import { useAppSelector } from '../../hooks/useDispatch';
import Header from '../../components/header/header';
import { selectPromoFilm } from '../../store/promo-film-process/selectors';
import { selectFilms } from '../../store/films-process/selectors';
import MyListBtn from '../../components/my-list-btn/my-list-btn';


function MainPage(): JSX.Element {
  const navigate = useNavigate();

  const films = useAppSelector(selectFilms);
  const promoFilm = useAppSelector(selectPromoFilm);

  const playButtonClickHandler = () => {
    const path = '/player/1';
    navigate(path);
  };

  return (
    <>
      <section className="film-card" >
        <div className="film-card__bg">
          <img src={promoFilm.backgroundImage} alt={promoFilm.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header />

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promoFilm.posterImage} alt={promoFilm.name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm.genre}</span>
                <span className="film-card__year">{promoFilm.released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button" onClick={playButtonClickHandler}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <MyListBtn />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreTabs />


          <FilmsListMain films={films} />

        </section>

        <Footer />
      </div>
    </>
  );
}

export default MainPage;
