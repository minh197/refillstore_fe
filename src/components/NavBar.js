import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from '../img/logo.png'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    Nav,
    Container,
    Row,
    Col,
    Card,
    Button,
    Dropdown,
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


function NavBar() {
    return (
        <div>
             <Navbar expand="lg" className="navbar-fixed-top">
            <Link to="/home">
            <Navbar.Brand>
            Refill Box
            <img
              className="no-border d-inline-block align-top"
              src={logo}
              width="40"
              height="40"
              alt=""
            />
          </Navbar.Brand>
            
            </Link>
         
          <Nav className="mr-auto">
            <Nav.Link href="#our products">
              Our Products <FontAwesomeIcon icon="angle-down" />{" "}
            </Nav.Link>
            <Nav.Link href="#refillstores">
              <Link to="/refillstore">
                Refill Stores <FontAwesomeIcon icon="thumbtack" />
              </Link>
            </Nav.Link>
          </Nav>

          
          
          <div className=" ml-auto d-flex align-items-center">
           
          <div>
          <Navbar.Collapse data-toggle="collapse" data-target="#navbar-menu">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>


            </Navbar.Collapse>
          </div>

            <div id="navbar-menu" className="collapse navbar-collapse">
              <Nav className="navbar-nav">
                <Nav.Link href="#" className="no-border">
                  <Link to="/about">
                    About <FontAwesomeIcon icon="angle-down" />{" "}
                  </Link>
                </Nav.Link>
               
                
                
                <Nav.Link href="#" className="no-border">
                <Link to="/mycart">
                  Cart <FontAwesomeIcon icon="cart-plus" />{" "}
                  </Link>
                </Nav.Link>
              
                

                <Nav.Link href="#" className="no-border">
                  <Link to="/login">
                    Log-in <FontAwesomeIcon icon="user" />{" "}
                  </Link>
                </Nav.Link>
                <Nav.Link href="#" className="no-border">
                  <Link to="/newstore">
                    Create new store <FontAwesomeIcon icon="plus-square" />{" "}
                  </Link>
                </Nav.Link>
               

                <Nav.Link href="#" className="no-border">
                  Search <FontAwesomeIcon icon="search" />
                </Nav.Link>
              </Nav>
            </div>
          </div>
        </Navbar>
        </div>
    )
}

export default NavBar
