import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          <link rel="shortcut icon" href="/favicon/favicon.ico" />
{/* 
          <link rel="preconnect" href="https://rsms.me/" />
          <link href="https://rsms.me/inter/inter.css" rel="stylesheet"  /> */}

          <meta content="#ffffff" name="theme-color" />
          <meta content="#ffffff" name="msapplication-TileColor" />
          <meta charSet="utf-8" />
        </Head>
        <body className="font-sans antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
