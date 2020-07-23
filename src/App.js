import React from 'react';
import './App.css';
import {About,NewStore,Login,RefillStore,Detail,MyCart,MyProfile,NewComment} from "./views"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import ProductsList from "./components/ProductsList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
