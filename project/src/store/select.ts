import { State } from '../types/state';
import { Film } from '../types/films';
import { DEFAULT_GENRE } from './reducer';
import { getGenres } from '../utils/utils';

export const selectFilms = (state: State) => state.films;

export const selectFilterFilms = (state: State) =>
  state.genre !== DEFAULT_GENRE
    ? state.films.filter((item: Film) => item.genre.toLowerCase() === state.genre)
    : state.films;

export const selectFilmGenres = (state: State) =>
  getGenres(state.films);
