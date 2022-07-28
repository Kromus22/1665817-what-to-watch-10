import { createReducer } from '@reduxjs/toolkit';
import { Film } from '../types/films';
import { fetchFilms, changeGenre } from './actions';
import { DEFAULT_GENRE } from '../const';


type FilmsStateType = {
  genre: string;
  films: Film[];
}

const initialState: FilmsStateType = {
  genre: DEFAULT_GENRE,
  films: [],
};

export const reducer = createReducer(initialState, ((builder) => {
  builder
    .addCase(fetchFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    });
}));
