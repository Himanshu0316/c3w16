import { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";
import { About } from "./About";
import { Login } from "./Login";



export const Navbar = () => {
  const { token } = useContext(AuthContext);
  // use token to chnage the text from Login to Logout once logged in successfully
 
  return (
    <>
      <nav>
      <Routes>
        <Route path="Home" element={<Home/>}/>
        <Route path="About" element={<About/>}/>
        <Route path="Books/*" element={<Books/>}/>
        <Route path="Login/*" element={<Login/>}/>
      </Routes>
        
      </nav>
    </>
  );
};
