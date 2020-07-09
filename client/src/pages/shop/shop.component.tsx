import React, { useEffect, lazy, Suspense } from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';

import Spinner from '../../components/spinner/spinner.component';

import { ShopActions, ShopState } from '../../redux/shop/shop.types';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import { ThunkDispatch } from 'redux-thunk';

//Lazy Loaded
const CollectionsOverviewContainer = lazy(() =>
   import(
      '../../components/collections-overview/collections-overview.container'
   )
);
const CollectionPageContainer = lazy(() =>
   import('../../pages/collection/collection.container')
);

//Used in App Component and anything that routes to /shop
const ShopPage: React.FC<ShopPageProps> = ({
   match,
   fetchCollectionsStart,
}) => {
   useEffect(() => {
      fetchCollectionsStart();
   }, [fetchCollectionsStart]);

   return (
      <div className='shop-page'>
         <Suspense fallback={<Spinner />}>
            <Route
               exact
               path={`${match.path}`}
               component={CollectionsOverviewContainer}
            />
            <Route
               path={`${match.path}/:collectionId`}
               component={CollectionPageContainer}
            />
         </Suspense>
      </div>
   );
};

const mapDispatchToProps = (
   dispatch: ThunkDispatch<ShopState, undefined, ShopActions>
) => ({
   fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

const connector = connect(null, mapDispatchToProps);

type ShopPageProps = ConnectedProps<typeof connector> &
   RouteComponentProps;

export default connector(ShopPage);
