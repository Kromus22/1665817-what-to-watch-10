import { State } from '../../types/state';
import { NameSpace } from '../../const';

export const selectComments = (state: State) => state[NameSpace.AddReview].comments;

export const selectIsSendingComment = (state: State) => state[NameSpace.AddReview].isDataLoaded;

export const selectCommentError = (state: State) => state[NameSpace.AddReview].error;
