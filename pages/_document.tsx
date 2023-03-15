import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <body
        className={
          "bg-[#f4f6f6] antialiased text-slate-500 dark:text-slate-400  dark:bg-slate-900 h-[100vh]"
        }
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
