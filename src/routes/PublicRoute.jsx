import { Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";
import { ROUTES } from "../lib/constants";
import { selectIsAuthenticated } from "../redux/selectors/authSelectors";

function PublicRoute() {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  if (isAuthenticated) {
    return <Navigate to={ROUTES.DASHBOARD} replace />;
  }

  return <Outlet />;
}

export default PublicRoute;
