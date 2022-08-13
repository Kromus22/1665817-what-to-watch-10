import { State } from '../../types/state';
import { NameSpace } from '../../const';
import { getGenres } from '../../utils/utils';

export const selectFilmGenres = (state: State) => getGenres(state[NameSpace.Genre].films);
export const selectGenre = (state: State) => state[NameSpace.Genre].genre;
export const selectRenderedFilmCount = (state: State) => state[NameSpace.Genre].renderedFilmCount;

