import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions'
import CollectionsOverViewContainer from '../../components/collection-overview/collections-overview.container';
import { connect } from 'react-redux';
import CollectionPageContainer from '../collection/collection.container';

const ShopPage = ({fetchCollectionsStart, match }) => {

    useEffect(() => {
        fetchCollectionsStart();
    }, [fetchCollectionsStart])




    return (

        <div className='shop-page'>
            <Route
                exact
                path={`${match.path}`}
                component={CollectionsOverViewContainer}
            />

            <Route path={`${match.path}/:collectionId`}
                component={CollectionPageContainer}
            />
            {/* <Route path={`${match.path}/:collectionId`}
                    render={(props) => <CollectionPageWithSpinner
                         isLoading={!isCollectionLoaded} {...props} />}
                /> */}

        </div>

    )
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);

