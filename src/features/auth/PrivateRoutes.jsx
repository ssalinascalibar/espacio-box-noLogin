import { useContext } from 'react';
import { Outlet, Navigate } from "react-router-dom";
import AuthContext from '../../context/AuthContext';


export function AuthAdminRoutes() {
  const { isAuth } = useContext(AuthContext);
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
}

export function AuthUserRoutes() {
  const { isAuthUser } = useContext(AuthContext);
  return isAuthUser ? <Outlet /> : <Navigate to="/userlogin" />;
}
