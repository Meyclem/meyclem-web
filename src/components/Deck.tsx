import { pages } from "@assets/data";

import { Navbar, navbarHeight, NavbarProps } from "./navbar";

const Deck: React.FC<Omit<NavbarProps, "mainLinks">> = ({ children }) => {
  return (
    <>
      <Navbar mainLinks={pages}></Navbar>

      <div
        className="reveal"
        style={{ height: `calc(100vh - ${navbarHeight})` }}
      >
        <div className="slides">{children}</div>
      </div>
    </>
  );
};

export { Deck };
