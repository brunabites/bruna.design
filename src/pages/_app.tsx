import type { AppProps } from 'next/app';
import { GoogleAnalytics } from '@/components';
import '@/styles/index.css';
import '@/styles/prism.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalytics />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
