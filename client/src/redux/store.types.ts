import { rootReducer } from './root-reducer';

// import { UserState } from './user/user.types';
// import { CartState } from './cart/cart.types';
// import { DirectoryState } from './directory/directory.types';

// export interface State {
//    user: UserState;
//    cart: CartState;
//    directory: DirectoryState;
// }

export type State = ReturnType<typeof rootReducer>;
