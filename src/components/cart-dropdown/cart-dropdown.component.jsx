import React from 'react';
import CustomeButtom from '../custom-button/custom-button.component';
import './cart-dropdown.styels.scss';

const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items' />
        <CustomeButtom >GO TO CHECKOUT</CustomeButtom>
    </div>
)
export default CartDropdown; 