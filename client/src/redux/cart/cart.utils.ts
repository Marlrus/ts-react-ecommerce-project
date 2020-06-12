import { CartItem } from './cart.types';

export const addItemToCart = (
   cartItems: CartItem[],
   cartItemToAdd: CartItem
) => {
   const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === cartItemToAdd.id
   );

   if (existingCartItem) {
      return cartItems.map((cartItem) =>
         cartItem.id === cartItemToAdd.id
            ? { ...cartItem, quantity: ++cartItem.quantity }
            : cartItem
      );
   }

   return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const subtractQuantity = (
   cartItems: CartItem[],
   cartItemToRemove: CartItem
) => {
   return cartItems.map((cartItem) =>
      cartItem.id === cartItemToRemove.id
         ? { ...cartItem, quantity: --cartItem.quantity }
         : cartItem
   );
};
