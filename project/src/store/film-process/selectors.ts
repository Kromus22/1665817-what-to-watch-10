import { State } from '../../types/state';
import { NameSpace } from '../../const';

export const getFilm = (state: State) => state[NameSpace.Film].film;
export const getComments = (state: State) => state[NameSpace.Film].filmComments;
export const getSimilarFilms = (state: State) => state[NameSpace.Film].similarFilms;
export const getLoadingDataStatus = (state: State) => state[NameSpace.Film].isDataLoaded;
export const getPromoFilm = (state: State) => state[NameSpace.Film].promoFilm;
export const getFilmStatus = (state: State): boolean | undefined => state[NameSpace.Film].film?.isFavorite;

