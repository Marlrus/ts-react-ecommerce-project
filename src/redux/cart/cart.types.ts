export interface CartState {
   hidden: boolean;
}

export const CartActionTypes = {
   TOGGLE_CART_HIDDEN: 'TOGGLE_CART_HIDDEN',
};

//action types
interface ToggleCartHiddenAction {
   type: typeof CartActionTypes.TOGGLE_CART_HIDDEN;
}

export type CartActions = ToggleCartHiddenAction;
