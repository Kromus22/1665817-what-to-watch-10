import { createAction } from '@reduxjs/toolkit';
import { FILMS } from '../mocks/films';

export const changeGenre = createAction(
  'films/changeGenre',
  (name = '') => ({ payload: name })
);

export const fetchFilms = createAction(
  'films/fetchFilms',
  () => ({ payload: FILMS })
);
