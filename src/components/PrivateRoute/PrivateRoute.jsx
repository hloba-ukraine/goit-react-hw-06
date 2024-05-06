import { useSelector } from "react-redux";
import { selectIsSignedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";
export default function PrivateRoute({ children }) {
  const isSignedIn = useSelector(selectIsSignedIn);
  return isSignedIn ? children : <Navigate to="/login" replace />;
}
