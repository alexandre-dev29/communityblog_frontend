import Document, { Head, Html, Main, NextScript } from "next/document";
import myAllFonts from "../config/font";

class CustomDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head />
        <body
          className={`bg-[#f4f6f6] antialiased text-slate-500 dark:text-slate-400  dark:bg-slate-900 h-[100vh] ${myAllFonts.className}`}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
