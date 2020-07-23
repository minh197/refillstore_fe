import React, {  useEffect } from "react";

import Navbar from "react-bootstrap/Navbar";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Nav, Button } from "react-bootstrap";
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

  const history = useHistory();

  const logout = async () => {
    localStorage.setItem("token", "");
    localStorage.setItem("user", "");

    history.push("/home");
  };
  useEffect(() => {}, []);
  return (
    <div>
      <Navbar expand="lg" className="navbar-fixed-top ">
        <Link to="/home">
          <Navbar.Brand>
            Refill Box
            <img
              className="no-border d-inline-block align-top"
              src="https://image.flaticon.com/icons/svg/2919/2919870.svg"
              width="40"
              height="40"
              alt=""
            />
          </Navbar.Brand>
        </Link>

        <Nav className="mr-auto">
          <Nav.Link href="#refillstores" className="pl-1">
            <Link to="/refillstore">
              Refill Stores <FontAwesomeIcon icon="thumbtack" />
            </Link>
          </Nav.Link>
          <Nav.Link href="#" className="no-border">
            <Link to="/newstore">
              Create new store <FontAwesomeIcon icon="plus-square" />{" "}
            </Link>
          </Nav.Link>
        </Nav>

        <div className=" mr-4 d-flex align-items-center">
          <div>
            <Navbar
              id="navbar-menu"
              className="collapse collapse navbar-collapse navbar-nav"
            >
              <Nav.Link href="#" className="no-border">
                <Link to="/mycart">
                  Cart <FontAwesomeIcon icon="cart-plus" />{" "}
                </Link>
              </Nav.Link>

              <Nav.Link href="#" className="dropdown-btn">
                <Dropdown />
              </Nav.Link>

              <Nav.Link href="#" className="no-border">
                Search <FontAwesomeIcon icon="search" />
              </Nav.Link>
            </Navbar>
          </div>
          <Button
            className="navbar-toggler"
            variant="primary"
            type="button"
            data-toggle="collapse"
            data-target="#navbar-menu"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ backgroundColor: "white" }}
          >
            <span className="navbar-toggler-icon" />
          </Button>
        </div>
      </Navbar>
    </div>
  );
}

export default NavBar;
