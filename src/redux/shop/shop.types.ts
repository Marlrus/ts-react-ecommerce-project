import { INITIAL_STATE } from './shop.reducer';
import { SHOP_DATA } from './shop.data';

export type ShopState = typeof INITIAL_STATE;

// export type collectionIdKeys =
//    | 'hats'
//    | 'jackets'
//    | 'sneakers'
//    | 'womens'
//    | 'mens';

export type collectionIdKeys = keyof typeof SHOP_DATA;
