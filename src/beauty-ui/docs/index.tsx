import { BreadCrumb } from "@/components/BreadCrumb";
import { changeTitle } from "@/globals";
import { Typography } from "beauty-ui-components";

function Docs() {
  changeTitle("Introduction | Beauty/ui");
  return (
    <div>
      <BreadCrumb titles={["Docs", "Introduction"]} />
      <Typography variant="h1">Introduction</Typography>
      <Typography variant="p" style={{ width: "50%", marginTop: "30px" }}>
        Welcome to <b>Beauty/ui</b>. This library has been thoughtfully
        designed to provide a set of reusable and customizable UI
        components tailored to meet the specific needs of our projects.
        While it may not boast the extensive feature set of comprehensive
        libraries like Material-UI (MUI) or Ant Design, it offers a
        streamlined and efficient solution for building user interfaces
        with simplicity and flexibility.
      </Typography>
    </div>
  );
}

export default Docs;
