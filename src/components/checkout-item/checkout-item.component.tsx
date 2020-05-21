import React from 'react';

import './checkout-item.styles.scss';

import { CartItem } from '../../redux/cart/cart.types';

interface CheckoutItemProps {
   cartItem: CartItem;
}

const CheckoutItem: React.FC<CheckoutItemProps> = ({
   cartItem: { name, imageUrl, price, quantity },
}) => (
   <div className='checkout-item'>
      <div className='image-container'>
         <img src={imageUrl} alt={`item: ${name}`} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>{quantity}</span>
      <span className='price'>{price}</span>
      <div className='remove-button'>&#10005;</div>
   </div>
);

export default CheckoutItem;
