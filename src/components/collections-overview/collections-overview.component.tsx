import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import CollectionPreview from '../collection-preview/collection-preview.component';
import { selectCollectionsAsArray } from '../../redux/shop/shop.selectors';

import { State } from '../../redux/store.types';

import { CollectionsOverviewContainer } from './collections-overview.styles';

//Used in ShopPage (Shop)
const CollectionsOverview: React.FC<CollectionsOverviewProps> = ({
   collections,
}) => (
   <CollectionsOverviewContainer>
      {collections.map(({ id, ...otherCollectionProps }) => (
         <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
   </CollectionsOverviewContainer>
);

const mapStateToProps = (state: State) => ({
   collections: selectCollectionsAsArray(state),
});

const connector = connect(mapStateToProps);

type CollectionsOverviewProps = ConnectedProps<typeof connector>;

export default connector(CollectionsOverview);
