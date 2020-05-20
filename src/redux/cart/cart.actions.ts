import { CartActionTypes, CartActions, CartItem } from './cart.types';

export const toggleCartHidden = (): CartActions => ({
   type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item: CartItem): CartActions => ({
   type: CartActionTypes.ADD_ITEM,
   payload: item,
});
