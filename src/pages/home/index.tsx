import {
  Box,
  Heading,
  ListItem,
  Progress,
  UnorderedList,
  Text,
  Button,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Fragment, useState } from 'react';
import { useQueryUser } from '@/hooks/useQueryUser';

type PriceData = {
  solana: {
    usd: number;
    jpy: number;
  };
};

const Page: NextPage = () => {
  const { useQueryUserData, useQueryGetSol } = useQueryUser();
  const { data: user, status } = useQueryUserData();
  console.log('user', user);
  const [solData, setSolData] = useState<any>(undefined);

  const handleGetSol = () => {
    if (!user) return;
    useQueryGetSol.mutate(user.walletAddress, {
      onSuccess: (data) => {
        setSolData(data);
      },
    });
  };

  const [priceData, setPriceData] = useState<PriceData | undefined>(undefined);

  if (status === 'loading') return <Progress my="lg" color="cyan" />;

  return (
    <Fragment>
      <Head>
        <title>Home</title>
      </Head>
      <main>
        <Heading>home画面</Heading>
        <Box>
          <UnorderedList>
            {user &&
              Object.entries(user).map(([key, value]) => (
                <ListItem key={key}>
                  {key}: {value === null ? 'N/A' : value.toString()}
                </ListItem>
              ))}
          </UnorderedList>
          <Text>wallet Address: {user?.walletAddress}</Text>
          <Link href="/nft">nft画面へ</Link>

          <Button onClick={handleGetSol}>Get Sol</Button>
          {solData && (
            <Box>
              <Heading>Sol Information</Heading>
              <Text>Sol: {solData.sol}</Text>
            </Box>
          )}
          {priceData && (
            <Box>
              <Heading>Price Information</Heading>
              <Text>USD: {priceData.solana.usd}</Text>
              <Text>JPY: {priceData.solana.jpy}</Text>
            </Box>
          )}
        </Box>
      </main>
    </Fragment>
  );
};

export default Page;
