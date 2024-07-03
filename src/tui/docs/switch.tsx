import { BreadCrumb } from "@/components/BreadCrumb";
import { Demo } from "@/components/demo";
import { changeTitle } from "@/globals";
import { Switch, Typography } from "beauty-ui-components";
import React, { useState } from "react";

export const DocsSwitch: React.FC = () => {
  changeTitle("Docs | Switch");
  const [isChecked, setIsChecked] = useState(false);
  const code = ` 
import { Switch } from "beauty-ui-components";

const App = () => { 
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div>
     <Switch
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
     />
    </div>
  );
};
  `;
  return (
    <div>
      <BreadCrumb titles={["Docs", "Switch"]} />
      <Typography variant="h2" sx={{ marginTop: "10px" }}>
        Switch
      </Typography>
      <Typography variant="p" sx={{ marginTop: "10px" }}>
        A control that allows the user to toggle between checked and not
        checked.
      </Typography>

      <Typography variant="h3" sx={{ marginTop: "40px" }}>
        Switch
      </Typography>
      <Demo code={code}>
        <Switch
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
      </Demo>
    </div>
  );
};
