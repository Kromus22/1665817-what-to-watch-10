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

export const DEFAULT_GENRE = 'All genres';
