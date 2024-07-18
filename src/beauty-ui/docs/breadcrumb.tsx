import { BreadCrumb } from "@/components/BreadCrumb";
import { changeTitle } from "@/globals";
import { Typography } from "beauty-ui-components";
import React from "react";

export const DocsBreadcrumb: React.FC = () => {
  changeTitle("Docs | Breadcrumb");

  return (
    <div>
      <BreadCrumb titles={["Docs", "Breadcrumb"]} />
      <Typography variant="h2" sx={{ marginTop: "10px" }}>
        Breadcrumb
      </Typography>
      <Typography variant="p" sx={{ marginTop: "10px" }}>
        Displays the path to the current resource using a hierarchy of
        links.
      </Typography>
    </div>
  );
};
