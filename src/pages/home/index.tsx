import { Box, Heading, Progress, Text, Button } from '@chakra-ui/react';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React, { Fragment, useState } from 'react';
import { useQueryUser } from '@/hooks/useQueryUser';
import { SOL_RATE } from '@/utils/constValue';

type SolData = {
  sol: number;
  lamports: number;
  owner: string;
};

const Page: NextPage = () => {
  const { useQueryUserData, useQueryGetSol } = useQueryUser();
  const { data: user, status } = useQueryUserData();
  const [solData, setSolData] = useState<SolData | string | undefined>(
    undefined
  );

  const handleGetSol = () => {
    if (!user) return;
    useQueryGetSol.mutate(user.walletAddress, {
      onSuccess: (data) => {
        setSolData(data);
      },
    });
  };

  if (status === 'loading') return <Progress my="lg" color="cyan" />;

  return (
    <Fragment>
      <Head>
        <title>Home</title>
      </Head>
      <main>
        <Heading>Home画面</Heading>
        <Box>
          <Text>wallet Address: {user?.walletAddress}</Text>
          <Link href="/nft">nft画面へ</Link>

          <Button onClick={handleGetSol}>Get Sol</Button>
          {solData && typeof solData !== 'string' && (
            <React.Fragment>
              <Box>
                <Heading>Sol Information</Heading>
                <Text>Sol: {solData.sol.toFixed(2)}</Text>
              </Box>
              <Box>
                <Heading>Price Information</Heading>
                <Text>
                  USD: {(solData.sol * SOL_RATE.solana.usd).toFixed(2)}
                </Text>
                <Text>
                  JPY: {(solData.sol * SOL_RATE.solana.jpy).toFixed(2)}
                </Text>
              </Box>
            </React.Fragment>
          )}
        </Box>
      </main>
    </Fragment>
  );
};

export default Page;
