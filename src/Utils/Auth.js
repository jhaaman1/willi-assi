import React, { useState } from "react";
export const AuthContext = React.createContext();

function AuthContextProvider({ children }) {
    const [isAuth, setIsAuth] = useState(false);

    const setAuthStatus = (status) => {
      setIsAuth(status);
    };
  return (
    <AuthContext.Provider value={{ isAuth, setAuthStatus }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
