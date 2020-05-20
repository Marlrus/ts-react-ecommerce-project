import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

import './collection-item.styles.scss';

interface CollectionItemProps {
   // id: number;
   name: string;
   imageUrl: string;
   price: number;
}

const CollectionItem: React.FC<CollectionItemProps> = ({
   name,
   price,
   imageUrl,
}) => (
   <div className='collection-item'>
      <div
         className='image'
         style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className='collection-footer'>
         <span className='name'> {name} </span>
         <span className='price'> {price} </span>
      </div>
      <CustomButton inverted>Add to Cart</CustomButton>
   </div>
);

export default CollectionItem;
