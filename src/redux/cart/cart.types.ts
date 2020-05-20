export interface CartState {
   hidden: boolean;
   cartItems: CartItemInt[];
}

export interface CartItemInt {
   quantity: number;
   id: number;
   name: string;
   imageUrl: string;
   price: number;
}

export const CartActionTypes = {
   TOGGLE_CART_HIDDEN: 'TOGGLE_CART_HIDDEN',
   ADD_ITEM: 'ADD_ITEM',
} as const;

//action types
interface ToggleCartHiddenAction {
   type: typeof CartActionTypes.TOGGLE_CART_HIDDEN;
}

interface AddItemAction {
   type: typeof CartActionTypes.ADD_ITEM;
   payload: CartItemInt;
}

export type CartActions = ToggleCartHiddenAction | AddItemAction;
