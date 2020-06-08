import React, { useEffect } from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../../pages/collection/collection.container';

import { ShopActions, ShopState } from '../../redux/shop/shop.types';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import { ThunkDispatch } from 'redux-thunk';

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
         <Route
            exact
            path={`${match.path}`}
            component={CollectionsOverviewContainer}
         />
         <Route
            path={`${match.path}/:collectionId`}
            component={CollectionPageContainer}
         />
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
