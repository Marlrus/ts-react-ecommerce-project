import React, { Dispatch } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';

import './collection-item.styles.scss';
import { CartActions } from '../../redux/cart/cart.types';
import { ShopItem } from '../../redux/shop/shop.types';

interface CollectionItemProps {
   item: ShopItem;
}

//USED IN CollectionPage
const CollectionItem: React.FC<
   CollectionItemProps & CollectionItemProps2
> = ({ item, addItem }) => {
   const { imageUrl, name, price } = item;
   return (
      <div className='collection-item'>
         <div
            className='image'
            style={{ backgroundImage: `url(${imageUrl})` }}
         />
         <div className='collection-footer'>
            <span className='name'> {name} </span>
            <span className='price'> ${price} </span>
         </div>
         <CustomButton onClick={() => addItem(item)} inverted>
            Add to Cart
         </CustomButton>
      </div>
   );
};

const mapDispatchToProps = (dispatch: Dispatch<CartActions>) => ({
   addItem: (item: any) => dispatch(addItem(item)),
});

const connector = connect(null, mapDispatchToProps);

type CollectionItemProps2 = ConnectedProps<typeof connector>;

export default connector(CollectionItem);
