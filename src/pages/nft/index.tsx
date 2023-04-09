import { Box, Text } from '@chakra-ui/react';
import { NextPage } from 'next';
import Head from 'next/head';
import { Fragment } from 'react';
import { useClientSideRecoilValue } from '@/hooks/useClientSideRecoilValue';
import { userState } from '@/stores/atoms';

const Page: NextPage = () => {
  const user = useClientSideRecoilValue(userState);

  return (
    <Fragment>
      <Head>
        <title>NFT List</title>
      </Head>
      <main>
        <Box>
          <Text>user: {user?.walletAddress}</Text>
        </Box>
      </main>
    </Fragment>
  );
};

export default Page;
