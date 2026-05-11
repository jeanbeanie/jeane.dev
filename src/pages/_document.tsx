// src/pages/_document.tsx

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
          <Head>
              
              <script async src="https://www.googletagmanager.com/gtag/js?id=G-Q8LY2ZE0Q2"></script>
              <script
                  dangerouslySetInnerHTML={{
                      __html: `

                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());

                  gtag('config', 'G-Q8LY2ZE0Q2');`
              }}
              />
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
