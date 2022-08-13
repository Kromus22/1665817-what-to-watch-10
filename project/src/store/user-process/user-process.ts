import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, AuthorizationStatus } from '../../const';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions';

type InitialState = {
  authorizationStatus: AuthorizationStatus,
  error: string | null | unknown,
}

const initialState: InitialState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  }
});
