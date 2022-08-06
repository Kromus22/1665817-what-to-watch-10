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

