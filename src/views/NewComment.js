import React,{useState} from 'react'
import { Form, Button } from "react-bootstrap";
import {BACKEND_URL} from "../app.constant"
function NewComment({productId, userName, comments, setComments}) {
    //const [userName, setUserName] = useState("");
    const [comment, setComment] = useState("");

    const createComment = async (e) => {
        e.preventDefault();
        const commentData = {
          userName: userName,
          comment,
          product: productId
        };
        const newComment = await fetch(`${BACKEND_URL}/product/comment`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(commentData),
      
          });
          const response = await newComment.json();
          alert(`Your Comment Has Been Added:`)
        setComments([...comments, response])

          
        };
    return (
        <div style={{ height: "50px" }}>
        <Form className="container inputForm" onSubmit={createComment}>
          {/* <Form.Group controlId="name">
            <Form.Label>Please input your name</Form.Label>
            <Form.Control
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </Form.Group> */}
        <div className="pt-3">
        <Form.Group controlId="comment">
            <Form.Label>Please input your comment on the product</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </Form.Group>
          
          
          <Button variant="primary" type="submit">
            Submit
          </Button>
       
        </div>
        </Form>
         
       
      </div>
   
    )
}

export default NewComment
