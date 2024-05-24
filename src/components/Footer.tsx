import Container from "./Container";

export const Footer = () => {
  return (
    <footer className="border-t-2">
      <nav
        className="-mx-5 -my-2 flex flex-wrap justify-center"
        aria-label="Footer"
      >
        <Container>
          <div className="w-full p-4">
            <div className="px-5 py-2">
              <p className="text-base text-zinc-800 dark:text-zinc-50">
                © 2024 ThePrimeReacts. All rights reserved.
              </p>
            </div>
          </div>
        </Container>
      </nav>
    </footer>
  );
};
