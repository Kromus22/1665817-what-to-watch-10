export const AppRoute = {
  SignIn: '/login',
  MyList: '/mylist',
  Film: '/films/:id',
  Main: '/',
  AddReview: '/films/:id/review',
  Player: '/player/:id',
  Genre: {
    path: '/genre/:genreName',
    name: 'genre'
  },
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
