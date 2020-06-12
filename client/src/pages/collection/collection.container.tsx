import { connect } from 'react-redux';
import { compose } from 'redux';

import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionPage from './collection.component';
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
import { State } from '../../redux/store.types';

const mapStateToProps = (state: State) => ({
   isLoading: !selectIsCollectionsLoaded(state),
});

const CollectionPageContainer = compose(
   connect(mapStateToProps),
   WithSpinner
)(CollectionPage);

export default CollectionPageContainer as React.FC;
