import type { AppProps } from "next/app";
import * as React from "react";
import "tailwindcss/tailwind.css";
import "@assets/styles.css";

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <main>
      <Component {...pageProps} />
    </main>
  );
}

export default App;
