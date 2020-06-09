//State and State Parts
export interface UserState {
   currentUser: null | CurrentUser;
   error: null | string;
}

export interface CurrentUser {
   createdAt: { seconds: number; nanoseconds: number };
   displayName: string;
   email: string;
   id: string;
}

export interface EmailAndPassword {
   email: string;
   password: string;
}

//UserActionTypes Hardcoded
export const UserActionTypes = {
   SET_CURRENT_USER: 'SET_CURRENT_USER',
   GOOGLE_SIGN_IN_START: 'GOOGLE_SIGN_IN_START',
   GOOGLE_SIGN_IN_SUCCESS: 'GOOGLE_SIGN_IN_SUCCESS',
   GOOGLE_SIGN_IN_FAILURE: 'GOOGLE_SIGN_IN_FAILURE',
   EMAIL_SIGN_IN_START: 'EMAIL_SIGN_IN_START',
   EMAIL_SIGN_IN_SUCCESS: 'EMAIL_SIGN_IN_SUCCESS',
   EMAIL_SIGN_IN_FAILURE: 'EMAIL_SIGN_IN_FAILURE',
} as const;

interface SetCurrentUserAction {
   type: typeof UserActionTypes.SET_CURRENT_USER;
   payload: CurrentUser | null;
}

interface googleSignInStartAction {
   type: typeof UserActionTypes.GOOGLE_SIGN_IN_START;
}

interface googleSignInSuccessAction {
   type: typeof UserActionTypes.GOOGLE_SIGN_IN_SUCCESS;
   payload: CurrentUser | null;
}

interface googleSignInFailureAction {
   type: typeof UserActionTypes.GOOGLE_SIGN_IN_FAILURE;
   payload: string;
}

interface emailSignInStartAction {
   type: typeof UserActionTypes.EMAIL_SIGN_IN_START;
   payload: EmailAndPassword;
}

interface emailSignInSuccessAction {
   type: typeof UserActionTypes.EMAIL_SIGN_IN_SUCCESS;
   payload: CurrentUser | null;
}

interface emailSignInFailureAction {
   type: typeof UserActionTypes.EMAIL_SIGN_IN_FAILURE;
   payload: string;
}

interface OtherAction {
   type: 'OTHER_ACTION';
   payload: any;
}

//Every Action
export type UserActions =
   | SetCurrentUserAction
   | OtherAction
   | googleSignInStartAction
   | googleSignInSuccessAction
   | googleSignInFailureAction
   | emailSignInStartAction
   | emailSignInSuccessAction
   | emailSignInFailureAction;
