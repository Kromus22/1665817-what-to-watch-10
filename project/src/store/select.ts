import { State } from '../types/state';
import { Film } from '../types/films';
import { DEFAULT_GENRE } from '../const';
import { getGenres } from '../utils/utils';

export const selectFilms = (state: State) => state.films;
export const selectFilm = (state: State) => state.film;
export const selectPromoFilm = (state: State) => state.promo;
export const selectFavoriteFilms = (state: State) => state.films.filter((filmA) => filmA.isFavorite);
export const selectAuth = (state: State) => state.authorizationStatus;
export const selectComments = (state: State) => state.filmComments;
export const selectSimilarFilms = (state: State) => state.similarFilms;
export const selectGenre = (state: State) => state.genre;
export const selectRenderedFilmCount = (state: State) => state.renderedFilmCount;
export const selectError = (state: State) => state.error;

export const selectFilterFilms = (state: State) =>
  state.genre !== DEFAULT_GENRE
    ? state.films.filter((item: Film) => item.genre.toLowerCase() === state.genre)
    : state.films;

export const selectFilmGenres = (state: State) =>
  getGenres(state.films);
