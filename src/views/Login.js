import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";
import Modal from "react-bootstrap/Modal";
import { useParams, useHistory } from "react-router-dom";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn,
  MDBIcon,
  MDBModalFooter,
} from "mdbreact";
function Login() {
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const loginWithFacebook =  async data => {
    if(data && data.accessToken)
    console.log(data.accessToken)
    const res = await fetch(`http://localhost:3001/auth/login/facebook?token=${data.accessToken}`)
    const dt = await res.json()
    console.log(dt)
    if(res.ok){
      //const dt = await res.json()
      localStorage.setItem("token", dt.token)
      localStorage.setItem("user", JSON.stringify(dt.data))
      //JSON.parse(localStorage.getItem("user"))

      
      history.push('/home')
    } else{
      console.log(res)
    }
  }
  

  
  return (
    <div>
      <Modal
      
      show={open} onHide={() => setOpen(!open)}
      >
        <FacebookLogin
          appId="256215649014545"
          autoLoad={false}
          fields="name,email,picture"
          callback={loginWithFacebook}
          className="Modal"
        />

      
      </Modal>
      <MDBContainer className="loginForm">
        <MDBRow>
          <MDBCol md="6">
            <MDBCard>
              <MDBCardBody className="mx-4">
                <div className="text-center">
                  <h3 className="dark-grey-text mb-5">
                    <strong>Sign in</strong>
                  </h3>
                </div>
                <MDBInput
                  label="Your email"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  label="Your password"
                  group
                  type="password"
                  validate
                  containerClass="mb-0"
                />
                <p className="font-small blue-text d-flex justify-content-end pb-3">
                  Forgot
                  <a href="#!" className="blue-text ml-1">
                    Password?
                  </a>
                </p>
                <div className="text-center mb-3">
                  <MDBBtn
                    type="button"
                    gradient="blue"
                    rounded
                    className="btn-block z-depth-1a"
                  >
                    Sign in
                  </MDBBtn>
                </div>
                <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">
                  or Sign in with:
                </p>
                <div className="row my-3 d-flex justify-content-center">
                  <MDBBtn
                    onClick={() => {
                      setOpen(!open);
                    }}
                    type="button"
                    color="white"
                    rounded
                    className="mr-md-3 z-depth-1a"
                  >
                    <MDBIcon
                      fab
                      icon="facebook-f"
                      className="blue-text text-center"
                    />
                  </MDBBtn>
                  <MDBBtn
                    onClick={() => {
                      setOpen(!open);
                    }}
                    type="button"
                    color="white"
                    rounded
                    className="mr-md-3 z-depth-1a"
                  >
                    <MDBIcon fab icon="twitter" className="blue-text" />
                  </MDBBtn>
                  <MDBBtn
                    type="button"
                    color="white"
                    rounded
                    className="z-depth-1a"
                  >
                    <MDBIcon fab icon="google-plus-g" className="blue-text" />
                  </MDBBtn>
                </div>
              </MDBCardBody>
              <MDBModalFooter className="mx-5 pt-3 mb-1">
                <p className="font-small grey-text d-flex justify-content-end">
                  Not a member?
                  <a href="#!" className="blue-text ml-1">
                    Sign Up
                  </a>
                </p>
              </MDBModalFooter>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default Login;
