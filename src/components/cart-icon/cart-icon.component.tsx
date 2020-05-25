import React, { Dispatch } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import {
   CartContainer,
   ItemCountContainer,
   ShoppingIcon,
} from './cart-icon.styles';

import { CartActions } from '../../redux/cart/cart.types';
import { State } from '../../redux/store.types';

const CartIcon: React.FC<CartIconProps> = ({
   toggleCartHidden,
   itemCount,
}) => (
   <CartContainer onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon' />
      <ItemCountContainer>{itemCount}</ItemCountContainer>
   </CartContainer>
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
