// import axios from "axios";
import React, { useState } from "react";
import { createContext } from "react";
const AuthContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState("");

  const handleLogin = (email, password) => {
    //  api request to reqres.in for the token

    fetch(`https://reqres.in/api/login`,{
      method: 'POST',
      headers: {"content-type":"application/json"},
      body: JSON.stringify({
         email,
        password
      })
    }).then(res=>res.json()).then(data=>setToken(data.token))

   
    
  };
  const handleLogout = () => {
    //  set token back to " " once logged out
    setToken(" ")
  };

  const value = { handleLogin, token, handleLogout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };
