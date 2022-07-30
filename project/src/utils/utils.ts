import { Tab } from '../const';
import { Film } from '../types/films';
import { FILMS } from '../mocks/films';

export const getTab = () => {
  const queryParams = (new URL(document.location.href)).searchParams;
  return queryParams.get('tab') ?? Tab.Overview;
};

export const getGenres = (filmList: Film[]): string[] =>
  ['All genres', ...new Set(filmList.map((film) => film.genre))];

export const getFilm = (id: string) =>
  FILMS.find((item) => item.id === parseInt(id, 10));
