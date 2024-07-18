import { Navigate, useRoutes } from "react-router-dom";
import { sideNavDetails } from "./constants";
import BeautyUI from "@/beauty-ui/index";
export const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: <Navigate to="/docs" />,
    },
    {
      path: "/",
      element: <BeautyUI />,
      children: sideNavDetails,
    },
  ]);
};
