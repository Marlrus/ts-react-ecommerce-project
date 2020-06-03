import {
   firestore,
   convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

//Types
import {
   ShopActionTypes,
   ShopActions,
   ShopMap,
   ShopState,
} from './shop.types';
import { ThunkDispatch } from 'redux-thunk';

export const updateCollections = (
   collectionsMap: ShopMap
): ShopActions => ({
   type: ShopActionTypes.UPDATE_COLLECTIONS,
   payload: collectionsMap,
});

export const fetchCollectionsStart = (): ShopActions => ({
   type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (
   collectionsMap: ShopMap
): ShopActions => ({
   type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
   payload: collectionsMap,
});

export const fetchCollectionsFailure = (errorMessage: string) => ({
   type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
   payload: errorMessage,
});

export const fetchCollectionsStartAsync = () => {
   return (
      dispatch: ThunkDispatch<ShopState, undefined, ShopActions>
   ) => {
      const collectionRef = firestore.collection('collections');
      dispatch(fetchCollectionsStart());

      collectionRef
         .get()
         .then((snapshot) => {
            const collectionsMap = convertCollectionsSnapshotToMap(
               snapshot
            );
            dispatch(fetchCollectionsSuccess(collectionsMap));
         })
         .catch((error) =>
            dispatch(fetchCollectionsFailure(error.message))
         );
   };
};
