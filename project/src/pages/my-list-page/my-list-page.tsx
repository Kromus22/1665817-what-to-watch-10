import { useEffect } from 'react';
import Footer from '../../components/footer/footer';
import { useAppSelector, useAppDispatch } from '../../hooks/useDispatch';
import FilmCard from '../../components/film-card/film-card';
import Header from '../../components/header/header';
import { getFavoriteFilms } from '../../store/films-process/selectors';
import { fetchFavorites } from '../../store/api-actions';


function MyListPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const favoriteFilmsLength = useAppSelector(getFavoriteFilms).length;
  const favsFilms = useAppSelector(getFavoriteFilms);
  const filmsList =
    favsFilms?.map((film) => (
      <FilmCard key={film.id}
        film={film}
      />
    ));

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

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
