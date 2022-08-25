import { AppProps } from '../../node_modules/next/app';
import React from 'react';
import Layout from '../components/layout/Layout';

import Head from '../../node_modules/next/head';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Layout>
        <Head>
          <title>restaurant review section</title>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
