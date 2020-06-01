import React from 'react';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions'
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionsOverViewContainer from '../../components/collection-overview/collections-overview.container';
import { connect } from 'react-redux';
import CollectionPageContainer from '../collection/collection.container';
import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';

// const CollectionsOverviewWithWSpinner = WithSpinner(CollectionsOverView);

// const CollectionPageWithSpinner = WithSpinner(CollectionPage)
class ShopPage extends React.Component {


    componentDidMount() {
        const { fetchCollectionsStartAsync } = this.props;
        fetchCollectionsStartAsync();
    }
    render() {
        const { match } = this.props;

        return (

            <div className='shop-page'>
                <Route
                    exact
                    path={`${match.path}`}
                    component={CollectionsOverViewContainer}
                />} />

                <Route path={`${match.path}/:collectionId`}
                   component={CollectionPageContainer} />}
                />
                {/* <Route path={`${match.path}/:collectionId`}
                    render={(props) => <CollectionPageWithSpinner
                         isLoading={!isCollectionLoaded} {...props} />}
                /> */}

            </div>

        )
    }
}
// const mapStateToProps = createStructuredSelector({
//     isCollectionLoaded: selectIsCollectionsLoaded

// })

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(null, mapDispatchToProps)(ShopPage);

