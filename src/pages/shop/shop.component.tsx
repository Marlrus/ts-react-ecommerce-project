import React, { useEffect } from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

import {
   firestore,
   convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

import { ShopActions, ShopMap } from '../../redux/shop/shop.types';
import { updateCollections } from '../../redux/shop/shop.actions';

//Used in App Component and anything that routes to /shop
const ShopPage: React.FC<ShopPageProps> = ({
   match,
   updateCollections,
}) => {
   // const unsubscribeFromSnapshot = null;

   useEffect(() => {
      const collectionRef = firestore.collection('collections');

      collectionRef.onSnapshot(async (snapshot) => {
         const collectionsMap = convertCollectionsSnapshotToMap(
            snapshot
         );
         updateCollections(collectionsMap);
      });
   });

   return (
      <div className='shop-page'>
         <Route
            exact
            path={`${match.path}`}
            component={CollectionsOverview}
         />
         <Route
            path={`${match.path}/:collectionId`}
            component={CollectionPage}
         />
      </div>
   );
};

const mapDispatchToProps = (
   dispatch: React.Dispatch<ShopActions>
) => ({
   updateCollections: (collectionsMap: ShopMap) =>
      dispatch(updateCollections(collectionsMap)),
});

const connector = connect(null, mapDispatchToProps);

type ShopPageProps = ConnectedProps<typeof connector> &
   RouteComponentProps;

export default connector(ShopPage);
