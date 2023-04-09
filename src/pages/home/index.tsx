import { Progress } from '@chakra-ui/react';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Fragment } from 'react';
import { useQueryUser } from '@/hooks/useQueryUser';

const Page: NextPage = () => {
  const { useQueryUserData } = useQueryUser();
  const { data: user, status } = useQueryUserData();
  console.log('user', user);
  if (status === 'loading') return <Progress my="lg" color="cyan" />;

  return (
    <Fragment>
      <Head>
        <title>Home</title>
      </Head>
      <main>
        <p>home画面</p>
        <div>
          <ul>
            {user &&
              Object.entries(user).map(([key, value]) => (
                <li key={key}>
                  {key}: {value === null ? 'N/A' : value.toString()}
                </li>
              ))}
          </ul>
          <p>wallet Address: {user?.walletAddress}</p>
          <Link href="/nft">nft画面へ</Link>
        </div>
      </main>
    </Fragment>
  );
};

export default Page;
