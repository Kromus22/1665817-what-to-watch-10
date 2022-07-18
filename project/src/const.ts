export enum AppRoute {
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films',
  Main = '/',
  AddReview = '/films/:id/review',
  Player = '/player'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
