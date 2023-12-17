import { Navigate } from "react-router-dom";
import { withUser } from "./withProvider";
function UserRoute({ user, children }) {
  if (!user) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
}
export default withUser(UserRoute);
