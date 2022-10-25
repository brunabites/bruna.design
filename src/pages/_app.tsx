import type { AppProps } from 'next/app';

import '@/styles/index.css';
import '@/styles/prism.css';
import { Analytics } from '@/components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Analytics />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
