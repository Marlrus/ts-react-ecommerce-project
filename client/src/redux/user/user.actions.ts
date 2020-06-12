import {
   CurrentUser,
   UserActionTypes,
   UserActions,
   EmailAndPassword,
   UserCredentials,
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

//Sign out actions
export const signOutStart = (): UserActions => ({
   type: UserActionTypes.SIGN_OUT_START,
});

export const signOutSuccess = (): UserActions => ({
   type: UserActionTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = (error: string): UserActions => ({
   type: UserActionTypes.SIGN_OUT_FAILURE,
   payload: error,
});

//Sign Up Actions
export const signUpStart = (
   userCredentials: UserCredentials
): UserActions => ({
   type: UserActionTypes.SIGN_UP_START,
   payload: userCredentials,
});

export const signUpSuccess = ({
   user,
   additionalData,
}: any): UserActions => ({
   type: UserActionTypes.SIGN_UP_SUCCESS,
   payload: { user, additionalData },
});

export const signUpFailure = (err: string): UserActions => ({
   type: UserActionTypes.SIGN_UP_FAILURE,
   payload: err,
});
