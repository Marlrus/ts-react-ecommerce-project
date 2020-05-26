import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import {
   CheckoutHeaderContainer,
   CheckoutPageContainer,
   CheckoutTestWarning,
   CheckoutTotal,
   HeaderBlockContainer,
} from './checkout.styles';

import { State } from '../../redux/store.types';
import {
   selectCartItems,
   selectCartTotal,
} from '../../redux/cart/cart.selectors';

const CheckoutPage: React.FC<CheckoutProps> = ({
   cartItems,
   total,
}) => (
   <CheckoutPageContainer>
      <CheckoutHeaderContainer>
         <HeaderBlockContainer>
            <span>Product</span>
         </HeaderBlockContainer>
         <HeaderBlockContainer>
            <span>Description</span>
         </HeaderBlockContainer>
         <HeaderBlockContainer>
            <span>Quantity</span>
         </HeaderBlockContainer>
         <HeaderBlockContainer>
            <span>Price</span>
         </HeaderBlockContainer>
         <HeaderBlockContainer>
            <span>Remove</span>
         </HeaderBlockContainer>
      </CheckoutHeaderContainer>
      {cartItems.map((cartItem) => (
         <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <CheckoutTotal>TOTAL: ${total}</CheckoutTotal>
      <CheckoutTestWarning>
         *Please use the following test credit card for payments*
         <br />
         4242 4242 4242 4242 - Exp: 01/22 CVV: 123
      </CheckoutTestWarning>
      <StripeCheckoutButton price={total} />
   </CheckoutPageContainer>
);

const mapStateToProps = (state: State) => ({
   cartItems: selectCartItems(state),
   total: selectCartTotal(state),
});

const connector = connect(mapStateToProps);

type CheckoutProps = ConnectedProps<typeof connector>;

export default connector(CheckoutPage);
