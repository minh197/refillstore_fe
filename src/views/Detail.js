import React,{useEffect,useState} from 'react'
import { useParams, Link } from "react-router-dom";
import { Navbar, Container, Row, Col, Badge, Button } from "react-bootstrap";
import  Comment from "../components/Comment"
import { useHistory } from "react-router-dom";
import NewComment from './NewComment';
import {BACKEND_URL} from "../app.constant"

const Detail = () => {
    const [productInfo, setProInfo] = useState(null);
    const [comments, setComments] = useState([])
    const [userName, setUserName] = useState('')
    
    const eid  = useParams().productId;
    useEffect(() => {
       
      async function fetchData() {
        const data = await fetch(`${BACKEND_URL}/product/` + eid);
        
        const productInfo = await data.json();
        console.log("What is eid", eid)
        console.log(productInfo)
       
        setProInfo(productInfo.product);
        setComments(productInfo.comments)
      }
      fetchData();

      const user = JSON.parse(localStorage.getItem('user'));
      setUserName(user.name);
    }, []);
    const history = useHistory();


return (
  <div>
      <section>
      <Navbar bg="gray" variant="dark" className="navbarInfo">
        <div className="container">
          <Navbar.Brand href="/home">
            <img
           
              alt=""
              src="https://image.flaticon.com/icons/svg/2919/2919870.svg"
              width="30"
              height="auto"
              className="d-inline-block align-center"
            />{" "}
            <span className="home-style" style={{ paddingLeft: "10px" }}>Home</span>
          </Navbar.Brand>
        </div>
      </Navbar>
      <Product {...productInfo} />

      
    </section>
    <div>
    {/* <Button variant="outline-dark"
    onClick={() => {
      history.push(`/newcomment/`);
    }}
    >
      Create a comment
    

    </Button> */}
     <section>
    <Comment comments={comments}/>
  </section>
    <NewComment productId={eid} userName={userName} comments={comments} setComments={setComments}/>

   
    </div>
   
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
  owner
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
            <Row xl="2" lg="2" md="1" sm="1" xs="1" className="pt-4">
              <Col xl={4}>
                <img
                  src={pictureUrl}
                  style={{
                    height: "18rem",
                    maxWidth: "18rem",
                    objectFit: "cover",
                    objectPosition: "50 50",

                  }}
                />
              </Col>
              <Col xl={8} className="headingStyle">
                <h4 style={{ paddingBottom: "10px" }}>Title: {title}</h4>
                <h5>Description:</h5>
                <p>{description}</p>
              </Col>
            </Row>
            <Row sm="2" xs="1" style={{ marginTop: "20px" }} className="headingStyle">
              <Col md={4} style={{fontSize:"20px"}}>
                <div className="justify-content-center">
                  
                 
                  
                  <Badge variant="light">Price ${price} USD</Badge>
                  
                </div>
              </Col>
              <Col md={8}>
               
                <table
                  className="infoTable"
                  style={{ width: "100%", tableLayout: "fixed" }}
                >
                  <tr style={{ color: "#777777" }} className="table-content">
                  <td style={{ width: "33%" }} className="icon">
                  <i class="fas fa-cash-register"></i>
                    </td>
                    <td style={{ width: "33%" }} className="icon">
                    <i class="fas fa-location-arrow"></i>
                    </td>
                    <td style={{ width: "33%" }} className="icon">
                    <i class="fas fa-atom"></i>
                    </td>
                    <td style={{ width: "33%" }} className="icon">
                    <i class="fas fa-question-circle"></i>
                    </td>
                  </tr>
                  <tr style={{ color: "#777777" , fontSize: '20px'}} className="table-content">
                  <td className="content">Owner:</td>
                    <td className="content">Origin:</td>
                    <td className="content">Materials:</td>
                    <td className="content"> How to use:</td>
                  </tr>
                  <tr>
                    <td>{owner}</td>
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
