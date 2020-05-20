//State and State Parts
export interface UserState {
   currentUser: null | CurrentUser;
}

export interface CurrentUser {
   createdAt: { seconds: number; nanoseconds: number };
   displayName: string;
   email: string;
   id: string;
}

//UserActionTypes Hardcoded
export const UserActionTypes = {
   SET_CURRENT_USER: 'SET_CURRENT_USER',
};

interface SetCurrentUserAction {
   type: typeof UserActionTypes.SET_CURRENT_USER;
   payload: CurrentUser | null;
}

interface OtherAction {
   type: 'OTHER_ACTION';
   payload: any;
}

//Every Action
export type UserActions = SetCurrentUserAction | OtherAction;
