import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, CARDS_PER_STEP, DEFAULT_GENRE, DEFAULT_SHOW_CARDS } from '../../const';
import { showMore, changeGenre } from '../actions';
import { Film } from '../../types/films';

type InitialState = {
  genre: string;
  renderedFilmCount: number,
  films: Film[],
}

const initialState: InitialState = {
  genre: DEFAULT_GENRE,
  renderedFilmCount: DEFAULT_SHOW_CARDS,
  films: [],
};

export const genreProcess = createSlice({
  name: NameSpace.Genre,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(changeGenre, (state, action) => {
        state.genre = action.payload;
        state.renderedFilmCount = CARDS_PER_STEP;
      })
      .addCase(showMore, (state, action) => {
        state.renderedFilmCount = action.payload;
      });
  }
});
