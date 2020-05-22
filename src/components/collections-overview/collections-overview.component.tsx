import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import CollectionPreview from '../collection-preview/collection-preview.component';
import { selectCollections } from '../../redux/shop/shop.selectors';

import { State } from '../../redux/store.types';

import './collections-overview.styles.scss';

const CollectionsOverview: React.FC<CollectionsOverviewProps> = ({
   collections,
}) => (
   <div className='collections-overview'>
      {collections.map(({ id, ...otherCollectionProps }) => (
         <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
   </div>
);

const mapStateToProps = (state: State) => ({
   collections: selectCollections(state),
});

const connector = connect(mapStateToProps);

type CollectionsOverviewProps = ConnectedProps<typeof connector>;

export default connector(CollectionsOverview);
