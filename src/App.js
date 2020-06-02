import React, { useEffect, useState } from 'react';
import HomePage from './pages/homepage/homepage.component';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import ShopePage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sig-upn/sign-in-and-sign-up.compnent';
import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import CheckoutPage from './pages/checkout/checkout.component';
import { checkUserSession } from './redux/user/user.actions';

const App = ({ checkUserSession, currentUser }) => {

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession])

  return (
    <div >
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopePage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route
          exact
          path='/signin'
          render={() => currentUser ? (
            <Redirect to='/' />
          ) : (
              <SignInAndSignUpPage />
            )} />
      </Switch>

    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,

})
const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
