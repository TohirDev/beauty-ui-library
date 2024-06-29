import { Navigate } from "react-router-dom";
import Docs from "./tui/docs";
import { DocsInstallation } from "./tui/docs/installation";
import { DocsButton } from "./tui/docs/button";
import { DocsTypography } from "./tui/docs/typography";
import { DocsCard } from "./tui/docs/card";
import { DocsInput } from "./tui/docs/input";

export const sideNavDetails = [
  {
    title: "Getting Started",
    highlight: true,
  },
  {
    title: "Introduction",
    path: "docs",
    element: <Docs />,
  },
  {
    title: "Installation",
    path: "/docs/installation",
    element: <DocsInstallation />,
  },

  {
    title: "Components",
    highlight: true,
    path: "/docs/components",
    element: <Navigate to="/docs/components/button" />,
  },
  {
    title: "Button",
    path: "/docs/components/button",
    element: <DocsButton />,
  },
  {
    title: "Typography",
    path: "/docs/components/typography",
    element: <DocsTypography />,
  },
  {
    title: "Card",
    path: "/docs/components/card",
    element: <DocsCard />,
    new: true,
  },
  {
    title: "Input",
    path: "/docs/components/input",
    element: <DocsInput />,
    new: true,
  },
];
