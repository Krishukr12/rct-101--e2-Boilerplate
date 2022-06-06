import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
// use react-router Link or NavLink
import styled from "styled-components"
import { AuthContext } from "../../context/AuthContext";
const Div =styled.div`
display:flex;
gap:20px;
justify-content:center;
font-size:20px;
`
const Navbar = () => {
  const {isAuth}=useContext(AuthContext);
  const Navigate=useNavigate();
  const login=()=>{
    Navigate("/login")
  }
  return (
    <Div data-cy="navbar">
      <Link data-cy="navbar-home-link" to="/home">Home</Link>
      <span data-cy="navbar-cart-items-count">Cart Count</span>
      <button data-cy="navbar-login-logout-button" onClick={login}>{isAuth ?"Logut":"Login"}</button>
    </Div>
  );
};

export default Navbar;
