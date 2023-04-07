import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';

const Page: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Signup Confirm</title>
      </Head>
      <main>
        <p>6桁の認証コード確認画面</p>
      </main>
    </Fragment>
  );
};

export default Page;
