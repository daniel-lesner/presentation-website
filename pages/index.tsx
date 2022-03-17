import React from 'react';
import type { NextPage } from 'next';
import Layout from '../src/components/Layout';
import Main from '../src/components/Main';

const Home: NextPage = () => (
  <Layout>
    <Main />
  </Layout>
);

export default Home;
