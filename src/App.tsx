import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage";
import UserBookingPage from "./pages/UserBookingPage";
import RegisterPage from "./pages/RegisterPage";
// react router dom <--

const routes = [
  {
    path: "*",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/admin",
    element: <AdminPage />,
  },
  {
    path: "/userbooking",
    element: <UserBookingPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
];

function App() {
  return <RouterProvider router={createBrowserRouter(routes)} />;
}

export default App;
