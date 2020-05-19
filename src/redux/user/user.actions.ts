import { UserState, SetCurrentUserAction } from './user.types';

type SetCurrentUserFn = (user: UserState) => SetCurrentUserAction;

export const setCurrentUser: SetCurrentUserFn = (
   user: UserState
) => ({
   type: 'SET_CURRENT_USER',
   payload: user,
});
