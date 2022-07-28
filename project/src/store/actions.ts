import { createAction } from '@reduxjs/toolkit';
import { Film } from '../types/films';

export const changeGenre = createAction<string>('films/changeGenre');

export const fetchFilms = createAction<Film[]>('films/fetchFilms');
