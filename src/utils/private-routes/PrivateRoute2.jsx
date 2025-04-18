import React, { useContext } from 'react';
import {  Navigate, Outlet, useLocation } from 'react-router-dom';
import { myContext } from '../context_api/context';


const PrivateRoute2 = ({ children }) => {
  const { isLogin } = useContext(myContext)
  const check = localStorage.getItem('accessToken')

  return check ?  children : <Navigate to="/404" replace />;
};

export default PrivateRoute2;
