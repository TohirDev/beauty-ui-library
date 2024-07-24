import { Typography } from "beauty-ui-components";
import Container from "./Container";
import { NavLink } from "react-router-dom";

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
                            <p>
                                <Typography
                                    variant="small"
                                    sx={{ margin: "0 5px" }}
                                >
                                    © 2024 <NavLink to={"/"}>Tokhir</NavLink>.
                                    All rights reserved.
                                </Typography>
                            </p>
                        </div>
                    </div>
                </Container>
            </nav>
        </footer>
    );
};
