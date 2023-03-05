import Dashboard from "pages/Dashboard";
import Login from "pages/Login";
import PrimaryView from "pages/PrimaryView";
import React from "react";
import { createHashRouter } from "react-router-dom";

export const router = createHashRouter([
  {
    path: "/",
    element: <PrimaryView />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
