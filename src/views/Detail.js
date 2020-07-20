import React,{useEffect,useState} from 'react'
import { useParams, Link } from "react-router-dom";
import { Navbar, Container, Row, Col, Badge, Button } from "react-bootstrap";



const Detail = () => {
    const [productInfo, setProInfo] = useState(null);
    
    const eid  = useParams().productId;
    useEffect(() => {
       
      async function fetchData() {
        const data = await fetch("http://localhost:3001/product/" + eid);
        
        const productInfo = await data.json();
        console.log("What is eid", eid)
        console.log(productInfo)
       
        setProInfo(productInfo);
      }
      fetchData();
    }, []);

return (
    <section>
      <Navbar bg="dark" variant="dark" className="navbarInfo">
        <div className="container">
          <Navbar.Brand href="/">
            <img
              alt=""
              src="/logo.png"
              width="30"
              height="auto"
              className="d-inline-block align-center"
            />{" "}
            <span style={{ paddingLeft: "10px" }}>Product</span>
          </Navbar.Brand>
        </div>
      </Navbar>
      <Product {...productInfo} />
    </section>
   
    );



}

const Product = ({
    _id,
  title,
  pictureURL,
  price,
  origin,
  materials,
  description,
  howToUse,
  }) => (
    <div>
      <section
        style={{
          backgroundColor: "black",
          color: "white",
          paddingBottom: "30px",
        }}
      >
        <div className="container infoPage">
          <Container>
            <Row xl="2" lg="2" md="1" sm="1" xs="1">
              <Col xl={4}>
                <img
                  src={pictureURL}
                  style={{
                    height: "18rem",
                    maxWidth: "18rem",
                    objectFit: "cover",
                    objectPosition: "50 50",
                  }}
                />
              </Col>
              <Col xl={8}>
                <h4 style={{ paddingBottom: "10px" }}>Title: {title}</h4>
                <h5>Description</h5>
                <p>{description}</p>
              </Col>
            </Row>
            <Row sm="2" xs="1" style={{ marginTop: "20px" }}>
              <Col md={4}>
                <div className="justify-content-center">
                  
                 
                  
                  <Badge variant="light">Price ${price} USD</Badge>
                  
                </div>
              </Col>
              <Col md={8}>
                <p style={{ textAlign: "center" }}>
                  <i
                    style={{ marginRight: "10px" }}
                    class="fas fa-tablet-alt"
                  ></i>
                  
                </p>
                <table
                  className="infoTable"
                  style={{ width: "100%", tableLayout: "fixed" }}
                >
                  <tr style={{ color: "#777777" }}>
                    <td style={{ width: "33%" }}>
                      <i class="far fa-clock"></i>
                    </td>
                    <td style={{ width: "33%" }}>
                      <i class="fas fa-user-friends"></i>
                    </td>
                    <td style={{ width: "33%" }}>
                      <i class="far fa-comment"></i>
                    </td>
                  </tr>
                  <tr style={{ color: "#777777" }}>
                    <td>Origin:</td>
                    <td>Materials:</td>
                    <td>How to use:</td>
                  </tr>
                  <tr>
                    <td>{origin}</td>
                    <td>{materials}</td>
                    <td>{howToUse}</td>
                  </tr>
                </table>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
     
    </div>
  );


export default Detail
