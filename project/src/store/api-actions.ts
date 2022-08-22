import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { Film } from '../types/films.js';
import { APIRoute, AppRoute } from '../const';
import { saveToken, dropToken } from '../services/token';
import { UserData } from '../types/user-data';
import { AuthData } from '../types/auth-data';
import { ReviewType, NewCommentType } from '../types/comments.js';
import { setFilm } from './actions';
import { FavoriteData } from '../types/favs-film-data.js';

export const fetchFilmsAction = createAsyncThunk<Film[], undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilms',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Film[]>(APIRoute.Films);
    return data;
  },
);

export const fetchPromoAction = createAsyncThunk<Film, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchPromo',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Film>(APIRoute.Promo);
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<UserData, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<UserData>(APIRoute.Login);
    return data;
  }
);

export const loginAction = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({ login: email, password }, { extra: api }) => {
    const { data } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(data.token);
    return data;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/logout',
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);

export const fetchFilm = createAsyncThunk<Film, string | undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilm',
  async (filmId, { extra: api }) => {
    const { data } = await api.get<Film>(`${AppRoute.Films}${filmId}`);
    return data;
  },
);

export const fetchSimilarFilms = createAsyncThunk<Film[], string | undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchSimilarFilm',
  async (filmId, { extra: api }) => {
    const { data } = await api.get<Film[]>(`${AppRoute.Films}${filmId}/similar`);
    const filteredData = data.filter((film) => film.id !== Number(filmId));
    return filteredData;
  },
);

export const fetchFilmComments = createAsyncThunk<ReviewType[] | [], string | undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchComments',
  async (filmId, { extra: api }) => {
    const { data } = await api.get<ReviewType[]>(`${APIRoute.Comments}/${filmId}`);
    return data;
  },
);

export const addReviewAction = createAsyncThunk<string, [(string | undefined), NewCommentType], {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/addReview',
  async ([filmID, { comment, rating }], { extra: api }) => {
    const { data } = await api.post<string>(`${APIRoute.Comments}/${filmID}`, { comment, rating });
    return data;
  });

export const fetchFavorites = createAsyncThunk<Film[], undefined, {
  extra: AxiosInstance,
}>(
  'favorite/fetchFavorites',
  async (_args, { extra: api }) => {
    const { data } = await api.get<Film[]>(APIRoute.Favorite);
    return data;
  }
);

export const addToFavorite = createAsyncThunk<Film, FavoriteData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'favorite/addToFavorite',
  async ({ id, status }, { dispatch, extra: api }) => {
    const { data } = await api.post<Film>(`${APIRoute.Favorite}/${id}/${Number(!status)}`);
    dispatch(setFilm(data));
    return data;
  }
);
