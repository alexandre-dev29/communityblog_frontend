import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

class CustomDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render(): JSX.Element {
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
}

export default CustomDocument;
