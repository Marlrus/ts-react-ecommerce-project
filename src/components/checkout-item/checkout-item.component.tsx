import React, { Dispatch } from 'react';

//Style
import {
   CheckoutItemContainer,
   ImageContainer,
   TextContainer,
   QuantityContainer,
   RemoveButtonContainer,
} from './checkout-item.styles';

//Types
import { CartItem, CartActions } from '../../redux/cart/cart.types';

//Redux
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
      <CheckoutItemContainer>
         <ImageContainer>
            <img src={imageUrl} alt={`item: ${name}`} />
         </ImageContainer>
         <TextContainer>{name}</TextContainer>
         <QuantityContainer>
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
            <span>{quantity}</span>
            <div onClick={() => addItem(cartItem)}>&#10095;</div>
         </QuantityContainer>
         <TextContainer>{price}</TextContainer>
         <RemoveButtonContainer onClick={() => clearItem(cartItem)}>
            &#10005;
         </RemoveButtonContainer>
      </CheckoutItemContainer>
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
