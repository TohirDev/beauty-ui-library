import { useEffect, useState } from "react";
import Container from "./Container";
import { NavLink } from "react-router-dom";
import Icon from "@/assets/icons8-b-48.png";
import { Typography } from "beauty-ui-components";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 border-b-2 ${
        isScrolled
          ? "bg-black bg-opacity-10 backdrop-blur-md"
          : "bg-transparent"
      } transition-all duration-300`}
    >
      <Container className="flex justify-between p-4">
        <div style={{ display: "flex" }}>
          <img
            src={Icon}
            alt="logo"
            style={{
              width: "40px",
              marginTop: "-5px",
            }}
          />
          <Typography
            variant="h2"
            style={{ marginLeft: "-7px", marginBottom: "-10px" }}
          >
            eauty/ui.
          </Typography>
        </div>
        <ul className="flex gap-4 items-center">
          <NavLink to={"/docs"}>
            <Typography variant="large">Docs</Typography>
          </NavLink>
          <NavLink to={"/docs/components"}>
            <Typography variant="large">Components</Typography>
          </NavLink>
          <Typography variant="large">Blog</Typography>
          <Typography variant="large">GitHub</Typography>
        </ul>
        {/* <ModeToggle /> */}
      </Container>
    </div>
  );
};
