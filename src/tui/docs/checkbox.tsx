import { BreadCrumb } from "@/components/BreadCrumb";
import { Demo } from "@/components/demo";
import { changeTitle } from "@/globals";
import { Checkbox, Label, Typography } from "beauty-ui-components";

export const DocsCheckbox: React.FC = () => {
  changeTitle("Docs | Checkbox");
  const code = `
  <div style={{ display: "flex" }}>
    <Checkbox />
    <Label sx={{marginLeft: '10px'}}>This is Checkbox</Label>
  </div>
  `;

  return (
    <div>
      <BreadCrumb titles={["Docs", "Checkbox"]} />
      <Typography variant="h2" sx={{ marginTop: "10px" }}>
        Checkbox
      </Typography>
      <Typography variant="p" sx={{ marginTop: "10px" }}>
        Checkboxes allow the user to select one or more items from a set.
      </Typography>

      <Typography variant="h3" sx={{ marginTop: "40px" }}>
        Checkbox
      </Typography>
      <Demo code={code}>
        <div style={{ display: "flex" }}>
          <Checkbox />
          <Label sx={{ marginLeft: "10px" }}>This is Checkbox</Label>
        </div>
      </Demo>
    </div>
  );
};
