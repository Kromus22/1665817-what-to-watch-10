import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, DEFAULT_GENRE, DEFAULT_SHOW_CARDS, CARDS_PER_STEP } from '../../const';
import { fetchFilmsAction } from '../api-actions';
import { Film } from '../../types/films';
import { showMore, changeGenre } from '../actions';

type InitialState = {
  films: Film[],
  isDataLoaded: boolean;
  genre: string;
  renderedFilmCount: number,
}

const initialState: InitialState = {
  films: [],
  isDataLoaded: false,
  genre: DEFAULT_GENRE,
  renderedFilmCount: DEFAULT_SHOW_CARDS,
};

export const filmsProcess = createSlice({
  name: NameSpace.Films,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFilmsAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchFilmsAction.fulfilled, (state, action) => {
        state.films = action.payload;
        state.isDataLoaded = false;
      })
      .addCase(changeGenre, (state, action) => {
        state.genre = action.payload;
        state.renderedFilmCount = CARDS_PER_STEP;
      })
      .addCase(showMore, (state, action) => {
        state.renderedFilmCount = action.payload;
      });
  }
});
