import React from 'react';

import { CartItem } from '../../redux/cart/cart.types';

import {
   CartItemContainer,
   CartItemImage,
   ItemDetailsContainer,
} from './cart-item.styles';

interface CartItemProps {
   item: CartItem;
}

const CartItemComponent: React.FC<CartItemProps> = ({
   item: { imageUrl, price, name, quantity },
}) => (
   <CartItemContainer>
      <CartItemImage src={imageUrl} alt={name} />
      <ItemDetailsContainer className='item-details'>
         <span>{name}</span>
         <span>
            {quantity} x ${price}
         </span>
      </ItemDetailsContainer>
   </CartItemContainer>
);

export default CartItemComponent;
