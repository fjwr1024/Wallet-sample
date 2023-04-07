import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';

const Page: NextPage = () => {
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
