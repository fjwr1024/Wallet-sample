import { NextPage } from 'next';
import Head from 'next/head';
import { Fragment } from 'react';
import { useQueryUsers } from '@/hooks/useQueryUser';

const Page: NextPage = () => {
  useQueryUsers();
  return (
    <Fragment>
      <Head>
        <title>Home</title>
      </Head>
      <main>
        <p>home</p>
      </main>
    </Fragment>
  );
};

export default Page;
