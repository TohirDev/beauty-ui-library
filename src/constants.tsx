import { Navigate } from "react-router-dom";
import Docs from "./tui/docs";

export const sideNavDetails = [
  {
    title: "Getting Started",
    highlight: true,
  },
  {
    title: "Docs",
    path: "docs",
    element: <Docs />,
  },
  {
    title: "Accord",
    path: "/docs/accord",
    element: <h1>adcc</h1>,
  },
  {
    title: "Typo",
    path: "/docs/typo",
    element: <h1>typo</h1>,
  },
  {
    title: "Components",
    highlight: true,
    path: "/docs/components",
    element: <Navigate to="/docs/components/badge" />,
  },
  {
    title: "Badge",
    path: "/docs/components/badge",
    element: <h1>bagge</h1>,
  },
  {
    title: "Button",
    path: "/docs/components/button",
    element: <h1>btton</h1>,
    new: true,
  },
];
