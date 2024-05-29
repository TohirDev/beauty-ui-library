import { NavLink } from "react-router-dom";
import { sideNavDetails } from "@/constants";
import { Typography } from "beauty-ui-components";

export const SideNav = () => {
  return (
    <div className="sidebar">
      {sideNavDetails.map((item) => {
        return (
          <div key={item.title}>
            {item.highlight ? (
              <Typography variant="large">{item.title}</Typography>
            ) : (
              <NavLink to={item.path || "#"} key={item.title}>
                <Typography
                  variant="muted"
                  sx={{
                    fontSize: "18px",
                    margin: "10px 0",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {item.title}
                  {item.new && (
                    <Typography
                      variant="small"
                      sx={{
                        marginLeft: "5px",
                        backgroundColor: "#B6F837",
                        color: "black",

                        borderRadius: "0.375rem",
                        textAlign: "center",
                        display: "block",
                        padding: "0.25rem 0.5rem",
                      }}
                    >
                      New
                    </Typography>
                  )}
                </Typography>
              </NavLink>
            )}
          </div>
        );
      })}
    </div>
  );
};
