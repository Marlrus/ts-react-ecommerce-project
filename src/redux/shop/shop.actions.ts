import { ShopActionTypes, ShopActions, ShopMap } from './shop.types';

export const updateCollections = (
   collectionsMap: ShopMap
): ShopActions => ({
   type: ShopActionTypes.UPDATE_COLLECTIONS,
   payload: collectionsMap,
});
