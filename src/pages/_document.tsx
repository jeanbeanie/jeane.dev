// src/pages/_document.tsx

import { Html, Head, Main, NextScript } from "next/document";
import { GoogleAnalytics } from '@next/third-parties/google'

export default function Document() {
  return (
    <Html lang="en">
          <Head>
              
              <GoogleAnalytics gaId="G-Q8LY2ZE0Q2" />
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
