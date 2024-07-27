import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProperty } from '../redux/propertySlice';
import { useNavigate } from 'react-router-dom';
import Register from "./Register";
import PhoneOtpForm from "./phone-login";
import "./login.css"
import { Link } from 'react-router-dom'

const Login = () => {


  return (
    <div class="app">
        <div class="body">
          <h1 class="head">Login </h1>
          <br></br><br></br><br></br>
          <PhoneOtpForm />
          {/* <h2 class="head">Register</h2>
          <Register/> */}
        </div>
        <Link to="/register">New User? register here</Link>
        </div>
  );
};
export default Login;