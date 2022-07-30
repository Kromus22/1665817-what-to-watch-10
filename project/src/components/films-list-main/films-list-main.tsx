import FilmCard from '../film-card/film-card';
import { useAppSelector } from '../../hooks/useDispatch';
import ShowMoreButton from '../show-more-button/show-more-button';
import { DEFAULT_SHOW_CARDS } from '../../const';
import { useState } from 'react';


function FilmsListMain(): JSX.Element {
  const [showCount, setShowCount] = useState<number>(DEFAULT_SHOW_CARDS);

  const films = useAppSelector((state) => state.films);
  const selectedGenre = useAppSelector((state) => state.genre);
  const sortedFilms = films.filter((film) => selectedGenre === 'All genres' ? films : film.genre === selectedGenre);

  const filmsList =
    sortedFilms?.map((film, index) => (
      <FilmCard key={film.id}
        film={film}
        index={index}
      />
    ));

  const getFilmsList = () =>
    filmsList.slice(0, showCount);

  return (
    <>
      <div className="catalog__films-list">
        {getFilmsList()}
      </div>
      {
        sortedFilms.length > DEFAULT_SHOW_CARDS &&
        <ShowMoreButton showCount={showCount}
          changeShowCount={setShowCount}
        />
      }
    </>
  );
}

export default FilmsListMain;
