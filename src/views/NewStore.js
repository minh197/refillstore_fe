import React, { useState } from "react";
import { Form, Navbar, Button } from "react-bootstrap";

function NewStore() {
  
        const [title, setTitle] = useState("");
        const [origin, setOrigin] = useState("");
        const [price, setPrice] = useState(0);
        const [materials, setMaterials] = useState("");
        const [pictureUrl, setPictureUrl] = useState("");
        // the below are details you only see when you go to single experience page (viewExpInfo)
       
        const [description, setDescription] = useState("");
        const [howToUse, setHowToUse] = useState("");
        const [owner, setOwner] = useState("");

       
      
        const createProduct = async (e) => {
          e.preventDefault();
          const productData = {
            title,
            origin,
            price,
            materials,
            pictureUrl,
            description,
            howToUse,
            owner
          };
          console.log(" pro data:", productData)
          // to send this, send a POST request to API
          const newExperience = await fetch("http://localhost:3001/product", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(productData),
      
          });
          alert("Your Event Has Been Added")
          setTitle("");
          setOrigin("");
          setPrice(0);
          
          setPictureUrl("");
          
         
          setDescription("");
          setMaterials("")
          setHowToUse("");
          setOwner("");
          
        };
      
    return (
        <div className="addExp">
        <Navbar bg="white" variant="light" className="navbar">
          <div className="container">
            <Navbar.Brand href="/home">
              <img
                alt=""
                src="https://image.flaticon.com/icons/svg/2919/2919870.svg"
                width="30"
                height="auto"
                className="d-inline-block align-center"
              />{" "}
              <span style={{ paddingLeft: "10px" }}>Home</span>
            </Navbar.Brand>
          </div>
        </Navbar>
        <div style={{ height: "50px" }}></div>
        <br />
        <h3>Create new product</h3>
        <hr />
        <Form className="container inputForm" onSubmit={createProduct}>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
  
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          
          <Form.Group controlId="howToUse">
            <Form.Label>How to use:</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              value={howToUse}
              onChange={(e) => setHowToUse(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="owner">
            <Form.Label>Owner:</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              value={owner}
              onChange={(e) => setOwner(e.target.value)}
            />
          </Form.Group>

        <Form.Group controlId="origin">
          <Form.Label>Origin</Form.Label>
          <Form.Control
            type="text"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="materials">
          <Form.Label>Materials</Form.Label>
          <Form.Control
            type="text"
            value={materials}
            onChange={(e) => setMaterials(e.target.value)}
          />
        </Form.Group>
  
        <Form.Group controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </Form.Group>
  
       
  
        <Form.Group controlId="pictureUrl">
          <Form.Label>Picture URL</Form.Label>
          <Form.Control
            type="text"
            value={pictureUrl}
            onChange={(e) => setPictureUrl(e.target.value)}
          />
        </Form.Group>
  
         
  
  
         
          
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    )
}

export default NewStore
