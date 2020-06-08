import {
   CurrentUser,
   UserActionTypes,
   UserActions,
   EmailAndPassword,
} from './user.types';

export const setCurrentUser = (
   user: CurrentUser | null
): UserActions => ({
   type: UserActionTypes.SET_CURRENT_USER,
   payload: user,
});

export const googleSignInStart = (): UserActions => ({
   type: UserActionTypes.GOOGLE_SIGN_IN_START,
});

export const googleSignInSuccess = (
   user: CurrentUser | null
): UserActions => ({
   type: UserActionTypes.GOOGLE_SIGN_IN_SUCCESS,
   payload: user,
});

export const googleSignInFailure = (err: string): UserActions => ({
   type: UserActionTypes.GOOGLE_SIGN_IN_FAILURE,
   payload: err,
});

export const emailSignInStart = (
   emailAndPassword: EmailAndPassword
): UserActions => ({
   type: UserActionTypes.EMAIL_SIGN_IN_START,
   payload: emailAndPassword,
});

export const emailSignInSuccess = (
   user: CurrentUser | null
): UserActions => ({
   type: UserActionTypes.EMAIL_SIGN_IN_SUCCESS,
   payload: user,
});

export const emailSignInFailure = (err: string): UserActions => ({
   type: UserActionTypes.EMAIL_SIGN_IN_FAILURE,
   payload: err,
});
