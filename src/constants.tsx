import { Navigate } from "react-router-dom";
import Docs from "./beauty-ui/docs";
import { DocsInstallation } from "./beauty-ui/docs/installation";
import { DocsButton } from "./beauty-ui/docs/button";
import { DocsTypography } from "./beauty-ui/docs/typography";
import { DocsCard } from "./beauty-ui/docs/card";
import { DocsInput } from "./beauty-ui/docs/input";
import { DocsCheckbox } from "./beauty-ui/docs/checkbox";
import { DocsLabel } from "./beauty-ui/docs/label";
import { DocsSwitch } from "./beauty-ui/docs/switch";
import { DocsBreadcrumb } from "./beauty-ui/docs/breadcrumb";

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
    },
    {
        title: "Input",
        path: "/docs/components/input",
        element: <DocsInput />,
    },
    {
        title: "Checkbox",
        path: "/docs/components/checkbox",
        element: <DocsCheckbox />,
    },
    {
        title: "Label",
        path: "/docs/components/label",
        element: <DocsLabel />,
    },
    {
        title: "Switch",
        path: "/docs/components/switch",
        element: <DocsSwitch />,
    },
    {
        title: "Breadcrumb",
        path: "/docs/components/breadcrumb",
        element: <DocsBreadcrumb />,
        new: true,
    },
];
