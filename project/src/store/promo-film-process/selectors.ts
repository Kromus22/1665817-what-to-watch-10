import { State } from '../../types/state';
import { NameSpace } from '../../const';

export const selectPromoFilm = (state: State) => state[NameSpace.PromoFilm].promoFilm;
export const selectLoadingDataStatus = (state: State) => state[NameSpace.PromoFilm].isDataLoaded;
