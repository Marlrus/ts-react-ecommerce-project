import React from 'react';

import { connect, ConnectedProps } from 'react-redux';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { State } from '../../redux/store.types';
import { selectCollections } from '../../redux/shop/shop.selectors';

const ShopPage: React.FC<ShopPageProps> = ({ collections }) => (
   <div className='shop-page'>
      {collections.map(({ id, ...otherCollectionProps }) => (
         <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
   </div>
);

const mapStateToProps = (state: State) => ({
   collections: selectCollections(state),
});

const connector = connect(mapStateToProps);

type ShopPageProps = ConnectedProps<typeof connector>;

export default connector(ShopPage);
