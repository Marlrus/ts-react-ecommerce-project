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

export interface SignUpUser extends EmailAndPassword {
   displayName: string;
}

//UserActionTypes Hardcoded
export const UserActionTypes = {
   SET_CURRENT_USER: 'SET_CURRENT_USER',
   SIGN_IN_SUCCESS: 'SIGN_IN_SUCCESS',
   SIGN_IN_FAILURE: 'SIGN_IN_FAILURE',
   GOOGLE_SIGN_IN_START: 'GOOGLE_SIGN_IN_START',
   EMAIL_SIGN_IN_START: 'EMAIL_SIGN_IN_START',
   CHECK_USER_SESSION: 'CHECK_USER_SESSION',
   SIGN_OUT_START: 'SIGN_OUT_START',
   SIGN_OUT_SUCCESS: 'SIGN_OUT_SUCCESS',
   SIGN_OUT_FAILURE: 'SIGN_OUT_FAILURE',
   SIGN_UP_START: 'SIGN_UP_START',
   SIGN_UP_SUCCESS: 'SIGN_UP_SUCCESS',
   SING_UP_FAILURE: 'SING_UP_FAILURE',
} as const;

interface googleSignInStartAction {
   type: typeof UserActionTypes.GOOGLE_SIGN_IN_START;
}

interface SignInSuccessAction {
   type: typeof UserActionTypes.SIGN_IN_SUCCESS;
   payload: CurrentUser | null;
}

interface SignInFailureAction {
   type: typeof UserActionTypes.SIGN_IN_FAILURE;
   payload: string;
}

export interface emailSignInStartAction {
   type: typeof UserActionTypes.EMAIL_SIGN_IN_START;
   payload: EmailAndPassword;
}

interface checkUserSessionAction {
   type: typeof UserActionTypes.CHECK_USER_SESSION;
}

interface signOutStartAction {
   type: typeof UserActionTypes.SIGN_OUT_START;
}

interface signOutSuccessAction {
   type: typeof UserActionTypes.SIGN_OUT_SUCCESS;
}

interface signOutFailureAction {
   type: typeof UserActionTypes.SIGN_OUT_FAILURE;
   payload: string;
}

//Sign up actions
export interface signUpStartAction {
   type: typeof UserActionTypes.SIGN_UP_START;
   payload: SignUpUser;
}

interface signUpSuccessAction {
   type: typeof UserActionTypes.SIGN_UP_SUCCESS;
   payload: CurrentUser | null;
}

interface signUpFailureAction {
   type: typeof UserActionTypes.SING_UP_FAILURE;
   payload: string;
}

interface OtherAction {
   type: 'OTHER_ACTION';
   payload: any;
}

//Every Action
export type UserActions =
   | OtherAction
   | googleSignInStartAction
   | SignInSuccessAction
   | SignInFailureAction
   | emailSignInStartAction
   | checkUserSessionAction
   | signOutStartAction
   | signOutSuccessAction
   | signOutFailureAction
   | signUpStartAction
   | signUpSuccessAction
   | signUpFailureAction;
