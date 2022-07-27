import classNames from 'classnames';
import { Link, generatePath, useParams } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks/useDispatch';
import { useEffect } from 'react';
import { changeGenre } from '../../store/actions';
import { selectFilmGenres } from '../../store/select';

const MAX_GENRES_COUNT = 9;

function GenreTabs(): JSX.Element {
  const genres = useAppSelector(selectFilmGenres);
  const { genreName } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(changeGenre(genreName));
  }, [genreName, dispatch]);


  return (
    <ul className="catalog__genres-list">
      <li
        className={classNames(
          'catalog__genres-item',
          { 'catalog__genres-item--active': !genreName }
        )}
      >
        <Link
          to={AppRoute.Main}
          className="catalog__genres-link"
        >
          All genres
        </Link>
      </li>
      {
        genres.map((genre) => (
          <li
            key={genre}
            className={classNames(
              'catalog__genres-item',
              { 'catalog__genres-item--active': genreName === genre.toLowerCase() }
            )}
          >
            <Link
              to={generatePath('/genre/:id', { id: genre.toLowerCase() })}
              className="catalog__genres-link"
            >
              {genre}
            </Link>
          </li>
        )).slice(0, MAX_GENRES_COUNT)
      }
    </ul>
  );
}

export default GenreTabs;
