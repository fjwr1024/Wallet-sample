import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  const faviconSrc = 'favicon.ico';
  const keywords: string[] = ['sample-keyword'];

  return (
    <Html>
      <Head>
        <meta name="keywords" content={keywords.join(',')} />
        <link rel="shortcut icon" href={faviconSrc} />
        <link rel="apple-touch-icon" sizes="180x180" href={faviconSrc} />
        <link rel="icon" type="image/png" sizes="32x32" href={faviconSrc} />
        <link rel="icon" type="image/png" sizes="16x16" href={faviconSrc} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
