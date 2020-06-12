import React, { Dispatch } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

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
import { UserActions } from '../../redux/user/user.types';

const Header: React.FC<HeaderProps> = ({
   currentUser,
   hidden,
   signOutStart,
}) => (
   <HeaderContaner>
      <LogoContainer to='/'>
         <Logo className='logo' />
      </LogoContainer>
      <OptionsContainer>
         <OptionLink to='/shop'>SHOP</OptionLink>
         <OptionLink to='/contact'>CONTACT</OptionLink>
         {currentUser ? (
            <OptionLink as='div' onClick={signOutStart}>
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

const mapDispatchToProps = (dispatch: Dispatch<UserActions>) => ({
   signOutStart: () => dispatch(signOutStart()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type HeaderProps = ConnectedProps<typeof connector>;

export default connector(Header);
