import React, { useContext } from "react";
import { AlertContext } from "./Contexts";

const withAlert = (IncomingComponent) => (props) => {
  const contextData = useContext(AlertContext);
  return <IncomingComponent {...props} {...contextData} />;
};

export default withAlert;
