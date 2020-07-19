import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import NavBar from "./NavBar"
import { Link } from "react-router-dom";
import {
  Nav,
  Container,
  Row,
  Col,
  Card,
  Button,
  Dropdown,
} from "react-bootstrap";
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
      console.log(response);
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
       <NavBar/>
      </header>
      <Container className="banner">
          <Row>
              <Col lg={6} className="align-self-end">
                  <h1>Welcome</h1>
                  <h2 className="mb-100 title-border-lg">to <i>Refill Box</i></h2>
                  <p class="mb-80 mr-5">Refill Box is a place for those who are interested in a green, sustainable and environmentally-friendly way of life.
                   At Refill Box, you will feel happiness, love and gratitude for the products made by Vietnamese people for the benefit of the community and for a simple and healthful lifestyle.</p>
              </Col>
              <Col lg={6} className="text-right">
                <img className="img-fluid" src="https://images.unsplash.com/photo-1559268886-a1bc2d0fbdd0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1397&q=80" alt="banner-image"></img>
              </Col>
          </Row>
      </Container>

      <Container>
        <Row id="pruducts-list" gutter={[16, 16]}>
          {products.map((e) => (
            <Col lg="6" md="8" xs="24">
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
  const history = useHistory();
  return (
    <Row>
      <Col className="main-product" sm={12} md={12}>
        <Card style={{ width: "18rem", marginBottom: "10px" }}>
          <div className="imgBox">
            <a href={`/product/${_id}`}>
              <Card.Img
                className="img-fluid"
                variant="top"
                style={{
                  height: "18rem",
                  objectFit: "cover",
                  width: "100%",
                  maxHeight: "150px",
                }}
                className="cardImg"
                src={pictureURL}
              />

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
              onClick={() => {
                history.push(`product/${_id}`);
              }}
            >
              See more
            </Button>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default ProductsList;
