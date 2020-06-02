import React, { useEffect, useState } from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

import {
   firestore,
   convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

import { ShopActions, ShopMap } from '../../redux/shop/shop.types';
import { updateCollections } from '../../redux/shop/shop.actions';

const CollectionsOverviewWithSpinner = WithSpinner(
   CollectionsOverview
);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

//Used in App Component and anything that routes to /shop
const ShopPage: React.FC<ShopPageProps> = ({
   match,
   updateCollections,
}) => {
   // const unsubscribeFromSnapshot: Function | null = null;

   const [loadingState, setLoading] = useState({ loading: true });

   useEffect(() => {
      const collectionRef = firestore.collection('collections');

      collectionRef.onSnapshot(async (snapshot) => {
         const collectionsMap = convertCollectionsSnapshotToMap(
            snapshot
         );
         updateCollections(collectionsMap);
         setLoading({ loading: false });
      });
   }, [updateCollections]);

   const { loading } = loadingState;

   return (
      <div className='shop-page'>
         <Route
            exact
            path={`${match.path}`}
            render={(props) => (
               <CollectionsOverviewWithSpinner
                  isLoading={loading}
                  {...props}
               />
            )}
         />
         <Route
            path={`${match.path}/:collectionId`}
            render={(props) => (
               <CollectionPageWithSpinner
                  isLoading={loading}
                  {...props}
               />
            )}
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
