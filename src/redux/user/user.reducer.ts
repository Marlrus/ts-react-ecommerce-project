import { UserActions, UserState } from './user.types';

const INITIAL_STATE: UserState = {
   currentUser: null,
};

const userReducer = (
   initialState = INITIAL_STATE,
   action: UserActions
) => {
   switch (action.type) {
      case 'SET_CURRENT_USER':
         return {
            ...initialState,
            currentUser: action.payload,
         };
      default:
         return initialState;
   }
};

export default userReducer;
