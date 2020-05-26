import { INITIAL_STATE } from './directory.reducer';

export type DirectoryState = typeof INITIAL_STATE;

export type SectionItem = typeof INITIAL_STATE.sections[number];
