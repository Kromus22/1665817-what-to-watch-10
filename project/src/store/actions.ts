import { createAction } from '@reduxjs/toolkit';

export const changeGenre = createAction<string>('films/changeGenre');

export const showMore = createAction<number>('films/showMore');

export const setError = createAction<string | null | unknown>('user/setError');
