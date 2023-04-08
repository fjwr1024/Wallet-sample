import { Progress } from '@chakra-ui/react';
import { NextPage } from 'next';
import Head from 'next/head';
import { Fragment } from 'react';
import { useQueryUser } from '@/hooks/useQueryUser';

const Page: NextPage = () => {
  const { data: user, status } = useQueryUser();
  if (status === 'loading') return <Progress my="lg" color="cyan" />;

  return (
    <Fragment>
      <Head>
        <title>Home</title>
      </Head>
      <main>
        <p>home</p>
        <div>
          <ul>
            {user &&
              Object.entries(user).map(([key, value]) => (
                <li key={key}>
                  {key}: {value === null ? 'N/A' : value.toString()}
                </li>
              ))}
          </ul>
        </div>
      </main>
    </Fragment>
  );
};

export default Page;
