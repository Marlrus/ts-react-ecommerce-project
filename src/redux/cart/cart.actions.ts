import {
   CartActionTypes,
   CartActions,
   CartItemInt,
} from './cart.types';

export const toggleCartHidden = (): CartActions => ({
   type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item: CartItemInt): CartActions => ({
   type: CartActionTypes.ADD_ITEM,
   payload: item,
});
