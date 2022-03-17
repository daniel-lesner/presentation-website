import type { NextPage } from 'next';
import Layout from '../src/components/Layout';
import Main from '../src/components/Main';

const Home: NextPage = () => {
  return (
    <Layout>
      <Main />
    </Layout>
  );
};

export default Home;
