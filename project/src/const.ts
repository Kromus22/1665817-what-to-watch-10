export const AppRoute = {
  SignIn: '/login',
  MyList: '/mylist',
  Film: '/films/:id',
  Main: '/',
  AddReview: '/films/:id/review',
  Player: '/player/:id',
};

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum Tab {
  Overview = 'overview',
  Details = 'details',
  Reviews = 'reviews',
}

export enum APIRoute {
  Films = '/films',
  Promo = '/promo',
  Login = '/login',
  Logout = '/logout',
}

export const DEFAULT_GENRE = 'All genres';

export const DEFAULT_SHOW_CARDS = 8;

export const CARDS_PER_STEP = 8;
export const MAX_GENRES_COUNT = 10;
export const PLAY_TIMEOUT = 1000;
