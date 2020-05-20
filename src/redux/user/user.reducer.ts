import {
   UserActions,
   UserState,
   UserActionTypes,
} from './user.types';
import { Reducer } from 'react';

const INITIAL_STATE: UserState = {
   currentUser: null,
};

const userReducer: Reducer<UserState, UserActions> = (
   initialState = INITIAL_STATE,
   action
) => {
   switch (action.type) {
      case UserActionTypes.SET_CURRENT_USER:
         return {
            ...initialState,
            currentUser: action.payload,
         };
      default:
         return initialState;
   }
};

export default userReducer;
