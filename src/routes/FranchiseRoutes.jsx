import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import ChangePassword from '../pages/ChangePassword';
import MyBookings from '../pages/MyBookings';
import MyBookingDetailView from '../pages/MyBookingDetailView';
import CreateRecurringPickup from '../pages/CreateRecurringPickup';
import Profile from '../pages/Profile';
import CreatePickupPage from '../pages/CreatePickupPage';

const FranchiseRoutes = () => (
  <Routes>
    <Route path="dashboard" element={<Dashboard />} />
    <Route path="change-password" element={<ChangePassword />} />
    <Route path="my-profile" element={<Profile />} />
    <Route path="my-bookings" element={<MyBookings />} />
    <Route path="details/:id" element={<MyBookingDetailView />} />
    <Route path="create-recurring-pickup" element={<CreateRecurringPickup />} />
    <Route path="*"  element={<Navigate to="/404" replace/>}  />
  </Routes>
);

export default FranchiseRoutes;
