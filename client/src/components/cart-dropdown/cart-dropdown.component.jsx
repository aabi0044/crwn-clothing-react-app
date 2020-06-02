import React from 'react';
import CustomeButtom from '../custom-button/custom-button.component';
import { connect } from 'react-redux';

import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import {toggleCartHidden} from '../../redux/cart/cart.actions';

import './cart-dropdown.styels.scss';
 

const CartDropdown = ({ cartItems,history,dispatch }) => {

    return (

        <div className='cart-dropdown'>
            <div className='cart-items' >

                {cartItems.length ?
                    cartItems.map(item => (
                        <CartItem key={item.id} item={item} />
                    ))
                    :
                    <span className='empty-message'> Your Cart is empty</span>
                }
            </div>
            <CustomeButtom onClick = { ()=>{
                history.push('/checkout')
                dispatch(toggleCartHidden())
                }} >GO TO CHECKOUT</CustomeButtom>
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})
export default withRouter(connect(mapStateToProps)(CartDropdown)); 