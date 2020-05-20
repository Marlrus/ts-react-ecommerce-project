import React, { Dispatch } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';
import { CartActions } from '../../redux/cart/cart.types';

const CartIcon: React.FC<CartIconProps> = ({ toggleCartHidden }) => (
   <div className='cart-icon' onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>0</span>
   </div>
);

const mapDispatchToProps = (dispatch: Dispatch<CartActions>) => ({
   toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const connector = connect(null, mapDispatchToProps);

type CartIconProps = ConnectedProps<typeof connector>;

export default connector(CartIcon);
