import { takeLatest, put, all, call } from 'redux-saga/effects';

import {
   UserActionTypes,
   emailSignInStartAction,
   signUpStartAction,
   signUpSuccessAction,
} from './user.types';

import {
   signInFailure,
   signInSuccess,
   signOutSuccess,
   signOutFailure,
   signUpFailure,
   signUpSuccess,
} from './user.actions';

import {
   googleProvider,
   auth,
   createUserProfileDocument,
   getCurrentUser,
} from '../../firebase/firebase.utils';

//SHARED LOGIC
function* getSnapshotFromUserAuth(
   userAuth: any,
   additionalData?: any
) {
   try {
      const userRef = yield call(
         createUserProfileDocument,
         userAuth,
         additionalData
      );
      const userSnapshot = yield userRef.get();
      yield put(
         signInSuccess({
            id: userSnapshot.id,
            ...userSnapshot.data(),
         })
      );
   } catch (err) {
      yield put(signInFailure(err.message));
   }
}

//GOOGLE LOGIC
export function* signInWithGoogle() {
   try {
      const { user } = yield auth.signInWithPopup(googleProvider);
      yield getSnapshotFromUserAuth(user);
   } catch (err) {
      yield put(signInFailure(err.message));
   }
}

export function* onGoogleSignInStart() {
   yield takeLatest(
      UserActionTypes.GOOGLE_SIGN_IN_START,
      signInWithGoogle
   );
}

//EMAIL LOGIC
export function* signInWithEmail({
   payload: { email, password },
}: emailSignInStartAction) {
   try {
      const { user } = yield auth.signInWithEmailAndPassword(
         email,
         password
      );
      yield getSnapshotFromUserAuth(user);
   } catch (err) {
      yield put(signInFailure(err.message));
   }
}

export function* onEmailSignInStart() {
   yield takeLatest(
      UserActionTypes.EMAIL_SIGN_IN_START,
      signInWithEmail
   );
}

//USER SESSION CHECKING LOGIC
export function* isUserAuthenticated() {
   try {
      const userAuth = yield getCurrentUser();
      if (!userAuth) return;
      yield getSnapshotFromUserAuth(userAuth);
   } catch (err) {
      yield put(signInFailure(err.message));
   }
}

export function* onCheckUserSession() {
   yield takeLatest(
      UserActionTypes.CHECK_USER_SESSION,
      isUserAuthenticated
   );
}

//SIGN OUT LOGIC
function* signOut() {
   try {
      yield auth.signOut();
      yield put(signOutSuccess());
   } catch (err) {
      yield put(signOutFailure(err.message));
   }
}

export function* onSignOutStart() {
   yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

//SIGN UP LOGIC
export function* signUp({
   payload: { email, password, displayName },
}: signUpStartAction) {
   try {
      const { user } = yield auth.createUserWithEmailAndPassword(
         email,
         password
      );
      yield put(
         signUpSuccess({ user, additionalData: { displayName } })
      );
   } catch (err) {
      yield put(signUpFailure(err.message));
   }
}

export function* onSignUpStart() {
   yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

//Auto sign in after sign up logic
export function* signInAfterSignUp({
   payload: { user, additionalData },
}: signUpSuccessAction) {
   yield getSnapshotFromUserAuth(user, additionalData);
}

export function* onSignUpSuccessStart() {
   yield takeLatest(
      UserActionTypes.SIGN_UP_SUCCESS,
      signInAfterSignUp
   );
}

export function* userSagas() {
   yield all([
      call(onGoogleSignInStart),
      call(onEmailSignInStart),
      call(onCheckUserSession),
      call(onSignOutStart),
      call(onSignUpStart),
      call(onSignUpSuccessStart),
   ]);
}
