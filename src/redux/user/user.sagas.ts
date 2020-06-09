import { takeLatest, put, all, call } from 'redux-saga/effects';

import {
   UserActionTypes,
   emailSignInStartAction,
} from './user.types';

import { signInFailure, signInSuccess } from './user.actions';

import {
   googleProvider,
   auth,
   createUserProfileDocument,
   getCurrentUser,
} from '../../firebase/firebase.utils';

//SHARED LOGIC
function* getSnapshotFromUserAuth(userAuth: any) {
   try {
      const userRef = yield call(createUserProfileDocument, userAuth);
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

export function* userSagas() {
   yield all([
      call(onGoogleSignInStart),
      call(onEmailSignInStart),
      call(onCheckUserSession),
   ]);
}
