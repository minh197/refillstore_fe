import React from 'react';
import './App.css';
import About from "./components/About"
import NewStore from "./components/NewStore"
import Login from "./components/Login"
import RefillStore from "./components/RefillStore"
import Detail from "./components/Detail"

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import ProductsList from "./components/ProductsList";



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' >
          <ProductsList/>
        </Route>
        <Route exact path='/about'>
          <About/>
        </Route>
        <Route exact path='/newstore'>
          <NewStore/>
        </Route>
        <Route exact path='/refillstore'>
          <NewStore/>
        </Route>
        <Route exact path='/login'>
          <NewStore/>
        </Route>
        <Route exact path='/product/:productId'>
          <Detail/>
        </Route>

      </Switch>
    </Router>
   
  );
}

export default App;
