import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface CollectionPreviewProps extends RouteComponentProps {
   title: string;
   items: {
      id: number;
      name: string;
      imageUrl: string;
      price: number;
   }[];
}

const CollectionPreview: React.FC<CollectionPreviewProps> = ({
   title,
   items,
   history,
   match,
}) => (
   <div className='collection-preview'>
      <h1
         className='title'
         onClick={() =>
            history.push(`${match.path}/${title.toLowerCase()}`)
         }
      >
         {title.toUpperCase()}
      </h1>
      <div className='preview'>
         {items
            .filter((_, index) => index < 4)
            .map((item) => (
               <CollectionItem key={item.id} item={item} />
            ))}
      </div>
   </div>
);

export default withRouter(CollectionPreview);
