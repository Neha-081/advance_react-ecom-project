import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeChcekoutButton=({price})=>{
    const priceForStripe=price*100;
    const publishableKey='pk_test_51KJYylSEU0ZIFPAM1cUSwrENCE7EwtIBs6xIfeKJFEfRMc8tEziYYpNJSCo8HOga7z8ZrWFLXfWarXu7bbztYYvy002Zc986fG';


const onToken=token=>{
    console.log(token);
    alert('payment successful')
}

    return (
        <StripeCheckout
         label='Pay Now'
         name='CRWN Clothing Ltd.'
         billingAddress
         shippingAddress
         image="https://svgshare.com/i/CUz.svg"
         description={`Your Total is $${price}`}
         amount={priceForStripe}
         panelLabel="Pay Now"
         token={onToken}
         stripeKey={publishableKey}
        />
    )
}

export default StripeChcekoutButton;