import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { addReviewAction } from '../api-actions';

type InitialState = {
  isDataLoaded: boolean,
}

const initialState: InitialState = {
  isDataLoaded: false,
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
      .addCase(addReviewAction.rejected, (state) => {
        state.isDataLoaded = false;
      })
      .addCase(addReviewAction.fulfilled, (state) => {
        state.isDataLoaded = false;
      });
  }
});
