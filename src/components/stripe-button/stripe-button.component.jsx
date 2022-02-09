import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51KJYylSEU0ZIFPAM1cUSwrENCE7EwtIBs6xIfeKJFEfRMc8tEziYYpNJSCo8HOga7z8ZrWFLXfWarXu7bbztYYvy002Zc986fG';

  const onToken = token => {
    console.log(token);
    alert('Payment Succesful!');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='HEART Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://cdn-icons-png.flaticon.com/512/6748/6748863.png'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;