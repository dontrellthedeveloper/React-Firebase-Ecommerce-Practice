import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51IiZmvJJnrCDMTtdotQgiJcV9JuZN0wZvE1Opgbr3R42nBTXanvUb7sKBFNfh69pTxxAb8evuBmzonVDImLPTXTJ00gWA31BZp';

  const onToken = token => {
      console.log(token);
      alert('Payment Successful')
  };

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd'
            billingAddress
            shippingAddress
            image
            description={`Your total price is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}

        />
    )
};

export default StripeCheckoutButton;