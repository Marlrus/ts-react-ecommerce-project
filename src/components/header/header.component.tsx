import React from 'react';
import { Link } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

import { State } from '../../redux/store.types';
import { UserState } from '../../redux/user/user.types';

const Header: React.FC<HeaderProps> = ({ currentUser, hidden }) => (
   <div className='header'>
      <Link className='logo-container' to='/'>
         <Logo className='logo' />
      </Link>
      <div className='options'>
         <Link className='option' to='/shop'>
            SHOP
         </Link>
         <Link className='option' to='/contact'>
            CONTACT
         </Link>
         {currentUser ? (
            <div className='option' onClick={() => auth.signOut()}>
               SIGN OUT
            </div>
         ) : (
            <Link className='option' to='/signin'>
               SIGN IN
            </Link>
         )}
         <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
   </div>
);

interface HeaderSelections extends UserState {
   hidden: boolean;
}

const mapStateToProps = createStructuredSelector<
   State,
   HeaderSelections
>({
   currentUser: selectCurrentUser,
   hidden: selectCartHidden,
});

const connector = connect(mapStateToProps);

type HeaderProps = ConnectedProps<typeof connector>;

export default connector(Header);
