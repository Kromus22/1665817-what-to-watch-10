import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/useDispatch';
import { getFavoriteFilms } from '../../store/films-process/selectors';
import { addToFavorite, fetchFavorites } from '../../store/api-actions';
import { getFilmStatus } from '../../store/film-process/selectors';
import { FavoriteData } from '../../types/favs-film-data';
import { getAuth } from '../../store/user-process/selectors';
import { AuthorizationStatus, AppRoute } from '../../const';
import { useNavigate } from 'react-router-dom';


type MyListBtnProps = {
  filmID: string;
}

function MyListBtn({ filmID }: MyListBtnProps): JSX.Element {

  const favoriteFilmsLength = useAppSelector(getFavoriteFilms).length;
  const dispatch = useAppDispatch();
  const filmStatus = useAppSelector(getFilmStatus);
  const authStatus = useAppSelector(getAuth);
  const navigate = useNavigate();

  const addToFavorites = () => {
    const data: FavoriteData = {
      id: String(filmID),
      status: filmStatus,
    };
    dispatch(addToFavorite(data));
  };

  const redirectToLoginClick = () => {
    const path = `${AppRoute.SignIn}`;
    navigate(path);
  };

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [filmStatus, dispatch]);

  const handleClickBtn = () => {
    if (authStatus === AuthorizationStatus.Auth) {
      return addToFavorites;
    }
    return redirectToLoginClick;
  };

  return (
    <button className="btn btn--list film-card__button" type="button" onClick={handleClickBtn()}>
      <svg viewBox="0 0 19 20" width="19" height="20">
        {
          filmStatus
            ? <use xlinkHref="#in-list" />
            : <use xlinkHref="#add" />
        }
      </svg>
      <span>My list</span>
      <span className="film-card__count">{
        authStatus === AuthorizationStatus.Auth ? favoriteFilmsLength : 0
      }
      </span>
    </button>
  );
}

export default MyListBtn;
