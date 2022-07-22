import { Tab } from '../const';
import { Film } from '../types/films';
import { AppRoute } from '../const';

export const getTab = () => {
  const queryParams = (new URL(document.location.href)).searchParams;
  return queryParams.get('tab') ?? Tab.Overview;
};

export const getGenres = (filmList: Film[]): string[] =>
  [...new Set(filmList.map((film) => film.genre))];

export const getGenreUrl = (genreName: string): string =>
  `/${AppRoute.Genre.name}/${genreName.toLowerCase()}`;
