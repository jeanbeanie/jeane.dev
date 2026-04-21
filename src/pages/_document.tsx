// src/pages/_document.tsx

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased antialiased bg-paper text-slate dark:bg-ink dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
