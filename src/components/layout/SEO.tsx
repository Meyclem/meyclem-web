import Head from "next/head";

export const SEO: React.FC<{ title: string }> = ({ title }) => (
  <Head>
    <title>
      Meyclem |{" "}
      {title}
    </title>
    <link rel="icon" type="image/png" href="/images/favicon.svg" />
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  </Head>
);
