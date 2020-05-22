import { createSelector, Selector } from 'reselect';
import { State } from '../store.types';
import { ShopState } from './shop.types';

const selectShop: Selector<State, ShopState> = (state) => state.shop;

export const selectCollections = createSelector(
   selectShop,
   (shop) => shop.collections
);
