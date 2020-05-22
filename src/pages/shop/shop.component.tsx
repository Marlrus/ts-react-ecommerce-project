import React from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import { Route, RouteComponentProps } from 'react-router-dom';

const ShopPage: React.FC<RouteComponentProps> = ({ match }) => (
   <div className='shop-page'>
      <Route
         exact
         path={`${match.path}`}
         component={CollectionsOverview}
      />
   </div>
);

export default ShopPage;
