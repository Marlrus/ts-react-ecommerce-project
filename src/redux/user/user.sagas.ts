import { takeLatest, put, all, call } from 'redux-saga/effects';

import {
   UserActionTypes,
   emailSignInStartAction,
} from './user.types';

import {
   googleSignInSuccess,
   googleSignInFailure,
   emailSignInSuccess,
   emailSignInFailure,
} from './user.actions';

import {
   googleProvider,
   auth,
   createUserProfileDocument,
} from '../../firebase/firebase.utils';

//GOOGLE LOGIC
export function* signInWithGoogle() {
   try {
      const { user } = yield auth.signInWithPopup(googleProvider);
      const userRef = yield call(createUserProfileDocument, user);
      const userSnapshot = yield userRef.get();
      yield put(
         googleSignInSuccess({
            id: userSnapshot.id,
            ...userSnapshot.data(),
         })
      );
   } catch (err) {
      yield put(googleSignInFailure(err.message));
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
      const userRef = yield call(createUserProfileDocument, user);
      const userSnapshot = yield userRef.get();
      yield put(
         emailSignInSuccess({
            id: userSnapshot.id,
            ...userSnapshot.data(),
         })
      );
   } catch (err) {
      yield put(emailSignInFailure(err.message));
   }
}

export function* onEmailSignInStart() {
   yield takeLatest(
      UserActionTypes.EMAIL_SIGN_IN_START,
      signInWithEmail
   );
}

export function* userSagas() {
   yield all([call(onGoogleSignInStart), call(onEmailSignInStart)]);
}
