import { useState } from 'react';
import FilmCard from '../film-card/film-card';
import { useAppSelector } from '../../hooks/useDispatch';


function FilmsList(): JSX.Element {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const films = useAppSelector((state) => state.films);

  const handleSetActive = (id: number) =>
    setActiveCard(id);

  const handleSetNoActive = () =>
    setActiveCard(null);

  const filmsList =
    films?.map((film) => (
      <FilmCard key={film.id}
        film={film}
        activeCard={activeCard}
        onMouseEnter={handleSetActive}
        onMouseLeave={handleSetNoActive}
      />
    ));

  return (
    <div className="catalog__films-list">
      {filmsList}
    </div>
  );
}

export default FilmsList;
