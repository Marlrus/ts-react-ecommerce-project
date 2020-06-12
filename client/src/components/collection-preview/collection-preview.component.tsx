import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item.component';

import {
   CollectionPreviewContainer,
   PreviewContainer,
   CollectionTitle,
} from './collection-preview.styles';

import { ShopItem } from '../../redux/shop/shop.types';

interface CollectionPreviewProps extends RouteComponentProps {
   title: string;
   items: ShopItem[];
}

//Used in CollectionsOverview (Shop)
const CollectionPreview: React.FC<CollectionPreviewProps> = ({
   title,
   items,
   history,
   match,
}) => (
   <CollectionPreviewContainer>
      <CollectionTitle
         onClick={() =>
            history.push(`${match.path}/${title.toLowerCase()}`)
         }
      >
         {title.toUpperCase()}
      </CollectionTitle>
      <PreviewContainer>
         {items
            .filter((_, index) => index < 4)
            .map((item) => (
               <CollectionItem key={item.id} item={item} />
            ))}
      </PreviewContainer>
   </CollectionPreviewContainer>
);

export default withRouter(CollectionPreview);
