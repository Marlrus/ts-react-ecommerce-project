import {
   ShopActionTypes,
   ShopState,
   ShopActions,
} from './shop.types';

import { Reducer } from 'react';

const INITIAL_STATE = {
   collections: null,
};

const shopReducer: Reducer<ShopState, ShopActions> = (
   state = INITIAL_STATE,
   action
) => {
   switch (action.type) {
      case ShopActionTypes.UPDATE_COLLECTIONS:
         return {
            ...state,
            collections: action.payload,
         };
      default:
         return state;
   }
};

export default shopReducer;
