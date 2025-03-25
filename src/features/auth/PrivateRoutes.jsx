import { useContext } from 'react';
import { Outlet, Navigate } from "react-router-dom";
import AuthContext from '../../context/AuthContext';


export default function PrivateRoutes() {
    const { isAuth } = useContext(AuthContext);
    console.log(isAuth)
  return (
    isAuth ? <Outlet/> : <Navigate to="/login"/>
  )
}
