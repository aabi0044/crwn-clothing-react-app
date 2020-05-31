import React from 'react';
import { Route } from 'react-router-dom';
import { updateCollections } from '../../redux/shop/shop.actions'
import  WithSpinner  from '../../components/with-spinner/with-spinner.component';
import CollectionsOverView from '../../components/collection-overview/collections-overview.component';
import { connect } from 'react-redux';
import CollectionPage from '../collection/collection.component';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
const CollectionsOverviewWithWSpinner = WithSpinner(CollectionsOverView);
const CollectionPageWithSpinner = WithSpinner(CollectionPage)
class ShopPage extends React.Component {
    state = { loading: true }
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');
        collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({loading:false})
        })
    }
    render() {
        const { match } = this.props;
        const {loading} = this.state;
        return (

            <div className='shop-page'>
                <Route exact path={`${match.path}`} render={(props) =><CollectionsOverviewWithWSpinner isLoading={loading} {...props} />} />
                <Route path={`${match.path}/:collectionId`} 
                render={(props) =><CollectionPageWithSpinner isLoading={loading} {...props} />}
                />

            </div>

        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap =>
        dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);

