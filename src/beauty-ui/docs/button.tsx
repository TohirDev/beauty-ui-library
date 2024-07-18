import { BreadCrumb } from "@/components/BreadCrumb";
import { Demo } from "@/components/demo";
import { changeTitle } from "@/globals";
import { Button, Typography } from "beauty-ui-components";

export const DocsButton = () => {
  changeTitle("Button | Beauty/ui");

  const codes = {
    default: `<Button variant="default">Default</Button>`,
    outlined: `<Button variant="outlined">Outlined</Button>`,
    danger: `<Button variant="danger">Danger</Button>`,
    link: `<Button variant="link">Link</Button>`,
    primary: `<Button variant="primary">Primary</Button>`,
    disabled: `<Button disabled variant="default">Disabled</Button>`,
  };
  return (
    <div>
      <BreadCrumb titles={["Docs", "Button"]} />
      <Typography variant="h2" sx={{ marginTop: "10px" }}>
        Button
      </Typography>
      <Typography variant="p" sx={{ marginTop: "10px" }}>
        Buttons allow users to take actions, and make choices, with a
        single tap.
        <br />
        Here is an example of a button that you can use in your app.
      </Typography>

      <Typography variant="h3" sx={{ marginTop: "40px" }}>
        Default Button
      </Typography>
      <Demo code={codes.default}>
        <Button variant="default">Default</Button>
      </Demo>
      <Typography variant="h3" sx={{ marginTop: "40px" }}>
        Outlined Button
      </Typography>
      <Demo code={codes.outlined}>
        <Button variant="outlined">Outlined</Button>
      </Demo>
      <Typography variant="h3" sx={{ marginTop: "40px" }}>
        Danger Button
      </Typography>
      <Demo code={codes.danger}>
        <Button variant="danger">Danger</Button>
      </Demo>
      <Typography variant="h3" sx={{ marginTop: "40px" }}>
        Primary Button
      </Typography>
      <Demo code={codes.primary}>
        <Button variant="primary">Primary</Button>
      </Demo>
      <Typography variant="h3" sx={{ marginTop: "40px" }}>
        Link Button
      </Typography>
      <Demo code={codes.link}>
        <Button variant="link">Link</Button>
      </Demo>
      <Typography variant="h3" sx={{ marginTop: "40px" }}>
        Disabled Button
      </Typography>
      <Demo code={codes.disabled}>
        <Button disabled variant="default">
          Disabled
        </Button>
      </Demo>
    </div>
  );
};
