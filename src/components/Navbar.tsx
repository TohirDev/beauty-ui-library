import { useEffect, useState } from "react";
import Container from "./Container";
import { ModeToggle } from "./mode-toggle";
import { NavLink } from "react-router-dom";
import Icon from "@/assets/icons8-b-48.png";

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
          <h2
            style={{ marginLeft: "-7px", marginBottom: "-10px" }}
            className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0"
          >
            eauty/ui.
          </h2>
        </div>
        <ul className="flex gap-4 items-center">
          <NavLink to={"/docs"}>
            <li>Docs</li>
          </NavLink>
          <li>Components</li>
          <li>Blog</li>
          <li>GitHub</li>
        </ul>
        <ModeToggle />
      </Container>
    </div>
  );
};
