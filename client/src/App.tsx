import React, { Dispatch, useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

//components
import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';
import HomePage from './pages/homepage/homepage.component';

import { GlobalStyle } from './global.styles';

//types
import { State } from './redux/store.types';
import { UserActions } from './redux/user/user.types';

//Lazy Imporst
// const HomePage = lazy(() =>
//    import('./pages/homepage/homepage.component')
// );
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const CheckoutPage = lazy(() =>
   import('./pages/checkout/checkout.component')
);
const SignInAndSignUpPage = lazy(() =>
   import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component')
);

const App: React.FC<AppProps> = ({
   checkUserSession,
   currentUser,
}) => {
   useEffect(() => {
      checkUserSession();
   }, [checkUserSession]);

   return (
      <div>
         <GlobalStyle />
         <Header />
         <Switch>
            <ErrorBoundary>
               <Route exact path='/' component={HomePage} />
               <Suspense fallback={<Spinner />}>
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
                        currentUser ? (
                           <Redirect to='/' />
                        ) : (
                           <SignInAndSignUpPage />
                        )
                     }
                  />
               </Suspense>
            </ErrorBoundary>
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
