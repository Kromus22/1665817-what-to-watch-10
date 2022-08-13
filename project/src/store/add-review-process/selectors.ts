import { State } from '../../types/state';
import { NameSpace } from '../../const';

export const selectError = (state: State) => state[NameSpace.AddReview].error;
