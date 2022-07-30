import { Film } from '../../types/films';
import FilmsList from '../films-list/films-list';

type SimilarFilmsListProps = {
  similarFilms: Film[];
}

function SimilarFilmsList({ similarFilms }: SimilarFilmsListProps): JSX.Element {
  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>
      {similarFilms.length > 0 ? <FilmsList films={similarFilms} /> : <p>Sorry, we did not find anything.</p>}
    </section>
  );
}

export default SimilarFilmsList;
