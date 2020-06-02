import { createSelector } from 'reselect';
const selectDirecotry = state => state.directory;
export const selectDirectorySections = createSelector(
    [selectDirecotry],
    directory => directory.sections
)