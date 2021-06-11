import Head from "next/head";
import React, { ReactNode } from "react";
import Div100vh from "react-div-100vh";

type Props = {
  children?: ReactNode;
  title?: string;
};

export const Layout = ({
  children,
  title = "This is the default title",
}: Props): JSX.Element => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Div100vh className="flex flex-col justify-between">{children}</Div100vh>
    </div>
  );
};
