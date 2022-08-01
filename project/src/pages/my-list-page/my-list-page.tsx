import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import { useAppSelector } from '../../hooks/useDispatch';
import FilmCard from '../../components/film-card/film-card';


function MyListPage(): JSX.Element {
  const favoriteFilmsLength = useAppSelector((state) => state.films).filter((filmA) => filmA.isFavorite).length;
  const films = useAppSelector((state) => state.films).filter((film) => film.isFavorite);
  const filmsList =
    films?.map((film, index) => (
      <FilmCard key={film.id}
        film={film}
        index={index}
      />
    ));

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{favoriteFilmsLength}</span></h1>
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

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          {filmsList}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default MyListPage;
