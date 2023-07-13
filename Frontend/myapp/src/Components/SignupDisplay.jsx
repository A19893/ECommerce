import React,{useState} from "react";
import Capture from "../Assets/Capture.PNG";
import { UserOutlined } from "@ant-design/icons";
import { MailOutlined } from "@ant-design/icons";
import { LockOutlined } from "@ant-design/icons";
import { LoginOutlined, GoogleOutlined, PhoneFilled } from "@ant-design/icons";
import { Input, Button } from "antd";
import {Link} from 'react-router-dom'
import validator from 'validator'
import "react-phone-number-input/style.css";
const SignupDisplay = (props) => {
  const [emailError, setEmailError] = useState('')
  // Email Validation
const validateEmail = (e) => {
  var email = e.target.value

  if (validator.isEmail(email)) {
     setEmailError('Valid Email :)')
  } else {
     setEmailError('Enter valid Email!');
  }
}
  const handleChange=(e)=>{
    props.setEmail(e.target.value)
    validateEmail(e)
  }
  return (
    <div className="container">
      <div className="signupContainer">
        <div className="signupimgContainer">
          <img src={Capture} alt="missing" />
        </div>
        <div className="signupContent">
          <span className="welcome">Welcome to InstaShopin</span>
          <span className="shipment">Shop Online Today</span>
          <div className="signup-form">
            <div className="username-form">
              <Input
                size="large"
                style={{
                  width: "350px",
                  boxShadow: " 0 10px 10px -5px rgba(0, 0, 0, 0.4)",
                  padding: "15px",
                }}
                placeholder="   Username"
                prefix={<UserOutlined />}
                onChange={(e)=>props.setName(e.target.value)}
                value={props.name}
              />
              <br />
              <br />
              <Input
                size="large"
                style={{
                  width: "350px",
                  boxShadow: " 0 10px 10px -5px rgba(0, 0, 0, 0.4)",
                  padding: "15px",
                }}
                placeholder="    Email"
                prefix={<MailOutlined />}
                onChange={handleChange}
                value={props.email}
              />
              <span style={{ fontWeight: 'bold', color: 'red' }}>{emailError}</span>
              <br />
              <br />
              <Input
                size="large"
                style={{
                  width: "350px",
                  boxShadow: " 0 10px 10px -5px rgba(0, 0, 0, 0.4)",
                  padding: "15px",
                }}
                type="number"
                placeholder="    Phone Number"
                prefix={<PhoneFilled />}
                onChange={props.handleInputChange}
                value={props.number}
              />
              <span style={{ fontWeight: 'bold', color: 'red' }}>{props.numberError}</span>
              <br/>
              <br/>
              <Input
                size="large"
                style={{
                  width: "350px",
                  boxShadow: " 0 10px 10px -5px rgba(0, 0, 0, 0.4)",
                  padding: "15px",
                }}
                placeholder="   Password"
                prefix={<LockOutlined />}
                onChange={(e)=>props.setPassword(e.target.value)}
                value={props.password}
              />
              <br/>
              <span className="navLogin"><Link style={{color:"rgb(23, 74, 132)"}}to="/login">Already a Registered User?</Link></span>
              <br />
              <br />
              <span className="signupbtn">
                <Button
                  type="primary"
                  icon={<LoginOutlined />}
                  style={{ width: "100px", height: "40px" }}
                  onClick={props.onManualSignup}
                >
                  Sign Up
                </Button>
              </span>
            </div>
            <div className="signingoogle">
              <Button
                type="primary"
                icon={<GoogleOutlined />}
                style={{
                  paddingLeft: "10px",
                  marginLeft: "140px",
                  height: "40px",
                }}
                onClick={props.signInGoogle}
              >
                Sign In with Google
              </Button>
              <Button
                type="primary"
                icon={<PhoneFilled />}
                style={{
                  paddingRight: "10px",
                  marginRight: "100px",
                  height: "40px",
                }}
                onClick={props.signInPhone}
              >
                Sign In with Phone Number
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupDisplay;
