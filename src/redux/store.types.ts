import { UserState } from './user/user.types';
import { CartState } from './cart/cart.types';

export interface State {
   user: UserState;
   cart: CartState;
}
