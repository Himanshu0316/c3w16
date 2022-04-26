import { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";

export const NavBar = styled.div`
   display:flex;
  justify-content:space-around;
  background-color: #fd9b95;
  font-weight:bold;
  padding: 20px;
`;

export const Navbar = () => {
  const { token, handleLogout } = useContext(AuthContext);
  // use token to chnage the text from Login to Logout once logged in successfully

  return (
    <>
      <NavBar>
      {/* keep all the NavLinks here */}
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/books"}>Books</NavLink>
          {token ? (
            <NavLink to={"/logout"} onClick={handleLogout}>Logout</NavLink>
          ) : (
            <NavLink to={"/login"}>Login</NavLink>
          )}
        
      </NavBar>
    </>
  );
};
