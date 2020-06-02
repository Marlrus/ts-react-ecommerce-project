// import { INITIAL_STATE } from './shop.reducer';
// import { SHOP_DATA } from './shop.data';

// export type ShopState = typeof INITIAL_STATE;

export interface ShopState {
   collections: ShopMap | null;
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

export type ShopActions = updateCollectionsAction;
