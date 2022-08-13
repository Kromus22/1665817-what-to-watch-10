import { State } from '../../types/state';
import { NameSpace } from '../../const';

export const selectFilms = (state: State) => state[NameSpace.Films].films;
export const selectFavoriteFilms = (state: State) => state[NameSpace.Films].films.filter((filmA) => filmA.isFavorite);
export const selectLoadingDataStatus = (state: State) => state[NameSpace.Films].isDataLoaded;
