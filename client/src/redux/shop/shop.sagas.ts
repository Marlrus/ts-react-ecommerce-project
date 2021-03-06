import { takeLatest, call, put, all } from 'redux-saga/effects';

import {
   firestore,
   convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

import {
   fetchCollectionsSuccess,
   fetchCollectionsFailure,
} from './shop.actions';

import { ShopActionTypes, ShopMap } from './shop.types';

export function* fetchCollectionsAsync() {
   try {
      const collectionRef = firestore.collection('collections');
      const snapshot = yield collectionRef.get();
      const collectionsMap: ShopMap = yield call(
         convertCollectionsSnapshotToMap,
         snapshot
      );
      yield put(fetchCollectionsSuccess(collectionsMap));
   } catch (err) {
      yield put(fetchCollectionsFailure(err.message));
   }
}

export function* fetchCollectionsStart() {
   yield takeLatest(
      ShopActionTypes.FETCH_COLLECTIONS_START,
      fetchCollectionsAsync
   );
}

//Shop Root Saga
export function* shopSagas() {
   yield all([call(fetchCollectionsStart)]);
}
