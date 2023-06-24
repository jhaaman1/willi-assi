import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Utils/Auth";

const Navbar = () => {
  const container = {
    border: "1px solid ",
    width: "96%",
    height: "50px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "auto",
    backgroundColor: "",
    padding: "3px",
    borderRadius: "5px",
  };

  const { setAuthStatus } = useContext(AuthContext);

  return (
    <div style={container}>
      <div>
        <h2>Logo</h2>
      </div>
      <div style={{ display: "flex", gap: "2rem" }}>
        {setAuthStatus ? (
          <div>
            <Link to="/login">Logout</Link>
          </div>
        ) : (
          <>
            <div>
              <Link to="/login">Login</Link>
            </div>
            <div>
              <Link to="/register">SignUp</Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
