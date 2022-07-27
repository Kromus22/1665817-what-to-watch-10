import { createAction } from '@reduxjs/toolkit';
import { FILMS } from '../mocks/films';
import { DEFAULT_GENRE } from './reducer';

export const changeGenre = createAction(
  'films/changeGenre',
  (name = DEFAULT_GENRE) => ({ payload: name })
);

export const fetchFilms = createAction(
  'films/fetchFilms',
  () => ({ payload: FILMS })
);
