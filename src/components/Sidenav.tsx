import { sideNavDetails } from "@/constants";
import { NavLink } from "react-router-dom";

export const SideNav = () => {
  return (
    <div className="sidebar">
      {sideNavDetails.map((item) => {
        return (
          <div key={item.title}>
            {item.highlight ? (
              <h4 className="text-md font-semibold my-1">{item.title}</h4>
            ) : (
              <NavLink to={item.path || "#"} key={item.title}>
                <h4 className="text-md text-muted-foreground my-1">
                  {item.title}
                  {item.new && (
                    <span className="text-[13px] bg-[#B6F837] text-black ml-1 px-2 rounded-md text-center">
                      New
                    </span>
                  )}
                </h4>
              </NavLink>
            )}
          </div>
        );
      })}
    </div>
  );
};
