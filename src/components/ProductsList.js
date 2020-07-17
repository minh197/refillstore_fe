import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import { useParams, useHistory } from "react-router-dom";
import {Link} from "react-router-dom";
import { Nav, Container, Row, Col, Card, Button } from "react-bootstrap";
import PaginationLink from "./PaginationLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [maxPageNum, setMaxPageNum] = useState(1000);
  const { eid } = useParams();

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(`http://localhost:3001/product?page=${pageNum}`);
      const response = await data.json();
      setProducts(response.data);
      console.log(response)
      setMaxPageNum(parseInt(response.maxPageNum)); // 1
    }
    fetchData();
  }, [pageNum]);

  const goNextPage = () => {
    setPageNum(pageNum + 1);
  };
  const goPrevPage = () => {
    setPageNum(pageNum - 1);
  };
  
 
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
                <Link to="/refillstore">
                Refill Stores <FontAwesomeIcon icon="thumbtack" />
                </Link>
             
            </Nav.Link>
          </Nav>
          <div className=" ml-auto d-flex align-items-center">
            <div id="navbar-menu">
              <Nav className="navbar-nav">
                <Nav.Link href="#" className="no-border">
                <Link to="/about">
                  About <FontAwesomeIcon icon="angle-down" />{" "}
                </Link>
                </Nav.Link>
                <Nav.Link href="#" className="no-border">
                  Cart <FontAwesomeIcon icon="cart-plus" />{" "}
                </Nav.Link>

                <Nav.Link href="#" className="no-border">
                    <Link to="/login">
                    Log-in <FontAwesomeIcon icon="user" />{" "}
                    </Link>
                 
                </Nav.Link>
                <Nav.Link href="#" className="no-border">
                <Link to ="/newstore">
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
      </header>

      <Container>
        <Row id="pruducts-list">
          <Col className="col-12">
            <hr size="2" className="line" />
            <div className="product-title">
              <div id="products-nav">
                <Row className="text-center">
                  <Col>
                    <Nav className="products-nav">
                      <Nav.Link href="#" className="no-border">
                        Products{" "}
                      </Nav.Link>
                      <Nav.Link href="#" className="no-border">
                        On the go{" "}
                      </Nav.Link>

                      <Nav.Link href="#" className="no-border">
                        Home Care{" "}
                      </Nav.Link>

                      <Nav.Link href="#" className="no-border">
                        Personal Care
                      </Nav.Link>
                      <Nav.Link href="#" className="no-border">
                        Refill
                      </Nav.Link>
                    </Nav>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>

          {products.map((e) => (
            <Col sm={6} md={4}>
              <Product {...e} />
            </Col>
          ))}
        </Row>
        <div className="d-flex justify-content-between">
          <PaginationLink disabled={pageNum === 1} handleClick={goPrevPage}>
            Prev Page
          </PaginationLink>
          <PaginationLink
            disabled={pageNum === maxPageNum}
            handleClick={goNextPage}
          >
            Next Page
          </PaginationLink>
        </div>
      </Container>
    </div>
  );
};
const Product = ({
 _id,
  title,
  pictureURL,
  price,
  origin,
  materials,
  description,
  howToUse,
}) => {
    const history = useHistory()
  return (
    <Row>
      <Col className="main-product" sm={12} md={12}>
        <Card style={{ width: "18rem" , marginBottom: "10px"}}>
        <div className="imgBox">
        <a href={`/product/${_id}`}>
        <Card.Img className="img-fluid"
           variant="top"
            style={{ height: "18rem", objectFit: "cover" }}
            className="cardImg"
           src={pictureURL} />
          {/* <Card.Img class="img-fluid" variant="top" src={pictureURL} /> */}
        </a>
        </div>
         
          <Card.Body>
            <Card.Title>Product: {title}</Card.Title>
            <Card.Text>Price: ${price}</Card.Text>
            <Card.Text>Origin: {origin}</Card.Text>
            <Card.Text>Materials: {materials}</Card.Text>
            <Card.Text>Description: {description}</Card.Text>
            <Card.Text>Functions:{howToUse}</Card.Text>
          </Card.Body>
          <div className="product-button text-center d-flex justify-content-around pb-3">
            <Button className="btn btn-product">Add to cart</Button>

           <Button 
            
            className="btn btn-product"
            onClick={()=>{history.push(`product/${_id}`)}}
            >See more</Button>
       

           
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default ProductsList;
