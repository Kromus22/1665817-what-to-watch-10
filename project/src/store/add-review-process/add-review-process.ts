import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { addReviewAction } from '../api-actions';

type InitialState = {
  isDataLoaded: boolean,
  error: string | null | unknown,
}

const initialState: InitialState = {
  isDataLoaded: false,
  error: null,
};

export const addReviewProcess = createSlice({
  name: NameSpace.AddReview,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(addReviewAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(addReviewAction.rejected, (state, action) => {
        state.error = action.payload;
        state.isDataLoaded = false;
      })
      .addCase(addReviewAction.fulfilled, (state) => {
        state.isDataLoaded = false;
      });
  }
});
