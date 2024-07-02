import { BreadCrumb } from "@/components/BreadCrumb";
import { Demo } from "@/components/demo";
import { changeTitle } from "@/globals";
import { Label, Typography } from "beauty-ui-components";

export const DocsLabel: React.FC = () => {
  changeTitle("Docs | Label");
  const code = `<Label>This is Label</Label>`;
  return (
    <div>
      <BreadCrumb titles={["Docs", "Label"]} />
      <Typography variant="h2" sx={{ marginTop: "10px" }}>
        Label
      </Typography>
      <Typography variant="p" sx={{ marginTop: "10px" }}>
        Styles for headings, paragraphs and more.
      </Typography>

      <Typography variant="h3" sx={{ marginTop: "40px" }}>
        Label
      </Typography>
      <Demo code={code}>
        <Label>This is Label</Label>
      </Demo>
    </div>
  );
};
