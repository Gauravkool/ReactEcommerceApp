import React from "react";
import { Navigate } from "react-router-dom";
import { withUser } from "./withProvider";
function AuthRoute({ user, children }) {
  if (user) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
}
export default withUser(AuthRoute);
