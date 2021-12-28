import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang='en'>
        <Head>
          {/* <link
            rel='preload'
            href='/fonts/source-sans-pro-v18-latin-regular.woff'
            as='font'
            type='font/woff'
            crossOrigin=''
          />
          <link
            rel='preload'
            href='/fonts/source-sans-pro-v18-latin-900.woff'
            as='font'
            type='font/woff'
            crossOrigin=''
          />
          <link
            rel='preload'
            href='/fonts/open-sans-v27-latin-regular.woff'
            as='font'
            type='font/woff'
            crossOrigin=''
          />
          <link
            rel='preload'
            href='/fonts/open-sans-v27-latin-800.woff'
            as='font'
            type='font/woff'
            crossOrigin=''
          />
          <link
            rel='preload'
            href='/fonts/open-sans-v27-latin-600italic.woff'
            as='font'
            type='font/woff'
            crossOrigin=''
          /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
