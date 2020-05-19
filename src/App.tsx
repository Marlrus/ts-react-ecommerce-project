import React, { Dispatch } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import {
   auth,
   createUserProfileDocument,
} from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

import { UserState, UserActions } from './redux/user/user.types';

interface AppState {
   currentUser: null | object;
}

class App extends React.Component<any, AppState> {
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
                  });
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
               <Route exact path='/shop' component={ShopPage} />
               <Route
                  exact
                  path='/signin'
                  component={SignInAndSignUpPage}
               />
            </Switch>
         </div>
      );
   }
}

const mapDispatchToProps = (dispatch: Dispatch<UserActions>) => ({
   setCurrentUser: (user: UserState) =>
      dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
