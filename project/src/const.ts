export const AppRoute = {
  SignIn: '/login',
  MyList: '/mylist',
  Films: '/films/',
  Film: '/films/:id',
  Main: '/',
  AddReview: '/films/:id/review',
  Player: '/player/:id',
  ServerError: '/servererror',
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
  Comments = '/comments',
  AddReview = '/films/:id/*',
  Favorite = '/favorite',
}

export enum NameSpace {
  User = 'USER',
  Films = 'FILMS',
  Film = 'FILM',
  AddReview = 'ADD_REVIEW',
}

export enum PlayerProgress {
  Start = 0,
  End = 100,
}

export enum CommentLength {
  Min = 50,
  Max = 400,
}

export enum ErrorMessage {
  SignInValidate = 'We can’t recognize this email and password combination. Please try again.',
  IncorrectEmail = 'Please enter a valid email address',
  ServerError = 'Unknown server error'
}

export const DEFAULT_GENRE = 'All genres';

export const DEFAULT_SHOW_CARDS = 8;

export const CARDS_PER_STEP = 8;
export const MAX_GENRES_COUNT = 10;
export const PLAY_TIMEOUT = 1000;
export const TIMEOUT_SHOW_ERROR = 2000;
export const DEFALUT_RATING_VALUE = 0;
