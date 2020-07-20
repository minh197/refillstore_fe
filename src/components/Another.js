
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
function Extended() {
    return (
        <div>
           <Container className="mt-5">
           <section className="dark-grey-text text-center">
    
  
            <h3 className="font-weight-bold mb-4 pb-2">Our bestsellers</h3>
  
            <p className="grey-text w-responsive mx-auto mb-4">Lorem ipsum dolor sit amet, consectetu</p>
            <div id="multi-item-example" className="carousel slide carousel-multi-item" data-ride="carousel">
      
            <div className="controls-top">
            <a className="btn-floating primary-color waves-effect waves-light" href="#multi-item-example" data-slide="prev">
          <i className="fas fa-chevron-left"></i>
            </a>
            <a className="btn-floating primary-color waves-effect waves-light" href="#multi-item-example" data-slide="next">
          <i className="fas fa-chevron-right"></i>
            </a>
            </div>
            <ol className="carousel-indicators mb-n3">
        <li className="primary-color active" data-target="#multi-item-example" data-slide-to="0"></li>
        <li className="primary-color" data-target="#multi-item-example" data-slide-to="1"></li>
        <li className="primary-color" data-target="#multi-item-example" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner" role="listbox"></div>
      <div className="carousel-item active">
          <div className="col-md-4 mb-2">
        
        
        
        </div>
            
            
            </div>
            
            
            
            </div>
           
           
           
           </section>
            </Container>
        </div>
    )
}

export default Extended
