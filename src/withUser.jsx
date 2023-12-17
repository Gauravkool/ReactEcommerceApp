import React, { useContext } from "react";
import { UserContext } from "./Contexts";

const withUser = (IncomingComponent) => (props) => {
  const contextData = useContext(UserContext);
  return <IncomingComponent {...props} {...contextData} />;
};

export default withUser;
