import React, { Dispatch } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';
import { CartActions } from '../../redux/cart/cart.types';
import { State } from '../../redux/store.types';

const CartIcon: React.FC<CartIconProps> = ({
   toggleCartHidden,
   itemCount,
}) => (
   <div className='cart-icon' onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
   </div>
);

const mapStateToProps = (state: State) => ({
   itemCount: selectCartItemsCount(state),
});

const mapDispatchToProps = (dispatch: Dispatch<CartActions>) => ({
   toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type CartIconProps = ConnectedProps<typeof connector>;

export default connector(CartIcon);
