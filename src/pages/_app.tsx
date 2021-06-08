import { Layout } from "@components/Layout";
import type { AppProps } from "next/app";
import * as React from "react";

import "tailwindcss/tailwind.css";
import "@assets/styles.css";

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <main>
      <Layout title="Home | Next.js + TypeScript Example">
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}

export default App;
