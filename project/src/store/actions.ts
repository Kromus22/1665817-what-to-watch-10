import { createAction } from '@reduxjs/toolkit';
import { Film } from '../types/films';
import { AuthorizationStatus } from '../const';

export const changeGenre = createAction<string>('films/changeGenre');

export const fetchFilms = createAction<Film[]>('films/fetchFilms');

export const showMore = createAction<number>('films/showMore');

export const loadFilms = createAction<Film[]>('data/loadFilms');

export const loadPromo = createAction<Film>('data/loadPromo');

export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const loadFilm = createAction('data/loadFilm', (value) => ({
  payload: value,
}));

export const loadSimilarFilms = createAction('data/loadSimilarFilms', (value) => ({
  payload: value,
}));

export const setError = createAction<string | null | unknown>('user/setError');

export const loadFilmComments = createAction('data/loadFilmComments', (value) => ({
  payload: value,
}));
