import { CartActionTypes, CartActions } from './cart.types';

export const toggleCartHidden = (): CartActions => ({
   type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item: any) => ({
   type: CartActionTypes.ADD_ITEM,
   payload: item,
});
