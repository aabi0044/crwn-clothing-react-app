import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({price})=>{
    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_q1PSZF5er1F152fCUYEdWZYQ00MDL2b23r';
const onToken = token =>{
    axios({
        url:'payment',
        method: 'POST',
        data:{
            amount:priceForStripe,
            token
        }
    }).then(res=>{
        alert('payment successfull')
    }).catch(error=>{
        console.log("payment error",JSON.parse(error));
        alert("There was an issue with your payments !")
    })
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