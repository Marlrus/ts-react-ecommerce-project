export interface CartState {
   hidden: boolean;
   cartItems: any[];
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
   payload: any;
}

export type CartActions = ToggleCartHiddenAction | AddItemAction;
