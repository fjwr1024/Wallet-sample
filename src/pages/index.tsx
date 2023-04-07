import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';

type LoginFormType = {
  email: string;
  password: string;
};

const Page: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormType>();
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const onSubmit = (data: LoginFormType) => {
    console.log('data', data);
  };

  return (
    <Fragment>
      <Head>
        <title>Wallet Example</title>
      </Head>
      <main>
        <p>example wallet</p>
      </main>
    </Fragment>
  );
};

export default Page;
