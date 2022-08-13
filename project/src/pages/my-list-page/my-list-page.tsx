import Footer from '../../components/footer/footer';
import { useAppSelector } from '../../hooks/useDispatch';
import FilmCard from '../../components/film-card/film-card';
import Header from '../../components/header/header';
import { selectFavoriteFilms } from '../../store/films-process/selectors';


function MyListPage(): JSX.Element {
  const favoriteFilmsLength = useAppSelector(selectFavoriteFilms).length;
  const films = useAppSelector(selectFavoriteFilms);
  const filmsList =
    films?.map((film, index) => (
      <FilmCard key={film.id}
        film={film}
        index={index}
      />
    ));

  return (
    <div className="user-page">
      <Header
        isMyList
        favoriteCount={favoriteFilmsLength}
      />

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
