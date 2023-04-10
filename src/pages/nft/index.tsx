/* eslint-disable react/no-array-index-key */
import { Box, Text } from '@chakra-ui/react';
import { NextPage } from 'next';
import Head from 'next/head';
import { Fragment, useEffect, useState } from 'react';
import { useClientSideRecoilValue } from '@/hooks/useClientSideRecoilValue';
import { useQueryUser } from '@/hooks/useQueryUser';
import { userState } from '@/stores/atoms';

const Page: NextPage = () => {
  const user = useClientSideRecoilValue(userState);
  const { useQueryGetNFT } = useQueryUser();
  const [nftData, setNftData] = useState<any>();

  useEffect(() => {
    console.log('useeffect');
    if (user?.walletAddress) {
      const nft = useQueryGetNFT.mutate(user.walletAddress, {
        onSuccess: (data) => {
          console.log('data', data);
          setNftData(data);
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <Head>
        <title>NFT List</title>
      </Head>
      <main>
        <Box>
          <Text>user: {user?.walletAddress}</Text>
          {nftData?.map((nft: any, index: number) => (
            <Box key={index}>
              <Text>name: {nft.name}</Text>
              <Text>description: {nft.description}</Text>
              <Text>image: {nft.image}</Text>
              <Text>external_url: {nft.external_url}</Text>
            </Box>
          ))}
        </Box>
      </main>
    </Fragment>
  );
};

export default Page;
