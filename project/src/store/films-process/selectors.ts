import { createSelector } from '@reduxjs/toolkit';
import { State } from '../../types/state';
import { NameSpace } from '../../const';
import { DEFAULT_GENRE } from '../../const';

export const getFilms = (state: State) => state[NameSpace.Films].films;
export const getFavoriteFilms = (state: State) => state[NameSpace.Films].favorites;
export const getIsFavsLoaded = (state: State) => state[NameSpace.Films].isFavsLoaded;
export const getLoadingDataStatus = (state: State) => state[NameSpace.Films].isDataLoaded;
export const getFilmGenres = createSelector(getFilms, (films) => [DEFAULT_GENRE, ...new Set(films.map((film) => film.genre))],);
export const getGenre = (state: State) => state[NameSpace.Films].genre;
export const getRenderedFilmCount = (state: State) => state[NameSpace.Films].renderedFilmCount;
