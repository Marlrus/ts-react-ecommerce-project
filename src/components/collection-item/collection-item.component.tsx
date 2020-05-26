import React, { Dispatch } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import {
   AddButton,
   PriceContainer,
   BackgroundImage,
   CollectionFooterContainer,
   CollectionItemContainer,
   NameContainer,
} from './collection-item.styles';

import { CartActions } from '../../redux/cart/cart.types';
import { ShopItem } from '../../redux/shop/shop.types';

interface ItemProps {
   item: ShopItem;
}

//USED IN CollectionPage
const CollectionItem: React.FC<CollectionItemProps> = ({
   item,
   addItem,
}) => {
   const { imageUrl, name, price } = item;
   return (
      <CollectionItemContainer>
         <BackgroundImage
            style={{ backgroundImage: `url(${imageUrl})` }}
         />
         <CollectionFooterContainer>
            <NameContainer> {name} </NameContainer>
            <PriceContainer> ${price} </PriceContainer>
         </CollectionFooterContainer>
         <AddButton onClick={() => addItem(item)} inverted>
            Add to Cart
         </AddButton>
      </CollectionItemContainer>
   );
};

const mapDispatchToProps = (dispatch: Dispatch<CartActions>) => ({
   addItem: (item: any) => dispatch(addItem(item)),
});

const connector = connect(null, mapDispatchToProps);

export type CollectionItemProps = ConnectedProps<typeof connector> &
   ItemProps;

export default connector(CollectionItem);
