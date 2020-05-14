import React from 'react'

import './collection-preview.styles.scss'

interface CollectionPreviewProps {
   title: string
   items: {
      id: number;
      name: string;
      imageUrl: string;
      price: number;
   }[]
}

const CollectionPreview: React.FC<CollectionPreviewProps> = ({ title, items }) => (
   <div className='collection-preview'>
      <h1 className='title'>{ title.toUpperCase() }</h1>
      <div className='preview'>
         {items
            .filter((_, index) => index < 4)
            .map(item=> (
               <div key={item.id}>{ item.name }</div>   
            ))
         }
      </div>
   </div>
)

export default CollectionPreview