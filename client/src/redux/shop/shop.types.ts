// import { INITIAL_STATE } from './shop.reducer';
// import { SHOP_DATA } from './shop.data';

// export type ShopState = typeof INITIAL_STATE;

export interface ShopState {
   collections: ShopMap | null;
   isFetching: boolean;
   errorMessage: string | undefined;
}

export type ShopMap = {
   [key in collectionIdKeys]: {
      id: number;
      title: string;
      routeName: string;
      items: ShopItem[];
   };
};

export type collectionIdKeys =
   | 'hats'
   | 'sneakers'
   | 'jackets'
   | 'womens'
   | 'mens';

export interface ShopItem {
   id: number;
   name: string;
   imageUrl: string;
   price: number;
}

export const ShopActionTypes = {
   UPDATE_COLLECTIONS: 'UPDATE_COLLECTIONS',
   FETCH_COLLECTIONS_START: 'FETCH_COLLECTIONS_START',
   FETCH_COLLECTIONS_SUCCESS: 'FETCH_COLLECTIONS_SUCCESS',
   FETCH_COLLECTIONS_FAILURE: 'FETCH_COLLECTIONS_FAILURE',
} as const;

// export type collectionIdKeys =
//    | 'hats'
//    | 'jackets'
//    | 'sneakers'
//    | 'womens'
//    | 'mens';

interface updateCollectionsAction {
   type: typeof ShopActionTypes.UPDATE_COLLECTIONS;
   payload: ShopMap;
}

interface fetchCollectionsStartAction {
   type: typeof ShopActionTypes.FETCH_COLLECTIONS_START;
}

interface fetchCollectionsSuccessAction {
   type: typeof ShopActionTypes.FETCH_COLLECTIONS_SUCCESS;
   payload: ShopMap;
}

interface fetchCollectionsFailureAction {
   type: typeof ShopActionTypes.FETCH_COLLECTIONS_FAILURE;
   payload: string;
}

export type ShopActions =
   | updateCollectionsAction
   | fetchCollectionsStartAction
   | fetchCollectionsSuccessAction
   | fetchCollectionsFailureAction;
