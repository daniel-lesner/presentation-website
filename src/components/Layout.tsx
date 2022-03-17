import { Container } from '@mui/material';
import Head from 'next/head';
import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout: React.FC<{}> = ({ children }) => (
  <>
    <Head>
      <title>Daniel Lesner</title>
      <link href="favicon.ico" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <meta
        name="description"
        content="Presentation website // Daniel Lesner // Front-end developer"
      />
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    </Head>
    <Header />
    <Container maxWidth="xl">{children}</Container>
    <Footer />
  </>
);

export default Layout;
