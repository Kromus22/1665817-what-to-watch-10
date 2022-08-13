import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { fetchPromoAction } from '../api-actions';
import { Film } from '../../types/films';

type InitialState = {
  promoFilm: Film,
  isDataLoaded: boolean;
}

const initialState: InitialState = {
  promoFilm: {} as Film,
  isDataLoaded: false,
};

export const promoFilmProcess = createSlice({
  name: NameSpace.PromoFilm,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPromoAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchPromoAction.fulfilled, (state, action) => {
        state.promoFilm = action.payload;
        state.isDataLoaded = false;
      });
  }
});
