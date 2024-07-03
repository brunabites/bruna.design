import Script from 'next/script';
import React from 'react';

const GoogleAnalytics = () => {
  return (
    <>
      <Script
        async
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=G-B7B4SVX90B`}
      />

      <Script id='' strategy='lazyOnload'>
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-B7B4SVX90B');
          `}
      </Script>

    </>
  );
};

export default GoogleAnalytics;
