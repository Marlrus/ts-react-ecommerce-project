import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth } from './firebase/firebase.utils';

interface AppState {
   currentUser: null | object;
}

class App extends React.Component<any, AppState> {
   constructor(props: any) {
      super(props);

      this.state = {
         currentUser: null,
      };
   }

   unsubscribeFromAuth: null | Function = null;

   componentDidMount() {
      this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
         this.setState({ currentUser: user });

         console.log(user);
      });
   }

   componentWillUnmount() {
      this.unsubscribeFromAuth!();
   }

   render() {
      return (
         <div>
            <Header currentUser={this.state.currentUser} />
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

export default App;
