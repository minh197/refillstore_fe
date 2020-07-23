import React from 'react';
import './App.css';
import {About,NewStore,Login,RefillStore,Detail,MyCart,MyProfile} from "./views"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ProductsList from "./components/ProductsList";

import ProtectedRoute from "./utils/ProtectedRoute"

import 'rheostat/initialize';
import 'rheostat/css/rheostat.css';


import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAngleDown,
  faThumbtack,
  faSearch,
  faCubes,
  faCartPlus,
  faUser,
  faPlusSquare,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faAngleDown,
  faThumbtack,
  faSearch,
  faCubes,
  faCartPlus,
  faUser,
  faPlusSquare
);






 




function App() {
  


  return (
    <div>
   
  
     
     
    
    <Router>
      <Switch>
        <Route exact path='/home' >
          <ProductsList/>
        </Route>
        <Route exact path='/about'>
          <About/>
        </Route>
        <Route exact path='/newstore'>
          <NewStore/>
        </Route>
        <Route exact path='/refillstore'>
          <RefillStore/>
        </Route>
        <Route exact path='/login'>
          <Login/>
        </Route>
        
       
        <ProtectedRoute  exact path='/mycart'>
          <MyCart/>
        </ProtectedRoute>
        <ProtectedRoute  exact path='/myprofile'>
          <MyProfile/>
        </ProtectedRoute>
        <ProtectedRoute exact path='/product/:productId'>
          <Detail/>
        </ProtectedRoute>

      </Switch>
    </Router>
  </div>
  );
}



export default App;
