import React from 'react';

import { CartItem } from '../../redux/cart/cart.types';

import './cart-item.styles.scss';

interface CartItemProps {
   item: CartItem;
}

const CartItemComponent: React.FC<CartItemProps> = ({
   item: { imageUrl, price, name, quantity },
}) => (
   <div className='cart-item'>
      <img src={imageUrl} alt={name} />
      <div className='item-details'>
         <span className='name'>{name}</span>
         <span className='price'>
            {quantity} x ${price}
         </span>
      </div>
   </div>
);

export default CartItemComponent;
