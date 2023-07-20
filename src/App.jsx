import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Celular } from "./screens/Celular";
import { DesktopForm } from "./screens/DesktopForm";
import { CellForm } from "./screens/CellForm";
import { Index } from "./screens/Index";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Celular />,
  },
  {
    path: "/celular",
    element: <Celular />,
  },
  {
    path: "/desktop-form",
    element: <DesktopForm />,
  },
  {
    path: "/cell-form",
    element: <CellForm />,
  },
  {
    path: "/index",
    element: <Index />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
