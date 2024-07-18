import { BreadCrumb } from "@/components/BreadCrumb";
import { Demo } from "@/components/demo";
import { changeTitle } from "@/globals";
import { Typography, Input } from "beauty-ui-components";

export const DocsInput = () => {
  const code1 = `<Input placeholder="Email" />`;
  const code2 = `<Input type="file" />`;
  const code3 = `<Input disabled />`;
  changeTitle("Docs | Input");
  return (
    <div>
      <BreadCrumb titles={["Docs", "Input"]} />
      <Typography variant="h2">Input</Typography>
      <Typography variant="p">
        Displays a form input field or a component that looks like an input
        field.
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
      <Demo code={code3}>
        <Input placeholder="Email" disabled />
      </Demo>
    </div>
  );
};
