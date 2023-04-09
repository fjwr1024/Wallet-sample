import { Box, Button, Text } from '@chakra-ui/react';
import { NextPage } from 'next';
import Head from 'next/head';
import { Fragment, useState } from 'react';
import { useClientSideRecoilValue } from '@/hooks/useClientSideRecoilValue';
import { useQueryUser } from '@/hooks/useQueryUser';
import { userState } from '@/stores/atoms';

const Page: NextPage = () => {
  const user = useClientSideRecoilValue(userState);
  const [solData, setSolData] = useState<any>(undefined);

  const { useQueryGetSol } = useQueryUser();
  const handleGetSol = () => {
    if (user && user.walletAddress) {
      useQueryGetSol.mutate(user.walletAddress, {
        onSuccess: (data) => {
          setSolData(data);
        },
      });
    }
  };

  return (
    <Fragment>
      <Head>
        <title>NFT List</title>
      </Head>
      <main>
        <Box>
          <Text>user: {user?.walletAddress}</Text>
          <Text>user: {user?.id}</Text>
          <Text>user: {user?.email}</Text>
          <Button onClick={handleGetSol}>Get Sol</Button>
        </Box>
      </main>
    </Fragment>
  );
};

export default Page;
