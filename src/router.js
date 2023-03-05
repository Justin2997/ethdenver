import Dashboard from "pages/Dashboard";
import Login from "pages/Login";
import PrimaryView from "pages/PrimaryView";
import React from "react";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PrimaryView />,
  },
  {
    path: "/Dashboard",
    element: <Dashboard />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
