import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import CustomerRoutes from './CustomerRoutes';
import FranchiseRoutes from './FranchiseRoutes';

const HomeRoutes = () => {
const userType = JSON.parse(localStorage.getItem('userData')).userRole

  return (
    <Routes>
      {userType === 'Customer' && (
        <Route path="customer/*" element={<CustomerRoutes />} />
      )}
      {userType === 'Franchise' && (
        <Route path="franchise/*" element={<FranchiseRoutes />} />
      )}
     <Route path="*"  element={<Navigate to="/404" replace/>}  />
    </Routes>
  );
};

export default HomeRoutes;

