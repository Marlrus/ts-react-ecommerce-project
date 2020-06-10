import {
   UserActions,
   UserState,
   UserActionTypes,
} from './user.types';
import { Reducer } from 'react';

const INITIAL_STATE: UserState = {
   currentUser: null,
   error: null,
};

const userReducer: Reducer<UserState, UserActions> = (
   state = INITIAL_STATE,
   action
) => {
   switch (action.type) {
      case UserActionTypes.SIGN_IN_SUCCESS:
         return {
            ...state,
            currentUser: action.payload,
            error: null,
         };
      case UserActionTypes.SIGN_OUT_SUCCESS:
         return {
            ...state,
            currentUser: null,
            error: null,
         };
      case UserActionTypes.SIGN_OUT_FAILURE:
      case UserActionTypes.SIGN_IN_FAILURE:
      case UserActionTypes.SIGN_UP_FAILURE:
         return {
            ...state,
            error: action.payload,
         };
      default:
         return state;
   }
};

export default userReducer;
