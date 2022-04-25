import { useContext } from "react";
import { Link, NavLink, Routes } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";



export const Navbar = () => {
  const { token } = useContext(AuthContext);
  // use token to chnage the text from Login to Logout once logged in successfully
 
  return (
    <>
      <nav>
        {/* keep all the NavLinks here */}
       <Link to="Home">Home</Link>
       <Link to="About">About</Link>
       <Link to="Books">Books</Link>
       <Link to="Login">Login</Link>
      </nav>
    </>
  );
};
