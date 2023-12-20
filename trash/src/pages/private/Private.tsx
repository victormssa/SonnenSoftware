import jwt_decode, { JwtPayload } from "jwt-decode";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute: React.FC = () => {
  const token = document.cookie
    .split("; ")
    .find((row) => row.startsWith("token="))
    ?.split("=")[1];
  const isAuthenticated = token ? (jwt_decode(token) as JwtPayload) : false;
  const isTokenExpired = isAuthenticated
    ? isAuthenticated.exp && isAuthenticated.exp < Date.now() / 1000
    : true;

  const handleAlert = () => {
    document.cookie = "checkError=true; path=/";
  };

  return isAuthenticated && !isTokenExpired ? (
    <Outlet />
  ) : (
    <>
      <Navigate to="/" />
      {handleAlert()}
    </>
  );
};

export default PrivateRoute;
