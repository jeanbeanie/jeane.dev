// src/pages/_document.tsx

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
          <Head>
              <script
                  dangerouslySetInnerHTML={{
                      __html: `
                        (function () {
                          try {
                            var stored = localStorage.getItem("theme"); // "dark" | "light" | null
                            var theme = stored ? stored : "dark";       // <-- default to dark
                            if (theme === "dark") document.documentElement.classList.add("dark");
                            else document.documentElement.classList.remove("dark");
                          } catch (e) {}
                        })();`,
                  }}
              />
          </Head>
      <body className="antialiased bg-background text-foreground">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
