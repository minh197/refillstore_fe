import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import NavBar from "./NavBar"
import Footer from "./Footer"

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
      <div className="home-banner"> 
      <Container >
          <Row>
              <Col lg={4} className=" d-flex justify-content-center align-items-center text-center text-lg-left">
              <div className="banner-description">
                    <span className="small-heading animated fadeInRight delay-1s">BEST AVAILABLE</span>
                    <h1 className="w-sm-100 w-md-100 w-lg-25 animated fadeInLeft delay-1s banner-pr ">PRODUCTS <span>COLLECTION</span></h1>
                    <a href="" className="btn animated fadeInLeft delay-1s shopnow">SHOP NOW </a>
                </div>

              </Col>
              <Col lg={8} className="text-right banner-img">
                
              </Col>
          </Row>
      </Container>

      </div>
     
      <Container>
        <Row id="pruducts-list" >
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
      <Footer/>
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
           
          </Card.Body>
          <div className="btn-container">
          <div className="product-button text-center d-flex justify-content-around pb-3">
            <Button
            className="btn btn-product"
            // disabled={inCart ? true : false}
             onClick={()=>{
               console.log("added to the cart");
               }}>Add to cart
                
                 </Button>
            
            <Button
              className="btn btn-product"
              onClick={() => {
                history.push(`product/${_id}`);
              }}
            >
              See more
            </Button>
          </div>
          </div>
         
        </Card>
      </Col>
    </Row>
  );
};

export default ProductsList;