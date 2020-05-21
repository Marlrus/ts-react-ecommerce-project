import { CartActionTypes, CartActions, CartItem } from './cart.types';

export const toggleCartHidden = (): CartActions => ({
   type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item: CartItem): CartActions => ({
   type: CartActionTypes.ADD_ITEM,
   payload: item,
});

export const clearItemFromCart = (item: CartItem): CartActions => ({
   type: CartActionTypes.CLEAR_ITEM_FROM_CART,
   payload: item,
});

export const removeItem = (item: CartItem): CartActions => ({
   type: CartActionTypes.REMOVE_ITEM,
   payload: item,
});
