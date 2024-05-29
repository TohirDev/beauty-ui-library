import { Navigate, useRoutes } from "react-router-dom";
import TStore from "./tstore";
import Tui from "./tui";
import { sideNavDetails } from "./constants";

export const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: <Navigate to="/docs" />,
    },
    {
      path: "/",
      element: <Tui />,
      children: sideNavDetails,
    },
    {
      path: "/tstore",
      element: <TStore />,
    },
  ]);
};
