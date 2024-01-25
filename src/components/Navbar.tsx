import { NavLink } from "react-router-dom";
import Container from "./Container";

const Navbar = () => {
  return (
    <Container>
      <nav className="flex items-center justify-between font-open-sans py-5">
        <h1>logo</h1>
        <ul className="flex items-center justify-between">
          <li className="mx-5 nav-link nav-link-fade-up">
            <span className="font-bold mr-2">01</span>
            <NavLink to={"/"}>
              home
            </NavLink>
          </li>
          <li className="mx-5 nav-link nav-link-fade-up">
            <span className="font-bold mr-2">02</span>
            <NavLink to={"blog"}>
              writing
            </NavLink>
          </li>
          <li className="mx-5 nav-link nav-link-fade-up">
            <span className="font-bold mr-2">03</span>
            <NavLink to={"/contact"}>
              contact
            </NavLink>
          </li>
          <li className="mx-5 nav-link nav-link-fade-up">
            <span className="font-bold mr-2">04</span>
            <NavLink to={"/about"}>
              about
            </NavLink>
          </li>
          <li className="mx-5">
            <div className="bg-[silver] w-[50px] h-[50px] rounded-[50%] grid place-items-center	">
            </div>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default Navbar;
