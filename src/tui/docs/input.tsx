import { BreadCrumb } from "@/components/BreadCrumb";
import { Demo } from "@/components/demo";
import { Typography, Input } from "beauty-ui-components";

export const DocsInput = () => {
  const code1 = `<Input placeholder="Email" />`;
  const code2 = `<Input type="file" />`;
  return (
    <div>
      <BreadCrumb titles={["Docs", "Input"]} />
      <Typography variant="h2">Input</Typography>
      <Typography variant="p">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas,
        laudantium?
      </Typography>
      <Typography variant="h3" sx={{ marginTop: "40px" }}>
        Input
      </Typography>
      <Demo code={code1}>
        <Input placeholder="Email" />
      </Demo>
      <Demo code={code2}>
        <Input type="file" />
      </Demo>
    </div>
  );
};
