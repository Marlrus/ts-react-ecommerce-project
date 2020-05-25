import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import {
   HeaderContaner,
   LogoContainer,
   OptionsContainer,
   OptionLink,
} from './header.styles';

import { State } from '../../redux/store.types';

const Header: React.FC<HeaderProps> = ({ currentUser, hidden }) => (
   <HeaderContaner>
      <LogoContainer to='/'>
         <Logo className='logo' />
      </LogoContainer>
      <OptionsContainer>
         <OptionLink to='/shop'>SHOP</OptionLink>
         <OptionLink to='/contact'>CONTACT</OptionLink>
         {currentUser ? (
            <OptionLink as='div' onClick={() => auth.signOut()}>
               SIGN OUT
            </OptionLink>
         ) : (
            <OptionLink to='/signin'>SIGN IN</OptionLink>
         )}
         <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
   </HeaderContaner>
);

const mapStateToProps = (state: State) => ({
   currentUser: selectCurrentUser(state),
   hidden: selectCartHidden(state),
});

const connector = connect(mapStateToProps);

type HeaderProps = ConnectedProps<typeof connector>;

export default connector(Header);
