import {
   CartActionTypes,
   CartActions,
   CartState,
} from './cart.types';
import { addItemToCart, subtractQuantity } from './cart.utils';

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
      case CartActionTypes.CLEAR_ITEM_FROM_CART:
         return {
            ...state,
            cartItems: state.cartItems.filter(
               (cartItem) => cartItem.id !== action.payload.id
            ),
         };
      case CartActionTypes.REMOVE_ITEM:
         return {
            ...state,
            cartItems: subtractQuantity(
               state.cartItems,
               action.payload
            ),
         };
      default:
         return state;
   }
};

export default cartReducer;
