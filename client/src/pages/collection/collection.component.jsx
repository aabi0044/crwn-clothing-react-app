import React from 'react';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { connect } from 'react-redux';
import './collection.styles.scss';
import { selectCollection } from '../../redux/shop/shop.selectors';
const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
    console.log("match in category page", collection)
    return (
        <div className="collection-page">
            <h2 className="title" >{title}</h2>
            <div className="items">
                {
                    items.map(item =>(
                        <CollectionItem key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);