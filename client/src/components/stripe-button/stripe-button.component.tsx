import React from 'react';
import StripeCheckout, { Token } from 'react-stripe-checkout';

interface StripeCheckoutButtonProps {
   price: number;
}

const StripeCheckoutButton: React.FC<StripeCheckoutButtonProps> = ({
   price,
}) => {
   const priceForStripe = price * 100;
   const publishableKey =
      'pk_test_JdfuRU40dN6HP7uJ7YMucKqj00nAmG8IWJ';

   const onToken = (token: Token) => {
      console.log(token);
      alert('Payment Successful');
   };

   return (
      <StripeCheckout
         token={onToken}
         stripeKey={publishableKey}
         label='Pay Now'
         name='CRWN Clothing SAS'
         billingAddress
         shippingAddress
         image='https://svgshare.com/i/CUz.svg'
         description={`Your total is $${price}`}
         amount={priceForStripe}
         panelLabel='Pay Now'
      />
   );
};

export default StripeCheckoutButton;
