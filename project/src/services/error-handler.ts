import { store } from '../store';
import { setError } from '../store/user-process/user-process';
import { TIMEOUT_SHOW_ERROR } from '../const';

export const processErrorHandle = (): void => {
  setTimeout(
    () => store.dispatch(setError(false)),
    TIMEOUT_SHOW_ERROR,
  );
};
