import React, { useContext } from 'react';
import {  Navigate, useLocation } from 'react-router-dom';
import { myContext } from '../context_api/context';
import Home from '../../pages/Home';


const PrivateRoute = () => {
  const { isLogin } = useContext(myContext)
  const check = localStorage.getItem('accessToken')

  return check ?  <Home /> : <Navigate to="/" replace />;
};

export default PrivateRoute;
