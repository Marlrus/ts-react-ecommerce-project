import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import './checkout.styles.scss';

import { State } from '../../redux/store.types';
import {
   selectCartItems,
   selectCartTotal,
} from '../../redux/cart/cart.selectors';

const CheckoutPage: React.FC<CheckoutProps> = ({
   cartItems,
   total,
}) => (
   <div className='checkout-page'>
      <div className='checkout-header'>
         <div className='header-block'>
            <span>Product</span>
         </div>
         <div className='header-block'>
            <span>Description</span>
         </div>
         <div className='header-block'>
            <span>Quantity</span>
         </div>
         <div className='header-block'>
            <span>Price</span>
         </div>
         <div className='header-block'>
            <span>Remove</span>
         </div>
      </div>
      {cartItems.map((cartItem) => cartItem.name)}
      <div className='total'>
         <span>TOTAL: ${total}</span>
      </div>
   </div>
);

const mapStateToProps = (state: State) => ({
   cartItems: selectCartItems(state),
   total: selectCartTotal(state),
});

const connector = connect(mapStateToProps);

type CheckoutProps = ConnectedProps<typeof connector>;

export default connector(CheckoutPage);
