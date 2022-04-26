import { useContext, useEffect } from "react";
import { NavLink ,useNavigate} from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";



export const Navbar = () => {

  const NavBar=styled.div`
    /* border: 1px solid black;
    width:100%;
    height:40px;
    display:flex;
    background-color:#ea4a4a;
    gap:15px;
    justify-content:center; */
    display:flex;
    padding-top: 25px;
    padding-left:500px;
    height: 80px;
    gap:15px;
    font-weight: bold;
    font-size:16px;
    box-sizing: border-box;
    background-color: #ea4a4a;
  `
// use token to chnage the text from Login to Logout once logged in successfully
    
  return (
    <>
      <Navbar>
        {/* keep all the NavLinks here */}

        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/books'>Books</NavLink>
        <NavLink to='/login'>Login</NavLink>
        {/* {token?<NavLink to='/login'>Login</NavLink>:<NavLink to='/logout'>Logout</NavLink>} */}
        
      </Navbar>
    </>
  );
};
