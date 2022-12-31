import type { AppProps } from 'next/app';
import localFont from '@next/font/local';

import Layout from '~/components/layout';

import '../styles/globals.css';

const metropolis = localFont({
  src: [
    {
      path: '../../public/fonts/Metropolis-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Metropolis-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      {/* eslint-disable-next-line react/no-unknown-property */}
      <style global jsx>{`
        html {
          font-family: ${metropolis.style.fontFamily};
        }
      `}</style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
