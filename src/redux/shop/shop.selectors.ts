import { createSelector, Selector } from 'reselect';
import { State } from '../store.types';
import { ShopState, collectionIdKeys } from './shop.types';

const selectShop: Selector<State, ShopState> = (state) => state.shop;

export const selectCollections = createSelector(
   [selectShop],
   (shop) => shop.collections
);

const convertToArray = <T extends object>(object: T) =>
   (Object.keys(object) as Array<keyof typeof object>).map(
      (key) => object[key]
   );

export const selectCollectionsAsArray = createSelector(
   [selectCollections],
   (collections) => convertToArray(collections)
);

export const selectCollection = (
   collectionUrlParam: collectionIdKeys
) =>
   createSelector(
      [selectCollections],
      (collections) => collections[collectionUrlParam]
   );
