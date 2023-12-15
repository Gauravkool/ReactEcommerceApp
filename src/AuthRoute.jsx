import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "./App";
function AuthRoute({ children }) {
  const { user } = useContext(UserContext);
  if (user) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
}
export default AuthRoute;
