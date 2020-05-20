import {
   CurrentUser,
   UserActionTypes,
   UserActions,
} from './user.types';

export const setCurrentUser = (
   user: CurrentUser | null
): UserActions => ({
   type: UserActionTypes.SET_CURRENT_USER,
   payload: user,
});
