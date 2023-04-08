import { Progress } from '@chakra-ui/react';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Fragment, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { useQueryUser } from '@/hooks/useQueryUser';
import { userState } from '@/stores/atoms';

const Page: NextPage = () => {
  const { data: user, status } = useQueryUser();
  const setUser = useSetRecoilState(userState);
  console.log('user', user);
  useEffect(() => {
    if (status === 'success' && user) {
      setUser(user);
    }
  }, [user, setUser, status]);
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
