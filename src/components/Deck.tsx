import { pages } from "@assets/data";
import { use100vh } from "react-div-100vh";

import { Navbar, navbarHeight, NavbarProps } from "./navbar";

const Deck: React.FC<Omit<NavbarProps, "mainLinks">> = ({ children }) => {
  const height = use100vh();

  return (
    <>
      <Navbar mainLinks={pages}></Navbar>

      <div
        className="reveal"
        style={{ height: `calc(${height} - ${navbarHeight})` }}
      >
        <div className="slides">{children}</div>
      </div>
    </>
  );
};

export { Deck };
