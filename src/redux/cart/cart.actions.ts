import { CartActionTypes, CartActions } from './cart.types';

export const toggleCartHidden = (): CartActions => ({
   type: CartActionTypes.TOGGLE_CART_HIDDEN,
});
