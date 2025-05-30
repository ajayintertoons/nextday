import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../Layout";
import LandingPage from "../pages/LandingPage";
import RateCalculator_Page from "../pages/RateCalculator_Page";
import TrackingPage from "../pages/TrackingPage";
import CreatePickupPage from "../pages/CreatePickupPage";
import PaymentPage from "../pages/PaymentPage";
import Success from "../components/notification/success/Success";
import RateCalculator2 from "../pages/RateCalculator2";
import PrivateRoute from "../utils/private-routes/PrivateRoute";
import NotFoundPage from "../pages/NotFoundPage";
import FranchiseRoutes from "./FranchiseRoutes";
import CustomerRoutes from "./CustomerRoutes";
import HomeRoutes from "./HomeRoutes";
import CreatePickupRequest from "../pages/CreatePickupRequest";
import PickupSuccess from "../components/notification/PickupSuccess";
import PrivateRoute2 from "../utils/private-routes/PrivateRoute2";
import About from "../pages/About";
import ContactUs from "../pages/ContactUs";
import Services from "../pages/Services";
import Blog from "../pages/Blog";
import LocationFinder from "../pages/LocationFinder";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/rate-calculator", element: <RateCalculator_Page /> },
      { path: "/tracking", element: <TrackingPage /> },
      { path: "/payment", element: <PaymentPage /> },
      { path: "/success", element: <Success /> },
      { path: "/rateCalculator", element: <RateCalculator2 /> },
      { path: "/about-us", element: <About /> },
      { path: "/contact-us", element: <ContactUs /> },
      { path: "/services", element: <Services /> },
      { path: "/blog", element: <Blog /> },
      { path:"/pincode-finder", element:<LocationFinder />},
      {
        path: "/create-pickup",
        element: (
          <PrivateRoute2>
            <CreatePickupPage />
          </PrivateRoute2>
        ),
      },
      {
        path: "/create-pickup-request",
        element: (
          <PrivateRoute2>
            <CreatePickupRequest />
          </PrivateRoute2>
        ),
      },
      {
        path: "/pickup-success",
        element: (
          <PrivateRoute2>
            <PickupSuccess />
          </PrivateRoute2>
        ),
      },

      {
        path: "/home/*",
        element: <PrivateRoute />,
        children: [
          { path: "*", element: <HomeRoutes /> }
        ]
      },

      { path: "/404", element: <NotFoundPage /> },

      { path: "*", element: <Navigate to="/404" replace /> },
    ],
  },
]);
