import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { useHistory } from "react-router-dom";


function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("")
  const history = useHistory();

  
  const toggling = () => setIsOpen(!isOpen);
  const logout = async () => {
    localStorage.setItem("token", "");
    localStorage.setItem("user", "");
    let user = localStorage.getItem("user");
    if (user) {
      user = JSON.parse(user);
      setName(user.name);
    }

    history.push("/home");
  };
  

  // const Main = styled("div")`
  //   font-family: sans-serif;

  //   height: 100vh;
  // `;

  const DropDownContainer = styled("div")`
    
  `;

  const DropDownHeader = styled("div")`
  margin-bottom: 1em;
  padding: 0.8em  0
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.3rem;
  color: black;
  background: #ffffff;
  text-align:center;
  padding-top:15px;
  
`;

  const DropDownListContainer = styled("div")``;

  const DropDownList = styled("ul")`
    padding: 0;
    margin: 0;
    padding-left: 1em;
    background: #ffffff;
    border: 2px solid #e5e5e5;
    box-sizing: border-box;
    color: #3faffa;
    font-size: 1.3rem;
    font-weight: 500;
    &:first-child {
      padding-top: 0.8em;
    }
  `;

  const ListItem = styled("li")`
    list-style: none;
    margin-bottom: 0.8em;
  `;

  useEffect(() => {
    let user = localStorage.getItem('user')
    if (user) {
      user = JSON.parse(user)
      setName(user.name)
    }
  }, [name]);
  return (
    <div>
      <DropDownContainer>
        <DropDownHeader onClick={toggling}>
          User <i class="fas fa-user"></i>
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              <ListItem>
                <Link to="/login">Log-in </Link>
              </ListItem>
              <ListItem>
                <Nav.Link href="#" className="no-border" onClick={logout}>
                  Log-out
                </Nav.Link>
              </ListItem>
              <ListItem>
                <Link to="/login">Edit info</Link>
              </ListItem>
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </div>
  );
}

export default Dropdown;
