import { createReducer } from '@reduxjs/toolkit';
import { fetchFilms, changeGenre, showMore } from './actions';
import { DEFAULT_GENRE, CARDS_PER_STEP, DEFAULT_SHOW_CARDS } from '../const';
import { FILMS } from '../mocks/films';


const initialState = {
  genre: DEFAULT_GENRE,
  films: FILMS,
  favouriteFilms: FILMS.filter((film) => film.isFavorite).length,
  renderedFilmCount: DEFAULT_SHOW_CARDS,
};

export const reducer = createReducer(initialState, ((builder) => {
  builder
    .addCase(fetchFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
      state.renderedFilmCount = CARDS_PER_STEP;
    })
    .addCase(showMore, (state, action) => {
      state.renderedFilmCount = action.payload;
    });
}));
