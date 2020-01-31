import React from 'react';
import  HomePage from './pages/homepage/homepage.component';
import './App.css'; 
import {Switch, Route} from 'react-router-dom';
import ShopePage from './pages/shop/shop.component.jsx';


// const HatsPage= ()=>(
//   <div>
//     <h1>Hats Page</h1>
//   </div>
// )

function App() {
  return (
    <div >

      <Switch>
               <Route exact path='/' component={HomePage} />
      {/* <Route   path='/hats' component={HatsPage} /> */}
      <Route   path='/shop' component={ShopePage} />
      </Switch>
 
{/* <HomePage/> */}
    </div>
  );
}

export default App;
