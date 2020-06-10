import React, { Dispatch, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

import './App.css';

//pages
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
//components
import Header from './components/header/header.component';

//types
import { State } from './redux/store.types';
import { UserActions } from './redux/user/user.types';

const App: React.FC<AppProps> = ({
   checkUserSession,
   currentUser,
}) => {
   useEffect(() => {
      checkUserSession();
   }, [checkUserSession]);

   return (
      <div>
         <Header />
         <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/checkout' component={CheckoutPage} />
            <Route
               exact
               path='/signin'
               render={() =>
                  currentUser ? (
                     <Redirect to='/' />
                  ) : (
                     <SignInAndSignUpPage />
                  )
               }
            />
         </Switch>
      </div>
   );
};

const mapStateToProps = (state: State) => ({
   currentUser: selectCurrentUser(state),
});

const mapDispatchToProps = (dispatch: Dispatch<UserActions>) => ({
   checkUserSession: () => dispatch(checkUserSession()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type AppProps = ConnectedProps<typeof connector>;

export default connector(App);
