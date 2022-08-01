import { Tab } from '../const';
import { Film } from '../types/films';

export const getTab = () => {
  const queryParams = (new URL(document.location.href)).searchParams;
  return queryParams.get('tab') ?? Tab.Overview;
};

export const getGenres = (filmList: Film[]): string[] =>
  ['All genres', ...new Set(filmList.map((film) => film.genre))];


