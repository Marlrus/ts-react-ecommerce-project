import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';
import { State } from '../../redux/store.types';

const Cart: React.FC<CartProps> = ({ cartItems }) => (
   <div className='cart-dropdown'>
      <div className='cart-items'>
         {cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
         ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
   </div>
);

const mapStateToProps = ({ cart: { cartItems } }: State) => ({
   cartItems,
});

const connector = connect(mapStateToProps);

type CartProps = ConnectedProps<typeof connector>;

export default connector(Cart);
