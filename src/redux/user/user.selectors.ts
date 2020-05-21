import { createSelector } from 'reselect';
import { Selector } from 'react-redux';
import { State } from '../store.types';
import { UserState } from './user.types';

const selectUser: Selector<State, UserState> = (state) => state.user;

export const selectCurrentUser = createSelector(
   selectUser,
   (user) => user.currentUser
);
