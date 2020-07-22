import React from 'react'
import {
    Nav,
    Container,
    Row,
    Col,
    Card,
    Button,
    Dropdown,
  } from "react-bootstrap";
function Footer() {
    return (
        <div>
            <div className="footer">
    <Container >
        <div className="row footer-container m-3">
            <Col sm={12} lg={4} className=" f-sec1  text-center text-lg-left">
                <h4 className="high-lighted-heading">About Us</h4>
                <p>Refill Store is a place for those who are interested in a green, sustainable and environmentally-friendly way of life.
                     At Refill Store, you will feel happiness, love and gratitude for the products made by Vietnamese people for the benefit of the community and for a simple and healthful lifestyle. </p>
                <a href="#">Read more</a>
                <h4>Social Network</h4>
                <div className="s-icons">
                    <ul className="social-icons-simple">
                        <li><a href="javascript:void(0)" className="facebook-bg-hvr"><i className="fab fa-facebook-f" aria-hidden="true"></i></a></li>
                        <li><a href="javascript:void(0)" className="twitter-bg-hvr"><i className="fab fa-twitter" aria-hidden="true"></i></a> </li>
                        <li><a href="javascript:void(0)" className="instagram-bg-hvr"><i className="fab fa-instagram" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
            </Col>
            <div className="col-sm-12 col-lg-5 f-sec2 ">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <h4 className="text-center text-md-left">Information</h4>
                        <ul className="text-center text-md-left">
                            <li><a href="javascript:void(0)">About Us</a></li>
                            <li><a href="javascript:void(0)">Delivery Information</a></li>
                            <li><a href="javascript:void(0)">Privacy Policy</a></li>
                            <li><a href="javascript:void(0)">Terms & Condition</a></li>
                            <li><a href="javascript:void(0)">FAQ</a></li>
                            <li><a href="book-shop\contact.html">Contact Us</a></li>
                            <li><a href="book-shop\product-listing.html">Products</a></li>
                        </ul>
                    </div>
                    <Col  md={6} className=" col-md-6">
                        <h4 className="text-center text-md-left">Account Info</h4>
                        <ul className="text-center text-md-left">
                            <li><a href="javascript:void(0)">Login & Register</a></li>
                            <li><a href="book-shop\shop-cart.html">Order History</a></li>
                            <li><a href="javascript:void(0)">Shipping Info</a></li>
                            <li><a href="javascript:void(0)">Refund Policy</a></li>
                            <li><a href="javascript:void(0)">Responsive Website</a></li>
                            <li><a href="javascript:void(0)">Subscription</a></li>
                        </ul>
                    </Col>
                </div>
            </div>
        
        </div>
       
    </Container>
</div>

        </div>
    )
}

export default Footer
