import { Film } from '../../types/films';
import FilmCard from '../film-card/film-card';

type FilmListProps = {
  films: Film[];
}

function SimilarFilmsList({ films }: FilmListProps): JSX.Element {
  const filmsList =
    films.map((film, index) => (
      <FilmCard key={film.id} film={film} index={index} />
    ));

  return (
    <div className="catalog__films-list">
      {filmsList}
    </div>
  );
}

export default SimilarFilmsList;
