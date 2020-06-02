import React from 'react';
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
import { selectCollectionsPreview } from './redux/shop/shop.selectors';
import { checkUserSession } from './redux/user/user.actions';
class App extends React.Component {

  unsubscribeFromAuth = null;
  componentDidMount() {

    const { checkUserSession } = this.props;
    checkUserSession();
    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //   if (userAuth) {

    //     const userRef = await createUserProfileDocument(userAuth);
    //     userRef.onSnapshot(snapShot => {

    //       setCurrentUser({
    //         id: snapShot.id,
    //         ...snapShot.data()
    //       })
    //     });
    //   }

    //   setCurrentUser(userAuth);

    // })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  // const HatsPage= ()=>(
  //   <div>
  //     <h1>Hats Page</h1>
  //   </div>
  // )

  render() {


    return (
      <div >
        <Header />


        <Switch>
          <Route exact path='/' component={HomePage} />
          {/* <Route   path='/hats' component={HatsPage} /> */}
          <Route path='/shop' component={ShopePage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route
            exact
            path='/signin'
            render={() => this.props.currentUser ? (
              <Redirect to='/' />
            ) : (
                <SignInAndSignUpPage />
              )} />
        </Switch>

        {/* <HomePage/> */}
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsPreview
})
const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
