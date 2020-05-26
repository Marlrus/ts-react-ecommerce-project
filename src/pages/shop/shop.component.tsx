import React from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

//Used in App Component and anything that routes to /shop
const ShopPage: React.FC<RouteComponentProps> = ({ match }) => (
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

export default ShopPage;
