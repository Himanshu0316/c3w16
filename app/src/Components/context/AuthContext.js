//import axios from "axios";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

const AuthContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [isLogin ,setIsLogin] = useState(false)
  const handleLogin = async(email, password) => {
    const {logout}= useContext(AuthContext)
    
    try{
      let res = await fetch(`https://reqres.in/api/login`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
          emails:email,
          pass:password,
        })
      });
      let data =await res.json();
      
        setToken(token)
      
    }catch(e){
      console.log(e)
    }
  };
  const handleLogout = () => {
    //  set token back to " " once logged out
  };

  const value = { handleLogin, token, handleLogout };

  return <AuthContext.Provider value={value}>
    {children}
  </AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };
