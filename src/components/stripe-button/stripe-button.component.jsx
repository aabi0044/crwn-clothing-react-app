import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
const StripeCheckoutButton = ({price})=>{
    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_q1PSZF5er1F152fCUYEdWZYQ00MDL2b23r';
const onToken = token =>{
    console.log(token);
    alert('payment Successful')
}
    return(
        <StripeCheckout
        label='Pay Now'
        name='CRWN CLOTHING LTD.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your Total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishablekey}
        />
    )
}
export default StripeCheckoutButton;