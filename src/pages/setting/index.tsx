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
        <title>Setting</title>
      </Head>
      <main>
        <Box>
          <Text>Setting Page</Text>
          <Text>パスワード変更</Text>
          <Text>EMail 変更</Text>
          <Text>Wallet 再生成？</Text>
        </Box>
      </main>
    </Fragment>
  );
};

export default Page;
