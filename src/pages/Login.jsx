import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const Navigate=useNavigate();
  const {isAuth,toggleAuth}=useContext(AuthContext);
 const Login=()=>{
   toggleAuth();
    Navigate("/home");
 }
  return (
    <div>
      <input data-cy="login-email" placeholder="Email"/><br></br>
      <input data-cy="login-password"  placeholder="passowrd"/><br></br>
      <button data-cy="login-submit" onClick={Login}>Submit</button>
    </div>
  );
};

export default Login;
