import React from 'react';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';

//Styles
import './menu-item.styles.scss';

//Types
import { SectionItem } from '../../redux/directory/directory.types';

type MenuItemProps = RouteComponentProps & SectionItem;

//Used in Directory
const MenuItem = ({
   title,
   imageUrl,
   size,
   history,
   linkUrl,
   match,
}: MenuItemProps) => (
   <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
   >
      <div
         className='background-image'
         style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className='content'>
         <h1 className='title'>{title.toUpperCase()}</h1>
         <span className='subtitle'>SHOP NOW</span>
      </div>
   </div>
);

export default withRouter(MenuItem);
