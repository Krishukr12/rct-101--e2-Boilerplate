import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth,setIsAuth]=useState(false);
  const toggleAuth=()=>{
  if(isAuth==true){
    setIsAuth(false)
  }
  else{
    setIsAuth(true);
  }
  }
  return <AuthContext.Provider value={{isAuth,toggleAuth}}>{children}</AuthContext.Provider>;
};
