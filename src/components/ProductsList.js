import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import NavBar from "./NavBar"
import Footer from "./Footer"
import PaginationLink from "./PaginationLink";
import Rheostat from 'rheostat'



import {
  Nav,
  Container,
  Row,
  Col,
  Card,
  Button,
  Dropdown,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  
  faCartPlus,faEye
  
} from "@fortawesome/free-solid-svg-icons";
library.add(
 
  faCartPlus,
  faEye
);

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [maxPageNum, setMaxPageNum] = useState(1000);
  const [minPrice, setMinPrice] = useState(1)
  const [maxPrice, setMaxPrice] = useState(1000)
  useEffect(() => {
    async function fetchData() {
      const data = await fetch(`http://localhost:3001/product?page=${pageNum}&minPrice=${minPrice}&maxPrice=${maxPrice}`);
      const response = await data.json();
      setProducts(response.data);
      console.log(response);
      setMaxPageNum(parseInt(response.maxPageNum)); // 1
    }
    fetchData();
  }, [pageNum,minPrice,maxPrice]);

  const goNextPage = () => {
    setPageNum(pageNum + 1);
  };
  const goPrevPage = () => {
    setPageNum(pageNum - 1);
  };

  const handleChange =(e)=>{
    setMinPrice(e.values[0]);
    setMaxPrice(e.values[1]);

    }
  const [name, setName] = useState("")
  const history = useHistory();

  const logout = async () =>{
    localStorage.setItem("token", "")
    localStorage.setItem("user", "")
    setName("")
    history.push("/home")
    

  }
  useEffect(() => {
    let user = localStorage.getItem('user')
    if (user) {
      user = JSON.parse(user)
      setName(user.name)
    }
   
  }, [name])

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
                    <h1 className="w-sm-100 w-md-100 w-lg-25 animated fadeInLeft delay-1s banner-pr name ">Welcome <span>{name}</span></h1>
                    <span className="small-heading animated fadeInRight delay-1s">BEST AVAILABLE</span>
                    <h2 className="w-sm-100 w-md-100 w-lg-25 animated fadeInLeft delay-1s banner-pr ">PRODUCTS <span>COLLECTION</span></h2>
                   
                    <a href="" className="btn animated fadeInLeft delay-1s shopnow">SHOP NOW </a>
                </div>

              </Col>
              <Col lg={8} className="text-right banner-img">
                
              </Col>
          </Row>
      </Container>

      

      </div>
     
      <Container>
      <div className="pt-4" >
            <Rheostat
            min={1}
            max={1000}
            values={[minPrice, maxPrice]}
            onChange={handleChange}
            
            
        />
        </div> 
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
}
const Product = ({
  _id,
  title,
  pictureUrl,
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
                src={pictureUrl}
              />

              {/* <Card.Img class="img-fluid" variant="top" src={pictureURL} /> */}
            </a>
          </div>

          <Card.Body>
            <Card.Title>Product: {title}</Card.Title>
            <Card.Text>Price: ${price}</Card.Text>
           
          </Card.Body>
          <div  className="btn-container">
          <div  style={{backgroundColor:
              "black"}} className="product-button text-center d-flex justify-content-around pb-3 pt-2">
            <Button
           
            className=" btn-product"
            // disabled={inCart ? true : false}
             onClick={()=>{
               console.log("added to the cart");
               }}>
                 <FontAwesomeIcon icon="cart-plus" />{" "}
                
                 </Button>
            
            <Button
              className=" btn-product"
              onClick={() => {
                history.push(`product/${_id}`);
              }}
            >
              <FontAwesomeIcon icon="eye" />{" "}
            </Button>
          </div>
          </div>
         
        </Card>
      </Col>
    </Row>
  );
};

export default ProductsList;