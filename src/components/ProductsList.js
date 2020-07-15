import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav,Container,Row,Col,Card,Button} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAngleDown,
  faThumbtack,
  faSearch,
  faCubes,
  faCartPlus,
  faUser
} from "@fortawesome/free-solid-svg-icons";
library.add(faAngleDown, faThumbtack, faSearch, faCubes,faCartPlus,faUser);

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await fetch("http://localhost:3001/product");
      const response = await data.json();
      setProducts(response.data);
    }
    fetchData();
  }, []);
  return (
    <div className="App">
    <header id="header">
      <Navbar expand="lg">
        <Navbar.Brand href="#home">
          Refill Box
          <img
            className="no-border d-inline-block align-top"
            src="https://image.flaticon.com/icons/svg/817/817305.svg"
            width="40"
            height="40"
            alt=""
          />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#our products">
            Our Products <FontAwesomeIcon icon="angle-down" />{" "}
          </Nav.Link>
          <Nav.Link href="#refillstores">
            Refill Stores <FontAwesomeIcon icon="thumbtack" />
          </Nav.Link>
        </Nav>
        <div className=" ml-auto d-flex align-items-center">
          <div id="navbar-menu">
            <Nav className="navbar-nav">
             

              <Nav.Link href="#" className="no-border">
                About <FontAwesomeIcon icon="angle-down" />{" "}
              </Nav.Link>
              <Nav.Link href="#" className="no-border">
                Cart <FontAwesomeIcon icon="cart-plus" />{" "}
              </Nav.Link>

              <Nav.Link href="#" className="no-border">
                Log-in <FontAwesomeIcon icon="user" />{" "}
              </Nav.Link>

              <Nav.Link href="#" className="no-border">
                Search <FontAwesomeIcon icon="search" />
              </Nav.Link>
            </Nav>
          </div>
        </div>
      </Navbar>
    </header>
  
    <Container>
        <Row>
     {products.map((e) => (
         <Col sm={4}>
              <Product {...e} />
         </Col>
    
    ))}
    </Row>
  </Container>
  </div>
    
  );
};
const Product = ({
  title,
  pictureURL,
  price,
  origin,
  materials,
  description,
  howToUse,
}) => {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={pictureURL} />
    <Card.Body>
  <Card.Title>Product: {title}</Card.Title>
      <Card.Text>
        Price: ${price}
      </Card.Text>
      <Card.Text>
        Origin: {origin}
      </Card.Text>
      <Card.Text>
        Materials: {materials}
      </Card.Text>
      <Card.Text>
       Description:  {description}
      </Card.Text>
      <Card.Text>
        Functions:{howToUse}
      </Card.Text>

      <Button variant="primary">Add to cart</Button>
    </Card.Body>
  </Card>
    
  );
};

export default ProductsList;
