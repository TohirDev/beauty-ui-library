import { useRoutes } from "react-router-dom";
import HomePage from "./pages/Home";
import TStore from "./tstore";
import Tui from "./tui";

export const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/tstore",
      element: <TStore />,
    },
    {
      path: "/tui",
      element: <Tui />,
    },
  ]);
};
