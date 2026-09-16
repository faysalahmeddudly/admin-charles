import { Navigate, Outlet, useLocation } from "react-router";
import { useSelector } from "react-redux";
import { ROUTES } from "../lib/constants";
import { selectIsAuthenticated } from "../redux/selectors/authSelectors";

function ProtectedRoute() {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.LOGIN} replace state={{ from: location }} />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
