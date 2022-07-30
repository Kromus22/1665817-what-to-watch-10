import { useAppDispatch, useAppSelector } from '../../hooks/useDispatch';
import { changeGenre } from '../../store/actions';
import GenreButton from '../genre-button/genre-button';
import { selectFilmGenres } from '../../store/select';

const MAX_GENRES_COUNT = 9;

function GenreTabs(): JSX.Element {
  const selectedGenre = useAppSelector((state) => state.genre);
  const genres = useAppSelector(selectFilmGenres);

  const dispatch = useAppDispatch();

  const onTabClickHandler = (evt: React.MouseEvent) => {
    const clickedGenre = evt.currentTarget.textContent;
    if (clickedGenre !== null) {
      dispatch(changeGenre(clickedGenre));
    }
  };

  const generateGenreTab =
    genres.map((genre) => (
      <GenreButton key={genre} genre={genre} isActive={selectedGenre === genre} onClick={onTabClickHandler} />
    )).slice(0, MAX_GENRES_COUNT);


  return (
    <ul className="catalog__genres-list">
      <GenreButton key={'All genres'} genre={'All genres'} isActive={selectedGenre === 'All genres'} onClick={onTabClickHandler} />
      {generateGenreTab}
    </ul>
  );
}

export default GenreTabs;
