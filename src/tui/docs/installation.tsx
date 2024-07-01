import { BreadCrumb } from "@/components/BreadCrumb";
import { changeTitle } from "@/globals";
import { Typography } from "beauty-ui-components";

export const DocsInstallation = () => {
  changeTitle("Installation | Beauty/ui");
  return (
    <div>
      <BreadCrumb titles={["Docs", "Installation"]} />
      <Typography variant="h2">Installation</Typography>
      <Typography variant="p">
        To install the package, run the following command in your project
        root:
      </Typography>
      <code
        className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold cursor-pointer"
        onClick={() => {
          navigator.clipboard.writeText(
            "npm install beauty-ui-components"
          );
        }}
      >
        npm install beauty-ui-components
      </code>
    </div>
  );
};
