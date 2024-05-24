import { SideNav } from "@/components/Sidenav";
import { Outlet } from "react-router-dom";

function Tui() {
  return (
    <div className="flex">
      <SideNav />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default Tui;
