import { checkAuthAction, loginAction, logoutAction } from '../api-actions';
import { userProcess, InitialState } from './user-process';
import { MOCK_AVATAR, MOCK_ERROR, UNKNOWN_ACTION } from '../../utils/mocks';
import { AuthorizationStatus } from '../../const';

describe('Reducer: user', () => {
  let state: InitialState;

  beforeEach(() => {
    state = {
      authorizationStatus: AuthorizationStatus.Unknown,
      error: '',
      avatar: '',
      isSending: false,
    };
  });

  it('without additional parameters should return initial state', () => {
    expect(userProcess.reducer(undefined, { type: UNKNOWN_ACTION }))
      .toEqual({ authorizationStatus: AuthorizationStatus.Unknown, error: '', avatar: '', isSending: false });
  });

  describe('checkAuthAction test', () => {
    it('should set avatar and update authStatus to "AUTH" if checkAuthAction fulfilled', () => {
      expect(userProcess.reducer(state, { type: checkAuthAction.fulfilled.type, payload: MOCK_AVATAR }))
        .toEqual({ authorizationStatus: AuthorizationStatus.Auth, error: '', avatar: MOCK_AVATAR, isSending: false });
    });

    it('should update authStatus to "NO_AUTH" if checkAuthAction rejected', () => {
      expect(userProcess.reducer(state, { type: checkAuthAction.rejected.type }))
        .toEqual({ authorizationStatus: AuthorizationStatus.NoAuth, error: '', avatar: '', isSending: false });
    });
  });

  describe('loginAction test', () => {
    it('should update isSending to "true" if loginAction pending', () => {
      expect(userProcess.reducer(state, { type: loginAction.pending.type }))
        .toEqual({ authorizationStatus: AuthorizationStatus.Unknown, error: '', avatar: '', isSending: true });
    });

    it('should set avatar, and update authStatus to "AUTH" if loginAction fulfilled', () => {
      expect(userProcess.reducer(state, { type: loginAction.fulfilled.type, payload: MOCK_AVATAR }))
        .toEqual({ authorizationStatus: AuthorizationStatus.Auth, error: '', avatar: MOCK_AVATAR, isSending: false });
    });

    it('should set error, andStatus to "NO_AUTH" text if loginAction rejected', () => {
      expect(userProcess.reducer(state, { type: loginAction.rejected.type, payload: MOCK_ERROR }))
        .toEqual({ authorizationStatus: AuthorizationStatus.NoAuth, error: MOCK_ERROR, avatar: '', isSending: false });
    });
  });

  describe('logoutAction test', () => {
    it('should update andStatus to "NO_AUTH" if logoutAction fulfilled', () => {
      expect(userProcess.reducer(state, { type: logoutAction.fulfilled.type }))
        .toEqual({ authorizationStatus: AuthorizationStatus.NoAuth, error: '', avatar: '', isSending: false, });
    });
  });
});
