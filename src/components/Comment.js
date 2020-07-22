import React,{useState,useEffect} from "react";
import Card from 'react-bootstrap/Card'
import { useParams, useHistory } from "react-router-dom";

const Comment =({comments}) =>{

    return (
        <div>
            {comments.map(comment => (
            <Card border="light" style={{ width: "18rem" }}>
            <Card.Body>
                <Card.Title>User:{comment.userName} </Card.Title>
                <Card.Text>
                {comment.comment}
                </Card.Text>
            </Card.Body>
            </Card>))}
        </div>
        );
}


export default Comment;
