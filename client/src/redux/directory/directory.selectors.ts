import { createSelector, Selector } from 'reselect';
import { State } from '../store.types';
import { DirectoryState } from './directory.types';

const selectDirectory: Selector<State, DirectoryState> = (state) =>
   state.directory;

export const selectDirectorySection = createSelector(
   [selectDirectory],
   (directory) => directory.sections
);
