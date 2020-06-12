import { connect } from 'react-redux';
import { compose } from 'redux';

import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionsOverview from '../collections-overview/collections-overview.component';
import { State } from '../../redux/store.types';

const mapStateToProps = (state: State) => ({
   isLoading: !selectIsCollectionsLoaded(state),
});

const CollectionsOverviewContainer = compose(
   connect(mapStateToProps),
   WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer as React.FC;
