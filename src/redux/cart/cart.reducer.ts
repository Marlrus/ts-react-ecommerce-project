import {
   CartActionTypes,
   CartActions,
   CartState,
} from './cart.types';
import { addItemToCart } from './cart.utils';

import { Reducer } from 'react';

const INITIAL_STATE: CartState = {
   hidden: true,
   cartItems: [],
};

const cartReducer: Reducer<CartState, CartActions> = (
   state = INITIAL_STATE,
   action
) => {
   switch (action.type) {
      case CartActionTypes.TOGGLE_CART_HIDDEN:
         return {
            ...state,
            hidden: !state.hidden,
         };
      case CartActionTypes.ADD_ITEM:
         return {
            ...state,
            cartItems: addItemToCart(state.cartItems, action.payload),
         };
      default:
         return state;
   }
};

export default cartReducer;
