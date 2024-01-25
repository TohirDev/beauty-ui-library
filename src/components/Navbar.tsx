import Container from "./Container";

const Navbar = () => {
  return (
    <Container>
      <nav className="flex items-center justify-between font-open-sans py-5">
        <h1>logo</h1>
        <ul className="flex items-center justify-between">
          <li className="mx-5 nav-link nav-link-fade-up">
            <span className="font-bold mr-2">01</span>home
          </li>
          <li className="mx-5 nav-link nav-link-fade-up">
            <span className="font-bold mr-2">02</span>writing
          </li>
          <li className="mx-5 nav-link nav-link-fade-up">
            <span className="font-bold mr-2">03</span>notes
          </li>
          <li className="mx-5 nav-link nav-link-fade-up">
            <span className="font-bold mr-2">04</span>about
          </li>
          <li className="mx-5 nav-link nav-link-fade-up">
            <div className="bg-[silver] w-[50px] h-[50px] rounded-[50%] grid place-items-center	">
            </div>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default Navbar;
