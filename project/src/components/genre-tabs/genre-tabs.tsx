import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { getGenres, getGenreUrl } from '../../utils/utils';
import { FILMS } from '../../mocks/films';
import { AppRoute } from '../../const';

const MAX_GENRES_COUNT = 9;

type GenreTabsProps = {
  genreName?: string;
}

function GenreTabs({ genreName }: GenreTabsProps): JSX.Element {
  const genres = getGenres(FILMS);

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
              to={getGenreUrl(genre)}
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
