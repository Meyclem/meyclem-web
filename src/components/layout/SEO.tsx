import Head from "next/head";

export const SEO: React.FC<{ title: string }> = ({ title }) => (
  <Head>
    <title>
      Meyclem |{" "}
      {title}
    </title>
    <link rel="icon" type="image/png" href="/images/favicon.svg" />
    <meta name="description" content="Clement Meyer, Fullstack web developer" />
    <meta property="og:title" content="Meyclem" />
    <meta
      property="og:description"
      content="Clement Meyer, Fullstack web developer"
    />
    <meta
      property="og:image"
      content="https://www.meyclem.com/images/meta-image.png"
    />
    <meta property="og:url" content="https://www.meyclem.com/" />
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  </Head>
);
