import { createSelector, Selector } from 'reselect';
import { State } from '../store.types';
import { CartState } from './cart.types';

const selectCart: Selector<State, CartState> = (state: State) =>
   state.cart;

export const selectCartItems = createSelector(
   selectCart,
   (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
   selectCart,
   (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
   selectCartItems,
   (cartItems) =>
      cartItems.reduce(
         (accQuantity, cartItem) => accQuantity + cartItem.quantity,
         0
      )
);

export const selectCartTotal = createSelector(
   selectCartItems,
   (cartItems) =>
      cartItems.reduce(
         (accTotal, cartItem) =>
            accTotal + cartItem.price * cartItem.quantity,
         0
      )
);
