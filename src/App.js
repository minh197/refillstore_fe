import React,{useState} from 'react';
import './App.css';
import {About,NewStore,Login,RefillStore,Detail,MyCart} from "./views"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import ProductsList from "./components/ProductsList";
import logo from './img/logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    Nav,
    Navbar,
  } from "react-bootstrap";
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
        <Route exact path='/mycart'>
          <MyCart/>
        </Route>
        <Route exact path='/product/:productId'>
          <Detail/>
        </Route>

      </Switch>
    </Router>
  </div>
  );
}



export default App;
