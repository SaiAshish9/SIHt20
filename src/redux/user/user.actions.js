import  UserActionTypes  from './user.types';

export const setCurrentUser = me => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: me
});

export const signOutUser = () => ({
  type: UserActionTypes.SIGN_OUT_USER
});
