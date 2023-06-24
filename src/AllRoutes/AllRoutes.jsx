import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Components/Login/Login";
import SignUp from "../Components/SignUp/SignUp";
import Home from "../Components/Home";
import RequireAuth from "../Utils/RequireAuth";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
