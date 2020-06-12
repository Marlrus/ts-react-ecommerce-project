import React from 'react';

import { connect, ConnectedProps } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';

import {
   CollectionItemsContainer,
   CollectionPageContainer,
} from './collection.styles';

import { RouteComponentProps } from 'react-router-dom';
import { State } from '../../redux/store.types';
import { selectCollection } from '../../redux/shop/shop.selectors';
import { collectionIdKeys } from '../../redux/shop/shop.types';

//USED IN ShopPage
const CollectionPage: React.FC<CollectionPageProps> = ({
   collection,
}) => {
   const { title, items } = collection!;
   return (
      <CollectionPageContainer>
         <h2 className='title'>{title}</h2>
         <CollectionItemsContainer>
            {items.map((item) => (
               <CollectionItem key={item.id} item={item} />
            ))}
         </CollectionItemsContainer>
      </CollectionPageContainer>
   );
};

const mapStateToProps = (
   state: State,
   ownProps: RouteComponentProps<CollectionPageParams>
) => ({
   collection: selectCollection(ownProps.match.params.collectionId)(
      state
   ),
});

interface CollectionPageParams {
   collectionId: collectionIdKeys;
}

const connector = connect(mapStateToProps);

type CollectionPageProps = ConnectedProps<typeof connector> &
   RouteComponentProps<CollectionPageParams>;

export default connector(CollectionPage);
