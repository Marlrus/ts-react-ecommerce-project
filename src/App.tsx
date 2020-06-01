import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selectors';

import './App.css';

//pages
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
//components
import Header from './components/header/header.component';

//Utils
import {
   auth,
   createUserProfileDocument,
} from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

//types
import { UserActions, CurrentUser } from './redux/user/user.types';
import { State } from './redux/store.types';

class App extends React.Component<AppProps> {
   unsubscribeFromAuth: null | Function = null;

   componentDidMount() {
      const { setCurrentUser } = this.props;
      this.unsubscribeFromAuth = auth.onAuthStateChanged(
         async (userAuth) => {
            if (userAuth) {
               const userRef = await createUserProfileDocument(
                  userAuth
               );

               userRef!.onSnapshot((snapShot) => {
                  setCurrentUser({
                     id: snapShot.id,
                     ...snapShot.data(),
                  } as CurrentUser);
               });
            } else {
               setCurrentUser(userAuth);
            }
         }
      );
   }

   componentWillUnmount() {
      this.unsubscribeFromAuth!();
   }

   render() {
      return (
         <div>
            <Header />
            <Switch>
               <Route exact path='/' component={HomePage} />
               <Route path='/shop' component={ShopPage} />
               <Route
                  exact
                  path='/checkout'
                  component={CheckoutPage}
               />
               <Route
                  exact
                  path='/signin'
                  render={() =>
                     this.props.currentUser ? (
                        <Redirect to='/' />
                     ) : (
                        <SignInAndSignUpPage />
                     )
                  }
               />
            </Switch>
         </div>
      );
   }
}

const mapStateToProps = (state: State) => ({
   currentUser: selectCurrentUser(state),
});

const mapDispatchToProps = (
   dispatch: React.Dispatch<UserActions>
) => ({
   setCurrentUser: (user: CurrentUser | null) =>
      dispatch(setCurrentUser(user)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type AppProps = ConnectedProps<typeof connector>;

export default connector(App);
