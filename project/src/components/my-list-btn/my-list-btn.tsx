import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/useDispatch';
import { selectFavoriteFilms } from '../../store/films-process/selectors';
import { selectFilm } from '../../store/film-process/selectors';
import { addToFavorite, fetchFavorites } from '../../store/api-actions';


function MyListBtn(): JSX.Element {

  const favoriteFilmsLength = useAppSelector(selectFavoriteFilms).length;
  const film = useAppSelector(selectFilm);
  const dispatch = useAppDispatch();
  const { id, isFavorite } = film;

  const handleAddToFavorite = () => {
    const status = +!isFavorite;
    dispatch(addToFavorite({ id, status }));
  };

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

  return (
    <button className="btn btn--list film-card__button" type="button" onClick={handleAddToFavorite}>
      <svg viewBox="0 0 19 20" width="19" height="20">
        {
          isFavorite
            ? <use xlinkHref="#in-list" />
            : <use xlinkHref="#add" />
        }
      </svg>
      <span>My list</span>
      <span className="film-card__count">{favoriteFilmsLength}</span>
    </button>
  );
}

export default MyListBtn;
