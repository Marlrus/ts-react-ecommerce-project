import React, { Dispatch } from 'react';

import './checkout-item.styles.scss';

import { CartItem, CartActions } from '../../redux/cart/cart.types';
import { connect, ConnectedProps } from 'react-redux';
import {
   clearItemFromCart,
   removeItem,
   addItem,
} from '../../redux/cart/cart.actions';

interface CheckoutItemPassedProps {
   cartItem: CartItem;
}

const CheckoutItem: React.FC<CheckoutItemProps> = ({
   cartItem,
   clearItem,
   subtractQuantity,
   addItem,
}) => {
   const { name, imageUrl, price, quantity } = cartItem;
   return (
      <div className='checkout-item'>
         <div className='image-container'>
            <img src={imageUrl} alt={`item: ${name}`} />
         </div>
         <span className='name'>{name}</span>
         <span className='quantity'>
            <div
               className='arrow'
               onClick={() =>
                  cartItem.quantity > 1
                     ? subtractQuantity(cartItem)
                     : clearItem(cartItem)
               }
            >
               &#10094;
            </div>
            <span className='value'>{quantity}</span>
            <div className='arrow' onClick={() => addItem(cartItem)}>
               &#10095;
            </div>
         </span>
         <span className='price'>{price}</span>
         <div
            className='remove-button'
            onClick={() => clearItem(cartItem)}
         >
            &#10005;
         </div>
      </div>
   );
};

const mapDispatchToProps = (dispatch: Dispatch<CartActions>) => ({
   clearItem: (cartItem: CartItem) =>
      dispatch(clearItemFromCart(cartItem)),
   subtractQuantity: (cartItem: CartItem) =>
      dispatch(removeItem(cartItem)),
   addItem: (cartItem: CartItem) => dispatch(addItem(cartItem)),
});

const connector = connect(null, mapDispatchToProps);

type CheckoutItemProps = ConnectedProps<typeof connector> &
   CheckoutItemPassedProps;

export default connector(CheckoutItem);
