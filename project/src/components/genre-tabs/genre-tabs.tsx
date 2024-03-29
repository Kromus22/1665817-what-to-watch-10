import { useAppDispatch, useAppSelector } from '../../hooks/useDispatch';
import { changeGenre } from '../../store/actions';
import GenreButton from '../genre-button/genre-button';
import { getFilmGenres, getGenre } from '../../store/films-process/selectors';
import { MAX_GENRES_COUNT } from '../../const';

function GenreTabs(): JSX.Element {
  const selectedGenre = useAppSelector(getGenre);
  const genres = useAppSelector(getFilmGenres);

  const dispatch = useAppDispatch();

  const handleOnTabClick = (evt: React.MouseEvent) => {
    const clickedGenre = evt.currentTarget.textContent;
    if (clickedGenre !== null) {
      dispatch(changeGenre(clickedGenre));
    }
  };


  const generateGenreTab =
    genres.map((genre) => (
      <GenreButton key={genre} genre={genre} isActive={selectedGenre === genre} onClick={handleOnTabClick} />
    )).slice(0, MAX_GENRES_COUNT);


  return (
    <ul className="catalog__genres-list">
      {generateGenreTab}
    </ul>
  );
}

export default GenreTabs;
