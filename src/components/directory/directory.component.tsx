import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import MenuItem from '../menu-item/menu-item.component';
import { selectDirectorySection } from '../../redux/directory/directory.selectors';

import { State } from '../../redux/store.types';

import { DirectoryMenuContainer } from './directory.styles';

//Used in HomePage
const Directory: React.FC<DirectoryProps> = ({ sections }) => (
   <DirectoryMenuContainer>
      {sections.map(({ id, ...otherSectionProps }) => (
         <MenuItem key={id} {...otherSectionProps} />
      ))}
   </DirectoryMenuContainer>
);

const mapStateToProps = (state: State) => ({
   sections: selectDirectorySection(state),
});

const connector = connect(mapStateToProps);

type DirectoryProps = ConnectedProps<typeof connector>;

export default connector(Directory);
