import {
   CurrentUser,
   UserActionTypes,
   UserActions,
   EmailAndPassword,
} from './user.types';

export const googleSignInStart = (): UserActions => ({
   type: UserActionTypes.GOOGLE_SIGN_IN_START,
});

export const signInSuccess = (
   user: CurrentUser | null
): UserActions => ({
   type: UserActionTypes.SIGN_IN_SUCCESS,
   payload: user,
});

export const signInFailure = (err: string): UserActions => ({
   type: UserActionTypes.SIGN_IN_FAILURE,
   payload: err,
});

export const emailSignInStart = (
   emailAndPassword: EmailAndPassword
): UserActions => ({
   type: UserActionTypes.EMAIL_SIGN_IN_START,
   payload: emailAndPassword,
});

export const checkUserSession = (): UserActions => ({
   type: UserActionTypes.CHECK_USER_SESSION,
});
