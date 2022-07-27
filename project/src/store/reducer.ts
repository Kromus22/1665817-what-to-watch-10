import { createReducer } from '@reduxjs/toolkit';
import { Film } from '../types/films';
import { State } from '../types/state';
import { fetchFilms, changeGenre } from './actions';

type FilmsStateType = {
  genre: string;
  filter: Film[];
  films: Film[];
}

const initialState: FilmsStateType = {
  genre: '',
  filter: [],
  films: [],
};

export const reducer = createReducer(initialState, ((builder) => {
  builder
    .addCase(fetchFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
      state.filter = state.genre
        ? state.films.filter((item: Film) => item.genre.toLowerCase() === state.genre)
        : state.films;
    });
}));

export const selectFilms = (state: State) => state.films;

export const selectFilterFilms = (state: State) => state.filter;
