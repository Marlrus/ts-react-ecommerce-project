export interface UserState {
   currentUser: null | {
      createdAt: { seconds: number; nanoseconds: number };
      displayName: string;
      email: string;
      id: string;
   };
}

export interface SetCurrentUserAction {
   type: 'SET_CURRENT_USER';
   payload: UserState;
}

interface OtherAction {
   type: 'OTHER_ACTION';
   payload: any;
}

export type UserActions = SetCurrentUserAction | OtherAction;
