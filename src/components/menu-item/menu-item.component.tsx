import React from 'react';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';

//Styles
import {
   BackgroundImageContainer,
   ContentContainer,
   ContentSubtitle,
   ContentTitle,
   MenuItemContainer,
} from './menu-item.styles';

//Types

interface MenuItemProps extends RouteComponentProps {
   title: string;
   imageUrl: string;
   size?: string;
   linkUrl: string;
}

//Used in Directory (Directory)
const MenuItem = ({
   title,
   imageUrl,
   size,
   history,
   linkUrl,
   match,
}: MenuItemProps) => (
   <MenuItemContainer
      onClick={() => history.push(`${match.url}${linkUrl}`)}
      style={{ height: `${size ? '380px' : '240px'}` }}
   >
      <BackgroundImageContainer
         className='MenuItem-background-image'
         style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <ContentContainer className='MenuItem-content'>
         <ContentTitle>{title.toUpperCase()}</ContentTitle>
         <ContentSubtitle>SHOP NOW</ContentSubtitle>
      </ContentContainer>
   </MenuItemContainer>
);

export default withRouter(MenuItem);
