import { createReducer } from '@reduxjs/toolkit';
import { fetchFilms, changeGenre } from './actions';
import { DEFAULT_GENRE } from '../const';
import { FILMS } from '../mocks/films';


const initialState = {
  genre: DEFAULT_GENRE,
  films: FILMS,
  favouriteFilms: FILMS.filter((film) => film.isFavorite).length,
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
