import React from 'react';
import StripeCheckout, { Token } from 'react-stripe-checkout';
import axios from 'axios';

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
      axios({
         url: '/payment',
         method: 'post',
         data: {
            amount: priceForStripe,
            token,
         },
      })
         .then((response) => {
            alert('Payment successful');
         })
         .catch((err) => {
            console.log('Payment error: ', err);
            alert(
               'There was an issue with your payment. Please use the provided test creadit card.'
            );
         });
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
