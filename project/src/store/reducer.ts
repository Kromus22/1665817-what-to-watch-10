import { createReducer } from '@reduxjs/toolkit';
import { fetchFilms, changeGenre, showMore, loadFilms, loadPromo, setDataLoadedStatus, requireAuthorization, loadFilm, loadSimilarFilms, setError, loadFilmComments } from './actions';
import { DEFAULT_GENRE, CARDS_PER_STEP, DEFAULT_SHOW_CARDS, AuthorizationStatus } from '../const';
import { Film } from '../types/films';
import { ReviewType } from '../types/comments';

type InitialState = {
  genre: string;
  films: Film[],
  promo: Film,
  renderedFilmCount: number,
  isDataLoaded: boolean;
  authorizationStatus: AuthorizationStatus,
  error: string | null | unknown,
  film: Film | null,
  similarFilms: Film[],
  filmComments: ReviewType[] | [],
}

const initialState: InitialState = {
  genre: DEFAULT_GENRE,
  films: [],
  promo: {} as Film,
  renderedFilmCount: DEFAULT_SHOW_CARDS,
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.Auth,
  error: null,
  film: null,
  similarFilms: [],
  filmComments: [],
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
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(loadPromo, (state, action) => {
      state.promo = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(loadFilm, (state, action) => {
      state.film = action.payload;
    })
    .addCase(loadSimilarFilms, (state, action) => {
      state.similarFilms = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(loadFilmComments, (state, action) => {
      state.filmComments = action.payload;
    });
}));
