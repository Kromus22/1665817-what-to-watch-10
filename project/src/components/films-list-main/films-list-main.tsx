import FilmCard from '../film-card/film-card';
import { useAppSelector, useAppDispatch } from '../../hooks/useDispatch';
import ShowMoreButton from '../show-more-button/show-more-button';
import { CARDS_PER_STEP, DEFAULT_GENRE } from '../../const';
import { showMore } from '../../store/actions';
import { Film } from '../../types/films';
import { getGenre, getRenderedFilmCount } from '../../store/films-process/selectors';
import { useMemo } from 'react';


function FilmsListMain({ films }: { films: Film[] }): JSX.Element {
  const dispatch = useAppDispatch();
  const selectedGenre = useAppSelector(getGenre);
  const renderedFilmCount = useAppSelector(getRenderedFilmCount);
  const sortedFilms = films.filter((film) => selectedGenre === DEFAULT_GENRE ? films : film.genre === selectedGenre);

  const handleOnShowMoreBtnClick = () => {
    dispatch(showMore(renderedFilmCount + CARDS_PER_STEP));
  };

  const isShowBtn = renderedFilmCount < sortedFilms.length;

  const filmsList = useMemo(() =>
    sortedFilms?.slice(0, renderedFilmCount).map((film) => (
      <FilmCard key={film.id}
        film={film}
      />
    )), [renderedFilmCount, sortedFilms]);

  return (
    <>
      <div className="catalog__films-list">
        {filmsList}
      </div>
      {
        isShowBtn &&
        <ShowMoreButton onClick={handleOnShowMoreBtnClick} />
      }
    </>
  );
}

export default FilmsListMain;
