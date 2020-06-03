import React, { useEffect } from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

import { ShopActions, ShopState } from '../../redux/shop/shop.types';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
import { State } from '../../redux/store.types';
import { ThunkDispatch } from 'redux-thunk';

const CollectionsOverviewWithSpinner = WithSpinner(
   CollectionsOverview
);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

//Used in App Component and anything that routes to /shop
const ShopPage: React.FC<ShopPageProps> = ({
   match,
   isCollectionFetching,
   fetchCollectionsStartAsync,
}) => {
   // const unsubscribeFromSnapshot: Function | null = null;

   useEffect(() => {
      fetchCollectionsStartAsync();
   }, [fetchCollectionsStartAsync]);

   return (
      <div className='shop-page'>
         <Route
            exact
            path={`${match.path}`}
            render={(props) => (
               <CollectionsOverviewWithSpinner
                  isLoading={isCollectionFetching}
                  {...props}
               />
            )}
         />
         <Route
            path={`${match.path}/:collectionId`}
            render={(props) => (
               <CollectionPageWithSpinner
                  isLoading={isCollectionFetching}
                  {...props}
               />
            )}
         />
      </div>
   );
};

const mapStateToProps = (state: State) => ({
   isCollectionFetching: selectIsCollectionFetching(state),
});

const mapDispatchToProps = (
   dispatch: ThunkDispatch<ShopState, undefined, ShopActions>
) => ({
   fetchCollectionsStartAsync: () =>
      dispatch(fetchCollectionsStartAsync()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type ShopPageProps = ConnectedProps<typeof connector> &
   RouteComponentProps;

export default connector(ShopPage);
