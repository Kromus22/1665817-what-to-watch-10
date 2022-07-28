import { useAppDispatch, useAppSelector } from '../../hooks/useDispatch';
import { changeGenre } from '../../store/actions';
import { GENRE_TABS } from '../../const';
import GenreButton from '../genre-button/genre-button';

const MAX_GENRES_COUNT = 9;

function GenreTabs(): JSX.Element {
  const selectedGenre = useAppSelector((state) => state.genre);

  const dispatch = useAppDispatch();

  const onTabClickHandler = (evt: React.MouseEvent) => {
    const clickedGenre = evt.currentTarget.textContent;
    if (clickedGenre !== null) {
      dispatch(changeGenre(clickedGenre));
    }
  };

  const generateGenreTab =
    GENRE_TABS.map((genre) => (
      <GenreButton key={genre} genre={genre} isActive={selectedGenre === genre} onClick={onTabClickHandler} />
    )).slice(0, MAX_GENRES_COUNT);


  return (
    <ul className="catalog__genres-list">
      {generateGenreTab}
    </ul>
  );
}

export default GenreTabs;
