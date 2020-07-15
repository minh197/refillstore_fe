import React from 'react';
import './App.css';

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import ProductsList from "./components/ProductsList";



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' >
          <ProductsList/>
        </Route>
      </Switch>
    </Router>
   
  );
}

export default App;
