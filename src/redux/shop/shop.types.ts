import { INITIAL_STATE } from './shop.reducer';
import { SHOP_DATA } from './shop.data';

export type ShopState = typeof INITIAL_STATE;

export interface ShopItem {
   id: number;
   name: string;
   imageUrl: string;
   price: number;
}

// export type collectionIdKeys =
//    | 'hats'
//    | 'jackets'
//    | 'sneakers'
//    | 'womens'
//    | 'mens';

export type collectionIdKeys = keyof typeof SHOP_DATA;
