import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import {
   CartDropdownContainer,
   CartItemsDiv,
   EmptyMessageSpan,
} from './cart-dropdown.styles';

import { State } from '../../redux/store.types';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const Cart: React.FC<CartProps> = ({
   cartItems,
   history,
   dispatch,
}) => (
   <CartDropdownContainer>
      <CartItemsDiv>
         {cartItems.length > 0 ? (
            cartItems.map((cartItem) => (
               <CartItem key={cartItem.id} item={cartItem} />
            ))
         ) : (
            <EmptyMessageSpan>Your cart is empty</EmptyMessageSpan>
         )}
      </CartItemsDiv>
      <CustomButton
         onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
         }}
      >
         GO TO CHECKOUT
      </CustomButton>
   </CartDropdownContainer>
);

const mapStateToProps = (state: State) => ({
   cartItems: selectCartItems(state),
});

const connector = connect(mapStateToProps);

type CartProps = ConnectedProps<typeof connector> &
   RouteComponentProps;

export default withRouter(connector(Cart));
