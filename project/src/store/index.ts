import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './root-reducer';
import { createAPI } from '../services/api';
import { AppRoute } from '../const';
import { redirectToRoot } from './actions';
import { redirect } from './middlewares/redirect';


export const api = createAPI(() => store.dispatch(redirectToRoot(AppRoute.ServerError)));

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect)
});
