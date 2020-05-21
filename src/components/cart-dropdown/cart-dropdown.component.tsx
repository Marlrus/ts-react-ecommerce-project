import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import './cart-dropdown.styles.scss';
import { State } from '../../redux/store.types';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const Cart: React.FC<CartProps> = ({
   cartItems,
   history,
   dispatch,
}) => (
   <div className='cart-dropdown'>
      <div className='cart-items'>
         {cartItems.length > 0 ? (
            cartItems.map((cartItem) => (
               <CartItem key={cartItem.id} item={cartItem} />
            ))
         ) : (
            <span className='empty-message'>Your cart is empty</span>
         )}
      </div>
      <CustomButton
         onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
         }}
      >
         GO TO CHECKOUT
      </CustomButton>
   </div>
);

const mapStateToProps = (state: State) => ({
   cartItems: selectCartItems(state),
});

const connector = connect(mapStateToProps);

type CartProps = ConnectedProps<typeof connector> &
   RouteComponentProps;

export default withRouter(connector(Cart));
