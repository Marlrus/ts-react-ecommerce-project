export interface CartState {
   hidden: boolean;
   cartItems: CartItem[];
}

export interface CartItem {
   quantity: number;
   id: number;
   name: string;
   imageUrl: string;
   price: number;
}

export const CartActionTypes = {
   TOGGLE_CART_HIDDEN: 'TOGGLE_CART_HIDDEN',
   ADD_ITEM: 'ADD_ITEM',
   CLEAR_ITEM_FROM_CART: 'CLEAR_ITEM_FROM_CART',
   REMOVE_ITEM: 'REMOVE_ITEM',
} as const;

//action types
interface ToggleCartHiddenAction {
   type: typeof CartActionTypes.TOGGLE_CART_HIDDEN;
}

interface AddItemAction {
   type: typeof CartActionTypes.ADD_ITEM;
   payload: CartItem;
}

interface clearItemFromCartAction {
   type: typeof CartActionTypes.CLEAR_ITEM_FROM_CART;
   payload: CartItem;
}

interface removeItemAction {
   type: typeof CartActionTypes.REMOVE_ITEM;
   payload: CartItem;
}

export type CartActions =
   | ToggleCartHiddenAction
   | AddItemAction
   | clearItemFromCartAction
   | removeItemAction;
