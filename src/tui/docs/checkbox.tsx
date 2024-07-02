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
      <BreadCrumb titles={["Docs", "Label"]} />
      <Typography variant="h2" sx={{ marginTop: "10px" }}>
        Checkbox
      </Typography>
      <Typography variant="p" sx={{ marginTop: "10px" }}>
        Styles for headings, paragraphs and more.
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
