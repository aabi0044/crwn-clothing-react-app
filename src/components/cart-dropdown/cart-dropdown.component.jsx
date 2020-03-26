import React from 'react';
import CustomeButtom from '../custom-button/custom-button.component';
import { connect } from 'react-redux';

import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styels.scss';


const CartDropdown = ({ cartItems }) => {
    debugger;
   return (

    <div className='cart-dropdown'>
        <div className='cart-items' >

            {
                cartItems.map(item => (
                    <CartItem key={item.id} item={item} />
                ))
            }
        </div>
        <CustomeButtom >GO TO CHECKOUT</CustomeButtom>
    </div>
)}
const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
})
export default connect(mapStateToProps)(CartDropdown); 