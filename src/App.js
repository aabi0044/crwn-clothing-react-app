import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import ShopePage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sig-upn/sign-in-and-sign-up.compnent';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {

        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        });
      }
      
      this.setState({ currentUser: userAuth });
    })
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
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          {/* <Route   path='/hats' component={HatsPage} /> */}
          <Route path='/shop' component={ShopePage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>

        {/* <HomePage/> */}
      </div>
    );
  }
}

export default App;
