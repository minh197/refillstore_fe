import React,{useState,useEffect} from "react";
import Card from 'react-bootstrap/Card'
import { useParams, useHistory } from "react-router-dom";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const Comment =({comments}) =>{

    return (
       
            <Col className="pr-3">
            <Row className="pt-3">
            <div className="ml-3 d-inline justify-content-center">
            {comments.map(comment => (
            <Card border="light" style={{ width: "40rem" }} >
            <Card.Body>
                <Card.Title>User:{comment.userName} </Card.Title>
                <Card.Text>
                {comment.comment}
                </Card.Text>
            </Card.Body>
            </Card>))}
            </div>
            </Row>
            
            </Col>
            
       
       
        );
}


export default Comment;
