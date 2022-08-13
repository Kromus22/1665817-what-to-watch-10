import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { fetchFilmsAction } from '../api-actions';
import { Film } from '../../types/films';

type InitialState = {
  films: Film[],
  isDataLoaded: boolean;
}

const initialState: InitialState = {
  films: [],
  isDataLoaded: false,
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
      });
  }
});
