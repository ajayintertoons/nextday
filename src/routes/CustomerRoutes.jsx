import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import ChangePassword from '../pages/ChangePassword';
import Profile from '../pages/Profile';
import MyBookings from '../pages/MyBookings';
import MyBookingDetailView from '../pages/MyBookingDetailView';
import CreateRecurringPickup from '../pages/CreateRecurringPickup';
import CreatePickupPage from '../pages/CreatePickupPage';
import RecurringPickupList from '../pages/RecurringPickupList';
import ScheduledPickups from '../pages/ScheduledPickups';

const CustomerRoutes = () => (
  <Routes>
    <Route path="dashboard" element={<Dashboard />} />
    <Route path="change-password" element={<ChangePassword />} />
    <Route path="my-profile" element={<Profile />} />
    <Route path="my-bookings" element={<MyBookings />} />
    <Route path="scheduled-pickups" element={<ScheduledPickups />} />
    <Route path="details/:id" element={<MyBookingDetailView />} />
    <Route path="create-recurring-pickup" element={<CreateRecurringPickup />} />
    <Route path="list-recurring-pickup" element={<RecurringPickupList />}/>
    <Route path="*" element={<Navigate to="/404" replace/>}  />
  </Routes>
);

export default CustomerRoutes;
