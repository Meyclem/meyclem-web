import {
  Navbar,
  navbarHeight,
  NavbarProps,
} from "@src/components/layout/navbar";
import Head from "next/head";
import { ReactNode } from "react";

import { SEO } from "./SEO";

type Props = {
  children?: ReactNode;
  subLinks?: NavbarProps["subLinks"];
  title: string;
};

export const Layout = ({ children, title }: Props): JSX.Element => {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <SEO title={title} />
      <Navbar />
      <div style={{ paddingTop: navbarHeight }}>{children}</div>
    </div>
  );
};
